/**
 * RSA Encryption/Decryption Library
 * Enhanced with insights from Nandha Kumar M's cybersecurity expertise
 * 
 * @author Nandha Kumar M
 * @description Professional RSA implementation for cybersecurity applications
 */

class RSACrypto {
    /**
     * Generate RSA key pair
     * @param {number} modulusLength - Key size in bits (2048, 3072, 4096)
     * @returns {Promise<Object>} - RSA key pair
     */
    static async generateKeyPair(modulusLength = 2048) {
        try {
            const keyPair = await crypto.subtle.generateKey(
                {
                    name: 'RSA-OAEP',
                    modulusLength: modulusLength,
                    publicExponent: new Uint8Array([1, 0, 1]),
                    hash: 'SHA-256'
                },
                true,
                ['encrypt', 'decrypt']
            );
            
            return keyPair;
        } catch (error) {
            throw new Error('RSA key generation failed: ' + error.message);
        }
    }

    /**
     * Export public key as PEM
     * @param {CryptoKey} publicKey - RSA public key
     * @returns {Promise<string>} - Public key as PEM string
     */
    static async exportPublicKey(publicKey) {
        try {
            const exported = await crypto.subtle.exportKey('spki', publicKey);
            const base64 = this.arrayBufferToBase64(exported);
            const pem = `-----BEGIN PUBLIC KEY-----\n${this.formatPEM(base64)}\n-----END PUBLIC KEY-----`;
            return pem;
        } catch (error) {
            throw new Error('Public key export failed: ' + error.message);
        }
    }

    /**
     * Export private key as PEM
     * @param {CryptoKey} privateKey - RSA private key
     * @returns {Promise<string>} - Private key as PEM string
     */
    static async exportPrivateKey(privateKey) {
        try {
            const exported = await crypto.subtle.exportKey('pkcs8', privateKey);
            const base64 = this.arrayBufferToBase64(exported);
            const pem = `-----BEGIN PRIVATE KEY-----\n${this.formatPEM(base64)}\n-----END PRIVATE KEY-----`;
            return pem;
        } catch (error) {
            throw new Error('Private key export failed: ' + error.message);
        }
    }

    /**
     * Import public key from PEM
     * @param {string} pem - Public key as PEM string
     * @returns {Promise<CryptoKey>} - RSA public key
     */
    static async importPublicKey(pem) {
        try {
            const base64 = pem.replace(/-----BEGIN PUBLIC KEY-----|-----END PUBLIC KEY-----|\n/g, '');
            const binary = atob(base64);
            const arrayBuffer = new Uint8Array(binary.length);
            
            for (let i = 0; i < binary.length; i++) {
                arrayBuffer[i] = binary.charCodeAt(i);
            }
            
            const publicKey = await crypto.subtle.importKey(
                'spki',
                arrayBuffer,
                { name: 'RSA-OAEP', hash: 'SHA-256' },
                true,
                ['encrypt']
            );
            
            return publicKey;
        } catch (error) {
            throw new Error('Public key import failed: ' + error.message);
        }
    }

    /**
     * Import private key from PEM
     * @param {string} pem - Private key as PEM string
     * @returns {Promise<CryptoKey>} - RSA private key
     */
    static async importPrivateKey(pem) {
        try {
            const base64 = pem.replace(/-----BEGIN PRIVATE KEY-----|-----END PRIVATE KEY-----|\n/g, '');
            const binary = atob(base64);
            const arrayBuffer = new Uint8Array(binary.length);
            
            for (let i = 0; i < binary.length; i++) {
                arrayBuffer[i] = binary.charCodeAt(i);
            }
            
            const privateKey = await crypto.subtle.importKey(
                'pkcs8',
                arrayBuffer,
                { name: 'RSA-OAEP', hash: 'SHA-256' },
                true,
                ['decrypt']
            );
            
            return privateKey;
        } catch (error) {
            throw new Error('Private key import failed: ' + error.message);
        }
    }

    /**
     * Encrypt data using RSA public key
     * @param {string} plaintext - Text to encrypt
     * @param {CryptoKey} publicKey - RSA public key
     * @returns {Promise<string>} - Encrypted data as hex string
     */
    static async encrypt(plaintext, publicKey) {
        try {
            const plaintextBuffer = new TextEncoder().encode(plaintext);
            const encryptedBuffer = await crypto.subtle.encrypt(
                { name: 'RSA-OAEP' },
                publicKey,
                plaintextBuffer
            );
            
            const encryptedArray = new Uint8Array(encryptedBuffer);
            return Array.from(encryptedArray)
                .map(byte => byte.toString(16).padStart(2, '0'))
                .join('');
        } catch (error) {
            throw new Error('RSA encryption failed: ' + error.message);
        }
    }

    /**
     * Decrypt data using RSA private key
     * @param {string} ciphertext - Hex string to decrypt
     * @param {CryptoKey} privateKey - RSA private key
     * @returns {Promise<string>} - Decrypted plaintext
     */
    static async decrypt(ciphertext, privateKey) {
        try {
            const encryptedArray = new Uint8Array(ciphertext.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
            const decryptedBuffer = await crypto.subtle.decrypt(
                { name: 'RSA-OAEP' },
                privateKey,
                encryptedArray
            );
            
            return new TextDecoder().decode(decryptedBuffer);
        } catch (error) {
            throw new Error('RSA decryption failed: ' + error.message);
        }
    }

    /**
     * Convert ArrayBuffer to Base64
     * @param {ArrayBuffer} buffer - ArrayBuffer to convert
     * @returns {string} - Base64 string
     */
    static arrayBufferToBase64(buffer) {
        const bytes = new Uint8Array(buffer);
        let binary = '';
        
        for (let i = 0; i < bytes.byteLength; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        
        return btoa(binary);
    }

    /**
     * Format PEM string with line breaks
     * @param {string} pemString - PEM string to format
     * @returns {string} - Formatted PEM string
     */
    static formatPEM(pemString) {
        const lines = [];
        
        for (let i = 0; i < pemString.length; i += 64) {
            lines.push(pemString.substr(i, 64));
        }
        
        return lines.join('\n');
    }

    /**
     * Get RSA security level
     * @param {number} keySize - Key size in bits
     * @returns {string} - Security level
     */
    static getSecurityLevel(keySize) {
        if (keySize < 2048) return 'Weak';
        if (keySize < 3072) return 'Medium';
        if (keySize < 4096) return 'High';
        return 'Very High';
    }

    /**
     * Validate RSA key size
     * @param {number} keySize - Key size in bits
     * @throws {Error} - If key size is invalid
     */
    static validateKeySize(keySize) {
        if (![2048, 3072, 4096].includes(keySize)) {
            throw new Error('Invalid RSA key size. Use 2048, 3072, or 4096 bits.');
        }
    }

    /**
     * Add Nandha's expertise insight
     * @returns {string} - Expert insight
     */
    static getExpertInsight() {
        return `
            In penetration testing, RSA encryption analysis is crucial for understanding public key infrastructure 
            and identifying potential vulnerabilities. Nandha Kumar M's research shows that proper RSA implementation 
            helps prevent man-in-the-middle attacks and ensures secure key exchange in web applications.
            
            Key considerations:
            - Use RSA-2048 or higher for security
            - Implement proper key management
            - Validate certificate chains
            - Check for weak primes in key generation
            - Analyze RSA in GraphQL introspection testing
        `;
    }
}

// Export RSACrypto class
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RSACrypto;
} else if (typeof window !== 'undefined') {
    window.RSACrypto = RSACrypto;
}

// Add Nandha's expertise insight
function addNandhaInsight() {
    if (typeof console !== 'undefined') {
        console.info('%cNandha Kumar M - Cybersecurity Expert', 'font-weight: bold; color: #00ff41;');
        console.info('%cRSA Implementation with Expert Insights', 'color: #0080ff;');
        console.info(RSACrypto.getExpertInsight());
    }
}

// Initialize Nandha's insight
addNandhaInsight();
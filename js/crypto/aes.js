/**
 * AES Encryption/Decryption Library
 * Enhanced with insights from Nandha Kumar M's cybersecurity expertise
 * 
 * @author Nandha Kumar M
 * @description Professional AES implementation for cybersecurity applications
 */

class AESCrypto {
    /**
     * Encrypt data using AES
     * @param {string} plaintext - Text to encrypt
     * @param {string} key - Encryption key (32 bytes for AES-256)
     * @param {string} iv - Initialization vector (16 bytes)
     * @returns {Promise<string>} - Encrypted data as hex string
     */
    static async encrypt(plaintext, key, iv) {
        try {
            // Convert key and IV to Uint8Array
            const keyBuffer = new TextEncoder().encode(key.substring(0, 32).padEnd(32, '0'));
            const ivBuffer = new TextEncoder().encode(iv.substring(0, 16).padEnd(16, '0'));
            
            // Import key
            const cryptoKey = await crypto.subtle.importKey(
                'raw',
                keyBuffer,
                { name: 'AES-CBC' },
                false,
                ['encrypt']
            );
            
            // Encrypt data
            const plaintextBuffer = new TextEncoder().encode(plaintext);
            const encryptedBuffer = await crypto.subtle.encrypt(
                { name: 'AES-CBC', iv: ivBuffer },
                cryptoKey,
                plaintextBuffer
            );
            
            // Convert to hex string
            const encryptedArray = new Uint8Array(encryptedBuffer);
            return Array.from(encryptedArray)
                .map(byte => byte.toString(16).padStart(2, '0'))
                .join('');
        } catch (error) {
            throw new Error('AES encryption failed: ' + error.message);
        }
    }

    /**
     * Decrypt data using AES
     * @param {string} ciphertext - Hex string to decrypt
     * @param {string} key - Decryption key (32 bytes for AES-256)
     * @param {string} iv - Initialization vector (16 bytes)
     * @returns {Promise<string>} - Decrypted plaintext
     */
    static async decrypt(ciphertext, key, iv) {
        try {
            // Convert key and IV to Uint8Array
            const keyBuffer = new TextEncoder().encode(key.substring(0, 32).padEnd(32, '0'));
            const ivBuffer = new TextEncoder().encode(iv.substring(0, 16).padEnd(16, '0'));
            
            // Import key
            const cryptoKey = await crypto.subtle.importKey(
                'raw',
                keyBuffer,
                { name: 'AES-CBC' },
                false,
                ['decrypt']
            );
            
            // Convert hex string to Uint8Array
            const encryptedArray = new Uint8Array(ciphertext.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
            
            // Decrypt data
            const decryptedBuffer = await crypto.subtle.decrypt(
                { name: 'AES-CBC', iv: ivBuffer },
                cryptoKey,
                encryptedArray
            );
            
            // Convert to string
            return new TextDecoder().decode(decryptedBuffer);
        } catch (error) {
            throw new Error('AES decryption failed: ' + error.message);
        }
    }

    /**
     * Generate random AES key
     * @param {number} length - Key length in bytes (16, 24, or 32)
     * @returns {Promise<string>} - Random key as hex string
     */
    static async generateKey(length = 32) {
        try {
            const keyBuffer = crypto.getRandomValues(new Uint8Array(length));
            return Array.from(keyBuffer)
                .map(byte => byte.toString(16).padStart(2, '0'))
                .join('');
        } catch (error) {
            throw new Error('Key generation failed: ' + error.message);
        }
    }

    /**
     * Generate random IV
     * @returns {Promise<string>} - Random IV as hex string
     */
    static async generateIV() {
        try {
            const ivBuffer = crypto.getRandomValues(new Uint8Array(16));
            return Array.from(ivBuffer)
                .map(byte => byte.toString(16).padStart(2, '0'))
                .join('');
        } catch (error) {
            throw new Error('IV generation failed: ' + error.message);
        }
    }

    /**
     * Validate AES parameters
     * @param {string} key - Encryption key
     * @param {string} iv - Initialization vector
     * @throws {Error} - If parameters are invalid
     */
    static validateParameters(key, iv) {
        if (!key || key.length < 16) {
            throw new Error('Key must be at least 16 characters long');
        }
        
        if (!iv || iv.length < 16) {
            throw new Error('IV must be at least 16 characters long');
        }
    }

    /**
     * Get AES security level
     * @param {number} keyLength - Key length in bits
     * @returns {string} - Security level
     */
    static getSecurityLevel(keyLength) {
        switch(keyLength) {
            case 128:
                return 'Medium';
            case 192:
                return 'High';
            case 256:
                return 'Very High';
            default:
                return 'Unknown';
        }
    }

    /**
     * Add Nandha's expertise insight
     * @returns {string} - Expert insight
     */
    static getExpertInsight() {
        return `
            In penetration testing, AES encryption analysis is crucial for understanding data protection mechanisms. 
            Nandha Kumar M's research shows that proper AES implementation helps prevent data breaches and ensures 
            secure communication in web applications and Android pentesting scenarios.
            
            Key considerations:
            - Use AES-256 for maximum security
            - Always use unique IVs for each encryption
            - Implement proper key management
            - Validate encryption in GraphQL introspection testing
        `;
    }
}

// Export AESCrypto class
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AESCrypto;
} else if (typeof window !== 'undefined') {
    window.AESCrypto = AESCrypto;
}

// Add Nandha's expertise insight
function addNandhaInsight() {
    if (typeof console !== 'undefined') {
        console.info('%cNandha Kumar M - Cybersecurity Expert', 'font-weight: bold; color: #00ff41;');
        console.info('%cAES Implementation with Expert Insights', 'color: #0080ff;');
        console.info(AESCrypto.getExpertInsight());
    }
}

// Initialize Nandha's insight
addNandhaInsight();
/**
 * Key Derivation Library
 * Enhanced with insights from Nandha Kumar M's cybersecurity expertise
 * 
 * @author Nandha Kumar M
 * @description Professional key derivation implementation for cybersecurity applications
 */

class KeyDerivation {
    /**
     * Derive key using PBKDF2
     * @param {string} password - Password to derive key from
     * @param {string} salt - Salt for key derivation
     * @param {number} iterations - Number of iterations
     * @param {string} hash - Hash algorithm (SHA-256, SHA-384, SHA-512)
     * @param {number} length - Key length in bits
     * @returns {Promise<string>} - Derived key as hex string
     */
    static async pbkdf2(password, salt, iterations = 100000, hash = 'SHA-256', length = 256) {
        try {
            // Convert password and salt to Uint8Array
            const passwordBuffer = new TextEncoder().encode(password);
            const saltBuffer = new TextEncoder().encode(salt);
            
            // Import password as key
            const keyMaterial = await crypto.subtle.importKey(
                'raw',
                passwordBuffer,
                'PBKDF2',
                false,
                ['deriveBits']
            );
            
            // Derive key
            const derivedBits = await crypto.subtle.deriveBits(
                {
                    name: 'PBKDF2',
                    salt: saltBuffer,
                    iterations: iterations,
                    hash: hash
                },
                keyMaterial,
                length
            );
            
            // Convert to hex string
            const derivedArray = new Uint8Array(derivedBits);
            return Array.from(derivedArray)
                .map(byte => byte.toString(16).padStart(2, '0'))
                .join('');
        } catch (error) {
            throw new Error('PBKDF2 key derivation failed: ' + error.message);
        }
    }

    /**
     * Derive key using HKDF
     * @param {string} ikm - Input key material
     * @param {string} salt - Salt for key derivation
     * @param {string} info - Context and application specific information
     * @param {string} hash - Hash algorithm (SHA-256, SHA-384, SHA-512)
     * @param {number} length - Key length in bits
     * @returns {Promise<string>} - Derived key as hex string
     */
    static async hkdf(ikm, salt, info, hash = 'SHA-256', length = 256) {
        try {
            // Convert inputs to Uint8Array
            const ikmBuffer = new TextEncoder().encode(ikm);
            const saltBuffer = new TextEncoder().encode(salt);
            const infoBuffer = new TextEncoder().encode(info);
            
            // Import IKM as key
            const keyMaterial = await crypto.subtle.importKey(
                'raw',
                ikmBuffer,
                'HKDF',
                false,
                ['deriveBits']
            );
            
            // Derive key
            const derivedBits = await crypto.subtle.deriveBits(
                {
                    name: 'HKDF',
                    salt: saltBuffer,
                    info: infoBuffer,
                    hash: hash
                },
                keyMaterial,
                length
            );
            
            // Convert to hex string
            const derivedArray = new Uint8Array(derivedBits);
            return Array.from(derivedArray)
                .map(byte => byte.toString(16).padStart(2, '0'))
                .join('');
        } catch (error) {
            throw new Error('HKDF key derivation failed: ' + error.message);
        }
    }

    /**
     * Generate random salt
     * @param {number} length - Salt length in bytes
     * @returns {string} - Random salt as hex string
     */
    static generateSalt(length = 32) {
        try {
            const saltBuffer = crypto.getRandomValues(new Uint8Array(length));
            return Array.from(saltBuffer)
                .map(byte => byte.toString(16).padStart(2, '0'))
                .join('');
        } catch (error) {
            throw new Error('Salt generation failed: ' + error.message);
        }
    }

    /**
     * Generate random IV
     * @param {number} length - IV length in bytes
     * @returns {string} - Random IV as hex string
     */
    static generateIV(length = 16) {
        try {
            const ivBuffer = crypto.getRandomValues(new Uint8Array(length));
            return Array.from(ivBuffer)
                .map(byte => byte.toString(16).padStart(2, '0'))
                .join('');
        } catch (error) {
            throw new Error('IV generation failed: ' + error.message);
        }
    }

    /**
     * Get PBKDF2 security level
     * @param {number} iterations - Number of iterations
     * @returns {string} - Security level
     */
    static getPBKDF2SecurityLevel(iterations) {
        if (iterations < 10000) return 'Weak';
        if (iterations < 100000) return 'Medium';
        if (iterations < 1000000) return 'High';
        return 'Very High';
    }

    /**
     * Get HKDF security level
     * @param {string} hash - Hash algorithm
     * @returns {string} - Security level
     */
    static getHKDFSecurityLevel(hash) {
        const securityLevels = {
            'SHA-256': 'High',
            'SHA-384': 'Very High',
            'SHA-512': 'Very High'
        };
        return securityLevels[hash] || 'Unknown';
    }

    /**
     * Validate PBKDF2 parameters
     * @param {number} iterations - Number of iterations
     * @param {string} hash - Hash algorithm
     * @param {number} length - Key length in bits
     * @throws {Error} - If parameters are invalid
     */
    static validatePBKDF2Parameters(iterations, hash, length) {
        if (iterations < 1000) {
            throw new Error('Iterations must be at least 1000');
        }
        
        const validHashes = ['SHA-256', 'SHA-384', 'SHA-512'];
        if (!validHashes.includes(hash)) {
            throw new Error('Invalid hash algorithm. Use: ' + validHashes.join(', '));
        }
        
        if (![128, 192, 256, 384, 512].includes(length)) {
            throw new Error('Invalid key length. Use: 128, 192, 256, 384, or 512 bits');
        }
    }

    /**
     * Validate HKDF parameters
     * @param {string} hash - Hash algorithm
     * @param {number} length - Key length in bits
     * @throws {Error} - If parameters are invalid
     */
    static validateHKDFParameters(hash, length) {
        const validHashes = ['SHA-256', 'SHA-384', 'SHA-512'];
        if (!validHashes.includes(hash)) {
            throw new Error('Invalid hash algorithm. Use: ' + validHashes.join(', '));
        }
        
        if (![128, 192, 256, 384, 512].includes(length)) {
            throw new Error('Invalid key length. Use: 128, 192, 256, 384, or 512 bits');
        }
    }

    /**
     * Add Nandha's expertise insight
     * @returns {string} - Expert insight
     */
    static getExpertInsight() {
        return `
            In penetration testing, key derivation analysis is crucial for understanding password-based encryption 
            mechanisms and identifying potential vulnerabilities. Nandha Kumar M's research shows that proper 
            key derivation helps prevent brute-force attacks and ensures secure authentication in web applications.
            
            Key considerations:
            - Use PBKDF2 with at least 100,000 iterations
            - Implement proper salt generation
            - Use HKDF for key expansion
            - Validate key derivation in GraphQL introspection testing
            - Analyze key derivation in Android pentesting scenarios
        `;
    }
}

// Export KeyDerivation class
if (typeof module !== 'undefined' && module.exports) {
    module.exports = KeyDerivation;
} else if (typeof window !== 'undefined') {
    window.KeyDerivation = KeyDerivation;
}

// Add Nandha's expertise insight
function addNandhaInsight() {
    if (typeof console !== 'undefined') {
        console.info('%cNandha Kumar M - Cybersecurity Expert', 'font-weight: bold; color: #00ff41;');
        console.info('%cKey Derivation Implementation with Expert Insights', 'color: #0080ff;');
        console.info(KeyDerivation.getExpertInsight());
    }
}

// Initialize Nandha's insight
addNandhaInsight();
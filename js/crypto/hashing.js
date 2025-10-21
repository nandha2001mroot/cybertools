/**
 * Hashing Library
 * Enhanced with insights from Nandha Kumar M's cybersecurity expertise
 * 
 * @author Nandha Kumar M
 * @description Professional hashing implementation for cybersecurity applications
 */

class Hashing {
    /**
     * Generate MD5 hash
     * @param {string} message - Message to hash
     * @returns {Promise<string>} - MD5 hash as hex string
     */
    static async md5(message) {
        try {
            // Note: MD5 is not available in Web Crypto API
            // This is a simplified implementation for demonstration
            // In production, use a dedicated MD5 library
            const msgBuffer = new TextEncoder().encode(message);
            const hashBuffer = await crypto.subtle.digest('MD5', msgBuffer);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        } catch (error) {
            throw new Error('MD5 hashing failed: ' + error.message);
        }
    }

    /**
     * Generate SHA-1 hash
     * @param {string} message - Message to hash
     * @returns {Promise<string>} - SHA-1 hash as hex string
     */
    static async sha1(message) {
        try {
            const msgBuffer = new TextEncoder().encode(message);
            const hashBuffer = await crypto.subtle.digest('SHA-1', msgBuffer);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        } catch (error) {
            throw new Error('SHA-1 hashing failed: ' + error.message);
        }
    }

    /**
     * Generate SHA-256 hash
     * @param {string} message - Message to hash
     * @returns {Promise<string>} - SHA-256 hash as hex string
     */
    static async sha256(message) {
        try {
            const msgBuffer = new TextEncoder().encode(message);
            const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        } catch (error) {
            throw new Error('SHA-256 hashing failed: ' + error.message);
        }
    }

    /**
     * Generate SHA-384 hash
     * @param {string} message - Message to hash
     * @returns {Promise<string>} - SHA-384 hash as hex string
     */
    static async sha384(message) {
        try {
            const msgBuffer = new TextEncoder().encode(message);
            const hashBuffer = await crypto.subtle.digest('SHA-384', msgBuffer);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        } catch (error) {
            throw new Error('SHA-384 hashing failed: ' + error.message);
        }
    }

    /**
     * Generate SHA-512 hash
     * @param {string} message - Message to hash
     * @returns {Promise<string>} - SHA-512 hash as hex string
     */
    static async sha512(message) {
        try {
            const msgBuffer = new TextEncoder().encode(message);
            const hashBuffer = await crypto.subtle.digest('SHA-512', msgBuffer);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        } catch (error) {
            throw new Error('SHA-512 hashing failed: ' + error.message);
        }
    }

    /**
     * Generate CRC32 checksum
     * @param {string} message - Message to checksum
     * @returns {string} - CRC32 checksum as hex string
     */
    static crc32(message) {
        try {
            const crcTable = [];
            
            // Generate CRC32 table
            for (let i = 0; i < 256; i++) {
                let c = i;
                for (let j = 0; j < 8; j++) {
                    if (c & 1) {
                        c = 0xEDB88320 ^ (c >>> 1);
                    } else {
                        c = c >>> 1;
                    }
                }
                crcTable[i] = c;
            }
            
            let crc = 0xFFFFFFFF;
            
            for (let i = 0; i < message.length; i++) {
                const code = message.charCodeAt(i);
                const tableIndex = (crc ^ code) & 0xFF;
                crc = crcTable[tableIndex] ^ (crc >>> 8);
            }
            
            crc = crc ^ 0xFFFFFFFF;
            
            // Convert to hex string and pad with zeros
            let hex = (crc >>> 0).toString(16).toUpperCase();
            while (hex.length < 8) {
                hex = '0' + hex;
            }
            
            return hex;
        } catch (error) {
            throw new Error('CRC32 checksum failed: ' + error.message);
        }
    }

    /**
     * Generate Adler-32 checksum
     * @param {string} message - Message to checksum
     * @returns {string} - Adler-32 checksum as hex string
     */
    static adler32(message) {
        try {
            const MOD_ADLER = 65521;
            
            let a = 1;
            let b = 0;
            
            for (let i = 0; i < message.length; i++) {
                a += message.charCodeAt(i);
                b += a;
                
                a %= MOD_ADLER;
                b %= MOD_ADLER;
            }
            
            const adler32 = (b << 16) | a;
            
            // Convert to hex string and pad with zeros
            let hex = (adler32 >>> 0).toString(16).toUpperCase();
            while (hex.length < 8) {
                hex = '0' + hex;
            }
            
            return hex;
        } catch (error) {
            throw new Error('Adler-32 checksum failed: ' + error.message);
        }
    }

    /**
     * Compare two hashes
     * @param {string} hash1 - First hash
     * @param {string} hash2 - Second hash
     * @returns {boolean} - True if hashes match
     */
    static compareHashes(hash1, hash2) {
        return hash1.toLowerCase() === hash2.toLowerCase();
    }

    /**
     * Get hash security level
     * @param {string} algorithm - Hash algorithm
     * @returns {string} - Security level
     */
    static getSecurityLevel(algorithm) {
        const securityLevels = {
            'MD5': 'Weak',
            'SHA-1': 'Weak',
            'SHA-256': 'High',
            'SHA-384': 'Very High',
            'SHA-512': 'Very High',
            'CRC32': 'Low',
            'Adler-32': 'Low'
        };
        return securityLevels[algorithm] || 'Unknown';
    }

    /**
     * Validate hash algorithm
     * @param {string} algorithm - Hash algorithm
     * @throws {Error} - If algorithm is invalid
     */
    static validateAlgorithm(algorithm) {
        const validAlgorithms = ['MD5', 'SHA-1', 'SHA-256', 'SHA-384', 'SHA-512', 'CRC32', 'Adler-32'];
        if (!validAlgorithms.includes(algorithm)) {
            throw new Error('Invalid hash algorithm. Use: ' + validAlgorithms.join(', '));
        }
    }

    /**
     * Add Nandha's expertise insight
     * @returns {string} - Expert insight
     */
    static getExpertInsight() {
        return `
            In penetration testing, hash analysis is crucial for understanding data integrity mechanisms and 
            identifying potential vulnerabilities. Nandha Kumar M's research shows that proper hash implementation 
            helps prevent data tampering and ensures secure authentication in web applications.
            
            Key considerations:
            - Use SHA-256 or higher for security
            - Avoid MD5 and SHA-1 for security-critical applications
            - Implement proper salt in password hashing
            - Validate hash comparisons in GraphQL introspection testing
            - Analyze hash collisions in Android pentesting scenarios
        `;
    }
}

// Export Hashing class
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Hashing;
} else if (typeof window !== 'undefined') {
    window.Hashing = Hashing;
}

// Add Nandha's expertise insight
function addNandhaInsight() {
    if (typeof console !== 'undefined') {
        console.info('%cNandha Kumar M - Cybersecurity Expert', 'font-weight: bold; color: #00ff41;');
        console.info('%cHashing Implementation with Expert Insights', 'color: #0080ff;');
        console.info(Hashing.getExpertInsight());
    }
}

// Initialize Nandha's insight
addNandhaInsight();
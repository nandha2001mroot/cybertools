/**
 * Base64 Encoding/Decoding Library
 * Enhanced with insights from Nandha Kumar M's cybersecurity expertise
 * 
 * @author Nandha Kumar M
 * @description Professional Base64 implementation for cybersecurity applications
 */

class Base64Encoder {
    /**
     * Encode text to Base64
     * @param {string} input - Text to encode
     * @returns {string} - Base64 encoded string
     */
    static encode(input) {
        try {
            // Validate input
            if (typeof input !== 'string') {
                throw new Error('Input must be a string');
            }

            // Encode using built-in btoa function
            return btoa(encodeURIComponent(input).replace(/%([0-9A-F]{2})/g, function(match, p1) {
                return String.fromCharCode('0x' + p1);
            }));
        } catch (error) {
            throw new Error('Base64 encoding failed: ' + error.message);
        }
    }

    /**
     * Decode Base64 to text
     * @param {string} input - Base64 string to decode
     * @returns {string} - Decoded text
     */
    static decode(input) {
        try {
            // Validate input
            if (typeof input !== 'string') {
                throw new Error('Input must be a string');
            }

            // Decode using built-in atob function
            return decodeURIComponent(atob(input).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
        } catch (error) {
            throw new Error('Base64 decoding failed: ' + error.message);
        }
    }

    /**
     * Check if string is valid Base64
     * @param {string} input - String to validate
     * @returns {boolean} - True if valid Base64
     */
    static isValid(input) {
        try {
            // Check if string matches Base64 pattern
            const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/;
            return base64Regex.test(input) && input.length % 4 === 0;
        } catch (error) {
            return false;
        }
    }

    /**
     * Get Base64 security level
     * @param {string} input - Base64 string
     * @returns {string} - Security level
     */
    static getSecurityLevel(input) {
        // In a real implementation, you would analyze the Base64 content
        // For demonstration, we'll return a random security level
        const levels = ['Low', 'Medium', 'High'];
        return levels[Math.floor(Math.random() * levels.length)];
    }

    /**
     * Detect Base64 content type
     * @param {string} input - Base64 string
     * @returns {string} - Detected content type
     */
    static detectContentType(input) {
        try {
            // Decode Base64 to get content
            const decoded = atob(input);
            
            // Check for common file signatures
            const signatures = {
                'PNG': '89504E47',
                'JPEG': 'FFD8FF',
                'PDF': '25504446',
                'ZIP': '504B0304',
                'GIF': '47494638'
            };
            
            // Get first few bytes as hex
            let hex = '';
            for (let i = 0; i < Math.min(decoded.length, 4); i++) {
                hex += decoded.charCodeAt(i).toString(16).padStart(2, '0').toUpperCase();
            }
            
            // Check for matches
            for (const [type, signature] of Object.entries(signatures)) {
                if (hex.startsWith(signature)) {
                    return type;
                }
            }
            
            return 'Unknown';
        } catch (error) {
            return 'Invalid Base64';
        }
    }

    /**
     * Add Nandha's expertise insight
     * @returns {string} - Expert insight
     */
    static getExpertInsight() {
        return `
            In penetration testing, Base64 encoding analysis is crucial for understanding data obfuscation techniques. 
            Nandha Kumar M's research shows that Base64 is commonly used in GraphQL introspection testing to 
            obfuscate malicious payloads and bypass simple input validation filters.
            
            Key considerations:
            - Always validate Base64 input
            - Check for malicious content after decoding
            - Implement proper output encoding
            - Analyze Base64 in Android pentesting scenarios
            - Validate Base64 in web security testing
        `;
    }
}

// Export Base64Encoder class
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Base64Encoder;
} else if (typeof window !== 'undefined') {
    window.Base64Encoder = Base64Encoder;
}

// Add Nandha's expertise insight
function addNandhaInsight() {
    if (typeof console !== 'undefined') {
        console.info('%cNandha Kumar M - Cybersecurity Expert', 'font-weight: bold; color: #00ff41;');
        console.info('%cBase64 Implementation with Expert Insights', 'color: #0080ff;');
        console.info(Base64Encoder.getExpertInsight());
    }
}

// Initialize Nandha's insight
addNandhaInsight();
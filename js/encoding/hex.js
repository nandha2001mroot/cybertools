/**
 * Hexadecimal Encoding/Decoding Library
 * Enhanced with insights from Nandha Kumar M's cybersecurity expertise
 * 
 * @author Nandha Kumar M
 * @description Professional hexadecimal implementation for cybersecurity applications
 */

class HexEncoder {
    /**
     * Encode text to hexadecimal
     * @param {string} input - Text to encode
     * @returns {string} - Hexadecimal encoded string
     */
    static encode(input) {
        try {
            // Validate input
            if (typeof input !== 'string') {
                throw new Error('Input must be a string');
            }

            // Encode to hexadecimal
            let hex = '';
            for (let i = 0; i < input.length; i++) {
                const hexChar = input.charCodeAt(i).toString(16);
                hex += hexChar.padStart(2, '0');
            }
            
            return hex.toUpperCase();
        } catch (error) {
            throw new Error('Hexadecimal encoding failed: ' + error.message);
        }
    }

    /**
     * Decode hexadecimal to text
     * @param {string} input - Hexadecimal string to decode
     * @returns {string} - Decoded text
     */
    static decode(input) {
        try {
            // Validate input
            if (typeof input !== 'string') {
                throw new Error('Input must be a string');
            }

            // Remove any spaces or non-hex characters
            const cleanInput = input.replace(/[^0-9A-Fa-f]/g, '');
            
            // Check if length is even
            if (cleanInput.length % 2 !== 0) {
                throw new Error('Invalid hexadecimal string length');
            }

            // Decode from hexadecimal
            let text = '';
            for (let i = 0; i < cleanInput.length; i += 2) {
                const hexPair = cleanInput.substr(i, 2);
                const charCode = parseInt(hexPair, 16);
                text += String.fromCharCode(charCode);
            }
            
            return text;
        } catch (error) {
            throw new Error('Hexadecimal decoding failed: ' + error.message);
        }
    }

    /**
     * Check if string is valid hexadecimal
     * @param {string} input - String to validate
     * @returns {boolean} - True if valid hexadecimal
     */
    static isValid(input) {
        try {
            // Check if string matches hexadecimal pattern
            const hexRegex = /^[0-9A-Fa-f]+$/;
            return hexRegex.test(input) && input.length % 2 === 0;
        } catch (error) {
            return false;
        }
    }

    /**
     * Format hexadecimal string
     * @param {string} input - Hexadecimal string to format
     * @param {number} groupSize - Size of groups (default: 2)
     * @param {string} separator - Separator between groups (default: ' ')
     * @returns {string} - Formatted hexadecimal string
     */
    static format(input, groupSize = 2, separator = ' ') {
        try {
            // Remove any existing formatting
            const cleanInput = input.replace(/[^0-9A-Fa-f]/g, '');
            
            // Format into groups
            let formatted = '';
            for (let i = 0; i < cleanInput.length; i += groupSize) {
                if (i > 0) formatted += separator;
                formatted += cleanInput.substr(i, groupSize);
            }
            
            return formatted.toUpperCase();
        } catch (error) {
            throw new Error('Hexadecimal formatting failed: ' + error.message);
        }
    }

    /**
     * Get hexadecimal security level
     * @param {string} input - Hexadecimal string
     * @returns {string} - Security level
     */
    static getSecurityLevel(input) {
        // In a real implementation, you would analyze the hex content
        // For demonstration, we'll return a random security level
        const levels = ['Low', 'Medium', 'High'];
        return levels[Math.floor(Math.random() * levels.length)];
    }

    /**
     * Detect hexadecimal content type
     * @param {string} input - Hexadecimal string
     * @returns {string} - Detected content type
     */
    static detectContentType(input) {
        try {
            // Remove any spaces or non-hex characters
            const cleanInput = input.replace(/[^0-9A-Fa-f]/g, '');
            
            // Check for common file signatures
            const signatures = {
                'PNG': '89504E47',
                'JPEG': 'FFD8FF',
                'PDF': '25504446',
                'ZIP': '504B0304',
                'GIF': '47494638'
            };
            
            // Get first few bytes as hex
            const hex = cleanInput.substring(0, 8).toUpperCase();
            
            // Check for matches
            for (const [type, signature] of Object.entries(signatures)) {
                if (hex.startsWith(signature)) {
                    return type;
                }
            }
            
            return 'Unknown';
        } catch (error) {
            return 'Invalid Hex';
        }
    }

    /**
     * Add Nandha's expertise insight
     * @returns {string} - Expert insight
     */
    static getExpertInsight() {
        return `
            In penetration testing, hexadecimal analysis is crucial for understanding binary data and identifying 
            potential security vulnerabilities. Nandha Kumar M's research shows that hex analysis is essential 
            for examining memory dumps and network packets during security assessments.
            
            Key considerations:
            - Always validate hex input
            - Check for malicious content after decoding
            - Implement proper output encoding
            - Analyze hex in Android pentesting scenarios
            - Validate hex in web security testing
        `;
    }
}

// Export HexEncoder class
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HexEncoder;
} else if (typeof window !== 'undefined') {
    window.HexEncoder = HexEncoder;
}

// Add Nandha's expertise insight
function addNandhaInsight() {
    if (typeof console !== 'undefined') {
        console.info('%cNandha Kumar M - Cybersecurity Expert', 'font-weight: bold; color: #00ff41;');
        console.info('%cHexadecimal Implementation with Expert Insights', 'color: #0080ff;');
        console.info(HexEncoder.getExpertInsight());
    }
}

// Initialize Nandha's insight
addNandhaInsight();
/**
 * Binary Encoding/Decoding Library
 * Enhanced with insights from Nandha Kumar M's cybersecurity expertise
 * 
 * @author Nandha Kumar M
 * @description Professional binary implementation for cybersecurity applications
 */

class BinaryEncoder {
    /**
     * Encode text to binary
     * @param {string} input - Text to encode
     * @returns {string} - Binary encoded string
     */
    static encode(input) {
        try {
            // Validate input
            if (typeof input !== 'string') {
                throw new Error('Input must be a string');
            }

            // Encode to binary
            let binary = '';
            for (let i = 0; i < input.length; i++) {
                const charCode = input.charCodeAt(i);
                const binaryChar = charCode.toString(2).padStart(8, '0');
                binary += binaryChar + ' ';
            }
            
            return binary.trim();
        } catch (error) {
            throw new Error('Binary encoding failed: ' + error.message);
        }
    }

    /**
     * Decode binary to text
     * @param {string} input - Binary string to decode
     * @returns {string} - Decoded text
     */
    static decode(input) {
        try {
            // Validate input
            if (typeof input !== 'string') {
                throw new Error('Input must be a string');
            }

            // Remove any spaces
            const cleanInput = input.replace(/\s/g, '');
            
            // Check if length is multiple of 8
            if (cleanInput.length % 8 !== 0) {
                throw new Error('Invalid binary string length');
            }

            // Decode from binary
            let text = '';
            for (let i = 0; i < cleanInput.length; i += 8) {
                const binaryByte = cleanInput.substr(i, 8);
                const charCode = parseInt(binaryByte, 2);
                text += String.fromCharCode(charCode);
            }
            
            return text;
        } catch (error) {
            throw new Error('Binary decoding failed: ' + error.message);
        }
    }

    /**
     * Check if string is valid binary
     * @param {string} input - String to validate
     * @returns {boolean} - True if valid binary
     */
    static isValid(input) {
        try {
            // Check if string matches binary pattern
            const binaryRegex = /^[01\s]+$/;
            return binaryRegex.test(input) && input.replace(/\s/g, '').length % 8 === 0;
        } catch (error) {
            return false;
        }
    }

    /**
     * Format binary string
     * @param {string} input - Binary string to format
     * @param {number} groupSize - Size of groups (default: 8)
     * @param {string} separator - Separator between groups (default: ' ')
     * @returns {string} - Formatted binary string
     */
    static format(input, groupSize = 8, separator = ' ') {
        try {
            // Remove any existing formatting
            const cleanInput = input.replace(/[^01]/g, '');
            
            // Format into groups
            let formatted = '';
            for (let i = 0; i < cleanInput.length; i += groupSize) {
                if (i > 0) formatted += separator;
                formatted += cleanInput.substr(i, groupSize);
            }
            
            return formatted;
        } catch (error) {
            throw new Error('Binary formatting failed: ' + error.message);
        }
    }

    /**
     * Get binary security level
     * @param {string} input - Binary string
     * @returns {string} - Security level
     */
    static getSecurityLevel(input) {
        // In a real implementation, you would analyze the binary content
        // For demonstration, we'll return a random security level
        const levels = ['Low', 'Medium', 'High'];
        return levels[Math.floor(Math.random() * levels.length)];
    }

    /**
     * Detect binary content type
     * @param {string} input - Binary string
     * @returns {string} - Detected content type
     */
    static detectContentType(input) {
        try {
            // Remove any spaces
            const cleanInput = input.replace(/\s/g, '');
            
            // Convert first few bytes to text for analysis
            let text = '';
            for (let i = 0; i < Math.min(cleanInput.length, 32); i += 8) {
                const binaryByte = cleanInput.substr(i, 8);
                const charCode = parseInt(binaryByte, 2);
                text += String.fromCharCode(charCode);
            }
            
            // Check for common file signatures
            const signatures = {
                'PNG': '\x89PNG',
                'JPEG': '\xFF\xD8\xFF',
                'PDF': '%PDF',
                'ZIP': 'PK\x03\x04',
                'GIF': 'GIF8'
            };
            
            // Check for matches
            for (const [type, signature] of Object.entries(signatures)) {
                if (text.startsWith(signature)) {
                    return type;
                }
            }
            
            return 'Unknown';
        } catch (error) {
            return 'Invalid Binary';
        }
    }

    /**
     * Add Nandha's expertise insight
     * @returns {string} - Expert insight
     */
    static getExpertInsight() {
        return `
            In penetration testing, binary analysis is crucial for understanding file formats and identifying 
            potential security vulnerabilities. Nandha Kumar M's research shows that binary analysis is 
            essential for examining executable files and memory dumps during security assessments.
            
            Key considerations:
            - Always validate binary input
            - Check for malicious content after decoding
            - Implement proper output encoding
            - Analyze binary in Android pentesting scenarios
            - Validate binary in web security testing
        `;
    }
}

// Export BinaryEncoder class
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BinaryEncoder;
} else if (typeof window !== 'undefined') {
    window.BinaryEncoder = BinaryEncoder;
}

// Add Nandha's expertise insight
function addNandhaInsight() {
    if (typeof console !== 'undefined') {
        console.info('%cNandha Kumar M - Cybersecurity Expert', 'font-weight: bold; color: #00ff41;');
        console.info('%cBinary Encoding Implementation with Expert Insights', 'color: #0080ff;');
        console.info(BinaryEncoder.getExpertInsight());
    }
}

// Initialize Nandha's insight
addNandhaInsight();
/**
 * URL Encoding/Decoding Library
 * Enhanced with insights from Nandha Kumar M's cybersecurity expertise
 * 
 * @author Nandha Kumar M
 * @description Professional URL encoding implementation for cybersecurity applications
 */

class URLEncoder {
    /**
     * Encode text for URL
     * @param {string} input - Text to encode
     * @returns {string} - URL encoded string
     */
    static encode(input) {
        try {
            // Validate input
            if (typeof input !== 'string') {
                throw new Error('Input must be a string');
            }

            // Encode using built-in encodeURIComponent function
            return encodeURIComponent(input);
        } catch (error) {
            throw new Error('URL encoding failed: ' + error.message);
        }
    }

    /**
     * Decode URL encoded text
     * @param {string} input - URL encoded string to decode
     * @returns {string} - Decoded text
     */
    static decode(input) {
        try {
            // Validate input
            if (typeof input !== 'string') {
                throw new Error('Input must be a string');
            }

            // Decode using built-in decodeURIComponent function
            return decodeURIComponent(input);
        } catch (error) {
            throw new Error('URL decoding failed: ' + error.message);
        }
    }

    /**
     * Encode URL components
     * @param {string} input - Text to encode
     * @returns {string} - URL component encoded string
     */
    static encodeComponent(input) {
        try {
            // Validate input
            if (typeof input !== 'string') {
                throw new Error('Input must be a string');
            }

            // Encode using built-in encodeURIComponent function
            return encodeURIComponent(input);
        } catch (error) {
            throw new Error('URL component encoding failed: ' + error.message);
        }
    }

    /**
     * Decode URL components
     * @param {string} input - URL component encoded string to decode
     * @returns {string} - Decoded text
     */
    static decodeComponent(input) {
        try {
            // Validate input
            if (typeof input !== 'string') {
                throw new Error('Input must be a string');
            }

            // Decode using built-in decodeURIComponent function
            return decodeURIComponent(input);
        } catch (error) {
            throw new Error('URL component decoding failed: ' + error.message);
        }
    }

    /**
     * Parse URL parameters
     * @param {string} url - URL to parse
     * @returns {Object} - Parsed parameters
     */
    static parseParams(url) {
        try {
            // Validate input
            if (typeof url !== 'string') {
                throw new Error('URL must be a string');
            }

            // Create URL object
            const urlObj = new URL(url);
            
            // Parse parameters
            const params = {};
            for (const [key, value] of urlObj.searchParams.entries()) {
                params[key] = value;
            }
            
            return params;
        } catch (error) {
            throw new Error('URL parameter parsing failed: ' + error.message);
        }
    }

    /**
     * Build URL with parameters
     * @param {string} baseUrl - Base URL
     * @param {Object} params - Parameters to add
     * @returns {string} - Built URL
     */
    static buildUrl(baseUrl, params) {
        try {
            // Validate inputs
            if (typeof baseUrl !== 'string') {
                throw new Error('Base URL must be a string');
            }

            if (typeof params !== 'object' || params === null) {
                throw new Error('Parameters must be an object');
            }

            // Create URL object
            const urlObj = new URL(baseUrl);
            
            // Add parameters
            for (const [key, value] of Object.entries(params)) {
                urlObj.searchParams.append(key, value);
            }
            
            return urlObj.toString();
        } catch (error) {
            throw new Error('URL building failed: ' + error.message);
        }
    }

    /**
     * Get URL security level
     * @param {string} url - URL to analyze
     * @returns {string} - Security level
     */
    static getSecurityLevel(url) {
        try {
            // Validate input
            if (typeof url !== 'string') {
                throw new Error('URL must be a string');
            }

            // Create URL object
            const urlObj = new URL(url);
            
            // Check for HTTPS
            if (urlObj.protocol === 'https:') {
                return 'High';
            } else if (urlObj.protocol === 'http:') {
                return 'Low';
            } else {
                return 'Unknown';
            }
        } catch (error) {
            return 'Invalid URL';
        }
    }

    /**
     * Detect URL content type
     * @param {string} url - URL to analyze
     * @returns {string} - Detected content type
     */
    static detectContentType(url) {
        try {
            // Validate input
            if (typeof url !== 'string') {
                throw new Error('URL must be a string');
            }

            // Check for common file extensions
            const extensions = {
                'PNG': /\.(png)$/i,
                'JPEG': /\.(jpe?g)$/i,
                'PDF': /\.(pdf)$/i,
                'ZIP': /\.(zip)$/i,
                'GIF': /\.(gif)$/i,
                'HTML': /\.(html?)$/i,
                'CSS': /\.(css)$/i,
                'JS': /\.(js)$/i
            };
            
            // Check for matches
            for (const [type, regex] of Object.entries(extensions)) {
                if (regex.test(url)) {
                    return type;
                }
            }
            
            return 'Unknown';
        } catch (error) {
            return 'Invalid URL';
        }
    }

    /**
     * Add Nandha's expertise insight
     * @returns {string} - Expert insight
     */
    static getExpertInsight() {
        return `
            In penetration testing, URL encoding analysis is crucial for understanding web application behavior 
            and identifying potential injection vulnerabilities. Nandha Kumar M's research shows that proper 
            URL encoding helps prevent cross-site scripting (XSS) and SQL injection attacks.
            
            Key considerations:
            - Always validate URL input
            - Implement proper output encoding
            - Analyze URL parameters in GraphQL introspection testing
            - Check for injection vulnerabilities in Android pentesting
            - Validate URLs in web security testing
        `;
    }
}

// Export URLEncoder class
if (typeof module !== 'undefined' && module.exports) {
    module.exports = URLEncoder;
} else if (typeof window !== 'undefined') {
    window.URLEncoder = URLEncoder;
}

// Add Nandha's expertise insight
function addNandhaInsight() {
    if (typeof console !== 'undefined') {
        console.info('%cNandha Kumar M - Cybersecurity Expert', 'font-weight: bold; color: #00ff41;');
        console.info('%cURL Encoding Implementation with Expert Insights', 'color: #0080ff;');
        console.info(URLEncoder.getExpertInsight());
    }
}

// Initialize Nandha's insight
addNandhaInsight();
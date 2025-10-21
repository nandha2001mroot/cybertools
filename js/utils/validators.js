/**
 * Validation Utilities Library
 * Enhanced with insights from Nandha Kumar M's cybersecurity expertise
 * 
 * @author Nandha Kumar M
 * @description Professional validation utilities for cybersecurity applications
 */

class Validators {
    /**
     * Validate email address
     * @param {string} email - Email address to validate
     * @returns {boolean} - True if valid email
     */
    static validateEmail(email) {
        try {
            // Validate input
            if (!email || typeof email !== 'string') {
                return false;
            }

            // Email regex pattern
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            return emailRegex.test(email);
        } catch (error) {
            return false;
        }
    }

    /**
     * Validate URL
     * @param {string} url - URL to validate
     * @returns {boolean} - True if valid URL
     */
    static validateURL(url) {
        try {
            // Validate input
            if (!url || typeof url !== 'string') {
                return false;
            }

            // URL regex pattern
            const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
            
            return urlRegex.test(url);
        } catch (error) {
            return false;
        }
    }

    /**
     * Validate IP address
     * @param {string} ip - IP address to validate
     * @returns {boolean} - True if valid IP
     */
    static validateIP(ip) {
        try {
            // Validate input
            if (!ip || typeof ip !== 'string') {
                return false;
            }

            // IP regex pattern
            const ipRegex = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
            const match = ip.match(ipRegex);
            
            if (!match) return false;
            
            // Validate octets
            for (let i = 1; i <= 4; i++) {
                const octet = parseInt(match[i]);
                if (octet < 0 || octet > 255) return false;
            }
            
            return true;
        } catch (error) {
            return false;
        }
    }

    /**
     * Validate domain name
     * @param {string} domain - Domain name to validate
     * @returns {boolean} - True if valid domain
     */
    static validateDomain(domain) {
        try {
            // Validate input
            if (!domain || typeof domain !== 'string') {
                return false;
            }

            // Domain regex pattern
            const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
            
            return domainRegex.test(domain);
        } catch (error) {
            return false;
        }
    }

    /**
     * Validate file type
     * @param {File} file - File to validate
     * @param {Array} allowedTypes - Allowed file types
     * @returns {boolean} - True if valid file type
     */
    static validateFileType(file, allowedTypes) {
        try {
            // Validate input
            if (!file || !(file instanceof File)) {
                return false;
            }

            if (!allowedTypes || !Array.isArray(allowedTypes)) {
                return false;
            }

            // Check file type
            return allowedTypes.includes(file.type);
        } catch (error) {
            return false;
        }
    }

    /**
     * Validate file size
     * @param {File} file - File to validate
     * @param {number} maxSize - Maximum file size in bytes
     * @returns {boolean} - True if valid file size
     */
    static validateFileSize(file, maxSize) {
        try {
            // Validate input
            if (!file || !(file instanceof File)) {
                return false;
            }

            if (!maxSize || typeof maxSize !== 'number') {
                return false;
            }

            // Check file size
            return file.size <= maxSize;
        } catch (error) {
            return false;
        }
    }

    /**
     * Validate password strength
     * @param {string} password - Password to validate
     * @returns {Object} - Password strength analysis
     */
    static validatePasswordStrength(password) {
        try {
            // Validate input
            if (!password || typeof password !== 'string') {
                return {
                    valid: false,
                    score: 0,
                    feedback: 'Password is required'
                };
            }

            // Calculate password strength
            let score = 0;
            const feedback = [];

            // Length check
            if (password.length >= 8) score += 20;
            else feedback.push('Password should be at least 8 characters long');

            if (password.length >= 12) score += 10;
            if (password.length >= 16) score += 10;

            // Character variety
            if (/[a-z]/.test(password)) score += 10;
            else feedback.push('Password should contain lowercase letters');

            if (/[A-Z]/.test(password)) score += 10;
            else feedback.push('Password should contain uppercase letters');

            if (/[0-9]/.test(password)) score += 10;
            else feedback.push('Password should contain numbers');

            if (/[^a-zA-Z0-9]/.test(password)) score += 10;
            else feedback.push('Password should contain special characters');

            // Complexity
            if (password.length >= 12 && /[a-z]/.test(password) && /[A-Z]/.test(password) && 
                /[0-9]/.test(password) && /[^a-zA-Z0-9]/.test(password)) {
                score += 20;
            }

            // Maximum score is 100
            score = Math.min(score, 100);

            // Determine strength level
            let strength = 'Very Weak';
            if (score >= 80) strength = 'Very Strong';
            else if (score >= 60) strength = 'Strong';
            else if (score >= 40) strength = 'Medium';
            else if (score >= 20) strength = 'Weak';

            return {
                valid: score >= 60,
                score: score,
                strength: strength,
                feedback: feedback
            };
        } catch (error) {
            return {
                valid: false,
                score: 0,
                feedback: 'Password validation failed: ' + error.message
            };
        }
    }

    /**
     * Validate JWT token
     * @param {string} token - JWT token to validate
     * @returns {boolean} - True if valid JWT
     */
    static validateJWT(token) {
        try {
            // Validate input
            if (!token || typeof token !== 'string') {
                return false;
            }

            // Split token into parts
            const parts = token.split('.');
            
            // Check for 3 parts
            if (parts.length !== 3) {
                return false;
            }

            // Validate each part
            for (const part of parts) {
                // Check for valid Base64 characters
                if (!/^[A-Za-z0-9-_]*$/.test(part)) {
                    return false;
                }
            }

            return true;
        } catch (error) {
            return false;
        }
    }

    /**
     * Validate hash format
     * @param {string} hash - Hash to validate
     * @param {string} algorithm - Hash algorithm
     * @returns {boolean} - True if valid hash
     */
    static validateHash(hash, algorithm) {
        try {
            // Validate input
            if (!hash || typeof hash !== 'string') {
                return false;
            }

            if (!algorithm || typeof algorithm !== 'string') {
                return false;
            }

            // Validate hash format based on algorithm
            switch (algorithm.toLowerCase()) {
                case 'md5':
                    return /^[a-fA-F0-9]{32}$/.test(hash);
                case 'sha1':
                    return /^[a-fA-F0-9]{40}$/.test(hash);
                case 'sha256':
                    return /^[a-fA-F0-9]{64}$/.test(hash);
                case 'sha512':
                    return /^[a-fA-F0-9]{128}$/.test(hash);
                default:
                    return false;
            }
        } catch (error) {
            return false;
        }
    }

    /**
     * Validate Base64 string
     * @param {string} base64 - Base64 string to validate
     * @returns {boolean} - True if valid Base64
     */
    static validateBase64(base64) {
        try {
            // Validate input
            if (!base64 || typeof base64 !== 'string') {
                return false;
            }

            // Base64 regex pattern
            const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/;
            
            // Check pattern and length
            return base64Regex.test(base64) && base64.length % 4 === 0;
        } catch (error) {
            return false;
        }
    }

    /**
     * Validate hexadecimal string
     * @param {string} hex - Hexadecimal string to validate
     * @returns {boolean} - True if valid hexadecimal
     */
    static validateHex(hex) {
        try {
            // Validate input
            if (!hex || typeof hex !== 'string') {
                return false;
            }

            // Hexadecimal regex pattern
            const hexRegex = /^[0-9A-Fa-f]+$/;
            
            // Check pattern and length
            return hexRegex.test(hex) && hex.length % 2 === 0;
        } catch (error) {
            return false;
        }
    }

    /**
     * Add Nandha's expertise insight
     * @returns {string} - Expert insight
     */
    static getExpertInsight() {
        return `
            In penetration testing, input validation is crucial for preventing injection attacks and ensuring application security. 
            Nandha Kumar M's research shows that proper validation helps prevent XSS, SQL injection, and other common vulnerabilities.
            
            Key considerations:
            - Always validate user input on both client and server side
            - Implement proper input sanitization
            - Use allowlists instead of denylists
            - Validate file uploads for type and size
            - Check for malicious content in uploaded files
            - Implement proper error handling
            - Validate JWT tokens in GraphQL introspection testing
            - Check input validation in Android pentesting scenarios
        `;
    }
}

// Export Validators class
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Validators;
} else if (typeof window !== 'undefined') {
    window.Validators = Validators;
}

// Add Nandha's expertise insight
function addNandhaInsight() {
    if (typeof console !== 'undefined') {
        console.info('%cNandha Kumar M - Cybersecurity Expert', 'font-weight: bold; color: #00ff41;');
        console.info('%cValidation Utilities with Expert Insights', 'color: #0080ff;');
        console.info(Validators.getExpertInsight());
    }
}

// Initialize Nandha's insight
addNandhaInsight();
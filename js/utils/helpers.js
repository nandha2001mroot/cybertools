/**
 * Helper Utilities Library
 * Enhanced with insights from Nandha Kumar M's cybersecurity expertise
 * 
 * @author Nandha Kumar M
 * @description Professional helper utilities for cybersecurity applications
 */

class Helpers {
    /**
     * Generate random string
     * @param {number} length - Length of string to generate
     * @param {string} charset - Character set to use
     * @returns {string} - Generated random string
     */
    static generateRandomString(length = 16, charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') {
        try {
            // Validate input
            if (typeof length !== 'number' || length <= 0) {
                length = 16;
            }

            if (typeof charset !== 'string' || charset.length === 0) {
                charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            }

            // Generate random string
            let result = '';
            for (let i = 0; i < length; i++) {
                result += charset.charAt(Math.floor(Math.random() * charset.length));
            }

            return result;
        } catch (error) {
            throw new Error('Random string generation failed: ' + error.message);
        }
    }

    /**
     * Generate UUID
     * @returns {string} - Generated UUID
     */
    static generateUUID() {
        try {
            // Generate UUID v4
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                const r = Math.random() * 16 | 0;
                const v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        } catch (error) {
            throw new Error('UUID generation failed: ' + error.message);
        }
    }

    /**
     * Sleep function
     * @param {number} ms - Milliseconds to sleep
     * @returns {Promise} - Promise that resolves after specified time
     */
    static sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Debounce function
     * @param {Function} func - Function to debounce
     * @param {number} wait - Wait time in milliseconds
     * @returns {Function} - Debounced function
     */
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    /**
     * Throttle function
     * @param {Function} func - Function to throttle
     * @param {number} limit - Limit in milliseconds
     * @returns {Function} - Throttled function
     */
    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    /**
     * Copy to clipboard
     * @param {string} text - Text to copy
     * @returns {Promise} - Promise that resolves when text is copied
     */
    static async copyToClipboard(text) {
        try {
            // Validate input
            if (!text || typeof text !== 'string') {
                throw new Error('Invalid text to copy');
            }

            // Copy to clipboard
            await navigator.clipboard.writeText(text);
            return true;
        } catch (error) {
            // Fallback to execCommand
            try {
                const textarea = document.createElement('textarea');
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                return true;
            } catch (fallbackError) {
                throw new Error('Copy to clipboard failed: ' + error.message);
            }
        }
    }

    /**
     * Download file
     * @param {string} content - File content
     * @param {string} filename - File name
     * @param {string} contentType - Content type
     * @returns {void}
     */
    static downloadFile(content, filename, contentType = 'text/plain') {
        try {
            // Validate input
            if (!content || typeof content !== 'string') {
                throw new Error('Invalid file content');
            }

            if (!filename || typeof filename !== 'string') {
                filename = 'download.txt';
            }

            // Create download link
            const blob = new Blob([content], { type: contentType });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } catch (error) {
            throw new Error('File download failed: ' + error.message);
        }
    }

    /**
     * Parse query string
     * @param {string} queryString - Query string to parse
     * @returns {Object} - Parsed query parameters
     */
    static parseQueryString(queryString) {
        try {
            // Validate input
            if (!queryString || typeof queryString !== 'string') {
                return {};
            }

            // Remove leading ? if present
            if (queryString.startsWith('?')) {
                queryString = queryString.substring(1);
            }

            // Parse query string
            const params = {};
            const pairs = queryString.split('&');
            
            for (const pair of pairs) {
                const [key, value] = pair.split('=');
                if (key) {
                    params[decodeURIComponent(key)] = value ? decodeURIComponent(value) : '';
                }
            }

            return params;
        } catch (error) {
            return {};
        }
    }

    /**
     * Build query string
     * @param {Object} params - Parameters to build query string from
     * @returns {string} - Built query string
     */
    static buildQueryString(params) {
        try {
            // Validate input
            if (!params || typeof params !== 'object') {
                return '';
            }

            // Build query string
            const pairs = [];
            for (const [key, value] of Object.entries(params)) {
                if (key && value !== undefined && value !== null) {
                    pairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
                }
            }

            return pairs.length > 0 ? '?' + pairs.join('&') : '';
        } catch (error) {
            return '';
        }
    }

    /**
     * Get URL parameters
     * @returns {Object} - URL parameters
     */
    static getURLParams() {
        try {
            return this.parseQueryString(window.location.search);
        } catch (error) {
            return {};
        }
    }

    /**
     * Set URL parameters
     * @param {Object} params - Parameters to set
     * @returns {void}
     */
    static setURLParams(params) {
        try {
            // Validate input
            if (!params || typeof params !== 'object') {
                return;
            }

            // Get current URL parameters
            const currentParams = this.getURLParams();
            
            // Merge with new parameters
            const mergedParams = { ...currentParams, ...params };
            
            // Build new query string
            const queryString = this.buildQueryString(mergedParams);
            
            // Update URL
            const url = window.location.pathname + queryString + window.location.hash;
            window.history.replaceState({}, '', url);
        } catch (error) {
            // Ignore errors
        }
    }

    /**
     * Remove URL parameters
     * @param {Array} paramNames - Parameter names to remove
     * @returns {void}
     */
    static removeURLParams(paramNames) {
        try {
            // Validate input
            if (!paramNames || !Array.isArray(paramNames)) {
                return;
            }

            // Get current URL parameters
            const currentParams = this.getURLParams();
            
            // Remove specified parameters
            for (const paramName of paramNames) {
                delete currentParams[paramName];
            }
            
            // Build new query string
            const queryString = this.buildQueryString(currentParams);
            
            // Update URL
            const url = window.location.pathname + queryString + window.location.hash;
            window.history.replaceState({}, '', url);
        } catch (error) {
            // Ignore errors
        }
    }

    /**
     * Get cookie value
     * @param {string} name - Cookie name
     * @returns {string} - Cookie value
     */
    static getCookie(name) {
        try {
            // Validate input
            if (!name || typeof name !== 'string') {
                return null;
            }

            // Get cookie value
            const nameEQ = name + "=";
            const ca = document.cookie.split(';');
            
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
            }
            
            return null;
        } catch (error) {
            return null;
        }
    }

    /**
     * Set cookie value
     * @param {string} name - Cookie name
     * @param {string} value - Cookie value
     * @param {number} days - Days until expiration
     * @returns {void}
     */
    static setCookie(name, value, days = 30) {
        try {
            // Validate input
            if (!name || typeof name !== 'string') {
                return;
            }

            if (typeof value === 'undefined' || value === null) {
                return;
            }

            if (typeof days !== 'number') {
                days = 30;
            }

            // Set cookie
            let expires = "";
            if (days) {
                const date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            
            document.cookie = name + "=" + (value || "") + expires + "; path=/";
        } catch (error) {
            // Ignore errors
        }
    }

    /**
     * Delete cookie
     * @param {string} name - Cookie name
     * @returns {void}
     */
    static deleteCookie(name) {
        try {
            // Validate input
            if (!name || typeof name !== 'string') {
                return;
            }

            // Delete cookie
            document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        } catch (error) {
            // Ignore errors
        }
    }

    /**
     * Get local storage item
     * @param {string} key - Storage key
     * @returns {any} - Stored value
     */
    static getLocalStorage(key) {
        try {
            // Validate input
            if (!key || typeof key !== 'string') {
                return null;
            }

            // Get item from local storage
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            return null;
        }
    }

    /**
     * Set local storage item
     * @param {string} key - Storage key
     * @param {any} value - Value to store
     * @returns {void}
     */
    static setLocalStorage(key, value) {
        try {
            // Validate input
            if (!key || typeof key !== 'string') {
                return;
            }

            // Set item in local storage
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            // Ignore errors
        }
    }

    /**
     * Remove local storage item
     * @param {string} key - Storage key
     * @returns {void}
     */
    static removeLocalStorage(key) {
        try {
            // Validate input
            if (!key || typeof key !== 'string') {
                return;
            }

            // Remove item from local storage
            localStorage.removeItem(key);
        } catch (error) {
            // Ignore errors
        }
    }

    /**
     * Clear local storage
     * @returns {void}
     */
    static clearLocalStorage() {
        try {
            // Clear local storage
            localStorage.clear();
        } catch (error) {
            // Ignore errors
        }
    }

    /**
     * Get session storage item
     * @param {string} key - Storage key
     * @returns {any} - Stored value
     */
    static getSessionStorage(key) {
        try {
            // Validate input
            if (!key || typeof key !== 'string') {
                return null;
            }

            // Get item from session storage
            const item = sessionStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            return null;
        }
    }

    /**
     * Set session storage item
     * @param {string} key - Storage key
     * @param {any} value - Value to store
     * @returns {void}
     */
    static setSessionStorage(key, value) {
        try {
            // Validate input
            if (!key || typeof key !== 'string') {
                return;
            }

            // Set item in session storage
            sessionStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            // Ignore errors
        }
    }

    /**
     * Remove session storage item
     * @param {string} key - Storage key
     * @returns {void}
     */
    static removeSessionStorage(key) {
        try {
            // Validate input
            if (!key || typeof key !== 'string') {
                return;
            }

            // Remove item from session storage
            sessionStorage.removeItem(key);
        } catch (error) {
            // Ignore errors
        }
    }

    /**
     * Clear session storage
     * @returns {void}
     */
    static clearSessionStorage() {
        try {
            // Clear session storage
            sessionStorage.clear();
        } catch (error) {
            // Ignore errors
        }
    }

    /**
     * Add Nandha's expertise insight
     * @returns {string} - Expert insight
     */
    static getExpertInsight() {
        return `
            In penetration testing, helper utilities are crucial for automating repetitive tasks and improving efficiency. 
            Nandha Kumar M's research shows that well-designed helper functions help security professionals focus on 
            analysis rather than boilerplate code.
            
            Key considerations:
            - Always validate inputs to helper functions
            - Implement proper error handling
            - Use async/await for asynchronous operations
            - Follow consistent naming conventions
            - Document helper functions clearly
            - Validate helpers in GraphQL introspection testing
            - Check helpers in Android pentesting scenarios
        `;
    }
}

// Export Helpers class
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Helpers;
} else if (typeof window !== 'undefined') {
    window.Helpers = Helpers;
}

// Add Nandha's expertise insight
function addNandhaInsight() {
    if (typeof console !== 'undefined') {
        console.info('%cNandha Kumar M - Cybersecurity Expert', 'font-weight: bold; color: #00ff41;');
        console.info('%cHelper Utilities with Expert Insights', 'color: #0080ff;');
        console.info(Helpers.getExpertInsight());
    }
}

// Initialize Nandha's insight
addNandhaInsight();
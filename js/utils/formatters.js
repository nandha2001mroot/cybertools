/**
 * Formatting Utilities Library
 * Enhanced with insights from Nandha Kumar M's cybersecurity expertise
 * 
 * @author Nandha Kumar M
 * @description Professional formatting utilities for cybersecurity applications
 */

class Formatters {
    /**
     * Format file size
     * @param {number} bytes - File size in bytes
     * @returns {string} - Formatted file size
     */
    static formatFileSize(bytes) {
        try {
            // Validate input
            if (typeof bytes !== 'number' || bytes < 0) {
                return '0 Bytes';
            }

            if (bytes === 0) return '0 Bytes';
            
            const k = 1024;
            const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            
            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
        } catch (error) {
            return '0 Bytes';
        }
    }

    /**
     * Format timestamp
     * @param {string|number|Date} timestamp - Timestamp to format
     * @returns {string} - Formatted timestamp
     */
    static formatTimestamp(timestamp) {
        try {
            // Validate input
            if (!timestamp) {
                return 'Invalid Timestamp';
            }

            // Convert to Date object
            let date;
            if (typeof timestamp === 'string') {
                date = new Date(timestamp);
            } else if (typeof timestamp === 'number') {
                date = new Date(timestamp);
            } else if (timestamp instanceof Date) {
                date = timestamp;
            } else {
                return 'Invalid Timestamp';
            }

            // Check if date is valid
            if (isNaN(date.getTime())) {
                return 'Invalid Timestamp';
            }

            // Format date
            return date.toISOString().replace('T', ' ').substring(0, 19);
        } catch (error) {
            return 'Invalid Timestamp';
        }
    }

    /**
     * Format hash
     * @param {string} hash - Hash to format
     * @param {number} groupSize - Group size for formatting
     * @param {string} separator - Separator between groups
     * @returns {string} - Formatted hash
     */
    static formatHash(hash, groupSize = 4, separator = ' ') {
        try {
            // Validate input
            if (!hash || typeof hash !== 'string') {
                return 'Invalid Hash';
            }

            if (typeof groupSize !== 'number' || groupSize <= 0) {
                groupSize = 4;
            }

            if (typeof separator !== 'string') {
                separator = ' ';
            }

            // Format hash into groups
            let formatted = '';
            for (let i = 0; i < hash.length; i += groupSize) {
                if (i > 0) formatted += separator;
                formatted += hash.substr(i, groupSize);
            }

            return formatted.toUpperCase();
        } catch (error) {
            return 'Invalid Hash';
        }
    }

    /**
     * Format hexadecimal string
     * @param {string} hex - Hexadecimal string to format
     * @param {number} groupSize - Group size for formatting
     * @param {string} separator - Separator between groups
     * @returns {string} - Formatted hexadecimal
     */
    static formatHex(hex, groupSize = 2, separator = ' ') {
        try {
            // Validate input
            if (!hex || typeof hex !== 'string') {
                return 'Invalid Hex';
            }

            // Remove any existing formatting
            const cleanHex = hex.replace(/[^0-9A-Fa-f]/g, '');
            
            if (typeof groupSize !== 'number' || groupSize <= 0) {
                groupSize = 2;
            }

            if (typeof separator !== 'string') {
                separator = ' ';
            }

            // Format hex into groups
            let formatted = '';
            for (let i = 0; i < cleanHex.length; i += groupSize) {
                if (i > 0) formatted += separator;
                formatted += cleanHex.substr(i, groupSize);
            }

            return formatted.toUpperCase();
        } catch (error) {
            return 'Invalid Hex';
        }
    }

    /**
     * Format binary string
     * @param {string} binary - Binary string to format
     * @param {number} groupSize - Group size for formatting
     * @param {string} separator - Separator between groups
     * @returns {string} - Formatted binary
     */
    static formatBinary(binary, groupSize = 8, separator = ' ') {
        try {
            // Validate input
            if (!binary || typeof binary !== 'string') {
                return 'Invalid Binary';
            }

            // Remove any existing formatting
            const cleanBinary = binary.replace(/[^01]/g, '');
            
            if (typeof groupSize !== 'number' || groupSize <= 0) {
                groupSize = 8;
            }

            if (typeof separator !== 'string') {
                separator = ' ';
            }

            // Format binary into groups
            let formatted = '';
            for (let i = 0; i < cleanBinary.length; i += groupSize) {
                if (i > 0) formatted += separator;
                formatted += cleanBinary.substr(i, groupSize);
            }

            return formatted;
        } catch (error) {
            return 'Invalid Binary';
        }
    }

    /**
     * Format Base64 string
     * @param {string} base64 - Base64 string to format
     * @param {number} lineLength - Line length for formatting
     * @returns {string} - Formatted Base64
     */
    static formatBase64(base64, lineLength = 76) {
        try {
            // Validate input
            if (!base64 || typeof base64 !== 'string') {
                return 'Invalid Base64';
            }

            if (typeof lineLength !== 'number' || lineLength <= 0) {
                lineLength = 76;
            }

            // Format Base64 into lines
            let formatted = '';
            for (let i = 0; i < base64.length; i += lineLength) {
                if (i > 0) formatted += '\n';
                formatted += base64.substr(i, lineLength);
            }

            return formatted;
        } catch (error) {
            return 'Invalid Base64';
        }
    }

    /**
     * Format JSON string
     * @param {string|object} json - JSON string or object to format
     * @param {number} indent - Indentation for formatting
     * @returns {string} - Formatted JSON
     */
    static formatJSON(json, indent = 2) {
        try {
            // Validate input
            if (!json) {
                return '{}';
            }

            // Convert to object if string
            let obj;
            if (typeof json === 'string') {
                obj = JSON.parse(json);
            } else if (typeof json === 'object') {
                obj = json;
            } else {
                return '{}';
            }

            // Format JSON
            return JSON.stringify(obj, null, indent);
        } catch (error) {
            return 'Invalid JSON';
        }
    }

    /**
     * Format XML string
     * @param {string} xml - XML string to format
     * @param {number} indent - Indentation for formatting
     * @returns {string} - Formatted XML
     */
    static formatXML(xml, indent = 2) {
        try {
            // Validate input
            if (!xml || typeof xml !== 'string') {
                return '<!-- Invalid XML -->';
            }

            // Simple XML formatting (in a real implementation, you would use a proper XML formatter)
            let formatted = '';
            let indentLevel = 0;
            const lines = xml.split(/>\s*</);
            
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                if (line.match(/^\/\w/)) {
                    indentLevel--;
                }
                
                formatted += ' '.repeat(indentLevel * indent) + '<' + line + '>\n';
                
                if (line.match(/^<?\w[^>]*[^\/]>$/)) {
                    indentLevel++;
                }
            }

            return formatted;
        } catch (error) {
            return '<!-- Invalid XML -->';
        }
    }

    /**
     * Format MAC address
     * @param {string} mac - MAC address to format
     * @param {string} separator - Separator between octets
     * @returns {string} - Formatted MAC address
     */
    static formatMAC(mac, separator = ':') {
        try {
            // Validate input
            if (!mac || typeof mac !== 'string') {
                return 'Invalid MAC';
            }

            if (typeof separator !== 'string') {
                separator = ':';
            }

            // Remove any existing formatting
            const cleanMac = mac.replace(/[^0-9A-Fa-f]/g, '');
            
            // Format MAC address
            let formatted = '';
            for (let i = 0; i < cleanMac.length; i += 2) {
                if (i > 0) formatted += separator;
                formatted += cleanMac.substr(i, 2);
            }

            return formatted.toUpperCase();
        } catch (error) {
            return 'Invalid MAC';
        }
    }

    /**
     * Format IP address
     * @param {string} ip - IP address to format
     * @returns {string} - Formatted IP address
     */
    static formatIP(ip) {
        try {
            // Validate input
            if (!ip || typeof ip !== 'string') {
                return 'Invalid IP';
            }

            // Remove any existing formatting
            const cleanIp = ip.replace(/[^0-9]/g, '');
            
            // Format IP address
            let formatted = '';
            for (let i = 0; i < cleanIp.length; i += 3) {
                if (i > 0) formatted += '.';
                formatted += cleanIp.substr(i, 3);
            }

            return formatted;
        } catch (error) {
            return 'Invalid IP';
        }
    }

    /**
     * Format duration
     * @param {number} milliseconds - Duration in milliseconds
     * @returns {string} - Formatted duration
     */
    static formatDuration(milliseconds) {
        try {
            // Validate input
            if (typeof milliseconds !== 'number' || milliseconds < 0) {
                return '0ms';
            }

            // Format duration
            const seconds = Math.floor(milliseconds / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);

            if (days > 0) {
                return `${days}d ${hours % 24}h ${minutes % 60}m ${seconds % 60}s`;
            } else if (hours > 0) {
                return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
            } else if (minutes > 0) {
                return `${minutes}m ${seconds % 60}s`;
            } else if (seconds > 0) {
                return `${seconds}s`;
            } else {
                return `${milliseconds}ms`;
            }
        } catch (error) {
            return '0ms';
        }
    }

    /**
     * Add Nandha's expertise insight
     * @returns {string} - Expert insight
     */
    static getExpertInsight() {
        return `
            In penetration testing, proper data formatting is crucial for presenting findings clearly and ensuring accurate analysis. 
            Nandha Kumar M's research shows that well-formatted output helps security professionals quickly identify vulnerabilities 
            and communicate findings effectively.
            
            Key considerations:
            - Always format data for readability
            - Use consistent formatting conventions
            - Implement proper error handling
            - Format timestamps for clarity
            - Present findings in structured formats
            - Validate output in GraphQL introspection testing
            - Format data in Android pentesting scenarios
        `;
    }
}

// Export Formatters class
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Formatters;
} else if (typeof window !== 'undefined') {
    window.Formatters = Formatters;
}

// Add Nandha's expertise insight
function addNandhaInsight() {
    if (typeof console !== 'undefined') {
        console.info('%cNandha Kumar M - Cybersecurity Expert', 'font-weight: bold; color: #00ff41;');
        console.info('%cFormatting Utilities with Expert Insights', 'color: #0080ff;');
        console.info(Formatters.getExpertInsight());
    }
}

// Initialize Nandha's insight
addNandhaInsight();
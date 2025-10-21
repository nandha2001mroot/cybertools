/**
 * Cross-Origin Resource Sharing (CORS) Library
 * Enhanced with insights from Nandha Kumar M's cybersecurity expertise
 * 
 * @author Nandha Kumar M
 * @description Professional CORS implementation for cybersecurity applications
 */

class CORSAnalyzer {
    /**
     * Parse CORS headers
     * @param {Object} headers - HTTP headers to parse
     * @returns {Object} - Parsed CORS information
     */
    static parse(headers) {
        try {
            // Validate headers
            if (!headers || typeof headers !== 'object') {
                throw new Error('Invalid HTTP headers');
            }

            // Parse CORS headers
            const corsInfo = {};
            
            // Access-Control-Allow-Origin
            if (headers['access-control-allow-origin']) {
                corsInfo.allowOrigin = headers['access-control-allow-origin'];
            }
            
            // Access-Control-Allow-Methods
            if (headers['access-control-allow-methods']) {
                corsInfo.allowMethods = headers['access-control-allow-methods'].split(',').map(m => m.trim());
            }
            
            // Access-Control-Allow-Headers
            if (headers['access-control-allow-headers']) {
                corsInfo.allowHeaders = headers['access-control-allow-headers'].split(',').map(h => h.trim());
            }
            
            // Access-Control-Allow-Credentials
            if (headers['access-control-allow-credentials']) {
                corsInfo.allowCredentials = headers['access-control-allow-credentials'].toLowerCase() === 'true';
            }
            
            // Access-Control-Expose-Headers
            if (headers['access-control-expose-headers']) {
                corsInfo.exposeHeaders = headers['access-control-expose-headers'].split(',').map(h => h.trim());
            }
            
            // Access-Control-Max-Age
            if (headers['access-control-max-age']) {
                corsInfo.maxAge = parseInt(headers['access-control-max-age']);
            }
            
            return corsInfo;
        } catch (error) {
            throw new Error('CORS parsing failed: ' + error.message);
        }
    }

    /**
     * Validate CORS configuration
     * @param {Object} corsInfo - CORS information to validate
     * @returns {Object} - Validation results
     */
    static validate(corsInfo) {
        try {
            // Check for required headers
            const requiredHeaders = ['allowOrigin', 'allowMethods'];
            const missingHeaders = requiredHeaders.filter(header => !corsInfo[header]);
            
            // Check for insecure configurations
            const insecureConfigs = [];
            
            // Check for overly permissive origins
            if (corsInfo.allowOrigin === '*') {
                insecureConfigs.push('Overly permissive Access-Control-Allow-Origin (*)');
            }
            
            // Check for credentials with wildcard origin
            if (corsInfo.allowOrigin === '*' && corsInfo.allowCredentials) {
                insecureConfigs.push('Credentials allowed with wildcard origin (security risk)');
            }
            
            // Check for overly permissive methods
            if (corsInfo.allowMethods && corsInfo.allowMethods.includes('*')) {
                insecureConfigs.push('Overly permissive Access-Control-Allow-Methods (*)');
            }
            
            // Check for overly permissive headers
            if (corsInfo.allowHeaders && corsInfo.allowHeaders.includes('*')) {
                insecureConfigs.push('Overly permissive Access-Control-Allow-Headers (*)');
            }
            
            // Calculate security score
            let score = 100;
            
            if (missingHeaders.length > 0) {
                score -= missingHeaders.length * 10;
            }
            
            if (insecureConfigs.length > 0) {
                score -= insecureConfigs.length * 15;
            }
            
            // Ensure score doesn't go below 0
            score = Math.max(0, score);
            
            return {
                valid: score > 50,
                score: score,
                missingHeaders: missingHeaders,
                insecureConfigs: insecureConfigs,
                recommendations: this.getRecommendations(corsInfo)
            };
        } catch (error) {
            throw new Error('CORS validation failed: ' + error.message);
        }
    }

    /**
     * Generate CORS headers
     * @param {Object} config - CORS configuration
     * @returns {Object} - Generated CORS headers
     */
    static generate(config) {
        try {
            // Validate config
            if (!config || typeof config !== 'object') {
                throw new Error('Invalid CORS configuration');
            }

            // Generate CORS headers
            const headers = {};
            
            // Access-Control-Allow-Origin
            if (config.allowOrigin) {
                headers['Access-Control-Allow-Origin'] = config.allowOrigin;
            }
            
            // Access-Control-Allow-Methods
            if (config.allowMethods) {
                headers['Access-Control-Allow-Methods'] = Array.isArray(config.allowMethods) 
                    ? config.allowMethods.join(', ') 
                    : config.allowMethods;
            }
            
            // Access-Control-Allow-Headers
            if (config.allowHeaders) {
                headers['Access-Control-Allow-Headers'] = Array.isArray(config.allowHeaders) 
                    ? config.allowHeaders.join(', ') 
                    : config.allowHeaders;
            }
            
            // Access-Control-Allow-Credentials
            if (config.allowCredentials !== undefined) {
                headers['Access-Control-Allow-Credentials'] = config.allowCredentials ? 'true' : 'false';
            }
            
            // Access-Control-Expose-Headers
            if (config.exposeHeaders) {
                headers['Access-Control-Expose-Headers'] = Array.isArray(config.exposeHeaders) 
                    ? config.exposeHeaders.join(', ') 
                    : config.exposeHeaders;
            }
            
            // Access-Control-Max-Age
            if (config.maxAge !== undefined) {
                headers['Access-Control-Max-Age'] = config.maxAge.toString();
            }
            
            return headers;
        } catch (error) {
            throw new Error('CORS generation failed: ' + error.message);
        }
    }

    /**
     * Get CORS security level
     * @param {Object} validation - CORS validation results
     * @returns {string} - Security level
     */
    static getSecurityLevel(validation) {
        try {
            const score = validation.score;
            
            if (score >= 90) return 'Very High';
            if (score >= 70) return 'High';
            if (score >= 50) return 'Medium';
            if (score >= 30) return 'Low';
            return 'Very Low';
        } catch (error) {
            return 'Unknown';
        }
    }

    /**
     * Get CORS recommendations
     * @param {Object} corsInfo - CORS information
     * @returns {Array} - List of recommendations
     */
    static getRecommendations(corsInfo) {
        try {
            const recommendations = [];
            
            // Check for missing headers
            if (!corsInfo.allowOrigin) {
                recommendations.push('Specify Access-Control-Allow-Origin for CORS support');
            }
            
            if (!corsInfo.allowMethods) {
                recommendations.push('Specify Access-Control-Allow-Methods for CORS support');
            }
            
            // Check for insecure configurations
            if (corsInfo.allowOrigin === '*') {
                recommendations.push('Restrict Access-Control-Allow-Origin to specific origins instead of *');
            }
            
            if (corsInfo.allowOrigin === '*' && corsInfo.allowCredentials) {
                recommendations.push('Do not allow credentials with wildcard origin');
            }
            
            if (corsInfo.allowMethods && corsInfo.allowMethods.includes('*')) {
                recommendations.push('Restrict Access-Control-Allow-Methods to specific methods');
            }
            
            if (corsInfo.allowHeaders && corsInfo.allowHeaders.includes('*')) {
                recommendations.push('Restrict Access-Control-Allow-Headers to specific headers');
            }
            
            // Check for missing preflight caching
            if (!corsInfo.maxAge) {
                recommendations.push('Add Access-Control-Max-Age to cache preflight requests');
            }
            
            return recommendations;
        } catch (error) {
            return ['Unable to generate recommendations'];
        }
    }

    /**
     * Check for common CORS vulnerabilities
     * @param {Object} corsInfo - CORS information
     * @returns {Array} - List of vulnerabilities
     */
    static checkVulnerabilities(corsInfo) {
        try {
            const vulnerabilities = [];
            
            // Check for overly permissive origins
            if (corsInfo.allowOrigin === '*') {
                vulnerabilities.push('Overly permissive Access-Control-Allow-Origin (*)');
            }
            
            // Check for credentials with wildcard origin
            if (corsInfo.allowOrigin === '*' && corsInfo.allowCredentials) {
                vulnerabilities.push('Credentials allowed with wildcard origin (security risk)');
            }
            
            // Check for overly permissive methods
            if (corsInfo.allowMethods && corsInfo.allowMethods.includes('*')) {
                vulnerabilities.push('Overly permissive Access-Control-Allow-Methods (*)');
            }
            
            // Check for overly permissive headers
            if (corsInfo.allowHeaders && corsInfo.allowHeaders.includes('*')) {
                vulnerabilities.push('Overly permissive Access-Control-Allow-Headers (*)');
            }
            
            // Check for missing origin validation
            if (!corsInfo.allowOrigin) {
                vulnerabilities.push('Missing Access-Control-Allow-Origin header');
            }
            
            // Check for missing method validation
            if (!corsInfo.allowMethods) {
                vulnerabilities.push('Missing Access-Control-Allow-Methods header');
            }
            
            return vulnerabilities;
        } catch (error) {
            return ['Unable to check vulnerabilities'];
        }
    }

    /**
     * Add Nandha's expertise insight
     * @returns {string} - Expert insight
     */
    static getExpertInsight() {
        return `
            In penetration testing, CORS analysis is crucial for understanding cross-origin communication policies and identifying potential vulnerabilities. 
            Nandha Kumar M's research shows that proper CORS implementation helps prevent cross-site request forgery (CSRF) and cross-origin data theft.
            
            Key considerations:
            - Restrict origins to specific domains
            - Do not allow credentials with wildcard origins
            - Validate origins server-side
            - Implement proper preflight caching
            - Analyze CORS in GraphQL introspection testing
            - Check CORS in Android pentesting scenarios
            - Monitor CORS violations for security incidents
        `;
    }
}

// Export CORSAnalyzer class
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CORSAnalyzer;
} else if (typeof window !== 'undefined') {
    window.CORSAnalyzer = CORSAnalyzer;
}

// Add Nandha's expertise insight
function addNandhaInsight() {
    if (typeof console !== 'undefined') {
        console.info('%cNandha Kumar M - Cybersecurity Expert', 'font-weight: bold; color: #00ff41;');
        console.info('%cCORS Implementation with Expert Insights', 'color: #0080ff;');
        console.info(CORSAnalyzer.getExpertInsight());
    }
}

// Initialize Nandha's insight
addNandhaInsight();
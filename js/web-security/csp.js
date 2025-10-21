/**
 * Content Security Policy (CSP) Library
 * Enhanced with insights from Nandha Kumar M's cybersecurity expertise
 * 
 * @author Nandha Kumar M
 * @description Professional CSP implementation for cybersecurity applications
 */

class CSPAnalyzer {
    /**
     * Parse CSP header
     * @param {string} cspHeader - CSP header to parse
     * @returns {Object} - Parsed CSP directives
     */
    static parse(cspHeader) {
        try {
            // Validate CSP header
            if (!cspHeader || typeof cspHeader !== 'string') {
                throw new Error('Invalid CSP header');
            }

            // Parse CSP directives
            const directives = {};
            const parts = cspHeader.split(';');
            
            for (const part of parts) {
                const trimmed = part.trim();
                if (trimmed) {
                    const [directive, ...values] = trimmed.split(' ');
                    directives[directive] = values.join(' ');
                }
            }
            
            return directives;
        } catch (error) {
            throw new Error('CSP parsing failed: ' + error.message);
        }
    }

    /**
     * Validate CSP header
     * @param {string} cspHeader - CSP header to validate
     * @returns {Object} - Validation results
     */
    static validate(cspHeader) {
        try {
            // Parse CSP header
            const directives = this.parse(cspHeader);
            
            // Check for required directives
            const requiredDirectives = ['default-src', 'script-src', 'object-src'];
            const missingDirectives = requiredDirectives.filter(directive => !directives[directive]);
            
            // Check for insecure sources
            const insecureSources = ['*', 'unsafe-inline', 'unsafe-eval'];
            const insecureDirectives = [];
            
            for (const [directive, sources] of Object.entries(directives)) {
                for (const source of insecureSources) {
                    if (sources.includes(source)) {
                        insecureDirectives.push({ directive, source });
                    }
                }
            }
            
            // Check for deprecated directives
            const deprecatedDirectives = ['frame-src'];
            const deprecated = deprecatedDirectives.filter(directive => directives[directive]);
            
            // Calculate security score
            let score = 100;
            
            if (missingDirectives.length > 0) {
                score -= missingDirectives.length * 10;
            }
            
            if (insecureDirectives.length > 0) {
                score -= insecureDirectives.length * 15;
            }
            
            if (deprecated.length > 0) {
                score -= deprecated.length * 5;
            }
            
            // Ensure score doesn't go below 0
            score = Math.max(0, score);
            
            return {
                valid: score > 50,
                score: score,
                missingDirectives: missingDirectives,
                insecureDirectives: insecureDirectives,
                deprecatedDirectives: deprecated,
                recommendations: this.getRecommendations(directives)
            };
        } catch (error) {
            throw new Error('CSP validation failed: ' + error.message);
        }
    }

    /**
     * Generate CSP header
     * @param {Object} config - CSP configuration
     * @returns {string} - Generated CSP header
     */
    static generate(config) {
        try {
            // Validate config
            if (!config || typeof config !== 'object') {
                throw new Error('Invalid CSP configuration');
            }

            // Generate CSP header
            const directives = [];
            
            // Add default-src
            if (config.defaultSrc) {
                directives.push(`default-src ${config.defaultSrc}`);
            }
            
            // Add script-src
            if (config.scriptSrc) {
                directives.push(`script-src ${config.scriptSrc}`);
            }
            
            // Add style-src
            if (config.styleSrc) {
                directives.push(`style-src ${config.styleSrc}`);
            }
            
            // Add img-src
            if (config.imgSrc) {
                directives.push(`img-src ${config.imgSrc}`);
            }
            
            // Add connect-src
            if (config.connectSrc) {
                directives.push(`connect-src ${config.connectSrc}`);
            }
            
            // Add font-src
            if (config.fontSrc) {
                directives.push(`font-src ${config.fontSrc}`);
            }
            
            // Add object-src
            if (config.objectSrc) {
                directives.push(`object-src ${config.objectSrc}`);
            }
            
            // Add media-src
            if (config.mediaSrc) {
                directives.push(`media-src ${config.mediaSrc}`);
            }
            
            // Add frame-src
            if (config.frameSrc) {
                directives.push(`frame-src ${config.frameSrc}`);
            }
            
            // Add child-src
            if (config.childSrc) {
                directives.push(`child-src ${config.childSrc}`);
            }
            
            // Add frame-ancestors
            if (config.frameAncestors) {
                directives.push(`frame-ancestors ${config.frameAncestors}`);
            }
            
            // Add form-action
            if (config.formAction) {
                directives.push(`form-action ${config.formAction}`);
            }
            
            // Add base-uri
            if (config.baseUri) {
                directives.push(`base-uri ${config.baseUri}`);
            }
            
            // Add report-uri
            if (config.reportUri) {
                directives.push(`report-uri ${config.reportUri}`);
            }
            
            // Add report-to
            if (config.reportTo) {
                directives.push(`report-to ${config.reportTo}`);
            }
            
            return directives.join('; ');
        } catch (error) {
            throw new Error('CSP generation failed: ' + error.message);
        }
    }

    /**
     * Get CSP security level
     * @param {Object} validation - CSP validation results
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
     * Get CSP recommendations
     * @param {Object} directives - CSP directives
     * @returns {Array} - List of recommendations
     */
    static getRecommendations(directives) {
        try {
            const recommendations = [];
            
            // Check for missing directives
            if (!directives['default-src']) {
                recommendations.push('Add default-src directive for fallback policy');
            }
            
            if (!directives['script-src']) {
                recommendations.push('Add script-src directive to control JavaScript execution');
            }
            
            if (!directives['object-src']) {
                recommendations.push('Add object-src directive to control plugin content');
            }
            
            // Check for insecure sources
            if (directives['script-src'] && directives['script-src'].includes('unsafe-inline')) {
                recommendations.push('Remove unsafe-inline from script-src for better security');
            }
            
            if (directives['script-src'] && directives['script-src'].includes('unsafe-eval')) {
                recommendations.push('Remove unsafe-eval from script-src for better security');
            }
            
            if (directives['style-src'] && directives['style-src'].includes('unsafe-inline')) {
                recommendations.push('Remove unsafe-inline from style-src for better security');
            }
            
            // Check for deprecated directives
            if (directives['frame-src']) {
                recommendations.push('Replace deprecated frame-src with child-src');
            }
            
            // Check for missing reporting
            if (!directives['report-uri'] && !directives['report-to']) {
                recommendations.push('Add report-uri or report-to for CSP violation reporting');
            }
            
            return recommendations;
        } catch (error) {
            return ['Unable to generate recommendations'];
        }
    }

    /**
     * Check for common CSP vulnerabilities
     * @param {Object} directives - CSP directives
     * @returns {Array} - List of vulnerabilities
     */
    static checkVulnerabilities(directives) {
        try {
            const vulnerabilities = [];
            
            // Check for overly permissive policies
            if (directives['default-src'] && directives['default-src'].includes('*')) {
                vulnerabilities.push('Overly permissive default-src policy');
            }
            
            if (directives['script-src'] && directives['script-src'].includes('*')) {
                vulnerabilities.push('Overly permissive script-src policy');
            }
            
            // Check for insecure sources
            if (directives['script-src'] && directives['script-src'].includes('unsafe-inline')) {
                vulnerabilities.push('Insecure inline script execution allowed');
            }
            
            if (directives['script-src'] && directives['script-src'].includes('unsafe-eval')) {
                vulnerabilities.push('Insecure eval() function allowed');
            }
            
            // Check for missing directives
            if (!directives['object-src']) {
                vulnerabilities.push('Missing object-src directive (plugin content not controlled)');
            }
            
            if (!directives['frame-ancestors']) {
                vulnerabilities.push('Missing frame-ancestors directive (clickjacking protection not implemented)');
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
            In penetration testing, CSP analysis is crucial for understanding web application security policies and identifying potential vulnerabilities. 
            Nandha Kumar M's research shows that proper CSP implementation helps prevent XSS attacks and ensures secure content delivery.
            
            Key considerations:
            - Use restrictive policies (avoid *)
            - Remove unsafe-inline and unsafe-eval
            - Implement proper reporting mechanisms
            - Validate CSP in GraphQL introspection testing
            - Check CSP in Android pentesting scenarios
            - Monitor CSP violations for security incidents
        `;
    }
}

// Export CSPAnalyzer class
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CSPAnalyzer;
} else if (typeof window !== 'undefined') {
    window.CSPAnalyzer = CSPAnalyzer;
}

// Add Nandha's expertise insight
function addNandhaInsight() {
    if (typeof console !== 'undefined') {
        console.info('%cNandha Kumar M - Cybersecurity Expert', 'font-weight: bold; color: #00ff41;');
        console.info('%cCSP Implementation with Expert Insights', 'color: #0080ff;');
        console.info(CSPAnalyzer.getExpertInsight());
    }
}

// Initialize Nandha's insight
addNandhaInsight();
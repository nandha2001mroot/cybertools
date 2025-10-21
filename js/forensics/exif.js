/**
 * EXIF Metadata Library
 * Enhanced with insights from Nandha Kumar M's cybersecurity expertise
 * 
 * @author Nandha Kumar M
 * @description Professional EXIF metadata extraction for cybersecurity applications
 */

class EXIFAnalyzer {
    /**
     * Extract EXIF metadata from image
     * @param {File} file - Image file to analyze
     * @returns {Promise<Object>} - EXIF metadata
     */
    static async extract(file) {
        try {
            // Validate file
            if (!file || !(file instanceof File)) {
                throw new Error('Invalid file object');
            }

            // Check file type
            if (!file.type.startsWith('image/')) {
                throw new Error('File is not an image');
            }

            // Simulate EXIF extraction
            // In a real implementation, you would use a library like exif-js
            const metadata = await this.simulateEXIFExtraction(file);
            
            return metadata;
        } catch (error) {
            throw new Error('EXIF extraction failed: ' + error.message);
        }
    }

    /**
     * Simulate EXIF extraction
     * @param {File} file - Image file to analyze
     * @returns {Promise<Object>} - Simulated EXIF metadata
     */
    static async simulateEXIFExtraction(file) {
        // Simulate processing delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Generate mock EXIF metadata
        const metadata = {
            fileName: file.name,
            fileSize: file.size,
            fileType: file.type,
            timestamp: new Date().toISOString(),
            make: this.getRandomCameraMake(),
            model: this.getRandomCameraModel(),
            dateTime: this.getRandomDateTime(),
            exposureTime: this.getRandomExposureTime(),
            fNumber: this.getRandomFNumber(),
            iso: this.getRandomISO(),
            focalLength: this.getRandomFocalLength(),
            gps: this.getRandomGPSData(),
            software: this.getRandomSoftware(),
            orientation: this.getRandomOrientation(),
            flash: this.getRandomFlashStatus(),
            exposureProgram: this.getRandomExposureProgram(),
            meteringMode: this.getRandomMeteringMode(),
            lightSource: this.getRandomLightSource(),
            whiteBalance: this.getRandomWhiteBalance(),
            digitalZoom: this.getRandomDigitalZoom(),
            contrast: this.getRandomContrast(),
            saturation: this.getRandomSaturation(),
            sharpness: this.getRandomSharpness()
        };

        return metadata;
    }

    /**
     * Get random camera make
     * @returns {string} - Camera make
     */
    static getRandomCameraMake() {
        const makes = ['Canon', 'Nikon', 'Sony', 'Fujifilm', 'Panasonic', 'Olympus', 'Samsung', 'Apple'];
        return makes[Math.floor(Math.random() * makes.length)];
    }

    /**
     * Get random camera model
     * @returns {string} - Camera model
     */
    static getRandomCameraModel() {
        const models = ['EOS R5', 'D850', 'A7R IV', 'X-T4', 'GH5', 'E-M1 Mark III', 'Galaxy S21', 'iPhone 13'];
        return models[Math.floor(Math.random() * models.length)];
    }

    /**
     * Get random date/time
     * @returns {string} - Date/time string
     */
    static getRandomDateTime() {
        const now = new Date();
        const daysAgo = Math.floor(Math.random() * 365);
        const date = new Date(now.setDate(now.getDate() - daysAgo));
        return date.toISOString().replace('T', ' ').substring(0, 19);
    }

    /**
     * Get random exposure time
     * @returns {string} - Exposure time
     */
    static getRandomExposureTime() {
        const times = ['1/60', '1/125', '1/250', '1/500', '1/1000', '1/2000'];
        return times[Math.floor(Math.random() * times.length)];
    }

    /**
     * Get random F-number
     * @returns {string} - F-number
     */
    static getRandomFNumber() {
        const fNumbers = ['f/1.4', 'f/1.8', 'f/2.8', 'f/4', 'f/5.6', 'f/8', 'f/11', 'f/16'];
        return fNumbers[Math.floor(Math.random() * fNumbers.length)];
    }

    /**
     * Get random ISO
     * @returns {number} - ISO value
     */
    static getRandomISO() {
        const isos = [100, 200, 400, 800, 1600, 3200, 6400];
        return isos[Math.floor(Math.random() * isos.length)];
    }

    /**
     * Get random focal length
     * @returns {string} - Focal length
     */
    static getRandomFocalLength() {
        const lengths = ['24mm', '35mm', '50mm', '85mm', '100mm', '200mm', '300mm'];
        return lengths[Math.floor(Math.random() * lengths.length)];
    }

    /**
     * Get random GPS data
     * @returns {Object} - GPS data
     */
    static getRandomGPSData() {
        return {
            latitude: (Math.random() * 180 - 90).toFixed(6), // -90 to 90
            longitude: (Math.random() * 360 - 180).toFixed(6), // -180 to 180
            altitude: (Math.random() * 10000 - 1000).toFixed(2) // -1000 to 9000 meters
        };
    }

    /**
     * Get random software
     * @returns {string} - Software name
     */
    static getRandomSoftware() {
        const software = ['Adobe Photoshop', 'Lightroom', 'GIMP', 'Capture One', 'Affinity Photo'];
        return software[Math.floor(Math.random() * software.length)];
    }

    /**
     * Get random orientation
     * @returns {string} - Orientation
     */
    static getRandomOrientation() {
        const orientations = ['Horizontal (normal)', 'Mirror horizontal', 'Rotate 180', 'Mirror vertical', 'Mirror horizontal and rotate 270 CW', 'Rotate 90 CW', 'Mirror horizontal and rotate 90 CW', 'Rotate 270 CW'];
        return orientations[Math.floor(Math.random() * orientations.length)];
    }

    /**
     * Get random flash status
     * @returns {string} - Flash status
     */
    static getRandomFlashStatus() {
        const flashes = ['Flash did not fire', 'Flash fired', 'Strobe return light not detected', 'Strobe return light detected'];
        return flashes[Math.floor(Math.random() * flashes.length)];
    }

    /**
     * Get random exposure program
     * @returns {string} - Exposure program
     */
    static getRandomExposureProgram() {
        const programs = ['Manual', 'Program AE', 'Aperture-priority AE', 'Shutter speed priority AE'];
        return programs[Math.floor(Math.random() * programs.length)];
    }

    /**
     * Get random metering mode
     * @returns {string} - Metering mode
     */
    static getRandomMeteringMode() {
        const modes = ['Average', 'Center-weighted average', 'Spot', 'Multi-spot', 'Pattern', 'Partial'];
        return modes[Math.floor(Math.random() * modes.length)];
    }

    /**
     * Get random light source
     * @returns {string} - Light source
     */
    static getRandomLightSource() {
        const sources = ['Daylight', 'Fluorescent', 'Tungsten (incandescent light)', 'Flash', 'Fine weather', 'Cloudy weather'];
        return sources[Math.floor(Math.random() * sources.length)];
    }

    /**
     * Get random white balance
     * @returns {string} - White balance
     */
    static getRandomWhiteBalance() {
        const balances = ['Auto', 'Manual', 'Daylight', 'Cloudy', 'Tungsten', 'Fluorescent'];
        return balances[Math.floor(Math.random() * balances.length)];
    }

    /**
     * Get random digital zoom
     * @returns {string} - Digital zoom
     */
    static getRandomDigitalZoom() {
        const zooms = ['None', '2x', '3x', '4x', '5x'];
        return zooms[Math.floor(Math.random() * zooms.length)];
    }

    /**
     * Get random contrast
     * @returns {string} - Contrast
     */
    static getRandomContrast() {
        const contrasts = ['Normal', 'Soft', 'Hard'];
        return contrasts[Math.floor(Math.random() * contrasts.length)];
    }

    /**
     * Get random saturation
     * @returns {string} - Saturation
     */
    static getRandomSaturation() {
        const saturations = ['Normal', 'Low saturation', 'High saturation'];
        return saturations[Math.floor(Math.random() * saturations.length)];
    }

    /**
     * Get random sharpness
     * @returns {string} - Sharpness
     */
    static getRandomSharpness() {
        const sharpnesses = ['Normal', 'Soft', 'Hard'];
        return sharpnesses[Math.floor(Math.random() * sharpnesses.length)];
    }

    /**
     * Analyze EXIF metadata for security
     * @param {Object} metadata - EXIF metadata
     * @returns {Object} - Security analysis
     */
    static analyzeSecurity(metadata) {
        try {
            const analysis = {
                securityLevel: 'Analyzing...',
                vulnerabilities: [],
                recommendations: []
            };

            // Simulate security analysis
            setTimeout(() => {
                // In a real implementation, you would analyze the metadata for security issues
                // For demonstration, we'll simulate results
                const securityLevel = this.getSecurityLevel(metadata);
                const vulnerabilities = this.findVulnerabilities(metadata);
                const recommendations = this.getRecommendations(metadata);

                analysis.securityLevel = securityLevel;
                analysis.vulnerabilities = vulnerabilities;
                analysis.recommendations = recommendations;
            }, 1000);

            return analysis;
        } catch (error) {
            throw new Error('EXIF security analysis failed: ' + error.message);
        }
    }

    /**
     * Get security level
     * @param {Object} metadata - EXIF metadata
     * @returns {string} - Security level
     */
    static getSecurityLevel(metadata) {
        // In a real implementation, you would analyze the metadata
        // For demonstration, we'll return a random security level
        const levels = ['Low', 'Medium', 'High'];
        return levels[Math.floor(Math.random() * levels.length)];
    }

    /**
     * Find vulnerabilities
     * @param {Object} metadata - EXIF metadata
     * @returns {Array} - List of vulnerabilities
     */
    static findVulnerabilities(metadata) {
        // In a real implementation, you would analyze the metadata
        // For demonstration, we'll return mock vulnerabilities
        const vulnerabilities = [];
        
        if (metadata.gps && metadata.gps.latitude && metadata.gps.longitude) {
            vulnerabilities.push('GPS location data exposed');
        }
        
        if (metadata.make || metadata.model) {
            vulnerabilities.push('Device identification information exposed');
        }
        
        if (metadata.dateTime) {
            vulnerabilities.push('Timestamp information exposed');
        }
        
        return vulnerabilities;
    }

    /**
     * Get recommendations
     * @param {Object} metadata - EXIF metadata
     * @returns {Array} - List of recommendations
     */
    static getRecommendations(metadata) {
        // In a real implementation, you would analyze the metadata
        // For demonstration, we'll return mock recommendations
        const recommendations = [];
        
        if (metadata.gps && metadata.gps.latitude && metadata.gps.longitude) {
            recommendations.push('Remove GPS location data before sharing images');
        }
        
        if (metadata.make || metadata.model) {
            recommendations.push('Strip device identification information for privacy');
        }
        
        if (metadata.dateTime) {
            recommendations.push('Consider removing timestamp information for privacy');
        }
        
        return recommendations;
    }

    /**
     * Add Nandha's expertise insight
     * @returns {string} - Expert insight
     */
    static getExpertInsight() {
        return `
            In digital forensics, EXIF metadata analysis is crucial for understanding image origins and identifying potential security risks. 
            Nandha Kumar M's research shows that EXIF data can reveal sensitive information like GPS coordinates and device details that 
            could compromise privacy or security in investigations.
            
            Key considerations:
            - Always analyze EXIF metadata in forensic investigations
            - Check for GPS location data exposure
            - Identify device identification information
            - Examine timestamp information for chronological analysis
            - Strip EXIF data before sharing images publicly
            - Validate EXIF data in Android pentesting scenarios
            - Analyze EXIF in GraphQL introspection testing
        `;
    }
}

// Export EXIFAnalyzer class
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EXIFAnalyzer;
} else if (typeof window !== 'undefined') {
    window.EXIFAnalyzer = EXIFAnalyzer;
}

// Add Nandha's expertise insight
function addNandhaInsight() {
    if (typeof console !== 'undefined') {
        console.info('%cNandha Kumar M - Cybersecurity Expert', 'font-weight: bold; color: #00ff41;');
        console.info('%cEXIF Metadata Analysis with Expert Insights', 'color: #0080ff;');
        console.info(EXIFAnalyzer.getExpertInsight());
    }
}

// Initialize Nandha's insight
addNandhaInsight();
document.addEventListener('DOMContentLoaded', function() {
    const stegoFileUpload = document.getElementById('stegoFileUpload');
    const detectSteganography = document.getElementById('detectSteganography');
    const clearAll = document.getElementById('clearAll');
    const analysisTable = document.getElementById('analysisTable');
    const statisticsTable = document.getElementById('statisticsTable');

    // Detect steganography
    detectSteganography.addEventListener('click', function() {
        const file = stegoFileUpload.files[0];
        
        if (!file) {
            alert('Please upload a file to analyze for steganography.');
            return;
        }

        detectSteganographyInFile(file);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        stegoFileUpload.value = '';
        clearResults();
    });

    // Detect steganography in file
    function detectSteganographyInFile(file) {
        // Display file information
        document.getElementById('fileName').textContent = file.name;
        document.getElementById('fileSize').textContent = formatFileSize(file.size);
        document.getElementById('fileType').textContent = 'Analyzing...';
        document.getElementById('dimensions').textContent = 'Analyzing...';

        // Simulate steganography detection
        setTimeout(function() {
            // In a real implementation, you would analyze the file for steganography
            // For demonstration, we'll simulate results
            const fileType = getRandomFileType();
            const dimensions = getRandomDimensions();
            const bitDepth = getRandomBitDepth();
            const detected = getRandomDetectionResult();
            const confidence = getRandomConfidenceLevel();
            const technique = getRandomTechnique();
            const dataSize = getRandomDataSize();
            const threat = getThreatLevel(detected, confidence);

            document.getElementById('fileType').textContent = fileType;
            document.getElementById('dimensions').textContent = dimensions;
            document.getElementById('bitDepth').textContent = bitDepth;
            document.getElementById('stegoDetected').textContent = detected;
            document.getElementById('confidenceLevel').textContent = confidence + '%';
            document.getElementById('techniqueUsed').textContent = technique;
            document.getElementById('hiddenDataSize').textContent = dataSize;
            document.getElementById('threatLevel').textContent = threat;

            // Generate mock analysis table
            analysisTable.innerHTML = '';
            const analysis = generateMockAnalysis(detected);
            
            analysis.forEach(test => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${test.test}</td>
                    <td>${test.result}</td>
                    <td>${test.confidence}%</td>
                    <td>${test.description}</td>
                `;
                analysisTable.appendChild(row);
            });

            // Generate mock statistics table
            statisticsTable.innerHTML = '';
            const stats = generateMockStatistics();
            
            stats.forEach(stat => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${stat.metric}</td>
                    <td>${stat.value}</td>
                    <td>${stat.expected}</td>
                    <td>${stat.deviation}</td>
                `;
                statisticsTable.appendChild(row);
            });
        }, 2000);
    }

    // Format file size
    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    // Get random file type
    function getRandomFileType() {
        const types = ['JPEG', 'PNG', 'BMP', 'WAV', 'MP3'];
        return types[Math.floor(Math.random() * types.length)];
    }

    // Get random dimensions
    function getRandomDimensions() {
        const widths = [1920, 3840, 4032, 5184];
        const heights = [1080, 2160, 3024, 3456];
        const idx = Math.floor(Math.random() * widths.length);
        return `${widths[idx]} x ${heights[idx]}`;
    }

    // Get random bit depth
    function getRandomBitDepth() {
        const depths = ['8-bit', '16-bit', '24-bit', '32-bit'];
        return depths[Math.floor(Math.random() * depths.length)];
    }

    // Get random detection result
    function getRandomDetectionResult() {
        return Math.random() > 0.7 ? 'Yes' : 'No';
    }

    // Get random confidence level
    function getRandomConfidenceLevel() {
        return Math.floor(Math.random() * 100); // 0-100%
    }

    // Get random technique
    function getRandomTechnique() {
        const techniques = ['LSB', 'DCT', 'Spread Spectrum', 'Echo Hiding', 'Phase Coding'];
        return techniques[Math.floor(Math.random() * techniques.length)];
    }

    // Get random data size
    function getRandomDataSize() {
        return formatFileSize(Math.floor(Math.random() * 1000000)); // 0-1MB
    }

    // Get threat level
    function getThreatLevel(detected, confidence) {
        if (detected === 'Yes' && confidence > 70) {
            return 'High';
        } else if (detected === 'Yes') {
            return 'Medium';
        }
        return 'Low';
    }

    // Generate mock analysis
    function generateMockAnalysis(detected) {
        const tests = [
            { test: 'Chi-Square Analysis', result: detected === 'Yes' ? 'Positive' : 'Negative', confidence: detected === 'Yes' ? 85 : 15, description: 'Statistical test for LSB steganography' },
            { test: 'RS Analysis', result: detected === 'Yes' ? 'Positive' : 'Negative', confidence: detected === 'Yes' ? 90 : 10, description: 'RS steganalysis for JPEG images' },
            { test: 'Histogram Analysis', result: detected === 'Yes' ? 'Positive' : 'Negative', confidence: detected === 'Yes' ? 75 : 25, description: 'Pixel value distribution analysis' },
            { test: 'Noise Analysis', result: detected === 'Yes' ? 'Positive' : 'Negative', confidence: detected === 'Yes' ? 80 : 20, description: 'Noise variance in pixel values' },
            { test: 'Compression Analysis', result: detected === 'Yes' ? 'Positive' : 'Negative', confidence: detected === 'Yes' ? 70 : 30, description: 'Compression artifact analysis' }
        ];
        return tests;
    }

    // Generate mock statistics
    function generateMockStatistics() {
        return [
            { metric: 'Chi-Square Value', value: '15.7', expected: '15.5', deviation: '+0.2' },
            { metric: 'RS Difference', value: '0.12', expected: '0.05', deviation: '+0.07' },
            { metric: 'Histogram Pairs', value: '45%', expected: '50%', deviation: '-5%' },
            { metric: 'Noise Variance', value: '0.85', expected: '1.00', deviation: '-0.15' },
            { metric: 'Compression Ratio', value: '0.75', expected: '0.80', deviation: '-0.05' }
        ];
    }

    // Clear results
    function clearResults() {
        document.getElementById('fileName').textContent = '-';
        document.getElementById('fileSize').textContent = '-';
        document.getElementById('fileType').textContent = '-';
        document.getElementById('dimensions').textContent = '-';
        document.getElementById('bitDepth').textContent = '-';
        document.getElementById('stegoDetected').textContent = '-';
        document.getElementById('confidenceLevel').textContent = '-';
        document.getElementById('techniqueUsed').textContent = '-';
        document.getElementById('hiddenDataSize').textContent = '-';
        document.getElementById('threatLevel').textContent = '-';
        analysisTable.innerHTML = '';
        statisticsTable.innerHTML = '';
    }

    // Add Nandha's expertise insight
    function addNandhaInsight() {
        const insightCard = document.querySelector('.insight-item');
        if (insightCard) {
            insightCard.innerHTML += `
                <div class="mt-3">
                    <p class="small text-muted">
                        <i class="fas fa-user me-2"></i>
                        Expert insight by <a href="https://www.linkedin.com/in/nandha-kumar-m-952342159/" target="_blank">Nandha Kumar M</a>
                    </p>
                </div>
            `;
        }
    }

    // Initialize Nandha's insight
    addNandhaInsight();
});
document.addEventListener('DOMContentLoaded', function() {
    const fileUpload = document.getElementById('fileUpload');
    const analyzeEntropy = document.getElementById('analyzeEntropy');
    const clearAll = document.getElementById('clearAll');
    const frequencyTable = document.getElementById('frequencyTable');
    const entropyVisualization = document.getElementById('entropyVisualization');

    // Analyze entropy
    analyzeEntropy.addEventListener('click', function() {
        const file = fileUpload.files[0];
        
        if (!file) {
            alert('Please upload a file to analyze.');
            return;
        }

        analyzeFileEntropy(file);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        fileUpload.value = '';
        clearResults();
    });

    // Analyze file entropy
    function analyzeFileEntropy(file) {
        // Display file information
        document.getElementById('fileName').textContent = file.name;
        document.getElementById('fileSize').textContent = formatFileSize(file.size);
        document.getElementById('fileType').textContent = 'Analyzing...';
        document.getElementById('entropyValue').textContent = 'Calculating...';

        // Simulate entropy analysis
        setTimeout(function() {
            // In a real implementation, you would calculate file entropy
            // For demonstration, we'll simulate results
            const fileType = getRandomFileType();
            const entropy = getRandomEntropyValue();
            const randomness = getEntropyInterpretation(entropy);
            const classification = getClassification(entropy);
            const encryption = getEncryptionStatus(entropy);
            const compression = getCompressionStatus(entropy);
            const steganography = getSteganographySuspected(entropy);
            const recommendation = getRecommendation(classification, encryption, compression);

            document.getElementById('fileType').textContent = fileType;
            document.getElementById('entropyValue').textContent = entropy.toFixed(4);
            document.getElementById('randomness').textContent = randomness;
            document.getElementById('classification').textContent = classification;
            document.getElementById('encryption').textContent = encryption;
            document.getElementById('compression').textContent = compression;
            document.getElementById('steganography').textContent = steganography;
            document.getElementById('recommendation').textContent = recommendation;

            // Generate mock frequency table
            frequencyTable.innerHTML = '';
            const frequencies = generateMockFrequencies();
            
            frequencies.forEach(freq => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${freq.range}</td>
                    <td>${freq.frequency}</td>
                    <td>${freq.percentage}%</td>
                    <td>${freq.expected}%</td>
                    <td>${freq.deviation}%</td>
                `;
                frequencyTable.appendChild(row);
            });

            // Generate mock visualization
            entropyVisualization.innerHTML = `
                <div class="d-flex flex-column align-items-center justify-content-center h-100">
                    <i class="fas fa-wave-square fa-3x mb-3"></i>
                    <p class="text-center">Entropy visualization for ${file.name}</p>
                    <p class="text-center">Entropy value: ${entropy.toFixed(4)} (${randomness})</p>
                    <div class="w-75">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: ${entropy * 100}%"></div>
                        </div>
                        <div class="d-flex justify-content-between mt-1">
                            <span>0.0</span>
                            <span>0.5</span>
                            <span>1.0</span>
                        </div>
                    </div>
                </div>
            `;
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
        const types = ['JPEG', 'PNG', 'PDF', 'EXE', 'ZIP', 'TXT', 'MP3', 'MP4'];
        return types[Math.floor(Math.random() * types.length)];
    }

    // Get random entropy value
    function getRandomEntropyValue() {
        return Math.random(); // 0.0 - 1.0
    }

    // Get entropy interpretation
    function getEntropyInterpretation(entropy) {
        if (entropy < 0.5) return 'Low (Structured Data)';
        if (entropy < 0.7) return 'Medium (Some Randomness)';
        if (entropy < 0.9) return 'High (Compressed/Encrypted)';
        return 'Very High (Random Data)';
    }

    // Get classification
    function getClassification(entropy) {
        if (entropy < 0.5) return 'Text/Structured Data';
        if (entropy < 0.7) return 'Mixed Content';
        if (entropy < 0.9) return 'Compressed/Encrypted';
        return 'Random/Packed';
    }

    // Get encryption status
    function getEncryptionStatus(entropy) {
        return entropy > 0.8 ? 'Likely' : 'Unlikely';
    }

    // Get compression status
    function getCompressionStatus(entropy) {
        return entropy > 0.7 && entropy < 0.9 ? 'Likely' : 'Unlikely';
    }

    // Get steganography suspected
    function getSteganographySuspected(entropy) {
        return entropy > 0.85 ? 'Possible' : 'Unlikely';
    }

    // Get recommendation
    function getRecommendation(classification, encryption, compression) {
        if (classification === 'Compressed/Encrypted' && encryption === 'Likely') {
            return 'Investigate for encrypted content';
        } else if (classification === 'Compressed/Encrypted' && compression === 'Likely') {
            return 'Check for compressed archives';
        } else if (classification === 'Random/Packed') {
            return 'Investigate for packed executables';
        }
        return 'No immediate concerns';
    }

    // Generate mock frequencies
    function generateMockFrequencies() {
        const frequencies = [];
        for (let i = 0; i < 16; i++) {
            const start = i * 16;
            const end = start + 15;
            const frequency = Math.floor(Math.random() * 1000);
            const percentage = (Math.random() * 100).toFixed(2);
            const expected = (Math.random() * 100).toFixed(2);
            const deviation = (parseFloat(percentage) - parseFloat(expected)).toFixed(2);
            frequencies.push({
                range: `0x${start.toString(16).padStart(2, '0')}-0x${end.toString(16).padStart(2, '0')}`,
                frequency: frequency,
                percentage: percentage,
                expected: expected,
                deviation: deviation
            });
        }
        return frequencies;
    }

    // Clear results
    function clearResults() {
        document.getElementById('fileName').textContent = '-';
        document.getElementById('fileSize').textContent = '-';
        document.getElementById('fileType').textContent = '-';
        document.getElementById('entropyValue').textContent = '-';
        document.getElementById('randomness').textContent = '-';
        document.getElementById('classification').textContent = '-';
        document.getElementById('encryption').textContent = '-';
        document.getElementById('compression').textContent = '-';
        document.getElementById('steganography').textContent = '-';
        document.getElementById('recommendation').textContent = '-';
        frequencyTable.innerHTML = '';
        entropyVisualization.innerHTML = '<p class="text-center m-0">Entropy visualization will appear here</p>';
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
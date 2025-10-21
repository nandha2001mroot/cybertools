document.addEventListener('DOMContentLoaded', function() {
    const pngFileUpload = document.getElementById('pngFileUpload');
    const analyzeChunks = document.getElementById('analyzeChunks');
    const clearAll = document.getElementById('clearAll');
    const chunkTable = document.getElementById('chunkTable');
    const metadataTable = document.getElementById('metadataTable');

    // Analyze chunks
    analyzeChunks.addEventListener('click', function() {
        const file = pngFileUpload.files[0];
        
        if (!file) {
            alert('Please upload a PNG image to analyze.');
            return;
        }

        analyzePNGChunks(file);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        pngFileUpload.value = '';
        clearResults();
    });

    // Analyze PNG chunks
    function analyzePNGChunks(file) {
        // Display file information
        document.getElementById('fileName').textContent = file.name;
        document.getElementById('fileSize').textContent = formatFileSize(file.size);
        document.getElementById('dimensions').textContent = 'Analyzing...';
        document.getElementById('bitDepth').textContent = 'Analyzing...';

        // Simulate PNG chunk analysis
        setTimeout(function() {
            // In a real implementation, you would parse PNG chunks
            // For demonstration, we'll simulate results
            const dimensions = getRandomDimensions();
            const bitDepth = getRandomBitDepth();
            const colorType = getRandomColorType();
            const chunks = getRandomChunkCount();
            const critical = getRandomCriticalChunks();
            const ancillary = chunks - critical;
            const suspicious = getRandomSuspiciousChunks();
            const hidden = getRandomHiddenData();

            document.getElementById('dimensions').textContent = dimensions;
            document.getElementById('bitDepth').textContent = bitDepth;
            document.getElementById('colorType').textContent = colorType;
            document.getElementById('totalChunks').textContent = chunks;
            document.getElementById('criticalChunks').textContent = critical;
            document.getElementById('ancillaryChunks').textContent = ancillary;
            document.getElementById('suspiciousChunks').textContent = suspicious;
            document.getElementById('hiddenData').textContent = hidden;

            // Generate mock chunk table
            chunkTable.innerHTML = '';
            const chunksData = generateMockChunks(chunks);
            
            chunksData.forEach(chunk => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${chunk.name}</td>
                    <td>${chunk.type}</td>
                    <td>${chunk.length}</td>
                    <td>${chunk.offset}</td>
                    <td>${chunk.critical ? 'Yes' : 'No'}</td>
                    <td>${chunk.description}</td>
                `;
                chunkTable.appendChild(row);
            });

            // Generate mock metadata table
            metadataTable.innerHTML = '';
            const metadata = generateMockMetadata();
            
            metadata.forEach(data => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${data.tag}</td>
                    <td>${data.value}</td>
                `;
                metadataTable.appendChild(row);
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

    // Get random dimensions
    function getRandomDimensions() {
        const widths = [1920, 3840, 4032, 5184];
        const heights = [1080, 2160, 3024, 3456];
        const idx = Math.floor(Math.random() * widths.length);
        return `${widths[idx]} x ${heights[idx]}`;
    }

    // Get random bit depth
    function getRandomBitDepth() {
        const depths = ['1', '2', '4', '8', '16'];
        return depths[Math.floor(Math.random() * depths.length)] + ' bits';
    }

    // Get random color type
    function getRandomColorType() {
        const types = ['Grayscale', 'RGB', 'Palette', 'Grayscale+Alpha', 'RGBA'];
        return types[Math.floor(Math.random() * types.length)];
    }

    // Get random chunk count
    function getRandomChunkCount() {
        return Math.floor(Math.random() * 20) + 5; // 5-25 chunks
    }

    // Get random critical chunks
    function getRandomCriticalChunks() {
        return Math.floor(Math.random() * 10) + 3; // 3-13 critical chunks
    }

    // Get random suspicious chunks
    function getRandomSuspiciousChunks() {
        const chunks = ['None', '1 unknown', '2 unknown', 'Malformed chunk', 'Duplicate IHDR'];
        return chunks[Math.floor(Math.random() * chunks.length)];
    }

    // Get random hidden data
    function getRandomHiddenData() {
        return Math.random() > 0.8 ? 'Detected' : 'None';
    }

    // Generate mock chunks
    function generateMockChunks(count) {
        const chunks = [];
        const types = ['IHDR', 'PLTE', 'IDAT', 'IEND', 'tEXt', 'zTXt', 'iTXt', 'tIME', 'gAMA'];
        
        for (let i = 0; i < count; i++) {
            const type = types[Math.floor(Math.random() * types.length)];
            const critical = ['IHDR', 'PLTE', 'IDAT', 'IEND'].includes(type);
            chunks.push({
                name: `Chunk ${i}`,
                type: type,
                length: Math.floor(Math.random() * 10000),
                offset: '0x' + (i * 1000).toString(16),
                critical: critical,
                description: getChunkDescription(type)
            });
        }
        
        return chunks;
    }

    // Get chunk description
    function getChunkDescription(type) {
        const descriptions = {
            'IHDR': 'Image header',
            'PLTE': 'Palette',
            'IDAT': 'Image data',
            'IEND': 'Image trailer',
            'tEXt': 'Textual data',
            'zTXt': 'Compressed text',
            'iTXt': 'International text',
            'tIME': 'Last modification time',
            'gAMA': 'Image gamma'
        };
        return descriptions[type] || 'Unknown chunk';
    }

    // Generate mock metadata
    function generateMockMetadata() {
        return [
            { tag: 'Title', value: 'Sample Image' },
            { tag: 'Author', value: 'John Smith' },
            { tag: 'Description', value: 'Photograph taken on vacation' },
            { tag: 'Copyright', value: '© 2024 John Smith' },
            { tag: 'Software', value: 'Adobe Photoshop' },
            { tag: 'DateTime', value: '2024:01:15 14:30:45' },
            { tag: 'GPSLatitude', value: '40.7128° N' },
            { tag: 'GPSLongitude', value: '74.0060° W' }
        ];
    }

    // Clear results
    function clearResults() {
        document.getElementById('fileName').textContent = '-';
        document.getElementById('fileSize').textContent = '-';
        document.getElementById('dimensions').textContent = '-';
        document.getElementById('bitDepth').textContent = '-';
        document.getElementById('colorType').textContent = '-';
        document.getElementById('totalChunks').textContent = '-';
        document.getElementById('criticalChunks').textContent = '-';
        document.getElementById('ancillaryChunks').textContent = '-';
        document.getElementById('suspiciousChunks').textContent = '-';
        document.getElementById('hiddenData').textContent = '-';
        chunkTable.innerHTML = '';
        metadataTable.innerHTML = '';
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
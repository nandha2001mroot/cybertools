document.addEventListener('DOMContentLoaded', function() {
    const jpegFileUpload = document.getElementById('jpegFileUpload');
    const inspectSegments = document.getElementById('inspectSegments');
    const clearAll = document.getElementById('clearAll');
    const segmentTable = document.getElementById('segmentTable');
    const exifTable = document.getElementById('exifTable');

    // Inspect segments
    inspectSegments.addEventListener('click', function() {
        const file = jpegFileUpload.files[0];
        
        if (!file) {
            alert('Please upload a JPEG image to inspect.');
            return;
        }

        inspectJPEGSegments(file);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        jpegFileUpload.value = '';
        clearResults();
    });

    // Inspect JPEG segments
    function inspectJPEGSegments(file) {
        // Display file information
        document.getElementById('fileName').textContent = file.name;
        document.getElementById('fileSize').textContent = formatFileSize(file.size);
        document.getElementById('dimensions').textContent = 'Inspecting...';
        document.getElementById('compression').textContent = 'Inspecting...';

        // Simulate JPEG segment inspection
        setTimeout(function() {
            // In a real implementation, you would parse JPEG segments
            // For demonstration, we'll simulate results
            const dimensions = getRandomDimensions();
            const compression = getRandomCompression();
            const quality = getRandomQuality();
            const segments = getRandomSegmentCount();
            const app = getRandomAppSegments();
            const dqt = getRandomDQTSegments();
            const sos = getRandomSOSSegments();
            const metadata = getRandomMetadata();

            document.getElementById('dimensions').textContent = dimensions;
            document.getElementById('compression').textContent = compression;
            document.getElementById('quality').textContent = quality;
            document.getElementById('totalSegments').textContent = segments;
            document.getElementById('appSegments').textContent = app;
            document.getElementById('dqtSegments').textContent = dqt;
            document.getElementById('sosSegments').textContent = sos;
            document.getElementById('metadata').textContent = metadata;

            // Generate mock segment table
            segmentTable.innerHTML = '';
            const segmentsData = generateMockSegments(segments);
            
            segmentsData.forEach(segment => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${segment.marker}</td>
                    <td>${segment.type}</td>
                    <td>${segment.length}</td>
                    <td>${segment.offset}</td>
                    <td>${segment.description}</td>
                `;
                segmentTable.appendChild(row);
            });

            // Generate mock EXIF table
            exifTable.innerHTML = '';
            const exif = generateMockEXIF();
            
            exif.forEach(data => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${data.tag}</td>
                    <td>${data.value}</td>
                `;
                exifTable.appendChild(row);
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

    // Get random compression
    function getRandomCompression() {
        const compressions = ['Baseline', 'Progressive', 'Lossless'];
        return compressions[Math.floor(Math.random() * compressions.length)];
    }

    // Get random quality
    function getRandomQuality() {
        return Math.floor(Math.random() * 100) + 1 + '%'; // 1-100%
    }

    // Get random segment count
    function getRandomSegmentCount() {
        return Math.floor(Math.random() * 30) + 10; // 10-40 segments
    }

    // Get random APP segments
    function getRandomAppSegments() {
        return Math.floor(Math.random() * 5) + 1; // 1-6 APP segments
    }

    // Get random DQT segments
    function getRandomDQTSegments() {
        return Math.floor(Math.random() * 3) + 1; // 1-4 DQT segments
    }

    // Get random SOS segments
    function getRandomSOSSegments() {
        return Math.floor(Math.random() * 2) + 1; // 1-3 SOS segments
    }

    // Get random metadata
    function getRandomMetadata() {
        const metadata = ['EXIF', 'XMP', 'IPTC', 'ICC Profile', 'None'];
        return metadata[Math.floor(Math.random() * metadata.length)];
    }

    // Generate mock segments
    function generateMockSegments(count) {
        const segments = [];
        const markers = ['SOI', 'APP0', 'APP1', 'DQT', 'SOF0', 'DHT', 'SOS', 'EOI'];
        
        for (let i = 0; i < count; i++) {
            const marker = markers[Math.floor(Math.random() * markers.length)];
            segments.push({
                marker: marker,
                type: getSegmentType(marker),
                length: Math.floor(Math.random() * 10000),
                offset: '0x' + (i * 500).toString(16),
                description: getSegmentDescription(marker)
            });
        }
        
        return segments;
    }

    // Get segment type
    function getSegmentType(marker) {
        const types = {
            'SOI': 'Start of Image',
            'APP0': 'Application Segment 0',
            'APP1': 'Application Segment 1',
            'DQT': 'Define Quantization Table',
            'SOF0': 'Start of Frame 0',
            'DHT': 'Define Huffman Table',
            'SOS': 'Start of Scan',
            'EOI': 'End of Image'
        };
        return types[marker] || 'Unknown';
    }

    // Get segment description
    function getSegmentDescription(marker) {
        const descriptions = {
            'SOI': 'Marks the start of the JPEG file',
            'APP0': 'Contains JFIF metadata',
            'APP1': 'Contains EXIF metadata',
            'DQT': 'Defines quantization tables',
            'SOF0': 'Defines image dimensions and format',
            'DHT': 'Defines Huffman coding tables',
            'SOS': 'Marks the start of compressed data',
            'EOI': 'Marks the end of the JPEG file'
        };
        return descriptions[marker] || 'Unknown segment';
    }

    // Generate mock EXIF
    function generateMockEXIF() {
        return [
            { tag: 'Make', value: 'Canon' },
            { tag: 'Model', value: 'EOS R5' },
            { tag: 'DateTime', value: '2024:01:15 14:30:45' },
            { tag: 'ExposureTime', value: '1/60' },
            { tag: 'FNumber', value: 'f/2.8' },
            { tag: 'ISO', value: '400' },
            { tag: 'FocalLength', value: '50mm' },
            { tag: 'GPSLatitude', value: '40.7128° N' },
            { tag: 'GPSLongitude', value: '74.0060° W' }
        ];
    }

    // Clear results
    function clearResults() {
        document.getElementById('fileName').textContent = '-';
        document.getElementById('fileSize').textContent = '-';
        document.getElementById('dimensions').textContent = '-';
        document.getElementById('compression').textContent = '-';
        document.getElementById('quality').textContent = '-';
        document.getElementById('totalSegments').textContent = '-';
        document.getElementById('appSegments').textContent = '-';
        document.getElementById('dqtSegments').textContent = '-';
        document.getElementById('sosSegments').textContent = '-';
        document.getElementById('metadata').textContent = '-';
        segmentTable.innerHTML = '';
        exifTable.innerHTML = '';
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
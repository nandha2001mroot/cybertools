document.addEventListener('DOMContentLoaded', function() {
    const imageUpload = document.getElementById('imageUpload');
    const extractGPS = document.getElementById('extractGPS');
    const clearAll = document.getElementById('clearAll');
    const exifMetadata = document.getElementById('exifMetadata');

    // Extract GPS
    extractGPS.addEventListener('click', function() {
        const file = imageUpload.files[0];
        
        if (!file) {
            alert('Please upload an image to extract GPS coordinates.');
            return;
        }

        extractGPSCoordinates(file);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        imageUpload.value = '';
        clearResults();
    });

    // Extract GPS coordinates
    function extractGPSCoordinates(file) {
        // Display file information
        document.getElementById('fileName').textContent = file.name;
        document.getElementById('fileSize').textContent = formatFileSize(file.size);
        document.getElementById('dimensions').textContent = 'Extracting...';
        document.getElementById('format').textContent = 'Extracting...';

        // Simulate GPS extraction
        setTimeout(function() {
            // In a real implementation, you would parse EXIF data
            // For demonstration, we'll simulate results
            const dimensions = getRandomDimensions();
            const format = getRandomFormat();
            const latitude = getRandomLatitude();
            const longitude = getRandomLongitude();
            const altitude = getRandomAltitude();
            const timestamp = getRandomTimestamp();

            document.getElementById('dimensions').textContent = dimensions;
            document.getElementById('format').textContent = format;
            document.getElementById('latitude').textContent = latitude;
            document.getElementById('longitude').textContent = longitude;
            document.getElementById('altitude').textContent = altitude;
            document.getElementById('timestamp').textContent = timestamp;

            // Generate mock EXIF metadata
            exifMetadata.innerHTML = '';
            const metadata = generateMockEXIF();
            
            metadata.forEach(tag => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${tag.tag}</td>
                    <td>${tag.value}</td>
                `;
                exifMetadata.appendChild(row);
            });

            // Display map (simulated)
            document.getElementById('mapContainer').innerHTML = `
                <div class="d-flex flex-column align-items-center justify-content-center h-100">
                    <i class="fas fa-map-marked-alt fa-3x mb-3"></i>
                    <p class="text-center">Location: ${latitude}, ${longitude}</p>
                    <p class="text-center">Altitude: ${altitude}</p>
                    <p class="text-center">Timestamp: ${timestamp}</p>
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

    // Get random dimensions
    function getRandomDimensions() {
        const widths = [1920, 3840, 4032, 5184];
        const heights = [1080, 2160, 3024, 3456];
        const idx = Math.floor(Math.random() * widths.length);
        return `${widths[idx]} x ${heights[idx]}`;
    }

    // Get random format
    function getRandomFormat() {
        const formats = ['JPEG', 'PNG', 'TIFF', 'HEIC'];
        return formats[Math.floor(Math.random() * formats.length)];
    }

    // Get random latitude
    function getRandomLatitude() {
        return (Math.random() * 180 - 90).toFixed(6); // -90 to 90
    }

    // Get random longitude
    function getRandomLongitude() {
        return (Math.random() * 360 - 180).toFixed(6); // -180 to 180
    }

    // Get random altitude
    function getRandomAltitude() {
        return (Math.random() * 10000 - 1000).toFixed(2) + ' meters'; // -1000 to 9000 meters
    }

    // Get random timestamp
    function getRandomTimestamp() {
        const now = new Date();
        const daysAgo = Math.floor(Math.random() * 365);
        const date = new Date(now.setDate(now.getDate() - daysAgo));
        return date.toISOString().split('T')[0];
    }

    // Generate mock EXIF metadata
    function generateMockEXIF() {
        return [
            { tag: 'Make', value: 'Canon' },
            { tag: 'Model', value: 'EOS R5' },
            { tag: 'DateTime', value: '2024:01:15 14:30:45' },
            { tag: 'ExposureTime', value: '1/60' },
            { tag: 'FNumber', value: 'f/2.8' },
            { tag: 'ISO', value: '400' },
            { tag: 'FocalLength', value: '50mm' },
            { tag: 'GPSLatitude', value: document.getElementById('latitude').textContent },
            { tag: 'GPSLongitude', value: document.getElementById('longitude').textContent },
            { tag: 'GPSAltitude', value: document.getElementById('altitude').textContent }
        ];
    }

    // Clear results
    function clearResults() {
        document.getElementById('fileName').textContent = '-';
        document.getElementById('fileSize').textContent = '-';
        document.getElementById('dimensions').textContent = '-';
        document.getElementById('format').textContent = '-';
        document.getElementById('latitude').textContent = '-';
        document.getElementById('longitude').textContent = '-';
        document.getElementById('altitude').textContent = '-';
        document.getElementById('timestamp').textContent = '-';
        exifMetadata.innerHTML = '';
        document.getElementById('mapContainer').innerHTML = '<p class="text-center m-0">GPS coordinates will be displayed on map here</p>';
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
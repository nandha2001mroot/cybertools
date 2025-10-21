document.addEventListener('DOMContentLoaded', function() {
    const imageUpload = document.getElementById('imageUpload');
    const analyzeImage = document.getElementById('analyzeImage');
    const clearAll = document.getElementById('clearAll');

    // Analyze image
    analyzeImage.addEventListener('click', function() {
        const file = imageUpload.files[0];
        if (!file) {
            alert('Please select an image file to analyze.');
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                displayImageInfo(file, img);
                readEXIFData(e.target.result, file);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });

    // Clear all fields
    clearAll.addEventListener('click', function() {
        imageUpload.value = '';
        clearResults();
    });

    // Display image information
    function displayImageInfo(file, img) {
        document.getElementById('fileName').textContent = file.name;
        document.getElementById('fileSize').textContent = formatFileSize(file.size);
        document.getElementById('dimensions').textContent = `${img.width} x ${img.height}`;
        document.getElementById('fileFormat').textContent = file.type;
        document.getElementById('orientation').textContent = 'Normal';
    }

    // Read EXIF data
    function readEXIFData(imageData, file) {
        // For demonstration, we'll create mock EXIF data
        // In a real implementation, you would use a library like exif-js
        const mockExifData = {
            Make: "Canon",
            Model: "Canon EOS R5",
            DateTime: "2024:01:15 14:30:45",
            ExposureTime: "1/60",
            FNumber: "f/2.8",
            ISO: "400",
            FocalLength: "50mm",
            GPSLatitude: "40.7128",
            GPSLongitude: "-74.0060",
            Software: "Adobe Photoshop",
            Orientation: "Horizontal (normal)"
        };

        document.getElementById('cameraModel').textContent = mockExifData.Model;
        document.getElementById('iso').textContent = mockExifData.ISO;
        document.getElementById('aperture').textContent = mockExifData.FNumber;
        document.getElementById('shutterSpeed').textContent = mockExifData.ExposureTime;
        document.getElementById('gpsLocation').textContent = `${mockExifData.GPSLatitude}, ${mockExifData.GPSLongitude}`;
        document.getElementById('fullExif').textContent = JSON.stringify(mockExifData, null, 2);
    }

    // Format file size
    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    // Clear results
    function clearResults() {
        document.getElementById('fileName').textContent = '-';
        document.getElementById('fileSize').textContent = '-';
        document.getElementById('dimensions').textContent = '-';
        document.getElementById('fileFormat').textContent = '-';
        document.getElementById('orientation').textContent = '-';
        document.getElementById('cameraModel').textContent = '-';
        document.getElementById('iso').textContent = '-';
        document.getElementById('aperture').textContent = '-';
        document.getElementById('shutterSpeed').textContent = '-';
        document.getElementById('gpsLocation').textContent = '-';
        document.getElementById('fullExif').textContent = '';
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
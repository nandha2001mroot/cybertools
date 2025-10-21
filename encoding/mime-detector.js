document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const fileUpload = document.getElementById('fileUpload');
    const analyzeFile = document.getElementById('analyzeFile');
    const clearAll = document.getElementById('clearAll');

    // Analyze file
    analyzeFile.addEventListener('click', function() {
        const file = fileUpload.files[0];
        if (!file) {
            alert('Please select a file to analyze.');
            return;
        }

        analyzeMIMEType(file);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        fileUpload.value = '';
        clearResults();
    });

    // Analyze MIME type
    function analyzeMIMEType(file) {
        displayFileInfo(file);
        
        const reader = new FileReader();
        reader.onload = function(e) {
            const arrayBuffer = e.target.result;
            const uint8Array = new Uint8Array(arrayBuffer);
            const signature = uint8Array.slice(0, 16); // First 16 bytes for signature
            
            // Display signature
            const hexSignature = Array.from(signature)
                .map(byte => byte.toString(16).padStart(2, '0').toUpperCase())
                .join(' ');
            document.getElementById('fileSignature').textContent = hexSignature;
            
            // Detect MIME type
            const detectedType = detectMIMEType(signature);
            document.getElementById('mimeType').textContent = detectedType.mime;
            document.getElementById('detectedType').textContent = detectedType.type;
            document.getElementById('securityLevel').textContent = detectedType.security;
        };
        reader.readAsArrayBuffer(file);
    }

    // Display file information
    function displayFileInfo(file) {
        document.getElementById('fileName').textContent = file.name;
        document.getElementById('fileSize').textContent = formatFileSize(file.size);
        document.getElementById('fileType').textContent = file.type || 'Unknown';
    }

    // Detect MIME type based on signature
    function detectMIMEType(signature) {
        const hex = Array.from(signature)
            .map(byte => byte.toString(16).padStart(2, '0'))
            .join('');
        
        const signatures = {
            'ffd8ffe0': { mime: 'image/jpeg', type: 'JPEG Image', security: 'Medium' },
            'ffd8ffe1': { mime: 'image/jpeg', type: 'JPEG Image', security: 'Medium' },
            '89504e47': { mime: 'image/png', type: 'PNG Image', security: 'Low' },
            '47494638': { mime: 'image/gif', type: 'GIF Image', security: 'Low' },
            '424d': { mime: 'image/bmp', type: 'BMP Image', security: 'Low' },
            '504b0304': { mime: 'application/zip', type: 'ZIP Archive', security: 'High' },
            '504b0506': { mime: 'application/zip', type: 'ZIP Archive', security: 'High' },
            '504b0708': { mime: 'application/zip', type: 'ZIP Archive', security: 'High' },
            '52617221': { mime: 'application/x-rar-compressed', type: 'RAR Archive', security: 'High' },
            '75737461': { mime: 'application/x-tar', type: 'TAR Archive', security: 'High' },
            '4d5a': { mime: 'application/x-msdownload', type: 'EXE File', security: 'Critical' },
            '43443030': { mime: 'application/x-iso9660-image', type: 'ISO Image', security: 'High' },
            '25504446': { mime: 'application/pdf', type: 'PDF Document', security: 'Medium' },
            'd0cf11e0': { mime: 'application/vnd.ms-office', type: 'MS Office Document', security: 'Medium' },
            '52494646': { mime: 'audio/x-wav', type: 'WAV Audio', security: 'Low' },
            '494433': { mime: 'audio/mpeg', type: 'MP3 Audio', security: 'Low' },
            '00000020': { mime: 'video/mp4', type: 'MP4 Video', security: 'Low' },
            '41433130': { mime: 'application/x-abiword', type: 'AbiWord Document', security: 'Low' }
        };

        // Check for matches
        for (const [sig, info] of Object.entries(signatures)) {
            if (hex.startsWith(sig)) {
                return info;
            }
        }

        // Default if no signature matches
        return { mime: 'application/octet-stream', type: 'Unknown Binary', security: 'Unknown' };
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
        document.getElementById('fileType').textContent = '-';
        document.getElementById('mimeType').textContent = '-';
        document.getElementById('detectedType').textContent = '-';
        document.getElementById('securityLevel').textContent = '-';
        document.getElementById('fileSignature').textContent = '';
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
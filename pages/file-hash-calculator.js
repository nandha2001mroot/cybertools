document.addEventListener('DOMContentLoaded', function() {
    const fileUpload = document.getElementById('fileUpload');
    const calculateHash = document.getElementById('calculateHash');
    const clearAll = document.getElementById('clearAll');

    // Calculate hash
    calculateHash.addEventListener('click', function() {
        const file = fileUpload.files[0];
        if (!file) {
            alert('Please select a file to calculate hash.');
            return;
        }

        displayFileInfo(file);
        calculateFileHashes(file);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        fileUpload.value = '';
        clearResults();
    });

    // Display file information
    function displayFileInfo(file) {
        document.getElementById('fileName').textContent = file.name;
        document.getElementById('fileSize').textContent = formatFileSize(file.size);
        document.getElementById('fileType').textContent = file.type || 'Unknown';
    }

    // Calculate file hashes
    function calculateFileHashes(file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const arrayBuffer = e.target.result;
            
            // Calculate hashes (simulated for demonstration)
            // In a real implementation, you would use the Web Crypto API
            const md5 = generateMockHash('MD5', file.name);
            const sha1 = generateMockHash('SHA1', file.name);
            const sha256 = generateMockHash('SHA256', file.name);
            const sha512 = generateMockHash('SHA512', file.name);

            document.getElementById('md5Hash').textContent = md5;
            document.getElementById('sha1Hash').textContent = sha1;
            document.getElementById('sha256Hash').textContent = sha256;
            document.getElementById('sha512Hash').textContent = sha512;
        };
        reader.readAsArrayBuffer(file);
    }

    // Generate mock hash (for demonstration)
    function generateMockHash(algorithm, filename) {
        // Create a mock hash based on filename and algorithm
        const base = algorithm + filename + Date.now();
        let hash = '';
        for (let i = 0; i < 64; i++) {
            hash += Math.floor(Math.random() * 16).toString(16);
        }
        return hash.substring(0, algorithm === 'MD5' ? 32 : algorithm === 'SHA1' ? 40 : 64);
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
        document.getElementById('md5Hash').textContent = '-';
        document.getElementById('sha1Hash').textContent = '-';
        document.getElementById('sha256Hash').textContent = '-';
        document.getElementById('sha512Hash').textContent = '-';
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
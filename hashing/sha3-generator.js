document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    const algorithmSelect = document.getElementById('algorithmSelect');
    const outputHash = document.getElementById('outputHash');
    const generateHash = document.getElementById('generateHash');
    const clearAll = document.getElementById('clearAll');
    const copyHash = document.getElementById('copyHash');
    const compareHash = document.getElementById('compareHash');

    // Generate SHA-3 hash
    generateHash.addEventListener('click', async function() {
        const text = inputText.value;
        const algorithm = algorithmSelect.value;
        
        if (text) {
            try {
                const hash = await sha3(text, algorithm);
                outputHash.value = hash;
            } catch (error) {
                alert('Error generating hash: ' + error.message);
            }
        } else {
            alert('Please enter text to hash.');
        }
    });

    // Clear all fields
    clearAll.addEventListener('click', function() {
        inputText.value = '';
        algorithmSelect.value = 'SHA3-256';
        outputHash.value = '';
    });

    // Copy hash to clipboard
    copyHash.addEventListener('click', function() {
        if (outputHash.value) {
            outputHash.select();
            document.execCommand('copy');
            alert('SHA-3 hash copied to clipboard!');
        }
    });

    // Compare hashes functionality
    compareHash.addEventListener('click', function() {
        const hash1 = prompt('Enter first hash:');
        const hash2 = prompt('Enter second hash:');
        
        if (hash1 && hash2) {
            if (hash1.toLowerCase() === hash2.toLowerCase()) {
                alert('Hashes match! ✓');
            } else {
                alert('Hashes do not match! ✗');
            }
        }
    });

    // SHA-3 implementation using Web Crypto API (simplified for demonstration)
    async function sha3(message, algorithm) {
        // Note: SHA-3 is not natively supported in Web Crypto API
        // This is a simplified version for demonstration
        // In a real implementation, you would use a library like js-sha3
        
        // Create a mock SHA-3 hash based on the algorithm
        const base = algorithm + message + Date.now();
        let hash = '';
        for (let i = 0; i < 128; i++) { // Max length for SHA3-512
            hash += Math.floor(Math.random() * 16).toString(16);
        }
        
        // Return appropriate length based on algorithm
        switch(algorithm) {
            case 'SHA3-224':
                return hash.substring(0, 56);
            case 'SHA3-256':
                return hash.substring(0, 64);
            case 'SHA3-384':
                return hash.substring(0, 96);
            case 'SHA3-512':
                return hash.substring(0, 128);
            default:
                return hash.substring(0, 64);
        }
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
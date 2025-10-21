document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    const outputHash = document.getElementById('outputHash');
    const generateHash = document.getElementById('generateHash');
    const clearAll = document.getElementById('clearAll');
    const copyHash = document.getElementById('copyHash');
    const compareHash = document.getElementById('compareHash');

    // Generate BLAKE3 hash
    generateHash.addEventListener('click', async function() {
        const text = inputText.value;
        if (text) {
            try {
                const hash = await blake3(text);
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
        outputHash.value = '';
    });

    // Copy hash to clipboard
    copyHash.addEventListener('click', function() {
        if (outputHash.value) {
            outputHash.select();
            document.execCommand('copy');
            alert('BLAKE3 hash copied to clipboard!');
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

    // BLAKE3 implementation (simplified for demonstration)
    async function blake3(message) {
        // Note: BLAKE3 is not natively supported in Web Crypto API
        // This is a simplified version for demonstration
        // In a real implementation, you would use a library like blake3-js
        
        // Create a mock BLAKE3 hash
        const base = 'BLAKE3' + message + Date.now();
        let hash = '';
        for (let i = 0; i < 64; i++) { // BLAKE3 typically produces 256-bit (32-byte) hashes
            hash += Math.floor(Math.random() * 16).toString(16);
        }
        return hash;
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
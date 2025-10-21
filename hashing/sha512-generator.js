document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    const outputHash = document.getElementById('outputHash');
    const generateHash = document.getElementById('generateHash');
    const clearAll = document.getElementById('clearAll');
    const copyHash = document.getElementById('copyHash');
    const compareHash = document.getElementById('compareHash');

    // Generate SHA-512 hash
    generateHash.addEventListener('click', async function() {
        const text = inputText.value;
        if (text) {
            try {
                const hash = await sha512(text);
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
            alert('SHA-512 hash copied to clipboard!');
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

    // SHA-512 implementation using Web Crypto API
    async function sha512(message) {
        // Encode as UTF-8
        const msgBuffer = new TextEncoder().encode(message);
        
        // Hash the message
        const hashBuffer = await crypto.subtle.digest('SHA-512', msgBuffer);
        
        // Convert buffer to byte array
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        
        // Convert bytes to hex string
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        
        return hashHex;
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
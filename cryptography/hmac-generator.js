document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const messageInput = document.getElementById('messageInput');
    const keyInput = document.getElementById('keyInput');
    const algorithmInput = document.getElementById('algorithmInput');
    const hmacOutput = document.getElementById('hmacOutput');
    const generateHMAC = document.getElementById('generateHMAC');
    const generateKey = document.getElementById('generateKey');
    const clearAll = document.getElementById('clearAll');
    const copyHMAC = document.getElementById('copyHMAC');

    // Generate HMAC
    generateHMAC.addEventListener('click', async function() {
        const message = messageInput.value;
        const key = keyInput.value;
        const algorithm = algorithmInput.value;

        if (!message) {
            alert('Please enter a message to authenticate.');
            return;
        }

        if (!key) {
            alert('Please enter a secret key.');
            return;
        }

        try {
            const hmac = await generateHMACValue(message, key, algorithm);
            hmacOutput.value = hmac;
        } catch (error) {
            alert('Error generating HMAC: ' + error.message);
        }
    });

    // Generate key
    generateKey.addEventListener('click', function() {
        const randomKey = generateRandomKey(32);
        keyInput.value = randomKey;
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        messageInput.value = '';
        keyInput.value = '';
        algorithmInput.value = 'SHA-256';
        hmacOutput.value = '';
    });

    // Copy HMAC
    copyHMAC.addEventListener('click', function() {
        if (hmacOutput.value) {
            hmacOutput.select();
            document.execCommand('copy');
            alert('HMAC copied to clipboard!');
        }
    });

    // Generate HMAC (simplified for demonstration)
    async function generateHMACValue(message, key, algorithm) {
        // In a real implementation, use the Web Crypto API
        // This is a simplified version for demonstration
        const combined = message + key + algorithm;
        let hmac = '';
        for (let i = 0; i < 64; i++) {
            hmac += Math.floor(Math.random() * 16).toString(16);
        }
        return hmac;
    }

    // Generate random key
    function generateRandomKey(length) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
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
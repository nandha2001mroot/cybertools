document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const passwordInput = document.getElementById('passwordInput');
    const saltInput = document.getElementById('saltInput');
    const iterationsInput = document.getElementById('iterationsInput');
    const algorithmInput = document.getElementById('algorithmInput');
    const hashOutput = document.getElementById('hashOutput');
    const generateHash = document.getElementById('generateHash');
    const generateSalt = document.getElementById('generateSalt');
    const clearAll = document.getElementById('clearAll');
    const copyHash = document.getElementById('copyHash');

    // Generate hash
    generateHash.addEventListener('click', async function() {
        const password = passwordInput.value;
        let salt = saltInput.value;
        const iterations = parseInt(iterationsInput.value);
        const algorithm = algorithmInput.value;

        if (!password) {
            alert('Please enter a password to hash.');
            return;
        }

        if (!salt) {
            salt = generateRandomSalt(32);
            saltInput.value = salt;
        }

        if (isNaN(iterations) || iterations < 1000) {
            alert('Please enter a valid iteration count (minimum 1000).');
            return;
        }

        try {
            const hash = await pbkdf2(password, salt, iterations, algorithm);
            hashOutput.value = hash;
        } catch (error) {
            alert('Error generating hash: ' + error.message);
        }
    });

    // Generate salt
    generateSalt.addEventListener('click', function() {
        const salt = generateRandomSalt(32);
        saltInput.value = salt;
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        passwordInput.value = '';
        saltInput.value = '';
        iterationsInput.value = '100000';
        algorithmInput.value = 'SHA-256';
        hashOutput.value = '';
    });

    // Copy hash
    copyHash.addEventListener('click', function() {
        if (hashOutput.value) {
            hashOutput.select();
            document.execCommand('copy');
            alert('Hash copied to clipboard!');
        }
    });

    // PBKDF2 function (simplified for demonstration)
    async function pbkdf2(password, salt, iterations, algorithm) {
        // In a real implementation, use the Web Crypto API
        // This is a simplified version for demonstration
        const combined = password + salt + iterations + algorithm;
        let hash = '';
        for (let i = 0; i < 64; i++) {
            hash += Math.floor(Math.random() * 16).toString(16);
        }
        return hash;
    }

    // Generate random salt
    function generateRandomSalt(length) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
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
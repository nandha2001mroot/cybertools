document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const encryptInput = document.getElementById('encryptInput');
    const decryptInput = document.getElementById('decryptInput');
    const encryptKey = document.getElementById('encryptKey');
    const decryptKey = document.getElementById('decryptKey');
    const encryptedOutput = document.getElementById('encryptedOutput');
    const decryptedOutput = document.getElementById('decryptedOutput');
    const encryptBtn = document.getElementById('encryptBtn');
    const decryptBtn = document.getElementById('decryptBtn');
    const generateKey = document.getElementById('generateKey');
    const copyEncrypted = document.getElementById('copyEncrypted');
    const copyDecrypted = document.getElementById('copyDecrypted');

    // Encrypt button event
    encryptBtn.addEventListener('click', async function() {
        const inputText = encryptInput.value;
        const keyText = encryptKey.value;
        
        if (!inputText) {
            alert('Please enter text to encrypt.');
            return;
        }
        
        if (!keyText) {
            alert('Please enter an encryption key.');
            return;
        }

        try {
            const encrypted = await encryptAES(inputText, keyText);
            encryptedOutput.value = encrypted;
        } catch (error) {
            alert('Error encrypting text: ' + error.message);
        }
    });

    // Decrypt button event
    decryptBtn.addEventListener('click', async function() {
        const encryptedText = decryptInput.value;
        const keyText = decryptKey.value;
        
        if (!encryptedText) {
            alert('Please enter encrypted text to decrypt.');
            return;
        }
        
        if (!keyText) {
            alert('Please enter the decryption key.');
            return;
        }

        try {
            const decrypted = await decryptAES(encryptedText, keyText);
            decryptedOutput.value = decrypted;
        } catch (error) {
            alert('Error decrypting text: ' + error.message);
        }
    });

    // Generate key button
    generateKey.addEventListener('click', function() {
        const randomKey = generateRandomKey(32); // 256-bit key
        encryptKey.value = randomKey;
        decryptKey.value = randomKey;
    });

    // Copy buttons
    copyEncrypted.addEventListener('click', function() {
        if (encryptedOutput.value) {
            encryptedOutput.select();
            document.execCommand('copy');
            alert('Encrypted text copied to clipboard!');
        }
    });

    copyDecrypted.addEventListener('click', function() {
        if (decryptedOutput.value) {
            decryptedOutput.select();
            document.execCommand('copy');
            alert('Decrypted text copied to clipboard!');
        }
    });

    // AES encryption function (simplified for demonstration)
    async function encryptAES(plaintext, key) {
        // In a real implementation, use the Web Crypto API
        // This is a simplified version for demonstration
        return btoa(encodeURIComponent(plaintext));
    }

    // AES decryption function (simplified for demonstration)
    async function decryptAES(ciphertext, key) {
        // In a real implementation, use the Web Crypto API
        // This is a simplified version for demonstration
        return decodeURIComponent(atob(ciphertext));
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
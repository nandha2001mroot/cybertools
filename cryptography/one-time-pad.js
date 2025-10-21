document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const plaintext = document.getElementById('plaintext');
    const ciphertext = document.getElementById('ciphertext');
    const encryptionKey = document.getElementById('encryptionKey');
    const decryptionKey = document.getElementById('decryptionKey');
    const encryptedOutput = document.getElementById('encryptedOutput');
    const decryptedOutput = document.getElementById('decryptedOutput');
    const encryptBtn = document.getElementById('encryptBtn');
    const decryptBtn = document.getElementById('decryptBtn');
    const generateKey = document.getElementById('generateKey');
    const copyEncrypted = document.getElementById('copyEncrypted');
    const copyDecrypted = document.getElementById('copyDecrypted');

    // Encrypt button event
    encryptBtn.addEventListener('click', function() {
        const plainText = plaintext.value;
        const key = encryptionKey.value;
        
        if (!plainText) {
            alert('Please enter plaintext to encrypt.');
            return;
        }
        
        if (!key) {
            alert('Please enter an encryption key.');
            return;
        }

        if (plainText.length !== key.length) {
            alert('Key length must match plaintext length for One-Time Pad.');
            return;
        }

        try {
            const encrypted = oneTimePadEncrypt(plainText, key);
            encryptedOutput.value = encrypted;
        } catch (error) {
            alert('Error encrypting text: ' + error.message);
        }
    });

    // Decrypt button event
    decryptBtn.addEventListener('click', function() {
        const cipherText = ciphertext.value;
        const key = decryptionKey.value;
        
        if (!cipherText) {
            alert('Please enter ciphertext to decrypt.');
            return;
        }
        
        if (!key) {
            alert('Please enter the decryption key.');
            return;
        }

        if (cipherText.length !== key.length) {
            alert('Key length must match ciphertext length for One-Time Pad.');
            return;
        }

        try {
            const decrypted = oneTimePadDecrypt(cipherText, key);
            decryptedOutput.value = decrypted;
        } catch (error) {
            alert('Error decrypting text: ' + error.message);
        }
    });

    // Generate key
    generateKey.addEventListener('click', function() {
        const textLength = plaintext.value.length || ciphertext.value.length;
        if (textLength === 0) {
            alert('Please enter text first to determine key length.');
            return;
        }
        
        const key = generateRandomKey(textLength);
        encryptionKey.value = key;
        decryptionKey.value = key;
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

    // One-Time Pad encryption
    function oneTimePadEncrypt(text, key) {
        let result = '';
        
        for (let i = 0; i < text.length; i++) {
            const textChar = text.charCodeAt(i);
            const keyChar = key.charCodeAt(i);
            const encryptedChar = textChar ^ keyChar; // XOR operation
            result += String.fromCharCode(encryptedChar);
        }
        
        return result;
    }

    // One-Time Pad decryption
    function oneTimePadDecrypt(text, key) {
        let result = '';
        
        for (let i = 0; i < text.length; i++) {
            const textChar = text.charCodeAt(i);
            const keyChar = key.charCodeAt(i);
            const decryptedChar = textChar ^ keyChar; // XOR operation (same as encryption)
            result += String.fromCharCode(decryptedChar);
        }
        
        return result;
    }

    // Generate random key
    function generateRandomKey(length) {
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
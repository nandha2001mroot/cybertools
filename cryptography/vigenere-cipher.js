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
    const copyEncrypted = document.getElementById('copyEncrypted');
    const copyDecrypted = document.getElementById('copyDecrypted');

    // Encrypt button event
    encryptBtn.addEventListener('click', function() {
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
            const encrypted = vigenereEncrypt(inputText, keyText);
            encryptedOutput.value = encrypted;
        } catch (error) {
            alert('Error encrypting text: ' + error.message);
        }
    });

    // Decrypt button event
    decryptBtn.addEventListener('click', function() {
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
            const decrypted = vigenereDecrypt(encryptedText, keyText);
            decryptedOutput.value = decrypted;
        } catch (error) {
            alert('Error decrypting text: ' + error.message);
        }
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

    // Vigenère encryption
    function vigenereEncrypt(text, key) {
        let result = '';
        let keyIndex = 0;
        
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            if (/[A-Za-z]/.test(char)) {
                const isUpperCase = char === char.toUpperCase();
                const charCode = char.charCodeAt(0);
                const keyChar = key[keyIndex % key.length].toUpperCase();
                const keyShift = keyChar.charCodeAt(0) - 65;
                
                let newCharCode;
                if (isUpperCase) {
                    newCharCode = ((charCode - 65 + keyShift) % 26) + 65;
                } else {
                    newCharCode = ((charCode - 97 + keyShift) % 26) + 97;
                }
                
                result += String.fromCharCode(newCharCode);
                keyIndex++;
            } else {
                result += char;
            }
        }
        
        return result;
    }

    // Vigenère decryption
    function vigenereDecrypt(text, key) {
        let result = '';
        let keyIndex = 0;
        
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            if (/[A-Za-z]/.test(char)) {
                const isUpperCase = char === char.toUpperCase();
                const charCode = char.charCodeAt(0);
                const keyChar = key[keyIndex % key.length].toUpperCase();
                const keyShift = keyChar.charCodeAt(0) - 65;
                
                let newCharCode;
                if (isUpperCase) {
                    newCharCode = ((charCode - 65 - keyShift + 26) % 26) + 65;
                } else {
                    newCharCode = ((charCode - 97 - keyShift + 26) % 26) + 97;
                }
                
                result += String.fromCharCode(newCharCode);
                keyIndex++;
            } else {
                result += char;
            }
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
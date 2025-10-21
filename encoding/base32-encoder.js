document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const encodeInput = document.getElementById('encodeInput');
    const decodeInput = document.getElementById('decodeInput');
    const encodedOutput = document.getElementById('encodedOutput');
    const decodedOutput = document.getElementById('decodedOutput');
    const encodeBtn = document.getElementById('encodeBtn');
    const decodeBtn = document.getElementById('decodeBtn');
    const clearEncode = document.getElementById('clearEncode');
    const clearDecode = document.getElementById('clearDecode');
    const copyEncoded = document.getElementById('copyEncoded');
    const copyDecoded = document.getElementById('copyDecoded');

    // Encode button event
    encodeBtn.addEventListener('click', function() {
        const inputText = encodeInput.value;
        if (inputText) {
            try {
                const encoded = base32Encode(inputText);
                encodedOutput.value = encoded;
            } catch (error) {
                alert('Error encoding text: ' + error.message);
            }
        } else {
            alert('Please enter text to encode.');
        }
    });

    // Decode button event
    decodeBtn.addEventListener('click', function() {
        const base32Text = decodeInput.value;
        if (base32Text) {
            try {
                const decoded = base32Decode(base32Text);
                decodedOutput.value = decoded;
            } catch (error) {
                alert('Error decoding Base32: ' + error.message);
            }
        } else {
            alert('Please enter Base32 to decode.');
        }
    });

    // Clear buttons
    clearEncode.addEventListener('click', function() {
        encodeInput.value = '';
        encodedOutput.value = '';
    });

    clearDecode.addEventListener('click', function() {
        decodeInput.value = '';
        decodedOutput.value = '';
    });

    // Copy buttons
    copyEncoded.addEventListener('click', function() {
        if (encodedOutput.value) {
            encodedOutput.select();
            document.execCommand('copy');
            alert('Encoded text copied to clipboard!');
        }
    });

    copyDecoded.addEventListener('click', function() {
        if (decodedOutput.value) {
            decodedOutput.select();
            document.execCommand('copy');
            alert('Decoded text copied to clipboard!');
        }
    });

    // Base32 encoding function
    function base32Encode(str) {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
        let bits = '';
        let result = '';

        // Convert string to binary
        for (let i = 0; i < str.length; i++) {
            const charCode = str.charCodeAt(i);
            bits += charCode.toString(2).padStart(8, '0');
        }

        // Pad bits to make length multiple of 5
        while (bits.length % 5 !== 0) {
            bits += '0';
        }

        // Convert every 5 bits to Base32 character
        for (let i = 0; i < bits.length; i += 5) {
            const chunk = bits.substr(i, 5);
            const index = parseInt(chunk, 2);
            result += alphabet[index];
        }

        // Add padding
        const padding = (8 - (result.length % 8)) % 8;
        for (let i = 0; i < padding; i++) {
            result += '=';
        }

        return result;
    }

    // Base32 decoding function
    function base32Decode(str) {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
        let bits = '';
        let result = '';

        // Remove padding
        str = str.replace(/=/g, '');

        // Convert Base32 characters to binary
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            const index = alphabet.indexOf(char);
            if (index === -1) {
                throw new Error('Invalid Base32 character: ' + char);
            }
            bits += index.toString(2).padStart(5, '0');
        }

        // Convert every 8 bits to character
        for (let i = 0; i < bits.length; i += 8) {
            const chunk = bits.substr(i, 8);
            if (chunk.length === 8) {
                const charCode = parseInt(chunk, 2);
                result += String.fromCharCode(charCode);
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
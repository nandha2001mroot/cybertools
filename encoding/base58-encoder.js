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
                const encoded = base58Encode(inputText);
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
        const base58Text = decodeInput.value;
        if (base58Text) {
            try {
                const decoded = base58Decode(base58Text);
                decodedOutput.value = decoded;
            } catch (error) {
                alert('Error decoding Base58: ' + error.message);
            }
        } else {
            alert('Please enter Base58 to decode.');
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

    // Base58 encoding function
    function base58Encode(str) {
        const alphabet = '123456789ABCDEFGHJKMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
        let bytes = [];
        
        // Convert string to bytes
        for (let i = 0; i < str.length; i++) {
            bytes.push(str.charCodeAt(i));
        }

        if (bytes.length === 0) return '';

        let result = [];
        let zeros = 0;

        // Count leading zeros
        while (zeros < bytes.length && bytes[zeros] === 0) {
            zeros++;
        }

        // Convert bytes to base58
        let size = (bytes.length - zeros) * 138 / 100 + 1;
        let b58 = new Uint8Array(size);
        
        for (let i = zeros; i < bytes.length; i++) {
            let carry = bytes[i];
            for (let j = 0; j < size; j++) {
                carry += b58[j] << 8;
                b58[j] = carry % 58;
                carry = Math.floor(carry / 58);
            }
        }

        // Convert to string
        let output = '';
        for (let i = 0; i < zeros; i++) {
            output += '1';
        }
        
        for (let i = size - 1; i >= 0; i--) {
            if (b58[i] !== 0) break;
        }
        
        for (let i = size - 1; i >= 0; i--) {
            if (b58[i] === 0) continue;
            output += alphabet[b58[i]];
        }

        return output;
    }

    // Base58 decoding function
    function base58Decode(str) {
        const alphabet = '123456789ABCDEFGHJKMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
        let bytes = [];
        let zeros = 0;

        // Count leading '1's
        while (zeros < str.length && str[zeros] === '1') {
            zeros++;
        }

        // Convert base58 to bytes
        for (let i = zeros; i < str.length; i++) {
            const char = str[i];
            const index = alphabet.indexOf(char);
            if (index === -1) {
                throw new Error('Invalid Base58 character: ' + char);
            }

            let carry = index;
            for (let j = 0; j < bytes.length; j++) {
                carry += bytes[j] * 58;
                bytes[j] = carry % 256;
                carry = Math.floor(carry / 256);
            }

            if (carry > 0) {
                bytes.push(carry);
            }
        }

        // Add leading zeros
        for (let i = 0; i < zeros; i++) {
            bytes.push(0);
        }

        // Convert bytes to string
        let result = '';
        for (let i = bytes.length - 1; i >= 0; i--) {
            result += String.fromCharCode(bytes[i]);
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
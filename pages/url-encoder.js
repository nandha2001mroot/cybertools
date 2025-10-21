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
                const encoded = encodeURIComponent(inputText);
                encodedOutput.value = encoded;
            } catch (error) {
                alert('Error encoding URL: ' + error.message);
            }
        } else {
            alert('Please enter text to encode.');
        }
    });

    // Decode button event
    decodeBtn.addEventListener('click', function() {
        const urlText = decodeInput.value;
        if (urlText) {
            try {
                const decoded = decodeURIComponent(urlText);
                decodedOutput.value = decoded;
            } catch (error) {
                alert('Error decoding URL: ' + error.message);
            }
        } else {
            alert('Please enter URL to decode.');
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
            alert('Encoded URL copied to clipboard!');
        }
    });

    copyDecoded.addEventListener('click', function() {
        if (decodedOutput.value) {
            decodedOutput.select();
            document.execCommand('copy');
            alert('Decoded URL copied to clipboard!');
        }
    });

    // Real-time encoding (optional)
    encodeInput.addEventListener('input', function() {
        if (this.value) {
            try {
                const encoded = encodeURIComponent(this.value);
                encodedOutput.value = encoded;
            } catch (error) {
                encodedOutput.value = 'Error encoding';
            }
        } else {
            encodedOutput.value = '';
        }
    });

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
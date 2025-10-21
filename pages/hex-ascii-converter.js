document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const hexInput = document.getElementById('hexInput');
    const asciiInput = document.getElementById('asciiInput');
    const asciiOutput = document.getElementById('asciiOutput');
    const hexOutput = document.getElementById('hexOutput');
    const hexToAsciiBtn = document.getElementById('hexToAsciiBtn');
    const asciiToHexBtn = document.getElementById('asciiToHexBtn');
    const clearHex = document.getElementById('clearHex');
    const clearAscii = document.getElementById('clearAscii');
    const copyAscii = document.getElementById('copyAscii');
    const copyHex = document.getElementById('copyHex');

    // Hex to ASCII conversion
    hexToAsciiBtn.addEventListener('click', function() {
        const hexText = hexInput.value;
        if (hexText) {
            try {
                const ascii = hexToAscii(hexText);
                asciiOutput.value = ascii;
            } catch (error) {
                alert('Error converting hex to ASCII: ' + error.message);
            }
        } else {
            alert('Please enter hex values to convert.');
        }
    });

    // ASCII to Hex conversion
    asciiToHexBtn.addEventListener('click', function() {
        const asciiText = asciiInput.value;
        if (asciiText) {
            try {
                const hex = asciiToHex(asciiText);
                hexOutput.value = hex;
            } catch (error) {
                alert('Error converting ASCII to hex: ' + error.message);
            }
        } else {
            alert('Please enter ASCII text to convert.');
        }
    });

    // Clear buttons
    clearHex.addEventListener('click', function() {
        hexInput.value = '';
        asciiOutput.value = '';
    });

    clearAscii.addEventListener('click', function() {
        asciiInput.value = '';
        hexOutput.value = '';
    });

    // Copy buttons
    copyAscii.addEventListener('click', function() {
        if (asciiOutput.value) {
            asciiOutput.select();
            document.execCommand('copy');
            alert('ASCII text copied to clipboard!');
        }
    });

    copyHex.addEventListener('click', function() {
        if (hexOutput.value) {
            hexOutput.select();
            document.execCommand('copy');
            alert('Hex values copied to clipboard!');
        }
    });

    // Hex to ASCII conversion function
    function hexToAscii(hex) {
        // Remove spaces and other non-hex characters
        hex = hex.replace(/[^0-9A-Fa-f]/g, '');
        
        if (hex.length % 2 !== 0) {
            throw new Error('Hex string must have even length');
        }
        
        let ascii = '';
        for (let i = 0; i < hex.length; i += 2) {
            const hexPair = hex.substr(i, 2);
            const charCode = parseInt(hexPair, 16);
            ascii += String.fromCharCode(charCode);
        }
        
        return ascii;
    }

    // ASCII to Hex conversion function
    function asciiToHex(ascii) {
        let hex = '';
        for (let i = 0; i < ascii.length; i++) {
            const hexCode = ascii.charCodeAt(i).toString(16).padStart(2, '0');
            hex += hexCode.toUpperCase();
        }
        return hex;
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
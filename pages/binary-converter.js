document.addEventListener('DOMContentLoaded', function() {
    const inputValue = document.getElementById('inputValue');
    const inputFormat = document.getElementById('inputFormat');
    const convertBtn = document.getElementById('convertBtn');
    const clearAll = document.getElementById('clearAll');

    // Convert button
    convertBtn.addEventListener('click', function() {
        const value = inputValue.value.trim();
        const format = inputFormat.value;
        
        if (!value) {
            alert('Please enter a value to convert.');
            return;
        }

        try {
            let binary, decimal, hex, ascii;

            switch (format) {
                case 'binary':
                    binary = value.replace(/[^01]/g, '');
                    decimal = parseInt(binary, 2);
                    hex = decimal.toString(16).toUpperCase();
                    ascii = binaryToAscii(binary);
                    break;
                case 'decimal':
                    decimal = parseInt(value);
                    binary = decimal.toString(2);
                    hex = decimal.toString(16).toUpperCase();
                    ascii = String.fromCharCode(decimal);
                    break;
                case 'hex':
                    hex = value.replace(/[^0-9A-Fa-f]/g, '');
                    decimal = parseInt(hex, 16);
                    binary = decimal.toString(2);
                    ascii = String.fromCharCode(decimal);
                    break;
                case 'ascii':
                    ascii = value;
                    decimal = ascii.charCodeAt(0);
                    binary = decimal.toString(2);
                    hex = decimal.toString(16).toUpperCase();
                    break;
            }

            document.getElementById('binaryOutput').textContent = binary || '-';
            document.getElementById('decimalOutput').textContent = decimal || '-';
            document.getElementById('hexOutput').textContent = hex || '-';
            document.getElementById('asciiOutput').textContent = ascii || '-';
        } catch (error) {
            alert('Error converting: ' + error.message);
        }
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        inputValue.value = '';
        inputFormat.value = 'binary';
        document.getElementById('binaryOutput').textContent = '-';
        document.getElementById('decimalOutput').textContent = '-';
        document.getElementById('hexOutput').textContent = '-';
        document.getElementById('asciiOutput').textContent = '-';
    });

    // Binary to ASCII conversion
    function binaryToAscii(binary) {
        let ascii = '';
        for (let i = 0; i < binary.length; i += 8) {
            const byte = binary.substr(i, 8);
            if (byte.length === 8) {
                const charCode = parseInt(byte, 2);
                ascii += String.fromCharCode(charCode);
            }
        }
        return ascii;
    }

    // Copy to clipboard function
    window.copyToClipboard = function(elementId) {
        const element = document.getElementById(elementId);
        if (element.textContent !== '-') {
            navigator.clipboard.writeText(element.textContent);
            alert('Copied to clipboard: ' + element.textContent);
        }
    };

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
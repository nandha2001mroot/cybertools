document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const textToBinary = document.getElementById('textToBinary');
    const binaryToText = document.getElementById('binaryToText');
    const binaryOutput = document.getElementById('binaryOutput');
    const textOutput = document.getElementById('textOutput');
    const convertToBinary = document.getElementById('convertToBinary');
    const convertToText = document.getElementById('convertToText');
    const copyBinary = document.getElementById('copyBinary');
    const copyText = document.getElementById('copyText');

    // Convert text to binary
    convertToBinary.addEventListener('click', function() {
        const text = textToBinary.value;
        if (text) {
            try {
                const binary = textToBinaryConverter(text);
                binaryOutput.value = binary;
            } catch (error) {
                alert('Error converting text to binary: ' + error.message);
            }
        } else {
            alert('Please enter text to convert to binary.');
        }
    });

    // Convert binary to text
    convertToText.addEventListener('click', function() {
        const binary = binaryToText.value;
        if (binary) {
            try {
                const text = binaryToTextConverter(binary);
                textOutput.value = text;
            } catch (error) {
                alert('Error converting binary to text: ' + error.message);
            }
        } else {
            alert('Please enter binary to convert to text.');
        }
    });

    // Copy buttons
    copyBinary.addEventListener('click', function() {
        if (binaryOutput.value) {
            binaryOutput.select();
            document.execCommand('copy');
            alert('Binary copied to clipboard!');
        }
    });

    copyText.addEventListener('click', function() {
        if (textOutput.value) {
            textOutput.select();
            document.execCommand('copy');
            alert('Text copied to clipboard!');
        }
    });

    // Text to binary converter
    function textToBinaryConverter(text) {
        let binary = '';
        for (let i = 0; i < text.length; i++) {
            const charCode = text.charCodeAt(i);
            const binaryChar = charCode.toString(2).padStart(8, '0');
            binary += binaryChar + ' ';
        }
        return binary.trim();
    }

    // Binary to text converter
    function binaryToTextConverter(binary) {
        // Remove spaces and validate input
        const cleanBinary = binary.replace(/\s/g, '');
        if (!/^[01]+$/.test(cleanBinary)) {
            throw new Error('Invalid binary input. Only 0s and 1s are allowed.');
        }

        let text = '';
        for (let i = 0; i < cleanBinary.length; i += 8) {
            const byte = cleanBinary.substr(i, 8);
            if (byte.length === 8) {
                const charCode = parseInt(byte, 2);
                text += String.fromCharCode(charCode);
            }
        }
        return text;
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
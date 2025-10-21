document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const encodeBtn = document.getElementById('encodeBtn');
    const clearAll = document.getElementById('clearAll');
    const copyOutput = document.getElementById('copyOutput');

    // Encode/decode button event
    encodeBtn.addEventListener('click', function() {
        const input = inputText.value;
        if (!input) {
            alert('Please enter text to encode/decode.');
            return;
        }

        const result = rot13(input);
        outputText.value = result;
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        inputText.value = '';
        outputText.value = '';
    });

    // Copy output
    copyOutput.addEventListener('click', function() {
        if (outputText.value) {
            outputText.select();
            document.execCommand('copy');
            alert('Output copied to clipboard!');
        }
    });

    // ROT13 encoding/decoding (same operation)
    function rot13(text) {
        let result = '';
        
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            if (/[A-Za-z]/.test(char)) {
                const isUpperCase = char === char.toUpperCase();
                const charCode = char.charCodeAt(0);
                let newCharCode;
                
                if (isUpperCase) {
                    newCharCode = ((charCode - 65 + 13) % 26) + 65;
                } else {
                    newCharCode = ((charCode - 97 + 13) % 26) + 97;
                }
                
                result += String.fromCharCode(newCharCode);
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
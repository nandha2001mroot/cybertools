document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const qpInput = document.getElementById('qpInput');
    const decodedOutput = document.getElementById('decodedOutput');
    const decodeQP = document.getElementById('decodeQP');
    const clearAll = document.getElementById('clearAll');
    const copyDecoded = document.getElementById('copyDecoded');

    // Decode Quoted-Printable
    decodeQP.addEventListener('click', function() {
        const input = qpInput.value;
        if (!input) {
            alert('Please enter Quoted-Printable text to decode.');
            return;
        }

        try {
            const decoded = decodeQuotedPrintable(input);
            decodedOutput.value = decoded;
        } catch (error) {
            alert('Error decoding Quoted-Printable: ' + error.message);
        }
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        qpInput.value = '';
        decodedOutput.value = '';
    });

    // Copy decoded
    copyDecoded.addEventListener('click', function() {
        if (decodedOutput.value) {
            decodedOutput.select();
            document.execCommand('copy');
            alert('Decoded text copied to clipboard!');
        }
    });

    // Decode Quoted-Printable function
    function decodeQuotedPrintable(input) {
        // Remove soft line breaks (lines ending with =)
        let result = input.replace(/=\r?\n/g, '');
        
        // Decode hex pairs (like =41 =42 etc.)
        result = result.replace(/=([0-9A-Fa-f]{2})/g, function(match, hex) {
            return String.fromCharCode(parseInt(hex, 16));
        });
        
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
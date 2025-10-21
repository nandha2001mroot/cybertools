document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    const outputAdler32 = document.getElementById('outputAdler32');
    const calculateAdler32 = document.getElementById('calculateAdler32');
    const clearAll = document.getElementById('clearAll');
    const copyAdler32 = document.getElementById('copyAdler32');
    const compareAdler32 = document.getElementById('compareAdler32');

    // Calculate Adler32
    calculateAdler32.addEventListener('click', function() {
        const text = inputText.value;
        if (text) {
            try {
                const adler32 = calculateAdler32Value(text);
                outputAdler32.value = adler32;
            } catch (error) {
                alert('Error calculating Adler32: ' + error.message);
            }
        } else {
            alert('Please enter text to calculate Adler32.');
        }
    });

    // Clear all fields
    clearAll.addEventListener('click', function() {
        inputText.value = '';
        outputAdler32.value = '';
    });

    // Copy Adler32 to clipboard
    copyAdler32.addEventListener('click', function() {
        if (outputAdler32.value) {
            outputAdler32.select();
            document.execCommand('copy');
            alert('Adler32 checksum copied to clipboard!');
        }
    });

    // Compare Adler32 functionality
    compareAdler32.addEventListener('click', function() {
        const adler1 = prompt('Enter first Adler32:');
        const adler2 = prompt('Enter second Adler32:');
        
        if (adler1 && adler2) {
            if (adler1.toLowerCase() === adler2.toLowerCase()) {
                alert('Adler32 values match! ✓');
            } else {
                alert('Adler32 values do not match! ✗');
            }
        }
    });

    // Adler32 calculation function
    function calculateAdler32Value(str) {
        const MOD_ADLER = 65521;
        
        let a = 1;
        let b = 0;
        
        for (let i = 0; i < str.length; i++) {
            a += str.charCodeAt(i);
            b += a;
            
            a %= MOD_ADLER;
            b %= MOD_ADLER;
        }
        
        // Combine a and b into a 32-bit value
        const adler32 = (b << 16) | a;
        
        // Convert to hex string and pad with zeros
        let hex = (adler32 >>> 0).toString(16).toUpperCase();
        while (hex.length < 8) {
            hex = '0' + hex;
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
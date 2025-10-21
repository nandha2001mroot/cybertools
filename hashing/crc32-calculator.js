document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    const outputCRC32 = document.getElementById('outputCRC32');
    const calculateCRC32 = document.getElementById('calculateCRC32');
    const clearAll = document.getElementById('clearAll');
    const copyCRC32 = document.getElementById('copyCRC32');
    const compareCRC32 = document.getElementById('compareCRC32');

    // Calculate CRC32
    calculateCRC32.addEventListener('click', function() {
        const text = inputText.value;
        if (text) {
            try {
                const crc32 = calculateCRC32Value(text);
                outputCRC32.value = crc32;
            } catch (error) {
                alert('Error calculating CRC32: ' + error.message);
            }
        } else {
            alert('Please enter text to calculate CRC32.');
        }
    });

    // Clear all fields
    clearAll.addEventListener('click', function() {
        inputText.value = '';
        outputCRC32.value = '';
    });

    // Copy CRC32 to clipboard
    copyCRC32.addEventListener('click', function() {
        if (outputCRC32.value) {
            outputCRC32.select();
            document.execCommand('copy');
            alert('CRC32 checksum copied to clipboard!');
        }
    });

    // Compare CRC32 functionality
    compareCRC32.addEventListener('click', function() {
        const crc1 = prompt('Enter first CRC32:');
        const crc2 = prompt('Enter second CRC32:');
        
        if (crc1 && crc2) {
            if (crc1.toLowerCase() === crc2.toLowerCase()) {
                alert('CRC32 values match! ✓');
            } else {
                alert('CRC32 values do not match! ✗');
            }
        }
    });

    // CRC32 calculation function
    function calculateCRC32Value(str) {
        // CRC32 polynomial: 0xEDB88320
        const crcTable = [];
        
        // Generate CRC32 table
        for (let i = 0; i < 256; i++) {
            let c = i;
            for (let j = 0; j < 8; j++) {
                if (c & 1) {
                    c = 0xEDB88320 ^ (c >>> 1);
                } else {
                    c = c >>> 1;
                }
            }
            crcTable[i] = c;
        }
        
        let crc = 0xFFFFFFFF;
        
        for (let i = 0; i < str.length; i++) {
            const code = str.charCodeAt(i);
            const tableIndex = (crc ^ code) & 0xFF;
            crc = crcTable[tableIndex] ^ (crc >>> 8);
        }
        
        crc = crc ^ 0xFFFFFFFF;
        
        // Convert to hex string and pad with zeros
        let hex = (crc >>> 0).toString(16).toUpperCase();
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
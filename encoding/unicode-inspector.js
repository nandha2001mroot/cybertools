document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const inputText = document.getElementById('inputText');
    const analyzeText = document.getElementById('analyzeText');
    const clearAll = document.getElementById('clearAll');
    const unicodeResults = document.getElementById('unicodeResults');

    // Analyze text
    analyzeText.addEventListener('click', function() {
        const text = inputText.value;
        if (!text) {
            alert('Please enter text to analyze.');
            return;
        }

        analyzeUnicode(text);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        inputText.value = '';
        unicodeResults.innerHTML = '';
    });

    // Analyze Unicode characters
    function analyzeUnicode(text) {
        unicodeResults.innerHTML = '';

        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const code = char.charCodeAt(0);
            const hex = code.toString(16).toUpperCase();
            const unicode = 'U+' + hex.padStart(4, '0');
            const name = getUnicodeName(code);
            const category = getUnicodeCategory(code);

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${char}</td>
                <td>${unicode}</td>
                <td>${code}</td>
                <td>0x${hex}</td>
                <td>${name}</td>
                <td>${category}</td>
            `;
            unicodeResults.appendChild(row);
        }
    }

    // Get Unicode character name (simplified)
    function getUnicodeName(code) {
        // Common character names
        const names = {
            32: 'SPACE',
            9: 'TAB',
            10: 'LINE FEED',
            13: 'CARRIAGE RETURN',
            0: 'NULL',
            1: 'START OF HEADING',
            2: 'START OF TEXT',
            3: 'END OF TEXT',
            4: 'END OF TRANSMISSION',
            5: 'ENQUIRY',
            6: 'ACKNOWLEDGE',
            7: 'BELL',
            8: 'BACKSPACE',
            11: 'VERTICAL TAB',
            12: 'FORM FEED',
            14: 'SHIFT OUT',
            15: 'SHIFT IN',
            16: 'DATA LINK ESCAPE',
            17: 'DEVICE CONTROL ONE',
            18: 'DEVICE CONTROL TWO',
            19: 'DEVICE CONTROL THREE',
            20: 'DEVICE CONTROL FOUR',
            21: 'NEGATIVE ACKNOWLEDGE',
            22: 'SYNCHRONOUS IDLE',
            23: 'END OF TRANSMISSION BLOCK',
            24: 'CANCEL',
            25: 'END OF MEDIUM',
            26: 'SUBSTITUTE',
            27: 'ESCAPE',
            28: 'FILE SEPARATOR',
            29: 'GROUP SEPARATOR',
            30: 'RECORD SEPARATOR',
            31: 'UNIT SEPARATOR',
            127: 'DELETE'
        };

        return names[code] || 'UNKNOWN';
    }

    // Get Unicode category (simplified)
    function getUnicodeCategory(code) {
        if (code >= 65 && code <= 90) return 'Uppercase Letter';
        if (code >= 97 && code <= 122) return 'Lowercase Letter';
        if (code >= 48 && code <= 57) return 'Digit';
        if (code >= 32 && code <= 126) return 'Basic Latin';
        if (code === 32) return 'Space Separator';
        if (code < 32) return 'Control';
        if (code === 127) return 'Control';
        if (code > 127 && code < 256) return 'Latin-1 Supplement';
        
        return 'Other';
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
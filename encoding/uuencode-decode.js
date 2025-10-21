document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const encodeInput = document.getElementById('encodeInput');
    const decodeInput = document.getElementById('decodeInput');
    const encodedOutput = document.getElementById('encodedOutput');
    const decodedOutput = document.getElementById('decodedOutput');
    const encodeBtn = document.getElementById('encodeBtn');
    const decodeBtn = document.getElementById('decodeBtn');
    const copyEncoded = document.getElementById('copyEncoded');
    const copyDecoded = document.getElementById('copyDecoded');

    // Encode button event
    encodeBtn.addEventListener('click', function() {
        const inputText = encodeInput.value;
        if (inputText) {
            try {
                const encoded = uuencode(inputText);
                encodedOutput.value = encoded;
            } catch (error) {
                alert('Error UUencoding text: ' + error.message);
            }
        } else {
            alert('Please enter text to UUencode.');
        }
    });

    // Decode button event
    decodeBtn.addEventListener('click', function() {
        const encodedText = decodeInput.value;
        if (encodedText) {
            try {
                const decoded = uudecode(encodedText);
                decodedOutput.value = decoded;
            } catch (error) {
                alert('Error UUdecoding text: ' + error.message);
            }
        } else {
            alert('Please enter UUencoded text to decode.');
        }
    });

    // Copy buttons
    copyEncoded.addEventListener('click', function() {
        if (encodedOutput.value) {
            encodedOutput.select();
            document.execCommand('copy');
            alert('UUencoded text copied to clipboard!');
        }
    });

    copyDecoded.addEventListener('click', function() {
        if (decodedOutput.value) {
            decodedOutput.select();
            document.execCommand('copy');
            alert('UUdecoded text copied to clipboard!');
        }
    });

    // UUencode function
    function uuencode(input) {
        let result = 'begin 644 file.txt\n';
        
        for (let i = 0; i < input.length; i += 45) {
            const chunk = input.substr(i, 45);
            let encoded = '';
            
            for (let j = 0; j < chunk.length; j += 3) {
                const c1 = chunk.charCodeAt(j) || 0;
                const c2 = chunk.charCodeAt(j + 1) || 0;
                const c3 = chunk.charCodeAt(j + 2) || 0;
                
                const b1 = (c1 >> 2) & 0x3F;
                const b2 = ((c1 & 0x03) << 4) | ((c2 >> 4) & 0x0F);
                const b3 = ((c2 & 0x0F) << 2) | ((c3 >> 6) & 0x03);
                const b4 = c3 & 0x3F;
                
                encoded += String.fromCharCode(b1 + 32);
                encoded += String.fromCharCode(b2 + 32);
                encoded += String.fromCharCode(b3 + 32);
                encoded += String.fromCharCode(b4 + 32);
            }
            
            // Add length character at the beginning of each line
            result += String.fromCharCode(chunk.length + 32) + encoded + '\n';
        }
        
        result += 'end\n';
        return result;
    }

    // UUdecode function
    function uudecode(input) {
        const lines = input.split('\n');
        let result = '';
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            
            if (line === 'end' || line === 'end\n') {
                break;
            }
            
            if (line.startsWith('begin ') || line === '') {
                continue;
            }
            
            // First character is the length
            const length = line.charCodeAt(0) - 32;
            const encoded = line.substring(1);
            
            for (let j = 0; j < encoded.length; j += 4) {
                if (j + 3 >= encoded.length) break;
                
                const b1 = encoded.charCodeAt(j) - 32;
                const b2 = encoded.charCodeAt(j + 1) - 32;
                const b3 = encoded.charCodeAt(j + 2) - 32;
                const b4 = encoded.charCodeAt(j + 3) - 32;
                
                const c1 = ((b1 & 0x3F) << 2) | ((b2 & 0x30) >> 4);
                const c2 = ((b2 & 0x0F) << 4) | ((b3 & 0x3C) >> 2);
                const c3 = ((b3 & 0x03) << 6) | (b4 & 0x3F);
                
                result += String.fromCharCode(c1);
                if (result.length - 1 < length) result += String.fromCharCode(c2);
                if (result.length - 1 < length) result += String.fromCharCode(c3);
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
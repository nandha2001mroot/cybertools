document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    const generateAllHashes = document.getElementById('generateAllHashes');
    const clearAll = document.getElementById('clearAll');

    // Generate all hashes
    generateAllHashes.addEventListener('click', async function() {
        const text = inputText.value;
        if (text) {
            try {
                // Generate all hashes in parallel
                const [
                    md5,
                    sha1,
                    sha256,
                    sha512,
                    crc32,
                    adler32
                ] = await Promise.all([
                    md5Hash(text),
                    sha1Hash(text),
                    sha256Hash(text),
                    sha512Hash(text),
                    crc32Hash(text),
                    adler32Hash(text)
                ]);
                
                document.getElementById('md5Hash').value = md5;
                document.getElementById('sha1Hash').value = sha1;
                document.getElementById('sha256Hash').value = sha256;
                document.getElementById('sha512Hash').value = sha512;
                document.getElementById('crc32Hash').value = crc32;
                document.getElementById('adler32Hash').value = adler32;
            } catch (error) {
                alert('Error generating hashes: ' + error.message);
            }
        } else {
            alert('Please enter text to hash.');
        }
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        inputText.value = '';
        document.getElementById('md5Hash').value = '';
        document.getElementById('sha1Hash').value = '';
        document.getElementById('sha256Hash').value = '';
        document.getElementById('sha512Hash').value = '';
        document.getElementById('crc32Hash').value = '';
        document.getElementById('adler32Hash').value = '';
    });

    // MD5 hash function
    async function md5Hash(message) {
        const msgBuffer = new TextEncoder().encode(message);
        const hashBuffer = await crypto.subtle.digest('MD5', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }

    // SHA-1 hash function
    async function sha1Hash(message) {
        const msgBuffer = new TextEncoder().encode(message);
        const hashBuffer = await crypto.subtle.digest('SHA-1', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }

    // SHA-256 hash function
    async function sha256Hash(message) {
        const msgBuffer = new TextEncoder().encode(message);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }

    // SHA-512 hash function
    async function sha512Hash(message) {
        const msgBuffer = new TextEncoder().encode(message);
        const hashBuffer = await crypto.subtle.digest('SHA-512', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }

    // CRC32 hash function
    function crc32Hash(str) {
        const crcTable = [];
        
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
        
        let hex = (crc >>> 0).toString(16).toUpperCase();
        while (hex.length < 8) {
            hex = '0' + hex;
        }
        
        return hex;
    }

    // Adler32 hash function
    function adler32Hash(str) {
        const MOD_ADLER = 65521;
        
        let a = 1;
        let b = 0;
        
        for (let i = 0; i < str.length; i++) {
            a += str.charCodeAt(i);
            b += a;
            
            a %= MOD_ADLER;
            b %= MOD_ADLER;
        }
        
        const adler32 = (b << 16) | a;
        
        let hex = (adler32 >>> 0).toString(16).toUpperCase();
        while (hex.length < 8) {
            hex = '0' + hex;
        }
        
        return hex;
    }

    // Copy to clipboard function
    window.copyToClipboard = function(elementId) {
        const element = document.getElementById(elementId);
        if (element.value) {
            element.select();
            document.execCommand('copy');
            alert('Hash copied to clipboard: ' + element.value);
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
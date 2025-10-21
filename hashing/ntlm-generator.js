document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('passwordInput');
    const outputNTLM = document.getElementById('outputNTLM');
    const generateNTLM = document.getElementById('generateNTLM');
    const clearAll = document.getElementById('clearAll');
    const copyNTLM = document.getElementById('copyNTLM');
    const compareNTLM = document.getElementById('compareNTLM');

    // Generate NTLM hash
    generateNTLM.addEventListener('click', async function() {
        const password = passwordInput.value;
        if (password) {
            try {
                const ntlm = await generateNTLMHash(password);
                outputNTLM.value = ntlm;
            } catch (error) {
                alert('Error generating NTLM hash: ' + error.message);
            }
        } else {
            alert('Please enter a password to hash.');
        }
    });

    // Clear all fields
    clearAll.addEventListener('click', function() {
        passwordInput.value = '';
        outputNTLM.value = '';
    });

    // Copy NTLM to clipboard
    copyNTLM.addEventListener('click', function() {
        if (outputNTLM.value) {
            outputNTLM.select();
            document.execCommand('copy');
            alert('NTLM hash copied to clipboard!');
        }
    });

    // Compare NTLM functionality
    compareNTLM.addEventListener('click', function() {
        const ntlm1 = prompt('Enter first NTLM hash:');
        const ntlm2 = prompt('Enter second NTLM hash:');
        
        if (ntlm1 && ntlm2) {
            if (ntlm1.toLowerCase() === ntlm2.toLowerCase()) {
                alert('NTLM hashes match! ✓');
            } else {
                alert('NTLM hashes do not match! ✗');
            }
        }
    });

    // NTLM hash generation (simplified for demonstration)
    async function generateNTLMHash(password) {
        // Note: NTLM uses MD4 hashing
        // This is a simplified version for demonstration
        // In a real implementation, you would use a library like node-md4
        
        // Create a mock NTLM hash based on password
        const utf16le = password.split('').map(char => 
            String.fromCharCode(char.charCodeAt(0) & 0xFF, char.charCodeAt(0) >> 8)
        ).join('');
        
        // For demonstration, we'll create a mock hash
        // In reality, NTLM uses MD4 of UTF-16LE encoded password
        const base = 'NTLM' + password + Date.now();
        let hash = '';
        for (let i = 0; i < 32; i++) { // NTLM produces 128-bit (16-byte) hash
            hash += Math.floor(Math.random() * 16).toString(16);
        }
        return hash.toUpperCase();
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
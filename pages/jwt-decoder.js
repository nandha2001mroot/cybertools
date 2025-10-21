document.addEventListener('DOMContentLoaded', function() {
    const jwtInput = document.getElementById('jwtInput');
    const decodeJwt = document.getElementById('decodeJwt');
    const clearAll = document.getElementById('clearAll');
    const headerOutput = document.getElementById('headerOutput');
    const payloadOutput = document.getElementById('payloadOutput');
    const signatureOutput = document.getElementById('signatureOutput');

    // Decode JWT
    decodeJwt.addEventListener('click', function() {
        const jwt = jwtInput.value.trim();
        if (!jwt) {
            alert('Please enter a JWT token to decode.');
            return;
        }

        try {
            const parts = jwt.split('.');
            if (parts.length !== 3) {
                throw new Error('Invalid JWT format: Must have 3 parts separated by dots');
            }

            const header = decodeBase64(parts[0]);
            const payload = decodeBase64(parts[1]);
            const signature = parts[2];

            headerOutput.textContent = JSON.stringify(JSON.parse(header), null, 2);
            payloadOutput.textContent = JSON.stringify(JSON.parse(payload), null, 2);
            signatureOutput.textContent = signature;
        } catch (error) {
            alert('Error decoding JWT: ' + error.message);
        }
    });

    // Clear all fields
    clearAll.addEventListener('click', function() {
        jwtInput.value = '';
        headerOutput.textContent = '-';
        payloadOutput.textContent = '-';
        signatureOutput.textContent = '-';
    });

    // Decode Base64 function
    function decodeBase64(base64) {
        // Add padding if needed
        while (base64.length % 4 !== 0) {
            base64 += '=';
        }
        
        // Replace URL-safe characters
        base64 = base64.replace(/-/g, '+').replace(/_/g, '/');
        
        // Decode
        const binaryString = atob(base64);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        
        // Convert to UTF-8
        const decoder = new TextDecoder();
        return decoder.decode(bytes);
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
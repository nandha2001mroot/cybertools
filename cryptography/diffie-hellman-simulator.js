document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const privateKeyA = document.getElementById('privateKeyA');
    const privateKeyB = document.getElementById('privateKeyB');
    const publicKeyA = document.getElementById('publicKeyA');
    const publicKeyB = document.getElementById('publicKeyB');
    const prime = document.getElementById('prime');
    const generator = document.getElementById('generator');
    const sharedSecretA = document.getElementById('sharedSecretA');
    const sharedSecretB = document.getElementById('sharedSecretB');
    const calculateKeys = document.getElementById('calculateKeys');
    const generateParams = document.getElementById('generateParams');
    const clearAll = document.getElementById('clearAll');

    // Calculate keys
    calculateKeys.addEventListener('click', function() {
        const a = parseInt(privateKeyA.value);
        const b = parseInt(privateKeyB.value);
        const p = parseInt(prime.value);
        const g = parseInt(generator.value);

        if (!a || !b || !p || !g) {
            alert('Please enter all required values.');
            return;
        }

        try {
            // Calculate public keys
            const A = modPow(g, a, p);
            const B = modPow(g, b, p);
            
            publicKeyA.value = A;
            publicKeyB.value = B;

            // Calculate shared secrets
            const secretA = modPow(B, a, p);
            const secretB = modPow(A, b, p);

            sharedSecretA.textContent = secretA;
            sharedSecretB.textContent = secretB;

            if (secretA === secretB) {
                sharedSecretA.style.color = 'green';
                sharedSecretB.style.color = 'green';
            } else {
                sharedSecretA.style.color = 'red';
                sharedSecretB.style.color = 'red';
            }
        } catch (error) {
            alert('Error calculating keys: ' + error.message);
        }
    });

    // Generate parameters
    generateParams.addEventListener('click', function() {
        // Use a known safe prime for demonstration
        prime.value = 23; // Small prime for demonstration
        generator.value = 5;
        
        // Generate random private keys
        privateKeyA.value = Math.floor(Math.random() * 10) + 2;
        privateKeyB.value = Math.floor(Math.random() * 10) + 2;
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        privateKeyA.value = '';
        privateKeyB.value = '';
        publicKeyA.value = '';
        publicKeyB.value = '';
        prime.value = '23';
        generator.value = '5';
        sharedSecretA.textContent = '-';
        sharedSecretB.textContent = '-';
        sharedSecretA.style.color = 'inherit';
        sharedSecretB.style.color = 'inherit';
    });

    // Modular exponentiation function
    function modPow(base, exponent, modulus) {
        if (modulus === 1) return 0;
        
        let result = 1;
        base = base % modulus;
        
        while (exponent > 0) {
            if (exponent % 2 === 1) {
                result = (result * base) % modulus;
            }
            exponent = Math.floor(exponent / 2);
            base = (base * base) % modulus;
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
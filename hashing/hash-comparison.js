document.addEventListener('DOMContentLoaded', function() {
    const firstHash = document.getElementById('firstHash');
    const secondHash = document.getElementById('secondHash');
    const compareHashes = document.getElementById('compareHashes');
    const clearAll = document.getElementById('clearAll');
    const comparisonResult = document.getElementById('comparisonResult');
    const resultText = document.getElementById('resultText');
    const hashTypes = document.getElementById('hashTypes');

    // Compare hashes
    compareHashes.addEventListener('click', function() {
        const hash1 = firstHash.value.trim();
        const hash2 = secondHash.value.trim();
        
        if (!hash1 || !hash2) {
            alert('Please enter both hash values to compare.');
            return;
        }
        
        // Normalize hashes (remove spaces, convert to lowercase)
        const normalizedHash1 = hash1.replace(/\s/g, '').toLowerCase();
        const normalizedHash2 = hash2.replace(/\s/g, '').toLowerCase();
        
        if (normalizedHash1 === normalizedHash2) {
            comparisonResult.className = 'alert alert-success';
            resultText.innerHTML = '✓ Hashes match! The data integrity is verified.';
        } else {
            comparisonResult.className = 'alert alert-danger';
            resultText.innerHTML = '✗ Hashes do not match! The data may have been tampered with.';
        }
        
        comparisonResult.style.display = 'block';
        
        // Update hash types table
        updateHashTypesTable(normalizedHash1, normalizedHash2);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        firstHash.value = '';
        secondHash.value = '';
        comparisonResult.style.display = 'none';
        hashTypes.innerHTML = '<tr><td colspan="3" class="text-center">Enter hashes to detect types</td></tr>';
    });

    // Update hash types table
    function updateHashTypesTable(hash1, hash2) {
        const type1 = detectHashType(hash1);
        const type2 = detectHashType(hash2);
        
        hashTypes.innerHTML = `
            <tr>
                <td>${hash1.substring(0, 20)}${hash1.length > 20 ? '...' : ''}</td>
                <td>${type1}</td>
                <td>${hash1.length} chars</td>
            </tr>
            <tr>
                <td>${hash2.substring(0, 20)}${hash2.length > 20 ? '...' : ''}</td>
                <td>${type2}</td>
                <td>${hash2.length} chars</td>
            </tr>
        `;
    }

    // Detect hash type based on length
    function detectHashType(hash) {
        // Remove spaces and check length
        const cleanHash = hash.replace(/\s/g, '');
        
        switch(cleanHash.length) {
            case 8:
                return 'CRC32 or similar';
            case 32:
                return 'MD5';
            case 40:
                return 'SHA-1';
            case 56:
                return 'SHA3-224';
            case 64:
                return 'SHA-256 or SHA3-256';
            case 96:
                return 'SHA3-384';
            case 128:
                return 'SHA-512 or SHA3-512';
            default:
                return 'Unknown (' + cleanHash.length + ' chars)';
        }
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
document.addEventListener('DOMContentLoaded', function() {
    const sourceInput = document.getElementById('sourceInput');
    const scanAPIKeys = document.getElementById('scanAPIKeys');
    const fetchSource = document.getElementById('fetchSource');
    const clearAll = document.getElementById('clearAll');
    const secretsResults = document.getElementById('secretsResults');

    // Sample API key patterns
    const apiKeyPatterns = [
        { name: 'AWS Access Key', regex: /AKIA[0-9A-Z]{16}/g, example: 'AKIAGIRE23FHK345JKL2' },
        { name: 'Google API Key', regex: /AIza[0-9A-Za-z_-]{35}/g, example: 'AIzaSyB23456789012345678901234567890123' },
        { name: 'GitHub Token', regex: /ghp_[a-zA-Z0-9]{36}/g, example: 'ghp_A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8' },
        { name: 'Slack Token', regex: /xox[baprs]-[0-9a-zA-Z-]+/g, example: 'xoxb-123456789012-1234567890123-AbCdEfGhIjKlMnOpQrStUvWx' }
    ];

    // Scan API keys
    scanAPIKeys.addEventListener('click', function() {
        const source = sourceInput.value.trim();
        
        if (!source) {
            alert('Please enter source code or text to scan.');
            return;
        }

        scanForAPIKeys(source);
    });

    // Fetch source from URL
    fetchSource.addEventListener('click', function() {
        const url = prompt('Enter URL to fetch source from:');
        
        if (url) {
            // In a real implementation, you would fetch the source
            // For demonstration, we'll use mock source
            const mockSource = `const awsKey = 'AKIAGIRE23FHK345JKL2';
const googleApiKey = 'AIzaSyB23456789012345678901234567890123';
const githubToken = 'ghp_A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8';
const slackToken = 'xoxb-123456789012-1234567890123-AbCdEfGhIjKlMnOpQrStUvWx';
console.log('API keys in source code');`;
            
            sourceInput.value = mockSource;
            scanForAPIKeys(mockSource);
        }
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        sourceInput.value = '';
        secretsResults.innerHTML = '';
        clearResults();
    });

    // Scan for API keys
    function scanForAPIKeys(source) {
        const foundSecrets = [];
        
        apiKeyPatterns.forEach(pattern => {
            const matches = source.match(pattern.regex);
            if (matches) {
                matches.forEach(match => {
                    foundSecrets.push({
                        type: pattern.name,
                        value: match,
                        location: 'Line ' + (source.split('\n').findIndex(line => line.includes(match)) + 1)
                    });
                });
            }
        });

        // Display results
        secretsResults.innerHTML = '';
        
        if (foundSecrets.length === 0) {
            document.getElementById('apiKeysFound').textContent = '0';
            document.getElementById('secretTypes').textContent = 'None';
            document.getElementById('confidenceLevel').textContent = 'High';
            document.getElementById('riskAssessment').textContent = 'No exposed secrets found';
        } else {
            foundSecrets.forEach(secret => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${secret.type}</td>
                    <td>${secret.value}</td>
                    <td>${secret.location}</td>
                    <td><span class="badge bg-danger">High</span></td>
                `;
                secretsResults.appendChild(row);
            });

            document.getElementById('apiKeysFound').textContent = foundSecrets.length;
            document.getElementById('secretTypes').textContent = foundSecrets.map(s => s.type).join(', ');
            document.getElementById('confidenceLevel').textContent = 'High';
            document.getElementById('riskAssessment').textContent = 'Exposed secrets found';
        }
    }

    // Clear results
    function clearResults() {
        document.getElementById('apiKeysFound').textContent = '-';
        document.getElementById('secretTypes').textContent = '-';
        document.getElementById('confidenceLevel').textContent = '-';
        document.getElementById('riskAssessment').textContent = '-';
        secretsResults.innerHTML = '';
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
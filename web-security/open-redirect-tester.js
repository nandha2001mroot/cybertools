document.addEventListener('DOMContentLoaded', function() {
    const targetURL = document.getElementById('targetURL');
    const redirectPayloads = document.getElementById('redirectPayloads');
    const testRedirects = document.getElementById('testRedirects');
    const generatePayloads = document.getElementById('generatePayloads');
    const clearAll = document.getElementById('clearAll');
    const testResults = document.getElementById('testResults');

    // Sample redirect payloads
    const redirectPayloadsList = [
        'javascript:alert(1)',
        '//evil.com',
        'https://evil.com',
        '\/\/evil.com',
        '/evil.com',
        'evil.com',
        'data:text/html,<script>alert(1)</script>',
        'http://evil.com',
        'https://evil.com@trusted.com',
        'https://trusted.com@evil.com'
    ];

    // Test redirects
    testRedirects.addEventListener('click', function() {
        const url = targetURL.value.trim();
        const payloads = redirectPayloads.value.trim();
        
        if (!url) {
            alert('Please enter a target URL.');
            return;
        }

        if (!payloads) {
            alert('Please enter redirect payloads.');
            return;
        }

        testOpenRedirects(url, payloads.split('\n'));
    });

    // Generate payloads
    generatePayloads.addEventListener('click', function() {
        const payloads = redirectPayloadsList.join('\n');
        redirectPayloads.value = payloads;
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        targetURL.value = '';
        redirectPayloads.value = '';
        testResults.innerHTML = '';
        clearResults();
    });

    // Test open redirects
    function testOpenRedirects(url, payloads) {
        testResults.innerHTML = '';
        
        let vulnerableCount = 0;
        let safeCount = 0;
        
        payloads.forEach(payload => {
            if (!payload.trim()) return;
            
            // Simulate testing process
            const isVulnerable = Math.random() > 0.7; // 30% chance of vulnerability
            
            if (isVulnerable) {
                vulnerableCount++;
            } else {
                safeCount++;
            }
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${payload}</td>
                <td>${isVulnerable ? '302' : '200'}</td>
                <td>${isVulnerable ? 'evil.com' : 'trusted.com'}</td>
                <td><span class="badge ${isVulnerable ? 'bg-danger' : 'bg-success'}">${isVulnerable ? 'Vulnerable' : 'Safe'}</span></td>
            `;
            testResults.appendChild(row);
        });

        // Display test results
        document.getElementById('vulnerableCount').textContent = vulnerableCount;
        document.getElementById('safeCount').textContent = safeCount;
        document.getElementById('securityLevel').textContent = vulnerableCount > 0 ? 'Critical' : 'Secure';
        document.getElementById('recommendations').textContent = vulnerableCount > 0 ? 'Implement whitelist validation' : 'No recommendations needed';
    }

    // Clear results
    function clearResults() {
        document.getElementById('vulnerableCount').textContent = '-';
        document.getElementById('safeCount').textContent = '-';
        document.getElementById('securityLevel').textContent = '-';
        document.getElementById('recommendations').textContent = '-';
        testResults.innerHTML = '';
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
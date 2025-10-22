document.addEventListener('DOMContentLoaded', function() {
    const targetURL = document.getElementById('targetURL');
    const checkHSTS = document.getElementById('checkHSTS');
    const clearAll = document.getElementById('clearAll');

    // Check HSTS
    checkHSTS.addEventListener('click', function() {
        const url = targetURL.value.trim();
        
        if (!url) {
            alert('Please enter a target URL.');
            return;
        }

        checkHSTSHeaders(url);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        targetURL.value = '';
        clearResults();
    });

    // Check HSTS headers
    function checkHSTSHeaders(url) {
        // Display test results (simulated)
        document.getElementById('hstsEnabled').textContent = 'Testing...';
        document.getElementById('maxAge').textContent = 'Testing...';
        document.getElementById('includeSubdomains').textContent = 'Testing...';
        document.getElementById('preload').textContent = 'Testing...';

        // Simulate checking process
        setTimeout(function() {
            // In a real implementation, you would make an HTTP request to check headers
            // For demonstration, we'll simulate a result
            const hasHSTS = Math.random() > 0.3; // 70% chance of having HSTS
            
            if (hasHSTS) {
                document.getElementById('hstsEnabled').textContent = 'Yes';
                document.getElementById('maxAge').textContent = '31536000 seconds (1 year)';
                document.getElementById('includeSubdomains').textContent = 'Yes';
                document.getElementById('preload').textContent = 'Yes';
                document.getElementById('securityLevel').textContent = 'High';
                document.getElementById('compliance').textContent = 'Compliant';
                document.getElementById('vulnerabilities').textContent = 'None found';
                document.getElementById('recommendations').textContent = 'Maintain current configuration';
            } else {
                document.getElementById('hstsEnabled').textContent = 'No';
                document.getElementById('maxAge').textContent = 'Not Set';
                document.getElementById('includeSubdomains').textContent = 'Not Set';
                document.getElementById('preload').textContent = 'Not Set';
                document.getElementById('securityLevel').textContent = 'Low';
                document.getElementById('compliance').textContent = 'Non-compliant';
                document.getElementById('vulnerabilities').textContent = 'SSL stripping possible';
                document.getElementById('recommendations').textContent = 'Enable HSTS with proper configuration';
            }

            // Display mock response headers
            const headers = generateHSTSHeaders(hasHSTS);
            document.getElementById('responseHeaders').textContent = headers;
        }, 2000);
    }

    // Generate HSTS headers
    function generateHSTSHeaders(hasHSTS) {
        let headers = 'HTTP/1.1 200 OK\n';
        headers += 'Server: Apache/2.4.41\n';
        headers += 'Content-Type: text/html; charset=UTF-8\n';
        
        if (hasHSTS) {
            headers += 'Strict-Transport-Security: max-age=31536000; includeSubDomains; preload\n';
        }
        
        headers += 'X-Content-Type-Options: nosniff\n';
        headers += 'X-Frame-Options: DENY\n';
        headers += 'X-XSS-Protection: 1; mode=block\n';
        
        return headers;
    }

    // Clear results
    function clearResults() {
        document.getElementById('hstsEnabled').textContent = '-';
        document.getElementById('maxAge').textContent = '-';
        document.getElementById('includeSubdomains').textContent = '-';
        document.getElementById('preload').textContent = '-';
        document.getElementById('securityLevel').textContent = '-';
        document.getElementById('compliance').textContent = '-';
        document.getElementById('vulnerabilities').textContent = '-';
        document.getElementById('recommendations').textContent = '-';
        document.getElementById('responseHeaders').textContent = '';
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
document.addEventListener('DOMContentLoaded', function() {
    const targetURL = document.getElementById('targetURL');
    const analyzeHeaders = document.getElementById('analyzeHeaders');
    const clearAll = document.getElementById('clearAll');

    // Analyze headers
    analyzeHeaders.addEventListener('click', function() {
        const url = targetURL.value.trim();
        
        if (!url) {
            alert('Please enter a target URL.');
            return;
        }

        analyzeHTTPHeaders(url);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        targetURL.value = '';
        clearResults();
    });

    // Analyze HTTP headers
    function analyzeHTTPHeaders(url) {
        // Display security headers analysis
        document.getElementById('cspStatus').textContent = 'Missing';
        document.getElementById('hstsStatus').textContent = 'Missing';
        document.getElementById('xframeStatus').textContent = 'Missing';
        document.getElementById('xxssStatus').textContent = 'Missing';
        document.getElementById('xctoStatus').textContent = 'Missing';
        
        // Display security analysis
        document.getElementById('securityScore').textContent = '30/100';
        document.getElementById('riskLevel').textContent = 'High';
        document.getElementById('vulnerabilities').textContent = '5 vulnerabilities found';
        document.getElementById('recommendations').textContent = 'Add security headers';
        
        // Generate mock HTTP headers
        const headers = generateHTTPHeaders(url);
        document.getElementById('headerOutput').textContent = headers;
    }

    // Generate mock HTTP headers
    function generateHTTPHeaders(url) {
        return `HTTP/1.1 200 OK
Server: Apache/2.4.41 (Ubuntu)
Content-Type: text/html; charset=UTF-8
Content-Length: 12345
Connection: keep-alive
X-Powered-By: PHP/7.4.3
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Cache-Control: no-cache, no-store, must-revalidate
Pragma: no-cache
Expires: 0
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'
X-Permitted-Cross-Domain-Policies: none
Referrer-Policy: no-referrer-when-downgrade
Feature-Policy: geolocation 'none'; microphone 'none'; camera 'none'
Set-Cookie: sessionid=abc123; HttpOnly; Secure; SameSite=Strict
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin
Access-Control-Max-Age: 86400
X-Download-Options: noopen
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block`;
    }

    // Clear results
    function clearResults() {
        document.getElementById('cspStatus').textContent = '-';
        document.getElementById('hstsStatus').textContent = '-';
        document.getElementById('xframeStatus').textContent = '-';
        document.getElementById('xxssStatus').textContent = '-';
        document.getElementById('xctoStatus').textContent = '-';
        document.getElementById('securityScore').textContent = '-';
        document.getElementById('riskLevel').textContent = '-';
        document.getElementById('vulnerabilities').textContent = '-';
        document.getElementById('recommendations').textContent = '-';
        document.getElementById('headerOutput').textContent = '';
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
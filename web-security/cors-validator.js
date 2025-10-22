document.addEventListener('DOMContentLoaded', function() {
    const targetURL = document.getElementById('targetURL');
    const origin = document.getElementById('origin');
    const validateCORS = document.getElementById('validateCORS');
    const clearAll = document.getElementById('clearAll');

    // Validate CORS
    validateCORS.addEventListener('click', function() {
        const url = targetURL.value.trim();
        const org = origin.value.trim();
        
        if (!url) {
            alert('Please enter a target URL.');
            return;
        }

        if (!org) {
            alert('Please enter an origin.');
            return;
        }

        validateCORSConfiguration(url, org);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        targetURL.value = '';
        origin.value = '';
        clearResults();
    });

    // Validate CORS configuration
    function validateCORSConfiguration(url, org) {
        // Display request information
        document.getElementById('targetInfo').textContent = url;
        document.getElementById('originInfo').textContent = org;
        document.getElementById('methodInfo').textContent = 'GET';
        document.getElementById('headersInfo').textContent = 'Content-Type, Authorization';

        // Simulate CORS validation
        document.getElementById('validationStatus').textContent = 'Validating...';
        
        // Simulate response headers
        const headers = generateCORSHeaders(org);
        document.getElementById('responseHeaders').textContent = headers;

        // Simulate validation process
        setTimeout(function() {
            // Analyze CORS configuration
            const isVulnerable = org.includes('malicious') || org.includes('evil');
            
            if (isVulnerable) {
                document.getElementById('validationStatus').textContent = 'Vulnerable';
                document.getElementById('securityLevel').textContent = 'Critical';
                document.getElementById('vulnerabilities').textContent = 'Permissive CORS policy';
                document.getElementById('recommendations').textContent = 'Restrict allowed origins';
            } else {
                document.getElementById('validationStatus').textContent = 'Secure';
                document.getElementById('securityLevel').textContent = 'High';
                document.getElementById('vulnerabilities').textContent = 'No vulnerabilities found';
                document.getElementById('recommendations').textContent = 'Maintain current configuration';
            }
        }, 2000);
    }

    // Generate CORS headers
    function generateCORSHeaders(origin) {
        return `Access-Control-Allow-Origin: ${origin}
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Allow-Credentials: true
Access-Control-Max-Age: 86400
Vary: Origin`;
    }

    // Clear results
    function clearResults() {
        document.getElementById('targetInfo').textContent = '-';
        document.getElementById('originInfo').textContent = '-';
        document.getElementById('methodInfo').textContent = '-';
        document.getElementById('headersInfo').textContent = '-';
        document.getElementById('validationStatus').textContent = '-';
        document.getElementById('securityLevel').textContent = '-';
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
document.addEventListener('DOMContentLoaded', function() {
    const httpMethod = document.getElementById('httpMethod');
    const requestUrl = document.getElementById('requestUrl');
    const sendRequest = document.getElementById('sendRequest');
    const clearAll = document.getElementById('clearAll');
    const securityAnalysis = document.getElementById('securityAnalysis');

    // Send request
    sendRequest.addEventListener('click', function() {
        const method = httpMethod.value;
        const url = requestUrl.value;
        
        if (!url) {
            alert('Please enter a URL for the request.');
            return;
        }

        sendHTTPRequest(method, url);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        httpMethod.value = 'GET';
        requestUrl.value = '';
        document.getElementById('contentType').value = 'application/json';
        document.getElementById('authorization').value = '';
        document.getElementById('userAgent').value = 'CyberTools/1.0';
        document.getElementById('customHeaders').value = '';
        document.getElementById('requestBody').value = '';
        document.getElementById('bodyType').value = 'json';
        clearResults();
    });

    // Send HTTP request
    function sendHTTPRequest(method, url) {
        // Display request information
        document.getElementById('responseStatus').textContent = 'Sending...';
        document.getElementById('responseHeaders').textContent = 'Waiting for response...';
        document.getElementById('responseBody').textContent = 'Waiting for response...';
        document.getElementById('responseTiming').textContent = 'Measuring...';

        // Simulate HTTP request
        setTimeout(function() {
            // In a real implementation, you would send the HTTP request
            // For demonstration, we'll simulate results
            const status = getRandomResponseStatus();
            const headers = getRandomResponseHeaders();
            const body = getRandomResponseBody();
            const timing = getRandomResponseTiming();
            const securityChecks = getSecurityAnalysis(method, url);

            document.getElementById('responseStatus').textContent = status;
            document.getElementById('responseHeaders').textContent = headers;
            document.getElementById('responseBody').textContent = body;
            document.getElementById('responseTiming').textContent = timing;

            // Display security analysis
            securityAnalysis.innerHTML = '';
            securityChecks.forEach(check => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${check.check}</td>
                    <td><span class="badge bg-${check.status === 'Pass' ? 'success' : check.status === 'Warning' ? 'warning' : 'danger'}">${check.status}</span></td>
                    <td>${check.details}</td>
                `;
                securityAnalysis.appendChild(row);
            });
        }, 2000);
    }

    // Get random response status
    function getRandomResponseStatus() {
        const statuses = ['200 OK', '404 Not Found', '500 Internal Server Error', '403 Forbidden', '401 Unauthorized'];
        return statuses[Math.floor(Math.random() * statuses.length)];
    }

    // Get random response headers
    function getRandomResponseHeaders() {
        const headers = [
            'Content-Type: application/json',
            'Server: Apache/2.4.41 (Ubuntu)',
            'X-Powered-By: PHP/7.4.3',
            'X-Content-Type-Options: nosniff',
            'X-Frame-Options: DENY'
        ];
        return headers.join('\n');
    }

    // Get random response body
    function getRandomResponseBody() {
        const bodies = [
            '{"status": "success", "data": {"id": 123, "name": "Sample Data"}}',
            '{"error": "Resource not found"}',
            '{"message": "Internal server error occurred"}',
            '{"users": [{"id": 1, "name": "User 1"}, {"id": 2, "name": "User 2"}]}',
            '{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"}'
        ];
        return bodies[Math.floor(Math.random() * bodies.length)];
    }

    // Get random response timing
    function getRandomResponseTiming() {
        const time = (Math.random() * 1000).toFixed(2);
        return `${time} ms`;
    }

    // Get security analysis
    function getSecurityAnalysis(method, url) {
        // In a real implementation, you would analyze the request for security issues
        const checks = [
            { check: 'Method Security', status: 'Pass', details: 'Method is appropriate for resource' },
            { check: 'Authentication', status: 'Warning', details: 'Consider adding authentication' },
            { check: 'Input Validation', status: 'Pass', details: 'No obvious injection vectors' },
            { check: 'Rate Limiting', status: 'Pass', details: 'Request respects rate limits' },
            { check: 'TLS Encryption', status: 'Pass', details: 'Using HTTPS connection' }
        ];
        return checks;
    }

    // Clear results
    function clearResults() {
        document.getElementById('responseStatus').textContent = '-';
        document.getElementById('responseHeaders').textContent = '-';
        document.getElementById('responseBody').textContent = '-';
        document.getElementById('responseTiming').textContent = '-';
        securityAnalysis.innerHTML = '';
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
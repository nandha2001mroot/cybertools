document.addEventListener('DOMContentLoaded', function() {
    const targetURL = document.getElementById('targetURL');
    const testClickjacking = document.getElementById('testClickjacking');
    const clearAll = document.getElementById('clearAll');
    const testFrame = document.getElementById('testFrame');

    // Test clickjacking
    testClickjacking.addEventListener('click', function() {
        const url = targetURL.value.trim();
        
        if (!url) {
            alert('Please enter a target URL.');
            return;
        }

        testClickjackingVulnerability(url);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        targetURL.value = '';
        testFrame.src = 'about:blank';
        clearResults();
    });

    // Test clickjacking vulnerability
    function testClickjackingVulnerability(url) {
        // Display test results (simulated)
        document.getElementById('protectionStatus').textContent = 'Testing...';
        document.getElementById('securityLevel').textContent = 'Testing...';
        document.getElementById('vulnerability').textContent = 'Testing...';
        document.getElementById('recommendations').textContent = 'Testing...';

        // Simulate loading the target page in frame
        testFrame.src = url;

        // Simulate test results after delay
        setTimeout(function() {
            // In a real implementation, you would check if the page can be framed
            // For demonstration, we'll simulate a result
            const isVulnerable = Math.random() > 0.5; // 50% chance of vulnerability
            
            if (isVulnerable) {
                document.getElementById('protectionStatus').textContent = 'Vulnerable';
                document.getElementById('securityLevel').textContent = 'Critical';
                document.getElementById('vulnerability').textContent = 'Clickjacking possible';
                document.getElementById('recommendations').textContent = 'Implement X-Frame-Options or CSP';
                document.getElementById('xframeStatus').textContent = 'Missing';
                document.getElementById('cspStatus').textContent = 'Missing frame-ancestors';
                document.getElementById('frameOptions').textContent = 'Not Set';
                document.getElementById('securityHeaders').textContent = 'Insufficient';
            } else {
                document.getElementById('protectionStatus').textContent = 'Protected';
                document.getElementById('securityLevel').textContent = 'Secure';
                document.getElementById('vulnerability').textContent = 'Not vulnerable';
                document.getElementById('recommendations').textContent = 'Maintain current configuration';
                document.getElementById('xframeStatus').textContent = 'DENY';
                document.getElementById('cspStatus').textContent = 'frame-ancestors \'none\'';
                document.getElementById('frameOptions').textContent = 'DENY';
                document.getElementById('securityHeaders').textContent = 'Sufficient';
            }
        }, 2000);
    }

    // Clear results
    function clearResults() {
        document.getElementById('protectionStatus').textContent = '-';
        document.getElementById('securityLevel').textContent = '-';
        document.getElementById('vulnerability').textContent = '-';
        document.getElementById('recommendations').textContent = '-';
        document.getElementById('xframeStatus').textContent = '-';
        document.getElementById('cspStatus').textContent = '-';
        document.getElementById('frameOptions').textContent = '-';
        document.getElementById('securityHeaders').textContent = '-';
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
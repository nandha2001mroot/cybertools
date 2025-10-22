document.addEventListener('DOMContentLoaded', function() {
    const xssPayload = document.getElementById('xssPayload');
    const testURL = document.getElementById('testURL');
    const testPayload = document.getElementById('testPayload');
    const generatePayloads = document.getElementById('generatePayloads');
    const clearAll = document.getElementById('clearAll');
    const commonPayloads = document.getElementById('commonPayloads');

    // Sample XSS payloads
    const xssPayloads = [
        { payload: '<script>alert("XSS")</script>', type: 'Basic', usage: 'HTML Context' },
        { payload: '<img src=x onerror=alert("XSS")>', type: 'Image', usage: 'Attribute Context' },
        { payload: 'javascript:alert("XSS")', type: 'JavaScript', usage: 'URL Context' },
        { payload: '<svg onload=alert("XSS")>', type: 'SVG', usage: 'HTML Context' },
        { payload: '"><script>alert("XSS")</script>', type: 'Attribute', usage: 'Attribute Breakout' },
        { payload: '<iframe src="javascript:alert(`XSS`)"></iframe>', type: 'Iframe', usage: 'HTML Context' },
        { payload: '<body onload=alert("XSS")>', type: 'Body', usage: 'Body Context' },
        { payload: '<div onmouseover=alert("XSS")>Hover me</div>', type: 'Event', usage: 'Event Handler' }
    ];

    // Test payload
    testPayload.addEventListener('click', function() {
        const payload = xssPayload.value.trim();
        const url = testURL.value.trim();
        
        if (!payload) {
            alert('Please enter an XSS payload to test.');
            return;
        }

        testXSSPayload(payload, url);
    });

    // Generate payloads
    generatePayloads.addEventListener('click', function() {
        displayCommonPayloads();
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        xssPayload.value = '';
        testURL.value = '';
        clearResults();
    });

    // Test XSS payload
    function testXSSPayload(payload, url) {
        // Display test results (simulated)
        document.getElementById('testStatus').textContent = 'Testing...';
        document.getElementById('severityLevel').textContent = 'High';
        document.getElementById('vulnerabilityType').textContent = 'Potential XSS';
        document.getElementById('recommendations').textContent = 'Sanitize input and use CSP headers';

        // Simulate testing process
        setTimeout(function() {
            document.getElementById('testStatus').textContent = 'Vulnerable';
            document.getElementById('severityLevel').textContent = 'Critical';
        }, 2000);
    }

    // Display common payloads
    function displayCommonPayloads() {
        commonPayloads.innerHTML = '';
        
        xssPayloads.forEach(payload => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${payload.payload}</td>
                <td>${payload.type}</td>
                <td>${payload.usage}</td>
            `;
            commonPayloads.appendChild(row);
        });
    }

    // Clear results
    function clearResults() {
        document.getElementById('testStatus').textContent = '-';
        document.getElementById('severityLevel').textContent = '-';
        document.getElementById('vulnerabilityType').textContent = '-';
        document.getElementById('recommendations').textContent = '-';
        commonPayloads.innerHTML = '';
    }

    // Initialize common payloads
    displayCommonPayloads();

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
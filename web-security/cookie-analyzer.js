document.addEventListener('DOMContentLoaded', function() {
    const cookieInput = document.getElementById('cookieInput');
    const analyzeCookies = document.getElementById('analyzeCookies');
    const clearAll = document.getElementById('clearAll');

    // Analyze cookies
    analyzeCookies.addEventListener('click', function() {
        const cookieString = cookieInput.value.trim();
        
        if (!cookieString) {
            alert('Please enter a cookie string to analyze.');
            return;
        }

        analyzeCookieString(cookieString);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        cookieInput.value = '';
        clearResults();
    });

    // Analyze cookie string
    function analyzeCookieString(cookieString) {
        // Parse cookie string
        const cookies = parseCookies(cookieString);
        
        if (cookies.length === 0) {
            alert('No valid cookies found in the input.');
            return;
        }

        // Analyze first cookie (for demonstration)
        const cookie = cookies[0];
        
        // Display cookie properties
        document.getElementById('cookieName').textContent = cookie.name || '-';
        document.getElementById('cookieValue').textContent = cookie.value || '-';
        document.getElementById('cookieDomain').textContent = cookie.domain || '-';
        document.getElementById('cookiePath').textContent = cookie.path || '-';
        document.getElementById('cookieExpires').textContent = cookie.expires || '-';

        // Display security analysis
        document.getElementById('httpOnlyStatus').textContent = cookie.httpOnly ? 'Yes' : 'No';
        document.getElementById('secureStatus').textContent = cookie.secure ? 'Yes' : 'No';
        document.getElementById('sameSiteStatus').textContent = cookie.sameSite || 'Not Set';
        
        // Calculate security level
        let securityLevel = 'Low';
        let vulnerabilities = [];
        
        if (cookie.httpOnly) {
            vulnerabilities.push('HttpOnly flag missing');
        }
        
        if (cookie.secure) {
            vulnerabilities.push('Secure flag missing');
        }
        
        if (!cookie.sameSite) {
            vulnerabilities.push('SameSite attribute missing');
        }
        
        if (vulnerabilities.length === 0) {
            securityLevel = 'High';
            vulnerabilities.push('No major vulnerabilities found');
        } else if (vulnerabilities.length === 1) {
            securityLevel = 'Medium';
        }

        document.getElementById('securityLevel').textContent = securityLevel;
        document.getElementById('vulnerabilities').textContent = vulnerabilities.join(', ');

        // Display full analysis
        document.getElementById('cookieAnalysis').textContent = JSON.stringify(cookie, null, 2);
    }

    // Parse cookies from string
    function parseCookies(cookieString) {
        const cookies = [];
        const pairs = cookieString.split(';');
        
        for (const pair of pairs) {
            const [name, value] = pair.trim().split('=');
            if (name) {
                cookies.push({
                    name: name.trim(),
                    value: value ? value.trim() : '',
                    domain: extractAttribute(pair, 'Domain'),
                    path: extractAttribute(pair, 'Path'),
                    expires: extractAttribute(pair, 'Expires'),
                    httpOnly: pair.toLowerCase().includes('httponly'),
                    secure: pair.toLowerCase().includes('secure'),
                    sameSite: extractAttribute(pair, 'SameSite')
                });
            }
        }
        
        return cookies;
    }

    // Extract attribute from cookie
    function extractAttribute(cookieString, attributeName) {
        const regex = new RegExp(`${attributeName}=([^;]+)`, 'i');
        const match = cookieString.match(regex);
        return match ? match[1].trim() : null;
    }

    // Clear results
    function clearResults() {
        document.getElementById('cookieName').textContent = '-';
        document.getElementById('cookieValue').textContent = '-';
        document.getElementById('cookieDomain').textContent = '-';
        document.getElementById('cookiePath').textContent = '-';
        document.getElementById('cookieExpires').textContent = '-';
        document.getElementById('httpOnlyStatus').textContent = '-';
        document.getElementById('secureStatus').textContent = '-';
        document.getElementById('sameSiteStatus').textContent = '-';
        document.getElementById('securityLevel').textContent = '-';
        document.getElementById('vulnerabilities').textContent = '-';
        document.getElementById('cookieAnalysis').textContent = '';
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
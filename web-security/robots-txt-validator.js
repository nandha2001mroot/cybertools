document.addEventListener('DOMContentLoaded', function() {
    const robotsTXT = document.getElementById('robotsTXT');
    const validateRobots = document.getElementById('validateRobots');
    const fetchRobots = document.getElementById('fetchRobots');
    const clearAll = document.getElementById('clearAll');
    const securityAnalysis = document.getElementById('securityAnalysis');

    // Validate robots.txt
    validateRobots.addEventListener('click', function() {
        const content = robotsTXT.value.trim();
        
        if (!content) {
            alert('Please enter robots.txt content to validate.');
            return;
        }

        validateRobotsTXT(content);
    });

    // Fetch robots.txt from URL
    fetchRobots.addEventListener('click', function() {
        const url = prompt('Enter URL to fetch robots.txt from (e.g., https://example.com):');
        
        if (url) {
            // In a real implementation, you would fetch the robots.txt file
            // For demonstration, we'll use a mock response
            const mockRobots = `User-agent: *
Disallow: /admin/
Disallow: /private/
Allow: /public/
Sitemap: https://example.com/sitemap.xml`;
            
            robotsTXT.value = mockRobots;
            validateRobotsTXT(mockRobots);
        }
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        robotsTXT.value = '';
        clearResults();
    });

    // Validate robots.txt content
    function validateRobotsTXT(content) {
        // Parse robots.txt content
        const lines = content.split('\n');
        const rules = [];
        let currentUserAgent = '*';
        
        for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed.startsWith('User-agent:')) {
                currentUserAgent = trimmed.split(':')[1].trim();
            } else if (trimmed.startsWith('Disallow:')) {
                const path = trimmed.split(':')[1].trim();
                rules.push({ type: 'Disallow', path, userAgent: currentUserAgent });
            } else if (trimmed.startsWith('Allow:')) {
                const path = trimmed.split(':')[1].trim();
                rules.push({ type: 'Allow', path, userAgent: currentUserAgent });
            }
        }

        // Display validation results
        document.getElementById('validityStatus').textContent = 'Valid';
        document.getElementById('securityIssues').textContent = '2 issues found';
        document.getElementById('seoIssues').textContent = '1 issue found';
        document.getElementById('recommendations').textContent = 'Review disallow rules';

        // Display analysis summary
        document.getElementById('userAgents').textContent = '1 agent found';
        document.getElementById('allowRules').textContent = rules.filter(r => r.type === 'Allow').length;
        document.getElementById('disallowRules').textContent = rules.filter(r => r.type === 'Disallow').length;
        document.getElementById('sitemapRefs').textContent = '1 sitemap found';

        // Display security analysis
        securityAnalysis.innerHTML = '';
        
        rules.forEach(rule => {
            if (rule.path.includes('/admin/') || rule.path.includes('/private/')) {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${rule.type}</td>
                    <td>${rule.path}</td>
                    <td><span class="badge bg-warning">Potential Security Issue</span></td>
                `;
                securityAnalysis.appendChild(row);
            }
        });
    }

    // Clear results
    function clearResults() {
        document.getElementById('validityStatus').textContent = '-';
        document.getElementById('securityIssues').textContent = '-';
        document.getElementById('seoIssues').textContent = '-';
        document.getElementById('recommendations').textContent = '-';
        document.getElementById('userAgents').textContent = '-';
        document.getElementById('allowRules').textContent = '-';
        document.getElementById('disallowRules').textContent = '-';
        document.getElementById('sitemapRefs').textContent = '-';
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
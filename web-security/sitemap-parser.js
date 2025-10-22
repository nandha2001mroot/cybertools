document.addEventListener('DOMContentLoaded', function() {
    const sitemapInput = document.getElementById('sitemapInput');
    const parseSitemap = document.getElementById('parseSitemap');
    const fetchSitemap = document.getElementById('fetchSitemap');
    const clearAll = document.getElementById('clearAll');
    const urlResults = document.getElementById('urlResults');

    // Parse sitemap
    parseSitemap.addEventListener('click', function() {
        const input = sitemapInput.value.trim();
        
        if (!input) {
            alert('Please enter sitemap URL or content.');
            return;
        }

        parseSitemapContent(input);
    });

    // Fetch sitemap from URL
    fetchSitemap.addEventListener('click', function() {
        const url = prompt('Enter sitemap URL (e.g., https://example.com/sitemap.xml):');
        
        if (url) {
            // In a real implementation, you would fetch the sitemap file
            // For demonstration, we'll use a mock sitemap
            const mockSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://example.com/</loc>
        <lastmod>2024-01-15</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://example.com/about</loc>
        <lastmod>2024-01-10</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://example.com/admin</loc>
        <lastmod>2024-01-05</lastmod>
        <changefreq>never</changefreq>
        <priority>0.1</priority>
    </url>
    <url>
        <loc>https://example.com/backup.zip</loc>
        <lastmod>2024-01-01</lastmod>
        <changefreq>never</changefreq>
        <priority>0.0</priority>
    </url>
</urlset>`;
            
            sitemapInput.value = mockSitemap;
            parseSitemapContent(mockSitemap);
        }
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        sitemapInput.value = '';
        clearResults();
    });

    // Parse sitemap content
    function parseSitemapContent(content) {
        // Mock parsing - in a real implementation, you would parse the XML
        const urls = [
            { url: 'https://example.com/', risk: 'Low', type: 'HTML' },
            { url: 'https://example.com/about', risk: 'Low', type: 'HTML' },
            { url: 'https://example.com/admin', risk: 'High', type: 'HTML' },
            { url: 'https://example.com/backup.zip', risk: 'Critical', type: 'ZIP' },
            { url: 'https://example.com/api/users', risk: 'Medium', type: 'JSON' },
            { url: 'https://example.com/config.php', risk: 'High', type: 'PHP' }
        ];

        // Display parse results
        document.getElementById('totalURLs').textContent = urls.length;
        document.getElementById('securityIssues').textContent = '3 issues found';
        document.getElementById('fileTypes').textContent = 'HTML, ZIP, PHP, JSON';
        document.getElementById('depthAnalysis').textContent = '2 levels deep';

        // Display security analysis
        document.getElementById('sensitiveURLs').textContent = '2 sensitive URLs';
        document.getElementById('hiddenDirs').textContent = '1 hidden directory';
        document.getElementById('adminAreas').textContent = '1 admin area';
        document.getElementById('recommendations').textContent = 'Secure admin access';

        // Display URL results
        urlResults.innerHTML = '';
        
        urls.forEach(url => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${url.url}</td>
                <td><span class="badge ${getRiskClass(url.risk)}">${url.risk}</span></td>
                <td>${url.type}</td>
            `;
            urlResults.appendChild(row);
        });
    }

    // Get risk class for badge
    function getRiskClass(risk) {
        switch(risk) {
            case 'Critical':
                return 'bg-danger';
            case 'High':
                return 'bg-warning';
            case 'Medium':
                return 'bg-info';
            case 'Low':
                return 'bg-success';
            default:
                return 'bg-secondary';
        }
    }

    // Clear results
    function clearResults() {
        document.getElementById('totalURLs').textContent = '-';
        document.getElementById('securityIssues').textContent = '-';
        document.getElementById('fileTypes').textContent = '-';
        document.getElementById('depthAnalysis').textContent = '-';
        document.getElementById('sensitiveURLs').textContent = '-';
        document.getElementById('hiddenDirs').textContent = '-';
        document.getElementById('adminAreas').textContent = '-';
        document.getElementById('recommendations').textContent = '-';
        urlResults.innerHTML = '';
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
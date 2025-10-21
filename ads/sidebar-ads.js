document.addEventListener('DOMContentLoaded', function() {
    const sidebarCode = document.getElementById('sidebarCode');
    const addSidebarAd = document.getElementById('addSidebarAd');
    const clearAll = document.getElementById('clearAll');
    const activeSidebarAds = document.getElementById('activeSidebarAds');

    // Add sidebar ad
    addSidebarAd.addEventListener('click', function() {
        const code = sidebarCode.value.trim();
        
        if (!code) {
            alert('Please enter sidebar ad code.');
            return;
        }

        addSidebarAdvertisement(code);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        sidebarCode.value = '';
        clearResults();
    });

    // Add sidebar advertisement
    function addSidebarAdvertisement(code) {
        // Display configuration information
        document.getElementById('sidebarSize').textContent = 'Detecting...';
        document.getElementById('sidebarPosition').textContent = 'Detecting...';
        document.getElementById('sidebarFrequency').textContent = 'Detecting...';
        document.getElementById('sidebarCompliance').textContent = 'Checking...';
        document.getElementById('sidebarOptimization').textContent = 'Analyzing...';

        // Simulate sidebar ad addition
        setTimeout(function() {
            // In a real implementation, you would add the sidebar ad
            // For demonstration, we'll simulate results
            const size = getRandomSidebarSize();
            const position = getRandomSidebarPosition();
            const frequency = getRandomSidebarFrequency();
            const compliance = getRandomSidebarCompliance();
            const optimization = getRandomSidebarOptimization();
            const impressions = '7,500';
            const clicks = '375';
            const ctr = '5.0%';
            const earnings = '$187.50';
            const revenue = '$0.025 CPC';

            document.getElementById('sidebarSize').textContent = size;
            document.getElementById('sidebarPosition').textContent = position;
            document.getElementById('sidebarFrequency').textContent = frequency;
            document.getElementById('sidebarCompliance').textContent = compliance;
            document.getElementById('sidebarOptimization').textContent = optimization;
            document.getElementById('sidebarImpressions').textContent = impressions;
            document.getElementById('sidebarClicks').textContent = clicks;
            document.getElementById('sidebarCtr').textContent = ctr;
            document.getElementById('sidebarEarnings').textContent = earnings;
            document.getElementById('sidebarRevenue').textContent = revenue;

            // Add to active sidebar ads
            activeSidebarAds.innerHTML = '';
            const ads = generateMockSidebarAds();
            
            ads.forEach(ad => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${ad.name}</td>
                    <td>${ad.size}</td>
                    <td>${ad.position}</td>
                    <td><span class="badge bg-${ad.status === 'Active' ? 'success' : 'secondary'}">${ad.status}</span></td>
                    <td>
                        <button class="btn btn-sm btn-outline-primary me-1">Edit</button>
                        <button class="btn btn-sm btn-outline-danger">Delete</button>
                    </td>
                `;
                activeSidebarAds.appendChild(row);
            });
        }, 2000);
    }

    // Get random sidebar size
    function getRandomSidebarSize() {
        const sizes = ['120x600', '160x600', '300x600', '180x150', '125x125'];
        return sizes[Math.floor(Math.random() * sizes.length)];
    }

    // Get random sidebar position
    function getRandomSidebarPosition() {
        const positions = ['Left Sidebar', 'Right Sidebar', 'Both Sidebars', 'Top of Sidebar'];
        return positions[Math.floor(Math.random() * positions.length)];
    }

    // Get random sidebar frequency
    function getRandomSidebarFrequency() {
        const frequencies = ['Every Page', 'Every 2 Pages', 'Once Per Session', 'Random'];
        return frequencies[Math.floor(Math.random() * frequencies.length)];
    }

    // Get random sidebar compliance
    function getRandomSidebarCompliance() {
        return Math.random() > 0.1 ? 'Compliant' : 'Review Needed';
    }

    // Get random sidebar optimization
    function getRandomSidebarOptimization() {
        const optimizations = ['Optimized', 'Needs Optimization', 'Good', 'Excellent'];
        return optimizations[Math.floor(Math.random() * optimizations.length)];
    }

    // Generate mock sidebar ads
    function generateMockSidebarAds() {
        return [
            { name: 'Sky Scraper Ad', size: '120x600', position: 'Left Sidebar', status: 'Active' },
            { name: 'Wide Skyscraper Ad', size: '160x600', position: 'Right Sidebar', status: 'Active' },
            { name: 'Rectangle Ad', size: '180x150', position: 'Top of Sidebar', status: 'Paused' }
        ];
    }

    // Clear results
    function clearResults() {
        document.getElementById('sidebarSize').textContent = '-';
        document.getElementById('sidebarPosition').textContent = '-';
        document.getElementById('sidebarFrequency').textContent = '-';
        document.getElementById('sidebarCompliance').textContent = '-';
        document.getElementById('sidebarOptimization').textContent = '-';
        document.getElementById('sidebarImpressions').textContent = '-';
        document.getElementById('sidebarClicks').textContent = '-';
        document.getElementById('sidebarCtr').textContent = '-';
        document.getElementById('sidebarEarnings').textContent = '-';
        document.getElementById('sidebarRevenue').textContent = '-';
        activeSidebarAds.innerHTML = '';
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
document.addEventListener('DOMContentLoaded', function() {
    const bannerCode = document.getElementById('bannerCode');
    const addBanner = document.getElementById('addBanner');
    const clearAll = document.getElementById('clearAll');
    const activeBanners = document.getElementById('activeBanners');

    // Add banner
    addBanner.addEventListener('click', function() {
        const code = bannerCode.value.trim();
        
        if (!code) {
            alert('Please enter banner ad code.');
            return;
        }

        addBannerAd(code);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        bannerCode.value = '';
        clearResults();
    });

    // Add banner ad
    function addBannerAd(code) {
        // Display configuration information
        document.getElementById('bannerSize').textContent = 'Detecting...';
        document.getElementById('bannerPosition').textContent = 'Detecting...';
        document.getElementById('bannerFrequency').textContent = 'Detecting...';
        document.getElementById('bannerCompliance').textContent = 'Checking...';
        document.getElementById('bannerOptimization').textContent = 'Analyzing...';

        // Simulate banner ad addition
        setTimeout(function() {
            // In a real implementation, you would add the banner ad
            // For demonstration, we'll simulate results
            const size = getRandomBannerSize();
            const position = getRandomBannerPosition();
            const frequency = getRandomBannerFrequency();
            const compliance = getRandomBannerCompliance();
            const optimization = getRandomBannerOptimization();
            const impressions = '5,000';
            const clicks = '250';
            const ctr = '5.0%';
            const earnings = '$125.00';
            const revenue = '$0.025 CPC';

            document.getElementById('bannerSize').textContent = size;
            document.getElementById('bannerPosition').textContent = position;
            document.getElementById('bannerFrequency').textContent = frequency;
            document.getElementById('bannerCompliance').textContent = compliance;
            document.getElementById('bannerOptimization').textContent = optimization;
            document.getElementById('bannerImpressions').textContent = impressions;
            document.getElementById('bannerClicks').textContent = clicks;
            document.getElementById('bannerCtr').textContent = ctr;
            document.getElementById('bannerEarnings').textContent = earnings;
            document.getElementById('bannerRevenue').textContent = revenue;

            // Add to active banners
            activeBanners.innerHTML = '';
            const banners = generateMockBanners();
            
            banners.forEach(banner => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${banner.name}</td>
                    <td>${banner.size}</td>
                    <td>${banner.position}</td>
                    <td><span class="badge bg-${banner.status === 'Active' ? 'success' : 'secondary'}">${banner.status}</span></td>
                    <td>
                        <button class="btn btn-sm btn-outline-primary me-1">Edit</button>
                        <button class="btn btn-sm btn-outline-danger">Delete</button>
                    </td>
                `;
                activeBanners.appendChild(row);
            });
        }, 2000);
    }

    // Get random banner size
    function getRandomBannerSize() {
        const sizes = ['728x90', '468x60', '234x60', '120x600', '160x600'];
        return sizes[Math.floor(Math.random() * sizes.length)];
    }

    // Get random banner position
    function getRandomBannerPosition() {
        const positions = ['Header', 'Sidebar', 'Footer', 'Between Content'];
        return positions[Math.floor(Math.random() * positions.length)];
    }

    // Get random banner frequency
    function getRandomBannerFrequency() {
        const frequencies = ['Every Page', 'Every 3 Pages', 'Once Per Session', 'Random'];
        return frequencies[Math.floor(Math.random() * frequencies.length)];
    }

    // Get random banner compliance
    function getRandomBannerCompliance() {
        return Math.random() > 0.1 ? 'Compliant' : 'Review Needed';
    }

    // Get random banner optimization
    function getRandomBannerOptimization() {
        const optimizations = ['Optimized', 'Needs Optimization', 'Good', 'Excellent'];
        return optimizations[Math.floor(Math.random() * optimizations.length)];
    }

    // Generate mock banners
    function generateMockBanners() {
        return [
            { name: 'Leaderboard Ad', size: '728x90', position: 'Header', status: 'Active' },
            { name: 'Sidebar Ad', size: '160x600', position: 'Sidebar', status: 'Active' },
            { name: 'Footer Ad', size: '468x60', position: 'Footer', status: 'Paused' }
        ];
    }

    // Clear results
    function clearResults() {
        document.getElementById('bannerSize').textContent = '-';
        document.getElementById('bannerPosition').textContent = '-';
        document.getElementById('bannerFrequency').textContent = '-';
        document.getElementById('bannerCompliance').textContent = '-';
        document.getElementById('bannerOptimization').textContent = '-';
        document.getElementById('bannerImpressions').textContent = '-';
        document.getElementById('bannerClicks').textContent = '-';
        document.getElementById('bannerCtr').textContent = '-';
        document.getElementById('bannerEarnings').textContent = '-';
        document.getElementById('bannerRevenue').textContent = '-';
        activeBanners.innerHTML = '';
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
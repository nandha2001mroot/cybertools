document.addEventListener('DOMContentLoaded', function() {
    const publisherId = document.getElementById('publisherId');
    const configureAds = document.getElementById('configureAds');
    const clearAll = document.getElementById('clearAll');
    const copyCode = document.getElementById('copyCode');
    const adsenseCode = document.getElementById('adsenseCode');

    // Configure AdSense
    configureAds.addEventListener('click', function() {
        const pubId = publisherId.value.trim();
        
        if (!pubId) {
            alert('Please enter your AdSense Publisher ID.');
            return;
        }

        if (!pubId.startsWith('ca-pub-') || pubId.length !== 20) {
            alert('Please enter a valid AdSense Publisher ID (ca-pub-XXXXXXXXXXXXXXXX).');
            return;
        }

        configureAdSense(pubId);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        publisherId.value = '';
        clearResults();
    });

    // Copy code
    copyCode.addEventListener('click', function() {
        if (adsenseCode.value) {
            adsenseCode.select();
            document.execCommand('copy');
            alert('AdSense code copied to clipboard!');
        }
    });

    // Configure AdSense
    function configureAdSense(pubId) {
        // Display configuration information
        document.getElementById('adStatus').textContent = 'Configuring...';
        document.getElementById('adUnits').textContent = 'Generating...';
        document.getElementById('adPlacement').textContent = 'Optimizing...';
        document.getElementById('compliance').textContent = 'Checking...';
        document.getElementById('optimization').textContent = 'Analyzing...';

        // Simulate AdSense configuration
        setTimeout(function() {
            // In a real implementation, you would configure AdSense
            // For demonstration, we'll simulate results
            const status = 'Active';
            const units = '3 ad units';
            const placement = 'Sidebar, Header, Footer';
            const compliance = 'Compliant';
            const optimization = 'Optimized';
            const impressions = '10,000';
            const clicks = '500';
            const ctr = '5.0%';
            const earnings = '$250.00';
            const revenue = '$0.025 CPC';

            document.getElementById('adStatus').textContent = status;
            document.getElementById('adUnits').textContent = units;
            document.getElementById('adPlacement').textContent = placement;
            document.getElementById('compliance').textContent = compliance;
            document.getElementById('optimization').textContent = optimization;
            document.getElementById('impressions').textContent = impressions;
            document.getElementById('clicks').textContent = clicks;
            document.getElementById('ctr').textContent = ctr;
            document.getElementById('earnings').textContent = earnings;
            document.getElementById('revenue').textContent = revenue;

            // Generate AdSense code
            const code = generateAdSenseCode(pubId);
            adsenseCode.value = code;
        }, 2000);
    }

    // Generate AdSense code
    function generateAdSenseCode(pubId) {
        return `<!-- CyberTools AdSense Integration -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pubId}"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="${pubId}"
     data-ad-slot="1234567890"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>`;
    }

    // Clear results
    function clearResults() {
        document.getElementById('adStatus').textContent = '-';
        document.getElementById('adUnits').textContent = '-';
        document.getElementById('adPlacement').textContent = '-';
        document.getElementById('compliance').textContent = '-';
        document.getElementById('optimization').textContent = '-';
        document.getElementById('impressions').textContent = '-';
        document.getElementById('clicks').textContent = '-';
        document.getElementById('ctr').textContent = '-';
        document.getElementById('earnings').textContent = '-';
        document.getElementById('revenue').textContent = '-';
        adsenseCode.value = '';
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
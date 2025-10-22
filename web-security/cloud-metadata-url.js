document.addEventListener('DOMContentLoaded', function() {
    const targetHost = document.getElementById('targetHost');
    const checkMetadata = document.getElementById('checkMetadata');
    const clearAll = document.getElementById('clearAll');
    const metadataResults = document.getElementById('metadataResults');

    // Cloud metadata endpoints
    const metadataEndpoints = [
        { provider: 'AWS', url: 'http://169.254.169.254/latest/meta-data/', type: 'aws' },
        { provider: 'AWS', url: 'http://169.254.169.254/latest/user-data/', type: 'aws' },
        { provider: 'GCP', url: 'http://metadata.google.internal/computeMetadata/v1/', type: 'gcp' },
        { provider: 'Azure', url: 'http://169.254.169.254/metadata/instance/', type: 'azure' },
        { provider: 'OpenStack', url: 'http://169.254.169.254/openstack/', type: 'openstack' }
    ];

    // Check metadata
    checkMetadata.addEventListener('click', function() {
        const host = targetHost.value.trim();
        
        if (!host) {
            alert('Please enter a target host.');
            return;
        }

        checkCloudMetadata(host);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        targetHost.value = '';
        metadataResults.innerHTML = '';
        clearResults();
    });

    // Check cloud metadata
    function checkCloudMetadata(host) {
        // Display test results (simulated)
        document.getElementById('cloudProvider').textContent = 'Detecting...';
        document.getElementById('metadataVersion').textContent = 'Detecting...';
        document.getElementById('securityLevel').textContent = 'Detecting...';
        document.getElementById('riskAssessment').textContent = 'Detecting...';

        // Simulate checking process
        setTimeout(function() {
            // In a real implementation, you would make HTTP requests to check endpoints
            // For demonstration, we'll simulate results
            const foundEndpoints = [];
            
            // Simulate finding some endpoints
            if (Math.random() > 0.5) {
                foundEndpoints.push({
                    url: 'http://169.254.169.254/latest/meta-data/',
                    provider: 'AWS',
                    status: '200 OK',
                    response: 'instance-id, ami-id, hostname...'
                });
            }
            
            if (Math.random() > 0.6) {
                foundEndpoints.push({
                    url: 'http://metadata.google.internal/computeMetadata/v1/',
                    provider: 'GCP',
                    status: '404 Not Found',
                    response: 'Endpoint not accessible'
                });
            }

            // Display results
            metadataResults.innerHTML = '';
            
            if (foundEndpoints.length === 0) {
                document.getElementById('cloudProvider').textContent = 'None';
                document.getElementById('metadataVersion').textContent = 'None';
                document.getElementById('securityLevel').textContent = 'Secure';
                document.getElementById('riskAssessment').textContent = 'No accessible metadata endpoints';
            } else {
                foundEndpoints.forEach(endpoint => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${endpoint.url}</td>
                        <td>${endpoint.provider}</td>
                        <td><span class="badge bg-${endpoint.status.includes('200') ? 'success' : 'secondary'}">${endpoint.status}</span></td>
                        <td>${endpoint.response}</td>
                    `;
                    metadataResults.appendChild(row);
                });

                document.getElementById('cloudProvider').textContent = foundEndpoints[0].provider;
                document.getElementById('metadataVersion').textContent = 'Latest';
                document.getElementById('securityLevel').textContent = foundEndpoints.some(e => e.status.includes('200')) ? 'Critical' : 'Medium';
                document.getElementById('riskAssessment').textContent = foundEndpoints.some(e => e.status.includes('200')) ? 'Exposed metadata found' : 'Partially protected';
            }
        }, 2000);
    }

    // Clear results
    function clearResults() {
        document.getElementById('cloudProvider').textContent = '-';
        document.getElementById('metadataVersion').textContent = '-';
        document.getElementById('securityLevel').textContent = '-';
        document.getElementById('riskAssessment').textContent = '-';
        metadataResults.innerHTML = '';
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
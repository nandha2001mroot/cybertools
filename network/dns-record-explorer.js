document.addEventListener('DOMContentLoaded', function() {
    const domainInput = document.getElementById('domainInput');
    const exploreRecords = document.getElementById('exploreRecords');
    const clearAll = document.getElementById('clearAll');
    const recordResults = document.getElementById('recordResults');

    // Explore records
    exploreRecords.addEventListener('click', function() {
        const domain = domainInput.value.trim();
        
        if (!domain) {
            alert('Please enter a domain name.');
            return;
        }

        exploreDNSRecords(domain);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        domainInput.value = '';
        recordResults.innerHTML = '';
        clearResults();
    });

    // Explore DNS records
    function exploreDNSRecords(domain) {
        // Display domain information
        document.getElementById('domainName').textContent = domain;
        
        // Generate mock DNS records
        const records = [
            { type: 'A', name: domain, data: '192.168.1.1', ttl: 3600, security: 'Good' },
            { type: 'AAAA', name: domain, data: '2001:db8::1', ttl: 3600, security: 'Good' },
            { type: 'CNAME', name: 'www.' + domain, data: domain, ttl: 3600, security: 'Good' },
            { type: 'MX', name: domain, data: '10 mail.' + domain, ttl: 3600, security: 'Good' },
            { type: 'NS', name: domain, data: 'ns1.' + domain, ttl: 3600, security: 'Good' },
            { type: 'TXT', name: domain, data: '"v=spf1 include:_spf.' + domain + ' ~all"', ttl: 3600, security: 'Good' },
            { type: 'TXT', name: domain, data: '"google-site-verification=abc123"', ttl: 3600, security: 'Good' },
            { type: 'SRV', name: '_sip._tcp.' + domain, data: '0 5 5060 sip.' + domain, ttl: 3600, security: 'Good' }
        ];

        // Display records
        recordResults.innerHTML = '';
        records.forEach(record => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${record.type}</td>
                <td>${record.name}</td>
                <td>${record.data}</td>
                <td>${record.ttl}</td>
                <td><span class="badge bg-success">${record.security}</span></td>
            `;
            recordResults.appendChild(row);
        });

        // Display analysis results
        document.getElementById('recordTypes').textContent = '8 types';
        document.getElementById('totalRecords').textContent = records.length;
        document.getElementById('securityIssues').textContent = '0 issues';
        document.getElementById('recommendations').textContent = 'No recommendations';
    }

    // Clear results
    function clearResults() {
        document.getElementById('domainName').textContent = '-';
        document.getElementById('recordTypes').textContent = '-';
        document.getElementById('totalRecords').textContent = '-';
        document.getElementById('securityIssues').textContent = '-';
        document.getElementById('recommendations').textContent = '-';
        recordResults.innerHTML = '';
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
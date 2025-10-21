document.addEventListener('DOMContentLoaded', function() {
    const dnsInput = document.getElementById('dnsInput');
    const recordType = document.getElementById('recordType');
    const performLookup = document.getElementById('performLookup');
    const clearAll = document.getElementById('clearAll');
    const queryValue = document.getElementById('queryValue');
    const recordTypeValue = document.getElementById('recordTypeValue');
    const serverValue = document.getElementById('serverValue');
    const dnsResults = document.getElementById('dnsResults');
    const additionalInfo = document.getElementById('additionalInfo');

    // Perform DNS lookup
    performLookup.addEventListener('click', function() {
        const input = dnsInput.value.trim();
        const type = recordType.value;

        if (!input) {
            alert('Please enter a domain or IP address.');
            return;
        }

        queryValue.textContent = input;
        recordTypeValue.textContent = type;
        serverValue.textContent = '8.8.8.8'; // Google DNS

        performDNSLookup(input, type);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        dnsInput.value = '';
        recordType.value = 'A';
        queryValue.textContent = '-';
        recordTypeValue.textContent = '-';
        serverValue.textContent = '-';
        dnsResults.innerHTML = '<p class="text-muted">Enter a domain or IP to perform DNS lookup</p>';
        additionalInfo.innerHTML = '';
    });

    // Perform DNS lookup
    function performDNSLookup(input, type) {
        // Simulate DNS lookup based on record type
        let results = [];
        
        switch(type) {
            case 'A':
                results = lookupARecord(input);
                break;
            case 'AAAA':
                results = lookupAAAARecord(input);
                break;
            case 'CNAME':
                results = lookupCNAMERecord(input);
                break;
            case 'MX':
                results = lookupMXRecord(input);
                break;
            case 'NS':
                results = lookupNSRecord(input);
                break;
            case 'TXT':
                results = lookupTXTRecord(input);
                break;
            case 'PTR':
                results = lookupPTRRecord(input);
                break;
        }

        // Display results
        displayResults(results, type);
        displayAdditionalInfo(input, type);
    }

    // Lookup A record
    function lookupARecord(domain) {
        return [
            { name: domain, type: 'A', data: generateRandomIP(), ttl: 3600 },
            { name: domain, type: 'A', data: generateRandomIP(), ttl: 3600 }
        ];
    }

    // Lookup AAAA record
    function lookupAAAARecord(domain) {
        return [
            { name: domain, type: 'AAAA', data: '2001:db8::1', ttl: 3600 }
        ];
    }

    // Lookup CNAME record
    function lookupCNAMERecord(domain) {
        return [
            { name: domain, type: 'CNAME', data: `www.${domain}`, ttl: 3600 }
        ];
    }

    // Lookup MX record
    function lookupMXRecord(domain) {
        return [
            { name: domain, type: 'MX', data: '10 mail.' + domain, ttl: 3600 },
            { name: domain, type: 'MX', data: '20 backup.' + domain, ttl: 3600 }
        ];
    }

    // Lookup NS record
    function lookupNSRecord(domain) {
        return [
            { name: domain, type: 'NS', data: 'ns1.' + domain, ttl: 3600 },
            { name: domain, type: 'NS', data: 'ns2.' + domain, ttl: 3600 }
        ];
    }

    // Lookup TXT record
    function lookupTXTRecord(domain) {
        return [
            { name: domain, type: 'TXT', data: '"v=spf1 include:_spf.' + domain + ' ~all"', ttl: 3600 },
            { name: domain, type: 'TXT', data: '"google-site-verification=abc123"', ttl: 3600 }
        ];
    }

    // Lookup PTR record
    function lookupPTRRecord(ip) {
        return [
            { name: ip, type: 'PTR', data: 'host.' + ip.split('.').reverse().join('.') + '.in-addr.arpa', ttl: 3600 }
        ];
    }

    // Display results
    function displayResults(results, type) {
        let html = '<div class="table-responsive"><table class="table table-sm"><thead><tr><th>Name</th><th>Type</th><th>Data</th><th>TTL</th></tr></thead><tbody>';
        
        results.forEach(result => {
            html += `<tr><td>${result.name}</td><td>${result.type}</td><td>${result.data}</td><td>${result.ttl}</td></tr>`;
        });
        
        html += '</tbody></table></div>';
        dnsResults.innerHTML = html;
    }

    // Display additional info
    function displayAdditionalInfo(input, type) {
        additionalInfo.innerHTML = `
            <div class="terminal-prompt">DNS lookup performed for: ${input}</div>
            <div class="terminal-prompt">Record type: ${type}</div>
            <div class="terminal-prompt">Query time: ${new Date().toLocaleTimeString()}</div>
            <div class="terminal-prompt">Status: NOERROR</div>
        `;
    }

    // Generate random IP
    function generateRandomIP() {
        return `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
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
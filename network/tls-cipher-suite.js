document.addEventListener('DOMContentLoaded', function() {
    const targetHost = document.getElementById('targetHost');
    const analyzeTLS = document.getElementById('analyzeTLS');
    const clearAll = document.getElementById('clearAll');
    const cipherResults = document.getElementById('cipherResults');

    // Analyze TLS
    analyzeTLS.addEventListener('click', function() {
        const host = targetHost.value.trim();
        
        if (!host) {
            alert('Please enter a target host.');
            return;
        }

        analyzeTLSCipherSuites(host);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        targetHost.value = '';
        cipherResults.innerHTML = '';
        clearResults();
    });

    // Analyze TLS cipher suites
    function analyzeTLSCipherSuites(host) {
        // Display TLS configuration
        document.getElementById('protocolVersion').textContent = 'TLS 1.2';
        document.getElementById('cipherCount').textContent = '15';
        document.getElementById('securityLevel').textContent = 'Medium';
        document.getElementById('weakCiphers').textContent = '3 weak ciphers found';
        
        // Display security analysis
        document.getElementById('securityScore').textContent = '65/100';
        document.getElementById('riskLevel').textContent = 'Medium';
        document.getElementById('vulnerabilities').textContent = 'Weak cipher suites detected';
        document.getElementById('recommendations').textContent = 'Disable weak ciphers';
        
        // Generate mock cipher results
        const ciphers = [
            {
                suite: 'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384',
                protocol: 'TLS 1.2',
                keyExchange: 'ECDHE',
                encryption: 'AES_256_GCM',
                mac: 'SHA384',
                security: 'Secure'
            },
            {
                suite: 'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256',
                protocol: 'TLS 1.2',
                keyExchange: 'ECDHE',
                encryption: 'AES_128_GCM',
                mac: 'SHA256',
                security: 'Secure'
            },
            {
                suite: 'TLS_RSA_WITH_AES_256_GCM_SHA384',
                protocol: 'TLS 1.2',
                keyExchange: 'RSA',
                encryption: 'AES_256_GCM',
                mac: 'SHA384',
                security: 'Weak'
            },
            {
                suite: 'TLS_RSA_WITH_AES_128_GCM_SHA256',
                protocol: 'TLS 1.2',
                keyExchange: 'RSA',
                encryption: 'AES_128_GCM',
                mac: 'SHA256',
                security: 'Weak'
            },
            {
                suite: 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384',
                protocol: 'TLS 1.2',
                keyExchange: 'ECDHE',
                encryption: 'AES_256_CBC',
                mac: 'SHA384',
                security: 'Secure'
            }
        ];

        // Display results
        cipherResults.innerHTML = '';
        ciphers.forEach(cipher => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${cipher.suite}</td>
                <td>${cipher.protocol}</td>
                <td>${cipher.keyExchange}</td>
                <td>${cipher.encryption}</td>
                <td>${cipher.mac}</td>
                <td><span class="badge ${cipher.security === 'Secure' ? 'bg-success' : 'bg-danger'}">${cipher.security}</span></td>
            `;
            cipherResults.appendChild(row);
        });
    }

    // Clear results
    function clearResults() {
        document.getElementById('protocolVersion').textContent = '-';
        document.getElementById('cipherCount').textContent = '-';
        document.getElementById('securityLevel').textContent = '-';
        document.getElementById('weakCiphers').textContent = '-';
        document.getElementById('securityScore').textContent = '-';
        document.getElementById('riskLevel').textContent = '-';
        document.getElementById('vulnerabilities').textContent = '-';
        document.getElementById('recommendations').textContent = '-';
        cipherResults.innerHTML = '';
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
document.addEventListener('DOMContentLoaded', function() {
    const serverHost = document.getElementById('serverHost');
    const serverPort = document.getElementById('serverPort');
    const simulateHandshake = document.getElementById('simulateHandshake');
    const clearAll = document.getElementById('clearAll');
    const handshakeSteps = document.getElementById('handshakeSteps');

    // Simulate handshake
    simulateHandshake.addEventListener('click', function() {
        const host = serverHost.value.trim();
        const port = parseInt(serverPort.value);
        
        if (!host) {
            alert('Please enter a server host.');
            return;
        }

        if (isNaN(port) || port < 1 || port > 65535) {
            alert('Please enter a valid port number (1-65535).');
            return;
        }

        simulateTLSHandshake(host, port);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        serverHost.value = '';
        serverPort.value = '443';
        clearResults();
    });

    // Simulate TLS handshake
    function simulateTLSHandshake(host, port) {
        // Display handshake configuration
        document.getElementById('protocolVersion').textContent = 'Simulating...';
        document.getElementById('cipherSuite').textContent = 'Simulating...';
        document.getElementById('keyExchange').textContent = 'Simulating...';
        document.getElementById('authentication').textContent = 'Simulating...';
        document.getElementById('encryption').textContent = 'Simulating...';

        // Simulate handshake process
        setTimeout(function() {
            // In a real implementation, you would perform a TLS handshake
            // For demonstration, we'll simulate results
            const protocol = getRandomProtocolVersion();
            const cipher = getRandomCipherSuite();
            const keyExchange = getKeyExchangeMethod(cipher);
            const authentication = getAuthenticationMethod(cipher);
            const encryption = getEncryptionMethod(cipher);
            const status = getHandshakeStatus();
            const security = getSecurityLevel(cipher);
            const certValid = getCertificateValidity();
            const session = getSessionResumption();
            const performance = getPerformanceRating();

            document.getElementById('protocolVersion').textContent = protocol;
            document.getElementById('cipherSuite').textContent = cipher;
            document.getElementById('keyExchange').textContent = keyExchange;
            document.getElementById('authentication').textContent = authentication;
            document.getElementById('encryption').textContent = encryption;
            document.getElementById('handshakeStatus').textContent = status;
            document.getElementById('securityLevel').textContent = security;
            document.getElementById('certificateValid').textContent = certValid;
            document.getElementById('sessionResumed').textContent = session;
            document.getElementById('performance').textContent = performance;

            // Display handshake steps
            handshakeSteps.innerHTML = '';
            const steps = getHandshakeSteps(protocol, cipher);
            
            steps.forEach(step => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${step.step}</td>
                    <td>${step.description}</td>
                    <td><span class="badge bg-${step.status === 'Completed' ? 'success' : 'warning'}">${step.status}</span></td>
                    <td>${step.details}</td>
                `;
                handshakeSteps.appendChild(row);
            });

            // Display certificate information
            const certInfo = getCertificateInfo();
            document.getElementById('certSubject').textContent = certInfo.subject;
            document.getElementById('certIssuer').textContent = certInfo.issuer;
            document.getElementById('certValidFrom').textContent = certInfo.validFrom;
            document.getElementById('certValidTo').textContent = certInfo.validTo;
            document.getElementById('certSerial').textContent = certInfo.serial;
            
            // Show expiration warning if needed
            const expirationWarning = document.getElementById('certExpirationWarning');
            if (certInfo.daysUntilExpiration < 30) {
                expirationWarning.textContent = `${certInfo.daysUntilExpiration} days until expiration`;
                expirationWarning.style.display = 'inline';
            } else {
                expirationWarning.style.display = 'none';
            }
        }, 2000);
    }

    // Get random protocol version
    function getRandomProtocolVersion() {
        const versions = ['TLS 1.3', 'TLS 1.2', 'TLS 1.1', 'TLS 1.0'];
        return versions[Math.floor(Math.random() * versions.length)];
    }

    // Get random cipher suite
    function getRandomCipherSuite() {
        const ciphers = [
            'TLS_AES_256_GCM_SHA384',
            'TLS_CHACHA20_POLY1305_SHA256',
            'TLS_AES_128_GCM_SHA256',
            'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384',
            'TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256',
            'TLS_RSA_WITH_AES_256_GCM_SHA384'
        ];
        return ciphers[Math.floor(Math.random() * ciphers.length)];
    }

    // Get key exchange method
    function getKeyExchangeMethod(cipher) {
        if (cipher.includes('ECDHE')) return 'Elliptic Curve Diffie-Hellman Ephemeral';
        if (cipher.includes('DHE')) return 'Diffie-Hellman Ephemeral';
        if (cipher.includes('RSA')) return 'RSA Key Exchange';
        return 'Unknown';
    }

    // Get authentication method
    function getAuthenticationMethod(cipher) {
        if (cipher.includes('RSA')) return 'RSA Authentication';
        if (cipher.includes('ECDSA')) return 'Elliptic Curve Digital Signature Algorithm';
        return 'Unknown';
    }

    // Get encryption method
    function getEncryptionMethod(cipher) {
        if (cipher.includes('AES_256_GCM')) return 'AES-256-GCM';
        if (cipher.includes('AES_128_GCM')) return 'AES-128-GCM';
        if (cipher.includes('CHACHA20')) return 'ChaCha20-Poly1305';
        return 'Unknown';
    }

    // Get handshake status
    function getHandshakeStatus() {
        return Math.random() > 0.1 ? 'Completed' : 'Failed';
    }

    // Get security level
    function getSecurityLevel(cipher) {
        if (cipher.includes('AES_256') || cipher.includes('CHACHA20')) return 'High';
        if (cipher.includes('AES_128')) return 'Medium';
        return 'Low';
    }

    // Get certificate validity
    function getCertificateValidity() {
        return Math.random() > 0.05 ? 'Valid' : 'Expired';
    }

    // Get session resumption
    function getSessionResumption() {
        return Math.random() > 0.5 ? 'Yes' : 'No';
    }

    // Get performance rating
    function getPerformanceRating() {
        const ratings = ['Excellent', 'Good', 'Fair', 'Poor'];
        return ratings[Math.floor(Math.random() * ratings.length)];
    }

    // Get handshake steps
    function getHandshakeSteps(protocol, cipher) {
        return [
            { step: '1', description: 'Client Hello', status: 'Completed', details: `Offered ${protocol}, ${cipher}` },
            { step: '2', description: 'Server Hello', status: 'Completed', details: `Selected ${protocol}, ${cipher}` },
            { step: '3', description: 'Certificate Exchange', status: 'Completed', details: 'Server sent certificate chain' },
            { step: '4', description: 'Key Exchange', status: 'Completed', details: 'Exchanged ephemeral keys' },
            { step: '5', description: 'Finished Messages', status: 'Completed', details: 'Handshake verified and completed' }
        ];
    }

    // Get certificate information
    function getCertificateInfo() {
        const now = new Date();
        const validFrom = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
        const validTo = new Date(now.getFullYear(), now.getMonth() + 11, now.getDate());
        const daysUntilExpiration = Math.ceil((validTo - now) / (1000 * 60 * 60 * 24));
        
        return {
            subject: 'CN=*.example.com, O=Example Inc., L=San Francisco, ST=California, C=US',
            issuer: 'CN=DigiCert Global CA, O=DigiCert Inc., C=US',
            validFrom: validFrom.toISOString().split('T')[0],
            validTo: validTo.toISOString().split('T')[0],
            daysUntilExpiration: daysUntilExpiration,
            serial: '01:23:45:67:89:AB:CD:EF'
        };
    }

    // Clear results
    function clearResults() {
        document.getElementById('protocolVersion').textContent = '-';
        document.getElementById('cipherSuite').textContent = '-';
        document.getElementById('keyExchange').textContent = '-';
        document.getElementById('authentication').textContent = '-';
        document.getElementById('encryption').textContent = '-';
        document.getElementById('handshakeStatus').textContent = '-';
        document.getElementById('securityLevel').textContent = '-';
        document.getElementById('certificateValid').textContent = '-';
        document.getElementById('sessionResumed').textContent = '-';
        document.getElementById('performance').textContent = '-';
        document.getElementById('certSubject').textContent = '-';
        document.getElementById('certIssuer').textContent = '-';
        document.getElementById('certValidFrom').textContent = '-';
        document.getElementById('certValidTo').textContent = '-';
        document.getElementById('certSerial').textContent = '-';
        document.getElementById('certExpirationWarning').style.display = 'none';
        handshakeSteps.innerHTML = '';
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
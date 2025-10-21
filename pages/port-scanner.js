document.addEventListener('DOMContentLoaded', function() {
    const targetHost = document.getElementById('targetHost');
    const startPort = document.getElementById('startPort');
    const endPort = document.getElementById('endPort');
    const startScan = document.getElementById('startScan');
    const stopScan = document.getElementById('stopScan');
    const clearAll = document.getElementById('clearAll');
    const scanProgress = document.getElementById('scanProgress');
    const scanResults = document.getElementById('scanResults');

    let scanInterval;
    let currentPort = 0;
    let scanRunning = false;

    // Start scan
    startScan.addEventListener('click', function() {
        const host = targetHost.value.trim();
        const start = parseInt(startPort.value);
        const end = parseInt(endPort.value);

        if (!host) {
            alert('Please enter a target host.');
            return;
        }

        if (start < 1 || end < 1 || start > 65535 || end > 65535 || start > end) {
            alert('Please enter valid port range (1-65535).');
            return;
        }

        scanResults.innerHTML = '';
        currentPort = start;
        scanRunning = true;
        startPortScan(host, start, end);
    });

    // Stop scan
    stopScan.addEventListener('click', function() {
        scanRunning = false;
        if (scanInterval) {
            clearInterval(scanInterval);
        }
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        targetHost.value = '';
        startPort.value = '1';
        endPort.value = '1000';
        scanResults.innerHTML = '';
        scanProgress.style.width = '0%';
        scanRunning = false;
        if (scanInterval) {
            clearInterval(scanInterval);
        }
    });

    // Start port scan
    function startPortScan(host, start, end) {
        scanInterval = setInterval(function() {
            if (!scanRunning || currentPort > end) {
                clearInterval(scanInterval);
                scanRunning = false;
                return;
            }

            // Simulate port scan
            const port = currentPort;
            const status = Math.random() > 0.95 ? 'open' : 'closed'; // Simulate 5% open ports
            const service = getPortService(port);
            const description = getPortDescription(port);

            if (status === 'open') {
                addScanResult(port, status, service, description);
            }

            // Update progress
            const progress = ((currentPort - start) / (end - start)) * 100;
            scanProgress.style.width = progress + '%';

            currentPort++;
        }, 100); // Simulate scan delay
    }

    // Add scan result
    function addScanResult(port, status, service, description) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${port}</td>
            <td><span class="badge ${status === 'open' ? 'bg-success' : 'bg-secondary'}">${status}</span></td>
            <td>${service}</td>
            <td>${description}</td>
        `;
        scanResults.appendChild(row);
    }

    // Get port service name
    function getPortService(port) {
        const services = {
            21: 'FTP',
            22: 'SSH',
            23: 'Telnet',
            25: 'SMTP',
            53: 'DNS',
            80: 'HTTP',
            110: 'POP3',
            143: 'IMAP',
            443: 'HTTPS',
            993: 'IMAPS',
            995: 'POP3S',
            3389: 'RDP',
            5432: 'PostgreSQL',
            3306: 'MySQL',
            1521: 'Oracle',
            8080: 'HTTP-Alt',
            8443: 'HTTPS-Alt'
        };
        return services[port] || 'Unknown';
    }

    // Get port description
    function getPortDescription(port) {
        const descriptions = {
            21: 'File Transfer Protocol',
            22: 'Secure Shell',
            23: 'Telnet Protocol',
            25: 'Simple Mail Transfer Protocol',
            53: 'Domain Name System',
            80: 'Hypertext Transfer Protocol',
            110: 'Post Office Protocol',
            143: 'Internet Message Access Protocol',
            443: 'HTTP Secure',
            993: 'IMAP over SSL',
            995: 'POP3 over SSL',
            3389: 'Remote Desktop Protocol',
            5432: 'PostgreSQL Database',
            3306: 'MySQL Database',
            1521: 'Oracle Database',
            8080: 'HTTP Alternative',
            8443: 'HTTPS Alternative'
        };
        return descriptions[port] || 'Unknown service';
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
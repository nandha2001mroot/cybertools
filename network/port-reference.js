document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchPorts = document.getElementById('searchPorts');
    const clearAll = document.getElementById('clearAll');
    const portResults = document.getElementById('portResults');

    // Sample port data
    const portData = [
        { port: 21, protocol: 'TCP', service: 'FTP', description: 'File Transfer Protocol', security: 'Critical' },
        { port: 22, protocol: 'TCP', service: 'SSH', description: 'Secure Shell', security: 'High' },
        { port: 23, protocol: 'TCP', service: 'Telnet', description: 'Unencrypted text communications', security: 'Critical' },
        { port: 25, protocol: 'TCP', service: 'SMTP', description: 'Simple Mail Transfer Protocol', security: 'Medium' },
        { port: 53, protocol: 'TCP/UDP', service: 'DNS', description: 'Domain Name System', security: 'High' },
        { port: 80, protocol: 'TCP', service: 'HTTP', description: 'Hypertext Transfer Protocol', security: 'Medium' },
        { port: 110, protocol: 'TCP', service: 'POP3', description: 'Post Office Protocol v3', security: 'Medium' },
        { port: 135, protocol: 'TCP', service: 'RPC', description: 'Remote Procedure Call', security: 'High' },
        { port: 139, protocol: 'TCP', service: 'NetBIOS', description: 'NetBIOS Session Service', security: 'High' },
        { port: 143, protocol: 'TCP', service: 'IMAP', description: 'Internet Message Access Protocol', security: 'Medium' },
        { port: 443, protocol: 'TCP', service: 'HTTPS', description: 'HTTP Secure', security: 'High' },
        { port: 445, protocol: 'TCP', service: 'SMB', description: 'Server Message Block', security: 'Critical' },
        { port: 993, protocol: 'TCP', service: 'IMAPS', description: 'IMAP over SSL', security: 'High' },
        { port: 995, protocol: 'TCP', service: 'POP3S', description: 'POP3 over SSL', security: 'High' },
        { port: 1433, protocol: 'TCP', service: 'MSSQL', description: 'Microsoft SQL Server', security: 'High' },
        { port: 1521, protocol: 'TCP', service: 'Oracle', description: 'Oracle Database', security: 'High' },
        { port: 3306, protocol: 'TCP', service: 'MySQL', description: 'MySQL Database', security: 'High' },
        { port: 3389, protocol: 'TCP', service: 'RDP', description: 'Remote Desktop Protocol', security: 'Critical' },
        { port: 5432, protocol: 'TCP', service: 'PostgreSQL', description: 'PostgreSQL Database', security: 'High' },
        { port: 5900, protocol: 'TCP', service: 'VNC', description: 'Virtual Network Computing', security: 'Critical' },
        { port: 6379, protocol: 'TCP', service: 'Redis', description: 'Redis Database', security: 'High' },
        { port: 8080, protocol: 'TCP', service: 'HTTP-Alt', description: 'HTTP Alternate', security: 'Medium' },
        { port: 8443, protocol: 'TCP', service: 'HTTPS-Alt', description: 'HTTPS Alternate', security: 'High' }
    ];

    // Search ports
    searchPorts.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        if (!searchTerm) {
            displayPortData(portData);
            return;
        }

        const filteredPorts = portData.filter(port => 
            port.port.toString().includes(searchTerm) || 
            port.service.toLowerCase().includes(searchTerm) || 
            port.description.toLowerCase().includes(searchTerm)
        );

        displayPortData(filteredPorts);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        searchInput.value = '';
        displayPortData(portData);
    });

    // Display port data
    function displayPortData(ports) {
        portResults.innerHTML = '';
        
        if (ports.length === 0) {
            portResults.innerHTML = '<tr><td colspan="5" class="text-center">No ports found matching your search</td></tr>';
            return;
        }

        ports.forEach(port => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${port.port}</td>
                <td>${port.protocol}</td>
                <td>${port.service}</td>
                <td>${port.description}</td>
                <td><span class="badge ${getSecurityClass(port.security)}">${port.security}</span></td>
            `;
            portResults.appendChild(row);
        });
    }

    // Get security class for badge
    function getSecurityClass(security) {
        switch(security) {
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

    // Initialize with all ports
    displayPortData(portData);

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
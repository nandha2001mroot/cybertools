document.addEventListener('DOMContentLoaded', function() {
    const ipAddress = document.getElementById('ipAddress');
    const subnetInput = document.getElementById('subnetInput');
    const calculateSubnet = document.getElementById('calculateSubnet');
    const clearAll = document.getElementById('clearAll');

    // Calculate subnet
    calculateSubnet.addEventListener('click', function() {
        const ip = ipAddress.value.trim();
        const subnet = subnetInput.value.trim();
        
        if (!ip || !subnet) {
            alert('Please enter both IP address and subnet mask/CIDR');
            return;
        }
        
        try {
            const result = calculateSubnetInfo(ip, subnet);
            displayResults(result);
        } catch (error) {
            alert('Error calculating subnet: ' + error.message);
        }
    });

    // Clear all fields
    clearAll.addEventListener('click', function() {
        ipAddress.value = '';
        subnetInput.value = '';
        clearResults();
    });

    // Calculate subnet information
    function calculateSubnetInfo(ip, subnet) {
        // Validate IP address
        if (!isValidIP(ip)) {
            throw new Error('Invalid IP address format');
        }

        let cidr;
        if (subnet.startsWith('/')) {
            cidr = parseInt(subnet.substring(1));
        } else {
            if (!isValidIP(subnet)) {
                throw new Error('Invalid subnet mask format');
            }
            cidr = subnetToCIDR(subnet);
        }

        if (cidr < 0 || cidr > 32) {
            throw new Error('Invalid CIDR value (0-32)');
        }

        // Convert IP to binary
        const ipBinary = ipToBinary(ip);
        const subnetBinary = cidrToBinary(cidr);
        
        // Calculate network address
        const networkBinary = [];
        for (let i = 0; i < 32; i++) {
            networkBinary[i] = ipBinary[i] & subnetBinary[i];
        }
        
        const networkAddress = binaryToIP(networkBinary);
        const wildcardBinary = subnetBinary.map(bit => 1 - bit);
        const wildcardMask = binaryToIP(wildcardBinary);
        const broadcastBinary = [];
        
        for (let i = 0; i < 32; i++) {
            broadcastBinary[i] = networkBinary[i] | wildcardBinary[i];
        }
        
        const broadcastAddress = binaryToIP(broadcastBinary);
        const totalHosts = Math.pow(2, 32 - cidr);
        const usableHosts = totalHosts - 2; // Subtract network and broadcast
        
        // Calculate first and last host
        const firstHostBinary = [...networkBinary];
        firstHostBinary[31] = 1; // Set last bit to 1
        const firstHost = binaryToIP(firstHostBinary);
        
        const lastHostBinary = [...broadcastBinary];
        lastHostBinary[31] = 0; // Set last bit to 0
        const lastHost = binaryToIP(lastHostBinary);
        
        // Determine IP class
        const firstOctet = parseInt(ip.split('.')[0]);
        let ipClass = 'Unknown';
        if (firstOctet >= 1 && firstOctet <= 126) ipClass = 'A';
        else if (firstOctet >= 128 && firstOctet <= 191) ipClass = 'B';
        else if (firstOctet >= 192 && firstOctet <= 223) ipClass = 'C';
        else if (firstOctet >= 224 && firstOctet <= 239) ipClass = 'D';
        else if (firstOctet >= 240 && firstOctet <= 255) ipClass = 'E';

        return {
            networkAddress,
            networkMask: cidrToSubnet(cidr),
            networkCIDR: `/${cidr}`,
            firstHost,
            lastHost,
            broadcastAddress,
            totalHosts,
            usableHosts,
            wildcardMask,
            binaryIP: ipToBinary(ip).join(''),
            ipClass
        };
    }

    // Validate IP address
    function isValidIP(ip) {
        const regex = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
        const match = ip.match(regex);
        
        if (!match) return false;
        
        for (let i = 1; i <= 4; i++) {
            const octet = parseInt(match[i]);
            if (octet < 0 || octet > 255) return false;
        }
        
        return true;
    }

    // Convert subnet mask to CIDR
    function subnetToCIDR(mask) {
        const binary = ipToBinary(mask);
        let count = 0;
        for (let i = 0; i < 32; i++) {
            if (binary[i] === 1) count++;
            else break;
        }
        return count;
    }

    // Convert CIDR to subnet mask
    function cidrToSubnet(cidr) {
        const binary = cidrToBinary(cidr);
        return binaryToIP(binary);
    }

    // Convert IP to binary array
    function ipToBinary(ip) {
        const octets = ip.split('.');
        const binary = [];
        
        for (let i = 0; i < 4; i++) {
            let octet = parseInt(octets[i]);
            for (let j = 7; j >= 0; j--) {
                binary.push((octet >> j) & 1);
            }
        }
        
        return binary;
    }

    // Convert CIDR to binary array
    function cidrToBinary(cidr) {
        const binary = new Array(32).fill(0);
        for (let i = 0; i < cidr; i++) {
            binary[i] = 1;
        }
        return binary;
    }

    // Convert binary array to IP
    function binaryToIP(binary) {
        const octets = [];
        for (let i = 0; i < 4; i++) {
            let octet = 0;
            for (let j = 0; j < 8; j++) {
                octet += binary[i * 8 + j] * Math.pow(2, 7 - j);
            }
            octets.push(octet);
        }
        return octets.join('.');
    }

    // Display results
    function displayResults(result) {
        document.getElementById('networkAddress').textContent = result.networkAddress;
        document.getElementById('networkMask').textContent = result.networkMask;
        document.getElementById('networkCIDR').textContent = result.networkCIDR;
        document.getElementById('firstHost').textContent = result.firstHost;
        document.getElementById('lastHost').textContent = result.lastHost;
        document.getElementById('broadcastAddress').textContent = result.broadcastAddress;
        document.getElementById('totalHosts').textContent = result.totalHosts;
        document.getElementById('usableHosts').textContent = result.usableHosts;
        document.getElementById('wildcardMask').textContent = result.wildcardMask;
        document.getElementById('binaryIP').textContent = result.binaryIP;
        document.getElementById('ipClass').textContent = result.ipClass;
    }

    // Clear results
    function clearResults() {
        document.getElementById('networkAddress').textContent = '-';
        document.getElementById('networkMask').textContent = '-';
        document.getElementById('networkCIDR').textContent = '-';
        document.getElementById('firstHost').textContent = '-';
        document.getElementById('lastHost').textContent = '-';
        document.getElementById('broadcastAddress').textContent = '-';
        document.getElementById('totalHosts').textContent = '-';
        document.getElementById('usableHosts').textContent = '-';
        document.getElementById('wildcardMask').textContent = '-';
        document.getElementById('binaryIP').textContent = '-';
        document.getElementById('ipClass').textContent = '-';
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
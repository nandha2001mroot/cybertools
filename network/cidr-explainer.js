document.addEventListener('DOMContentLoaded', function() {
    const cidrInput = document.getElementById('cidrInput');
    const ipInput = document.getElementById('ipInput');
    const subnetInput = document.getElementById('subnetInput');
    const calculateCIDR = document.getElementById('calculateCIDR');
    const clearAll = document.getElementById('clearAll');

    // Calculate CIDR
    calculateCIDR.addEventListener('click', function() {
        const cidr = cidrInput.value.trim();
        const ip = ipInput.value.trim();
        const subnet = subnetInput.value.trim();
        
        if (cidr) {
            calculateFromCIDR(cidr);
        } else if (ip && subnet) {
            calculateFromIPSubnet(ip, subnet);
        } else {
            alert('Please enter either CIDR notation or both IP and subnet mask.');
        }
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        cidrInput.value = '';
        ipInput.value = '';
        subnetInput.value = '';
        clearResults();
    });

    // Calculate from CIDR notation
    function calculateFromCIDR(cidr) {
        // Validate CIDR format
        const cidrRegex = /^(\d{1,3}\.){3}\d{1,3}\/\d{1,2}$/;
        if (!cidrRegex.test(cidr)) {
            alert('Invalid CIDR format. Please use format: 192.168.1.0/24');
            return;
        }

        const [ip, prefix] = cidr.split('/');
        const prefixNum = parseInt(prefix);

        if (prefixNum < 0 || prefixNum > 32) {
            alert('Invalid prefix length. Must be between 0 and 32.');
            return;
        }

        calculateCIDRDetails(ip, prefixNum);
    }

    // Calculate from IP and subnet
    function calculateFromIPSubnet(ip, subnet) {
        // Validate IP format
        const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
        if (!ipRegex.test(ip) || !ipRegex.test(subnet)) {
            alert('Invalid IP or subnet format. Please use format: 192.168.1.1');
            return;
        }

        // Convert subnet to CIDR prefix
        const prefix = subnetToCIDR(subnet);
        calculateCIDRDetails(ip, prefix);
    }

    // Calculate CIDR details
    function calculateCIDRDetails(ip, prefix) {
        // Convert IP to binary
        const ipBinary = ipToBinary(ip);
        const subnetBinary = cidrToBinary(prefix);
        
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
        const totalAddresses = Math.pow(2, 32 - prefix);
        const usableHosts = totalAddresses - 2; // Subtract network and broadcast
        
        // Calculate first and last host
        const firstHostBinary = [...networkBinary];
        firstHostBinary[31] = 1; // Set last bit to 1
        const firstHost = binaryToIP(firstHostBinary);
        
        const lastHostBinary = [...broadcastBinary];
        lastHostBinary[31] = 0; // Set last bit to 0
        const lastHost = binaryToIP(lastHostBinary);
        
        // Calculate subnet mask
        const subnetMask = cidrToSubnet(prefix);
        
        // Display results
        document.getElementById('networkAddress').textContent = networkAddress;
        document.getElementById('broadcastAddress').textContent = broadcastAddress;
        document.getElementById('firstHost').textContent = firstHost;
        document.getElementById('lastHost').textContent = lastHost;
        document.getElementById('subnetMask').textContent = subnetMask;
        document.getElementById('totalAddresses').textContent = totalAddresses;
        document.getElementById('usableHosts').textContent = usableHosts;
        document.getElementById('cidrNotation').textContent = `${networkAddress}/${prefix}`;
        document.getElementById('wildcardMask').textContent = wildcardMask;
        document.getElementById('binaryRep').textContent = networkBinary.join('');
        
        // Display network class
        displayNetworkClass(networkAddress);
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

    // Convert CIDR to subnet mask
    function cidrToSubnet(cidr) {
        const binary = cidrToBinary(cidr);
        return binaryToIP(binary);
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

    // Display network class
    function displayNetworkClass(ip) {
        const firstOctet = parseInt(ip.split('.')[0]);
        let networkClass = 'Unknown';
        
        if (firstOctet >= 1 && firstOctet <= 126) networkClass = 'A';
        else if (firstOctet >= 128 && firstOctet <= 191) networkClass = 'B';
        else if (firstOctet >= 192 && firstOctet <= 223) networkClass = 'C';
        else if (firstOctet >= 224 && firstOctet <= 239) networkClass = 'D';
        else if (firstOctet >= 240 && firstOctet <= 255) networkClass = 'E';

        const networkClassDiv = document.getElementById('networkClass');
        networkClassDiv.innerHTML = `
            <div class="terminal-prompt">Network Class: ${networkClass}</div>
            <div class="terminal-prompt">First Octet: ${firstOctet}</div>
        `;
    }

    // Clear results
    function clearResults() {
        document.getElementById('networkAddress').textContent = '-';
        document.getElementById('broadcastAddress').textContent = '-';
        document.getElementById('firstHost').textContent = '-';
        document.getElementById('lastHost').textContent = '-';
        document.getElementById('subnetMask').textContent = '-';
        document.getElementById('totalAddresses').textContent = '-';
        document.getElementById('usableHosts').textContent = '-';
        document.getElementById('cidrNotation').textContent = '-';
        document.getElementById('wildcardMask').textContent = '-';
        document.getElementById('binaryRep').textContent = '';
        document.getElementById('networkClass').innerHTML = '';
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
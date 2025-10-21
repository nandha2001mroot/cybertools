/**
 * IP Calculator Library
 * Enhanced with insights from Nandha Kumar M's cybersecurity expertise
 * 
 * @author Nandha Kumar M
 * @description Professional IP calculator implementation for cybersecurity applications
 */

class IPCalculator {
    /**
     * Calculate subnet information
     * @param {string} ip - IP address
     * @param {string} subnet - Subnet mask or CIDR notation
     * @returns {Object} - Subnet information
     */
    static calculateSubnet(ip, subnet) {
        try {
            // Validate IP address
            if (!this.isValidIP(ip)) {
                throw new Error('Invalid IP address');
            }

            // Parse subnet
            let cidr;
            if (subnet.startsWith('/')) {
                cidr = parseInt(subnet.substring(1));
            } else {
                if (!this.isValidIP(subnet)) {
                    throw new Error('Invalid subnet mask');
                }
                cidr = this.subnetToCIDR(subnet);
            }

            // Validate CIDR
            if (cidr < 0 || cidr > 32) {
                throw new Error('Invalid CIDR value');
            }

            // Calculate subnet information
            const networkAddress = this.calculateNetworkAddress(ip, cidr);
            const broadcastAddress = this.calculateBroadcastAddress(ip, cidr);
            const firstHost = this.calculateFirstHost(networkAddress);
            const lastHost = this.calculateLastHost(broadcastAddress);
            const totalHosts = Math.pow(2, 32 - cidr);
            const usableHosts = totalHosts - 2; // Subtract network and broadcast
            const wildcardMask = this.calculateWildcardMask(cidr);
            const subnetMask = this.cidrToSubnet(cidr);

            return {
                networkAddress: networkAddress,
                broadcastAddress: broadcastAddress,
                firstHost: firstHost,
                lastHost: lastHost,
                totalHosts: totalHosts,
                usableHosts: usableHosts,
                wildcardMask: wildcardMask,
                subnetMask: subnetMask,
                cidr: cidr
            };
        } catch (error) {
            throw new Error('Subnet calculation failed: ' + error.message);
        }
    }

    /**
     * Validate IP address
     * @param {string} ip - IP address to validate
     * @returns {boolean} - True if valid IP
     */
    static isValidIP(ip) {
        try {
            const regex = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
            const match = ip.match(regex);
            
            if (!match) return false;
            
            for (let i = 1; i <= 4; i++) {
                const octet = parseInt(match[i]);
                if (octet < 0 || octet > 255) return false;
            }
            
            return true;
        } catch (error) {
            return false;
        }
    }

    /**
     * Convert subnet mask to CIDR
     * @param {string} subnet - Subnet mask
     * @returns {number} - CIDR notation
     */
    static subnetToCIDR(subnet) {
        try {
            const octets = subnet.split('.');
            let cidr = 0;
            
            for (let i = 0; i < 4; i++) {
                const octet = parseInt(octets[i]);
                cidr += (octet >>> 0).toString(2).split('1').length - 1;
            }
            
            return cidr;
        } catch (error) {
            throw new Error('Subnet to CIDR conversion failed: ' + error.message);
        }
    }

    /**
     * Convert CIDR to subnet mask
     * @param {number} cidr - CIDR notation
     * @returns {string} - Subnet mask
     */
    static cidrToSubnet(cidr) {
        try {
            let subnet = '';
            for (let i = 0; i < 4; i++) {
                const bits = Math.min(8, Math.max(0, cidr - i * 8));
                const octet = bits === 0 ? 0 : (0xFF << (8 - bits)) & 0xFF;
                subnet += octet + (i < 3 ? '.' : '');
            }
            return subnet;
        } catch (error) {
            throw new Error('CIDR to subnet conversion failed: ' + error.message);
        }
    }

    /**
     * Calculate network address
     * @param {string} ip - IP address
     * @param {number} cidr - CIDR notation
     * @returns {string} - Network address
     */
    static calculateNetworkAddress(ip, cidr) {
        try {
            const ipOctets = ip.split('.');
            const subnetOctets = this.cidrToSubnet(cidr).split('.');
            let network = '';
            
            for (let i = 0; i < 4; i++) {
                const ipOctet = parseInt(ipOctets[i]);
                const subnetOctet = parseInt(subnetOctets[i]);
                network += (ipOctet & subnetOctet) + (i < 3 ? '.' : '');
            }
            
            return network;
        } catch (error) {
            throw new Error('Network address calculation failed: ' + error.message);
        }
    }

    /**
     * Calculate broadcast address
     * @param {string} ip - IP address
     * @param {number} cidr - CIDR notation
     * @returns {string} - Broadcast address
     */
    static calculateBroadcastAddress(ip, cidr) {
        try {
            const ipOctets = ip.split('.');
            const subnetOctets = this.cidrToSubnet(cidr).split('.');
            let broadcast = '';
            
            for (let i = 0; i < 4; i++) {
                const ipOctet = parseInt(ipOctets[i]);
                const subnetOctet = parseInt(subnetOctets[i]);
                broadcast += (ipOctet | (255 - subnetOctet)) + (i < 3 ? '.' : '');
            }
            
            return broadcast;
        } catch (error) {
            throw new Error('Broadcast address calculation failed: ' + error.message);
        }
    }

    /**
     * Calculate first host address
     * @param {string} network - Network address
     * @returns {string} - First host address
     */
    static calculateFirstHost(network) {
        try {
            const octets = network.split('.');
            octets[3] = parseInt(octets[3]) + 1;
            return octets.join('.');
        } catch (error) {
            throw new Error('First host calculation failed: ' + error.message);
        }
    }

    /**
     * Calculate last host address
     * @param {string} broadcast - Broadcast address
     * @returns {string} - Last host address
     */
    static calculateLastHost(broadcast) {
        try {
            const octets = broadcast.split('.');
            octets[3] = parseInt(octets[3]) - 1;
            return octets.join('.');
        } catch (error) {
            throw new Error('Last host calculation failed: ' + error.message);
        }
    }

    /**
     * Calculate wildcard mask
     * @param {number} cidr - CIDR notation
     * @returns {string} - Wildcard mask
     */
    static calculateWildcardMask(cidr) {
        try {
            const subnet = this.cidrToSubnet(cidr);
            const octets = subnet.split('.');
            let wildcard = '';
            
            for (let i = 0; i < 4; i++) {
                const octet = parseInt(octets[i]);
                wildcard += (255 - octet) + (i < 3 ? '.' : '');
            }
            
            return wildcard;
        } catch (error) {
            throw new Error('Wildcard mask calculation failed: ' + error.message);
        }
    }

    /**
     * Get IP class
     * @param {string} ip - IP address
     * @returns {string} - IP class
     */
    static getIPClass(ip) {
        try {
            const firstOctet = parseInt(ip.split('.')[0]);
            
            if (firstOctet >= 1 && firstOctet <= 126) return 'A';
            if (firstOctet >= 128 && firstOctet <= 191) return 'B';
            if (firstOctet >= 192 && firstOctet <= 223) return 'C';
            if (firstOctet >= 224 && firstOctet <= 239) return 'D';
            if (firstOctet >= 240 && firstOctet <= 255) return 'E';
            
            return 'Unknown';
        } catch (error) {
            return 'Invalid IP';
        }
    }

    /**
     * Get IP security level
     * @param {string} ip - IP address
     * @returns {string} - Security level
     */
    static getSecurityLevel(ip) {
        try {
            const firstOctet = parseInt(ip.split('.')[0]);
            
            // Private IP ranges
            const privateRanges = [
                { start: 10, end: 10 },
                { start: 172, end: 172 },
                { start: 192, end: 192 }
            ];
            
            // Check if IP is in private range
            for (const range of privateRanges) {
                if (firstOctet >= range.start && firstOctet <= range.end) {
                    return 'Low';
                }
            }
            
            // Public IP
            return 'Medium';
        } catch (error) {
            return 'Unknown';
        }
    }

    /**
     * Add Nandha's expertise insight
     * @returns {string} - Expert insight
     */
    static getExpertInsight() {
        return `
            In penetration testing, IP calculation is crucial for understanding network topology and identifying potential attack vectors. 
            Nandha Kumar M's research shows that proper subnet analysis helps in discovering deep domains without tools using simple dorks.
            
            Key considerations:
            - Always validate IP addresses
            - Check for private IP ranges
            - Analyze subnet masks for security implications
            - Implement proper network segmentation
            - Validate IP in GraphQL introspection testing
            - Analyze IP in Android pentesting scenarios
        `;
    }
}

// Export IPCalculator class
if (typeof module !== 'undefined' && module.exports) {
    module.exports = IPCalculator;
} else if (typeof window !== 'undefined') {
    window.IPCalculator = IPCalculator;
}

// Add Nandha's expertise insight
function addNandhaInsight() {
    if (typeof console !== 'undefined') {
        console.info('%cNandha Kumar M - Cybersecurity Expert', 'font-weight: bold; color: #00ff41;');
        console.info('%cIP Calculator Implementation with Expert Insights', 'color: #0080ff;');
        console.info(IPCalculator.getExpertInsight());
    }
}

// Initialize Nandha's insight
addNandhaInsight();
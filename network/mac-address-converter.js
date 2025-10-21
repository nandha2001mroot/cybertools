document.addEventListener('DOMContentLoaded', function() {
    const macInput = document.getElementById('macInput');
    const convertMAC = document.getElementById('convertMAC');
    const generateRandom = document.getElementById('generateRandom');
    const clearAll = document.getElementById('clearAll');

    // Convert MAC
    convertMAC.addEventListener('click', function() {
        const mac = macInput.value.trim();
        
        if (!mac) {
            alert('Please enter a MAC address.');
            return;
        }

        convertMACAddress(mac);
    });

    // Generate random MAC
    generateRandom.addEventListener('click', function() {
        const randomMAC = generateRandomMAC();
        macInput.value = randomMAC;
        convertMACAddress(randomMAC);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        macInput.value = '';
        clearResults();
    });

    // Convert MAC address
    function convertMACAddress(mac) {
        // Normalize MAC address (remove separators and convert to lowercase)
        const normalized = mac.replace(/[:\-\.]/g, '').toLowerCase();
        
        if (normalized.length !== 12) {
            alert('Invalid MAC address format. Please enter 12 hexadecimal characters.');
            return;
        }

        // Format conversions
        const colonFormat = normalized.match(/.{2}/g).join(':');
        const hyphenFormat = normalized.match(/.{2}/g).join('-');
        const dottedFormat = normalized.match(/.{4}/g).join('.');
        const plainFormat = normalized;
        const uppercaseFormat = normalized.toUpperCase();

        // Display formatted addresses
        document.getElementById('colonFormat').textContent = colonFormat;
        document.getElementById('hyphenFormat').textContent = hyphenFormat;
        document.getElementById('dottedFormat').textContent = dottedFormat;
        document.getElementById('plainFormat').textContent = plainFormat;
        document.getElementById('uppercaseFormat').textContent = uppercaseFormat;

        // Display vendor information
        const vendor = getVendorInfo(normalized.substring(0, 6));
        document.getElementById('vendorName').textContent = vendor.vendor;
        document.getElementById('companyName').textContent = vendor.company;
        document.getElementById('country').textContent = vendor.country;
        document.getElementById('assignmentDate').textContent = vendor.date;
        document.getElementById('deviceType').textContent = vendor.type;

        // Display additional information
        displayAdditionalInfo(normalized);
    }

    // Get vendor information
    function getVendorInfo(oui) {
        // Mock vendor database (first 3 bytes of MAC address)
        const vendors = {
            '001a2b': { vendor: 'Vendor A', company: 'Example Company A', country: 'USA', date: '2020-01-15', type: 'Network Interface' },
            '3c4a92': { vendor: 'Vendor B', company: 'Example Company B', country: 'UK', date: '2019-05-20', type: 'Wireless Adapter' },
            '525400': { vendor: 'Vendor C', company: 'Example Company C', country: 'Germany', date: '2018-11-10', type: 'Virtual Interface' },
            '080027': { vendor: 'Vendor D', company: 'Example Company D', country: 'USA', date: '2017-03-15', type: 'Virtual Machine' },
            '005056': { vendor: 'Vendor E', company: 'Example Company E', country: 'USA', date: '2016-08-22', type: 'VMware' },
            '000c29': { vendor: 'Vendor F', company: 'Example Company F', country: 'USA', date: '2015-04-30', type: 'VMware' }
        };

        return vendors[oui] || { vendor: 'Unknown', company: 'Unknown', country: 'Unknown', date: 'Unknown', type: 'Unknown' };
    }

    // Generate random MAC address
    function generateRandomMAC() {
        const hexChars = '0123456789ABCDEF';
        let mac = '';
        
        for (let i = 0; i < 12; i++) {
            mac += hexChars[Math.floor(Math.random() * 16)];
            if (i % 2 === 1 && i < 11) {
                mac += ':';
            }
        }
        
        return mac;
    }

    // Display additional information
    function displayAdditionalInfo(mac) {
        const additionalInfo = document.getElementById('additionalInfo');
        additionalInfo.innerHTML = `
            <div class="terminal-prompt">MAC Address: ${mac}</div>
            <div class="terminal-prompt">OUI: ${mac.substring(0, 6)}</div>
            <div class="terminal-prompt">Vendor: ${getVendorInfo(mac.substring(0, 6)).vendor}</div>
            <div class="terminal-prompt">Type: ${getVendorInfo(mac.substring(0, 6)).type}</div>
        `;
    }

    // Clear results
    function clearResults() {
        document.getElementById('colonFormat').textContent = '-';
        document.getElementById('hyphenFormat').textContent = '-';
        document.getElementById('dottedFormat').textContent = '-';
        document.getElementById('plainFormat').textContent = '-';
        document.getElementById('uppercaseFormat').textContent = '-';
        document.getElementById('vendorName').textContent = '-';
        document.getElementById('companyName').textContent = '-';
        document.getElementById('country').textContent = '-';
        document.getElementById('assignmentDate').textContent = '-';
        document.getElementById('deviceType').textContent = '-';
        document.getElementById('additionalInfo').innerHTML = '';
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
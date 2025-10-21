document.addEventListener('DOMContentLoaded', function() {
    const domainInput = document.getElementById('domainInput');
    const performWHOIS = document.getElementById('performWHOIS');
    const clearAll = document.getElementById('clearAll');

    // Perform WHOIS lookup
    performWHOIS.addEventListener('click', function() {
        const domain = domainInput.value.trim();
        
        if (!domain) {
            alert('Please enter a domain name.');
            return;
        }

        performWHOISLookup(domain);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        domainInput.value = '';
        clearResults();
    });

    // Perform WHOIS lookup
    function performWHOISLookup(domain) {
        // Display domain information
        document.getElementById('domainName').textContent = domain;
        document.getElementById('domainStatus').textContent = 'Active';
        document.getElementById('registrar').textContent = 'GoDaddy LLC';
        document.getElementById('createdDate').textContent = '2020-01-15';
        document.getElementById('expiresDate').textContent = '2025-01-15';
        
        // Display contact information
        document.getElementById('registrantName').textContent = 'John Doe';
        document.getElementById('registrantEmail').textContent = 'admin@' + domain;
        document.getElementById('registrantOrg').textContent = 'Example Organization';
        document.getElementById('registrantPhone').textContent = '+1.5551234567';
        document.getElementById('registrantAddress').textContent = '123 Main St, Anytown, USA';
        
        // Generate mock WHOIS data
        const whoisData = generateWHOISData(domain);
        document.getElementById('whoisOutput').textContent = whoisData;
    }

    // Generate mock WHOIS data
    function generateWHOISData(domain) {
        return `Domain Name: ${domain}
Registry Domain ID: D12345678-LROR
Registrar WHOIS Server: whois.godaddy.com
Registrar URL: http://www.godaddy.com
Updated Date: 2024-01-15T12:00:00Z
Creation Date: 2020-01-15T12:00:00Z
Registry Expiry Date: 2025-01-15T12:00:00Z
Registrar: GoDaddy LLC
Registrar IANA ID: 146
Registrar Abuse Contact Email: abuse@godaddy.com
Registrar Abuse Contact Phone: +1.4805058800
Domain Status: clientTransferProhibited https://icann.org/epp#clientTransferProhibited
Domain Status: clientUpdateProhibited https://icann.org/epp#clientUpdateProhibited
Name Server: NS1.${domain.toUpperCase()}
Name Server: NS2.${domain.toUpperCase()}
Name Server: NS3.${domain.toUpperCase()}
DNSSEC: unsigned
URL of the ICANN Whois Inaccuracy Complaint Form: https://www.icann.org/wicf/
>>> Last update of WHOIS database: 2024-10-19T12:00:00Z <<<

For more information on Whois status codes, please visit: https://icann.org/epp

NOTICE: The expiration date displayed in this record is the date the
registrar's sponsorship of the domain name registration in the registry is
currently set to expire. This date does not necessarily reflect the expiration
date of the domain name registrant's agreement with the sponsoring
registrar.  Users may consult the sponsoring registrar's Whois database to
view the registrar's reported date of expiration for this registration.

TERMS OF USE: You are not authorized to access or query our Whois
database through the use of electronic processes that are high-volume and
automated except as reasonably necessary to register domain names or
modify existing registrations; the Data in VeriSign's ("VeriSign") Whois
database is provided by VeriSign for information purposes only, and to
assist persons in obtaining information about or related to a domain name
registration record. VeriSign does not guarantee its accuracy.
By submitting a Whois query, you agree to abide by the following terms of
use: You agree that you may use this Data only for lawful purposes and that
under no circumstances will you use this Data to: (1) allow, enable, or
otherwise support the transmission of mass unsolicited, commercial
advertising or solicitations via e-mail, telephone, or facsimile; or
(2) enable high volume, automated, electronic processes that apply to
VeriSign (or its computer systems). The compilation, repackaging,
dissemination or other use of this Data is expressly prohibited without
the prior written consent of VeriSign. You agree not to use electronic
processes that are automated and high-volume to access or query the
Whois database except as reasonably necessary to register domain names
or modify existing registrations. VeriSign reserves the right to restrict
your access to the Whois database in its sole discretion to ensure
operational stability.  VeriSign may restrict or terminate your access to the
Whois database for failure to abide by these terms of use. VeriSign
reserves the right to modify these terms at any time.

The Registry database contains ONLY .COM, .NET, .EDU domains and
Registrars.`;
    }

    // Clear results
    function clearResults() {
        document.getElementById('domainName').textContent = '-';
        document.getElementById('domainStatus').textContent = '-';
        document.getElementById('registrar').textContent = '-';
        document.getElementById('createdDate').textContent = '-';
        document.getElementById('expiresDate').textContent = '-';
        document.getElementById('registrantName').textContent = '-';
        document.getElementById('registrantEmail').textContent = '-';
        document.getElementById('registrantOrg').textContent = '-';
        document.getElementById('registrantPhone').textContent = '-';
        document.getElementById('registrantAddress').textContent = '-';
        document.getElementById('whoisOutput').textContent = '';
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
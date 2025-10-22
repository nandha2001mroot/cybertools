document.addEventListener('DOMContentLoaded', function() {
    const orgName = document.getElementById('orgName');
    const securityContact = document.getElementById('securityContact');
    const policyURL = document.getElementById('policyURL');
    const ackURL = document.getElementById('ackURL');
    const generateSecurityTXT = document.getElementById('generateSecurityTXT');
    const clearAll = document.getElementById('clearAll');
    const copySecurityTXT = document.getElementById('copySecurityTXT');
    const securityTXTOutput = document.getElementById('securityTXTOutput');

    // Generate security.txt
    generateSecurityTXT.addEventListener('click', function() {
        const name = orgName.value.trim();
        const contact = securityContact.value.trim();
        const policy = policyURL.value.trim();
        const ack = ackURL.value.trim();
        
        if (!contact) {
            alert('Please enter a security contact.');
            return;
        }

        const securityTXT = generateSecurityTXTContent(name, contact, policy, ack);
        securityTXTOutput.value = securityTXT;
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        orgName.value = '';
        securityContact.value = '';
        policyURL.value = '';
        ackURL.value = '';
        securityTXTOutput.value = '';
    });

    // Copy security.txt
    copySecurityTXT.addEventListener('click', function() {
        if (securityTXTOutput.value) {
            securityTXTOutput.select();
            document.execCommand('copy');
            alert('security.txt copied to clipboard!');
        }
    });

    // Generate security.txt content
    function generateSecurityTXTContent(name, contact, policy, ack) {
        let content = '# Security.txt file for ' + (name || 'Organization') + '\n';
        content += '# For security researchers to report vulnerabilities\n\n';
        
        content += 'Contact: ' + contact + '\n';
        
        if (policy) {
            content += 'Policy: ' + policy + '\n';
        }
        
        if (ack) {
            content += 'Acknowledgments: ' + ack + '\n';
        }
        
        content += 'Preferred-Languages: en\n';
        content += 'Canonical: https://example.com/.well-known/security.txt\n';
        content += 'Expires: 2025-12-31T23:59:59.000Z\n';
        
        content += '\n# This file helps security researchers report vulnerabilities\n';
        content += '# For more information: https://securitytxt.org/\n';
        
        return content;
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
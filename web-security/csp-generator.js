document.addEventListener('DOMContentLoaded', function() {
    const generateCSP = document.getElementById('generateCSP');
    const clearAll = document.getElementById('clearAll');
    const copyCSP = document.getElementById('copyCSP');
    const cspOutput = document.getElementById('cspOutput');

    // Generate CSP
    generateCSP.addEventListener('click', function() {
        const csp = generateCSPHeader();
        cspOutput.value = csp;
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        document.getElementById('defaultSelf').checked = true;
        document.getElementById('defaultUnsafeInline').checked = false;
        document.getElementById('defaultUnsafeEval').checked = false;
        document.getElementById('scriptSrc').value = '';
        document.getElementById('styleSrc').value = '';
        document.getElementById('imgSrc').value = '';
        document.getElementById('connectSrc').value = '';
        cspOutput.value = '';
    });

    // Copy CSP
    copyCSP.addEventListener('click', function() {
        if (cspOutput.value) {
            cspOutput.select();
            document.execCommand('copy');
            alert('CSP header copied to clipboard!');
        }
    });

    // Generate CSP header
    function generateCSPHeader() {
        let csp = '';

        // Default-src
        let defaultSrc = [];
        if (document.getElementById('defaultSelf').checked) defaultSrc.push("'self'");
        if (document.getElementById('defaultUnsafeInline').checked) defaultSrc.push("'unsafe-inline'");
        if (document.getElementById('defaultUnsafeEval').checked) defaultSrc.push("'unsafe-eval'");
        
        if (defaultSrc.length > 0) {
            csp += `default-src ${defaultSrc.join(' ')}; `;
        }

        // Script-src
        const scriptSrc = document.getElementById('scriptSrc').value.trim();
        if (scriptSrc) {
            csp += `script-src ${scriptSrc}; `;
        }

        // Style-src
        const styleSrc = document.getElementById('styleSrc').value.trim();
        if (styleSrc) {
            csp += `style-src ${styleSrc}; `;
        }

        // Img-src
        const imgSrc = document.getElementById('imgSrc').value.trim();
        if (imgSrc) {
            csp += `img-src ${imgSrc}; `;
        }

        // Connect-src
        const connectSrc = document.getElementById('connectSrc').value.trim();
        if (connectSrc) {
            csp += `connect-src ${connectSrc}; `;
        }

        // Remove trailing space and semicolon
        return csp.trim().replace(/; $/, '');
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
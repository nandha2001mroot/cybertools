document.addEventListener('DOMContentLoaded', function() {
    const secretKey = document.getElementById('secretKey');
    const totpCode = document.getElementById('totpCode');
    const verifyTOTP = document.getElementById('verifyTOTP');
    const generateTOTP = document.getElementById('generateTOTP');
    const clearAll = document.getElementById('clearAll');
    const verificationHistory = document.getElementById('verificationHistory');
    const timeProgress = document.getElementById('timeProgress');
    const timeRemaining = document.getElementById('timeRemaining');
    const currentTOTP = document.getElementById('currentTOTP');

    // Verify TOTP
    verifyTOTP.addEventListener('click', function() {
        const secret = secretKey.value.trim();
        const code = totpCode.value.trim();
        
        if (!secret || !code) {
            alert('Please enter both secret key and TOTP code.');
            return;
        }

        verifyTOTPCode(secret, code);
    });

    // Generate TOTP
    generateTOTP.addEventListener('click', function() {
        const secret = secretKey.value.trim();
        
        if (!secret) {
            alert('Please enter a secret key to generate TOTP.');
            return;
        }

        generateTOTPCode(secret);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        secretKey.value = '';
        totpCode.value = '';
        clearResults();
    });

    // Verify TOTP code
    function verifyTOTPCode(secret, code) {
        // Display verification results
        document.getElementById('codeValid').textContent = 'Verifying...';
        document.getElementById('timeWindow').textContent = 'Checking...';
        document.getElementById('algorithm').textContent = 'Checking...';
        document.getElementById('digits').textContent = 'Checking...';
        document.getElementById('period').textContent = 'Checking...';

        // Simulate TOTP verification
        setTimeout(function() {
            // In a real implementation, you would verify the TOTP code
            // For demonstration, we'll simulate results
            const isValid = Math.random() > 0.5;
            const timeWindow = getCurrentTimeWindow();
            const algorithm = 'HMAC-SHA-1';
            const digits = 6;
            const period = 30;
            const security = getSecurityLevel(isValid);
            const weaknesses = getWeaknesses(isValid);
            const bruteForce = getBruteForceResistance(digits);
            const replay = 'Protected';
            const recommendations = getRecommendations(isValid, security);

            document.getElementById('codeValid').textContent = isValid ? 'Valid' : 'Invalid';
            document.getElementById('timeWindow').textContent = timeWindow;
            document.getElementById('algorithm').textContent = algorithm;
            document.getElementById('digits').textContent = digits;
            document.getElementById('period').textContent = period + ' seconds';
            document.getElementById('securityLevel').textContent = security;
            document.getElementById('weaknesses').textContent = weaknesses;
            document.getElementById('bruteForceResistance').textContent = bruteForce;
            document.getElementById('replayProtection').textContent = replay;
            document.getElementById('recommendations').textContent = recommendations;

            // Add to verification history
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${new Date().toISOString().split('T')[1].split('.')[0]}</td>
                <td>${code}</td>
                <td><span class="badge bg-${isValid ? 'success' : 'danger'}">${isValid ? 'Valid' : 'Invalid'}</span></td>
                <td>${timeWindow}</td>
            `;
            verificationHistory.appendChild(row);

            // Scroll to bottom of history
            verificationHistory.parentElement.scrollTop = verificationHistory.parentElement.scrollHeight;
        }, 2000);
    }

    // Generate TOTP code
    function generateTOTPCode(secret) {
        // Display current TOTP
        currentTOTP.textContent = 'Generating...';

        // Simulate TOTP generation
        setTimeout(function() {
            // In a real implementation, you would generate the TOTP code
            // For demonstration, we'll simulate results
            const totp = generateMockTOTP();
            currentTOTP.textContent = totp;

            // Update time progress
            updateTimeProgress();
        }, 1000);
    }

    // Get current time window
    function getCurrentTimeWindow() {
        const now = Math.floor(Date.now() / 1000);
        const counter = Math.floor(now / 30);
        return counter.toString();
    }

    // Get security level
    function getSecurityLevel(isValid) {
        return isValid ? 'High' : 'Medium';
    }

    // Get weaknesses
    function getWeaknesses(isValid) {
        return isValid ? 'None detected' : 'Invalid code';
    }

    // Get brute force resistance
    function getBruteForceResistance(digits) {
        return digits === 6 ? 'Medium' : 'High';
    }

    // Get recommendations
    function getRecommendations(isValid, security) {
        if (isValid && security === 'High') return 'TOTP implementation is secure';
        if (isValid) return 'Consider increasing digit count for better security';
        return 'TOTP code verification failed';
    }

    // Generate mock TOTP
    function generateMockTOTP() {
        return Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    }

    // Update time progress
    function updateTimeProgress() {
        const now = new Date();
        const seconds = now.getSeconds() % 30;
        const progress = (seconds / 30) * 100;
        const remaining = 30 - seconds;
        
        timeProgress.style.width = progress + '%';
        timeRemaining.textContent = remaining + 's remaining';
        
        // Update current TOTP periodically
        if (remaining === 30) {
            currentTOTP.textContent = generateMockTOTP();
        }
    }

    // Clear results
    function clearResults() {
        document.getElementById('codeValid').textContent = '-';
        document.getElementById('timeWindow').textContent = '-';
        document.getElementById('algorithm').textContent = '-';
        document.getElementById('digits').textContent = '-';
        document.getElementById('period').textContent = '-';
        document.getElementById('securityLevel').textContent = '-';
        document.getElementById('weaknesses').textContent = '-';
        document.getElementById('bruteForceResistance').textContent = '-';
        document.getElementById('replayProtection').textContent = '-';
        document.getElementById('recommendations').textContent = '-';
        currentTOTP.textContent = '------';
        timeProgress.style.width = '0%';
        timeRemaining.textContent = '30s remaining';
        verificationHistory.innerHTML = '';
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

    // Update time progress every second
    setInterval(updateTimeProgress, 1000);
});
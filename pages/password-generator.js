document.addEventListener('DOMContentLoaded', function() {
    const passwordOutput = document.getElementById('passwordOutput');
    const copyPassword = document.getElementById('copyPassword');
    const regeneratePassword = document.getElementById('regeneratePassword');
    const generatePassword = document.getElementById('generatePassword');
    const passwordLength = document.getElementById('passwordLength');
    const lengthValue = document.getElementById('lengthValue');
    const includeUppercase = document.getElementById('includeUppercase');
    const includeLowercase = document.getElementById('includeLowercase');
    const includeNumbers = document.getElementById('includeNumbers');
    const includeSymbols = document.getElementById('includeSymbols');
    const excludeSimilar = document.getElementById('excludeSimilar');
    const strengthBar = document.getElementById('strengthBar');
    const strengthText = document.getElementById('strengthText');
    const generateMultiple = document.getElementById('generateMultiple');
    const multiplePasswords = document.getElementById('multiplePasswords');

    // Update length display
    passwordLength.addEventListener('input', function() {
        lengthValue.textContent = this.value;
    });

    // Generate password
    generatePassword.addEventListener('click', function() {
        const password = generateSecurePassword();
        passwordOutput.value = password;
        updatePasswordStrength(password);
    });

    // Regenerate password
    regeneratePassword.addEventListener('click', function() {
        const password = generateSecurePassword();
        passwordOutput.value = password;
        updatePasswordStrength(password);
    });

    // Copy password
    copyPassword.addEventListener('click', function() {
        if (passwordOutput.value) {
            passwordOutput.select();
            document.execCommand('copy');
            alert('Password copied to clipboard!');
        }
    });

    // Generate multiple passwords
    generateMultiple.addEventListener('click', function() {
        multiplePasswords.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            const password = generateSecurePassword();
            const col = document.createElement('div');
            col.className = 'col-md-12 mb-2';
            col.innerHTML = `
                <div class="input-group">
                    <input type="text" class="form-control" value="${password}" readonly>
                    <button class="btn btn-outline-primary copy-multiple" data-password="${password}">
                        <i class="fas fa-copy"></i>
                    </button>
                </div>
            `;
            multiplePasswords.appendChild(col);
        }
        
        // Add event listeners to copy buttons
        document.querySelectorAll('.copy-multiple').forEach(button => {
            button.addEventListener('click', function() {
                const pwd = this.getAttribute('data-password');
                navigator.clipboard.writeText(pwd);
                alert('Password copied to clipboard!');
            });
        });
    });

    // Generate secure password function
    function generateSecurePassword() {
        const length = parseInt(passwordLength.value);
        let charset = '';
        
        if (includeUppercase.checked) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeLowercase.checked) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (includeNumbers.checked) charset += '0123456789';
        if (includeSymbols.checked) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
        
        if (excludeSimilar.checked) {
            charset = charset.replace(/[il1Lo0O]/g, '');
        }
        
        if (charset.length === 0) {
            alert('Please select at least one character type!');
            return '';
        }

        let password = '';
        const array = new Uint8Array(length);
        crypto.getRandomValues(array);
        
        for (let i = 0; i < length; i++) {
            password += charset[array[i] % charset.length];
        }
        
        return password;
    }

    // Update password strength
    function updatePasswordStrength(password) {
        if (!password) {
            strengthBar.style.width = '0%';
            strengthBar.className = 'progress-bar';
            strengthText.textContent = 'No password';
            return;
        }

        const score = calculatePasswordStrength(password);
        let strength, color, width;

        if (score < 25) {
            strength = 'Very Weak';
            color = 'bg-danger';
            width = '20%';
        } else if (score < 50) {
            strength = 'Weak';
            color = 'bg-warning';
            width = '40%';
        } else if (score < 75) {
            strength = 'Medium';
            color = 'bg-info';
            width = '60%';
        } else if (score < 90) {
            strength = 'Strong';
            color = 'bg-success';
            width = '80%';
        } else {
            strength = 'Very Strong';
            color = 'bg-success';
            width = '100%';
        }

        strengthBar.style.width = width;
        strengthBar.className = `progress-bar ${color}`;
        strengthText.textContent = `${strength} (${score}/100)`;
    }

    // Calculate password strength
    function calculatePasswordStrength(password) {
        let score = 0;
        
        // Length bonus
        if (password.length >= 8) score += 10;
        if (password.length >= 12) score += 10;
        if (password.length >= 16) score += 10;
        
        // Character variety
        if (/[a-z]/.test(password)) score += 5;
        if (/[A-Z]/.test(password)) score += 5;
        if (/[0-9]/.test(password)) score += 5;
        if (/[^a-zA-Z0-9]/.test(password)) score += 10;
        
        // Complexity
        if (password.length >= 12 && /[a-z]/.test(password) && /[A-Z]/.test(password) && 
            /[0-9]/.test(password) && /[^a-zA-Z0-9]/.test(password)) {
            score += 20;
        }
        
        // Maximum score is 100
        return Math.min(score, 100);
    }

    // Generate initial password
    generatePassword.click();

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
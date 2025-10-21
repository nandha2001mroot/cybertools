document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('passwordInput');
    const evaluatePassword = document.getElementById('evaluatePassword');
    const generateStrongPassword = document.getElementById('generateStrongPassword');
    const clearAll = document.getElementById('clearAll');
    const passwordSuggestions = document.getElementById('passwordSuggestions');
    const strengthProgress = document.getElementById('strengthProgress');

    // Evaluate password
    evaluatePassword.addEventListener('click', function() {
        const password = passwordInput.value;
        
        if (!password) {
            alert('Please enter a password to evaluate.');
            return;
        }

        evaluatePasswordStrength(password);
    });

    // Generate strong password
    generateStrongPassword.addEventListener('click', function() {
        const strongPassword = generateStrongPasswordString();
        passwordInput.value = strongPassword;
        evaluatePasswordStrength(strongPassword);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        passwordInput.value = '';
        clearResults();
    });

    // Evaluate password strength
    function evaluatePasswordStrength(password) {
        // Display password metrics
        document.getElementById('passwordLength').textContent = 'Calculating...';
        document.getElementById('characterTypes').textContent = 'Analyzing...';
        document.getElementById('passwordEntropy').textContent = 'Computing...';
        document.getElementById('onlineCrackTime').textContent = 'Estimating...';
        document.getElementById('offlineCrackTime').textContent = 'Estimating...';

        // Simulate password evaluation
        setTimeout(function() {
            // In a real implementation, you would analyze the password
            // For demonstration, we'll simulate results
            const length = password.length;
            const types = analyzeCharacterTypes(password);
            const entropy = calculateEntropy(password);
            const onlineTime = estimateOnlineCrackTime(entropy);
            const offlineTime = estimateOfflineCrackTime(entropy);
            const rating = getStrengthRating(entropy);
            const common = isCommonPassword(password);
            const dictionary = hasDictionaryWords(password);
            const patterns = hasPatterns(password);

            document.getElementById('passwordLength').textContent = length + ' characters';
            document.getElementById('characterTypes').textContent = types.join(', ');
            document.getElementById('passwordEntropy').textContent = entropy.toFixed(2) + ' bits';
            document.getElementById('onlineCrackTime').textContent = onlineTime;
            document.getElementById('offlineCrackTime').textContent = offlineTime;
            document.getElementById('strengthRating').textContent = rating;
            document.getElementById('commonPassword').textContent = common ? 'Yes' : 'No';
            document.getElementById('dictionaryWords').textContent = dictionary ? 'Detected' : 'None';
            document.getElementById('patterns').textContent = patterns ? 'Found' : 'None';

            // Display recommendations
            const recommendations = getRecommendations(rating, length, types, common, dictionary, patterns);
            document.getElementById('recommendations').textContent = recommendations;

            // Update strength visualization
            updateStrengthVisualization(entropy);

            // Generate mock suggestions
            passwordSuggestions.innerHTML = '';
            const suggestions = generatePasswordSuggestions(rating, length, types, common, dictionary, patterns);
            
            suggestions.forEach(suggestion => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${suggestion.suggestion}</td>
                    <td>${suggestion.impact}</td>
                    <td>${suggestion.implementation}</td>
                `;
                passwordSuggestions.appendChild(row);
            });
        }, 2000);
    }

    // Analyze character types
    function analyzeCharacterTypes(password) {
        const types = [];
        if (/[a-z]/.test(password)) types.push('Lowercase');
        if (/[A-Z]/.test(password)) types.push('Uppercase');
        if (/[0-9]/.test(password)) types.push('Numbers');
        if (/[^a-zA-Z0-9]/.test(password)) types.push('Symbols');
        return types.length > 0 ? types : ['None'];
    }

    // Calculate entropy
    function calculateEntropy(password) {
        // Simplified entropy calculation for demonstration
        const charsetSize = getCharsetSize(password);
        return password.length * Math.log2(charsetSize);
    }

    // Get charset size
    function getCharsetSize(password) {
        let size = 0;
        if (/[a-z]/.test(password)) size += 26;
        if (/[A-Z]/.test(password)) size += 26;
        if (/[0-9]/.test(password)) size += 10;
        if (/[^a-zA-Z0-9]/.test(password)) size += 32; // Approximate symbol count
        return size > 0 ? size : 1;
    }

    // Estimate online crack time
    function estimateOnlineCrackTime(entropy) {
        // Assuming 1000 guesses per second (online attack)
        const seconds = Math.pow(2, entropy) / 1000;
        return formatTime(seconds);
    }

    // Estimate offline crack time
    function estimateOfflineCrackTime(entropy) {
        // Assuming 1 billion guesses per second (offline attack with GPU)
        const seconds = Math.pow(2, entropy) / 1000000000;
        return formatTime(seconds);
    }

    // Format time
    function formatTime(seconds) {
        if (seconds < 60) return seconds.toFixed(2) + ' seconds';
        if (seconds < 3600) return (seconds / 60).toFixed(2) + ' minutes';
        if (seconds < 86400) return (seconds / 3600).toFixed(2) + ' hours';
        if (seconds < 31536000) return (seconds / 86400).toFixed(2) + ' days';
        return (seconds / 31536000).toFixed(2) + ' years';
    }

    // Get strength rating
    function getStrengthRating(entropy) {
        if (entropy < 28) return 'Very Weak';
        if (entropy < 36) return 'Weak';
        if (entropy < 60) return 'Medium';
        if (entropy < 128) return 'Strong';
        return 'Very Strong';
    }

    // Check if common password
    function isCommonPassword(password) {
        // In a real implementation, you would check against a database of common passwords
        const commonPasswords = ['password', '123456', 'qwerty', 'admin', 'letmein'];
        return commonPasswords.includes(password.toLowerCase());
    }

    // Check for dictionary words
    function hasDictionaryWords(password) {
        // In a real implementation, you would check against a dictionary
        const dictionaryWords = ['password', 'admin', 'user', 'login', 'welcome'];
        return dictionaryWords.some(word => password.toLowerCase().includes(word));
    }

    // Check for patterns
    function hasPatterns(password) {
        // Check for sequential characters
        if (/12345|abcdef|qwerty/i.test(password)) return true;
        
        // Check for repeated characters
        if (/(.)\1{2,}/.test(password)) return true;
        
        // Check for keyboard patterns
        if (/qwerty|asdf|zxcv/i.test(password)) return true;
        
        return false;
    }

    // Get recommendations
    function getRecommendations(rating, length, types, common, dictionary, patterns) {
        const recommendations = [];
        
        if (rating === 'Very Weak' || rating === 'Weak') {
            recommendations.push('Use a longer password (12+ characters)');
            recommendations.push('Include uppercase, lowercase, numbers, and symbols');
        }
        
        if (common) {
            recommendations.push('Avoid common passwords');
        }
        
        if (dictionary) {
            recommendations.push('Avoid dictionary words');
        }
        
        if (patterns) {
            recommendations.push('Avoid predictable patterns');
        }
        
        if (types.length < 3) {
            recommendations.push('Use more character types');
        }
        
        return recommendations.length > 0 ? recommendations.join(', ') : 'Password meets current standards';
    }

    // Update strength visualization
    function updateStrengthVisualization(entropy) {
        let width = 0;
        let color = 'bg-danger';
        
        if (entropy < 28) {
            width = 20;
        } else if (entropy < 36) {
            width = 40;
        } else if (entropy < 60) {
            width = 60;
            color = 'bg-warning';
        } else if (entropy < 128) {
            width = 80;
            color = 'bg-success';
        } else {
            width = 100;
            color = 'bg-success';
        }
        
        strengthProgress.style.width = width + '%';
        strengthProgress.className = `progress-bar ${color}`;
    }

    // Generate password suggestions
    function generatePasswordSuggestions(rating, length, types, common, dictionary, patterns) {
        const suggestions = [];
        
        if (length < 12) {
            suggestions.push({
                suggestion: 'Increase password length',
                impact: 'High',
                implementation: 'Add 4-8 more characters'
            });
        }
        
        if (types.length < 4) {
            suggestions.push({
                suggestion: 'Use all character types',
                impact: 'Medium',
                implementation: 'Include uppercase, lowercase, numbers, symbols'
            });
        }
        
        if (common) {
            suggestions.push({
                suggestion: 'Avoid common passwords',
                impact: 'High',
                implementation: 'Use a password generator'
            });
        }
        
        if (dictionary) {
            suggestions.push({
                suggestion: 'Avoid dictionary words',
                impact: 'Medium',
                implementation: 'Use random combinations'
            });
        }
        
        if (patterns) {
            suggestions.push({
                suggestion: 'Remove predictable patterns',
                impact: 'Medium',
                implementation: 'Avoid sequences and repetitions'
            });
        }
        
        if (suggestions.length === 0) {
            suggestions.push({
                suggestion: 'Password meets standards',
                impact: 'N/A',
                implementation: 'Continue good practices'
            });
        }
        
        return suggestions;
    }

    // Generate strong password string
    function generateStrongPasswordString() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
        let password = '';
        for (let i = 0; i < 16; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return password;
    }

    // Clear results
    function clearResults() {
        document.getElementById('passwordLength').textContent = '-';
        document.getElementById('characterTypes').textContent = '-';
        document.getElementById('passwordEntropy').textContent = '-';
        document.getElementById('onlineCrackTime').textContent = '-';
        document.getElementById('offlineCrackTime').textContent = '-';
        document.getElementById('strengthRating').textContent = '-';
        document.getElementById('commonPassword').textContent = '-';
        document.getElementById('dictionaryWords').textContent = '-';
        document.getElementById('patterns').textContent = '-';
        document.getElementById('recommendations').textContent = '-';
        strengthProgress.style.width = '0%';
        strengthProgress.className = 'progress-bar';
        passwordSuggestions.innerHTML = '';
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
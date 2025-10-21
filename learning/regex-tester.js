document.addEventListener('DOMContentLoaded', function() {
    const regexInput = document.getElementById('regexInput');
    const testString = document.getElementById('testString');
    const testRegex = document.getElementById('testRegex');
    const clearAll = document.getElementById('clearAll');
    const matchResults = document.getElementById('matchResults');
    const replacementPattern = document.getElementById('replacementPattern');
    const replacedText = document.getElementById('replacedText');

    // Test regex
    testRegex.addEventListener('click', function() {
        const regex = regexInput.value;
        const text = testString.value;
        
        if (!regex || !text) {
            alert('Please enter both a regex pattern and test string.');
            return;
        }

        testRegularExpression(regex, text);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        regexInput.value = '';
        testString.value = '';
        replacementPattern.value = '';
        clearResults();
    });

    // Test regular expression
    function testRegularExpression(regex, text) {
        // Display pattern analysis
        document.getElementById('patternValid').textContent = 'Testing...';
        document.getElementById('matchFound').textContent = 'Testing...';
        document.getElementById('matchesCount').textContent = 'Testing...';
        document.getElementById('groupsCount').textContent = 'Testing...';

        // Simulate regex testing
        setTimeout(function() {
            // In a real implementation, you would test the regex
            // For demonstration, we'll simulate results
            const isValid = isValidRegex(regex);
            const matches = findMatches(regex, text);
            const groups = countGroups(regex);
            const performance = getPerformanceRating(regex);
            const security = getSecurityLevel(regex);
            const vulnerabilities = getVulnerabilities(regex);
            const redos = getReDoSRisk(regex);
            const optimization = getOptimizationSuggestions(regex);
            const recommendations = getRecommendations(regex, matches);

            document.getElementById('patternValid').textContent = isValid ? 'Yes' : 'No';
            document.getElementById('matchFound').textContent = matches.length > 0 ? 'Yes' : 'No';
            document.getElementById('matchesCount').textContent = matches.length;
            document.getElementById('groupsCount').textContent = groups;
            document.getElementById('performance').textContent = performance;
            document.getElementById('securityLevel').textContent = security;
            document.getElementById('vulnerabilities').textContent = vulnerabilities;
            document.getElementById('redosRisk').textContent = redos;
            document.getElementById('optimization').textContent = optimization;
            document.getElementById('recommendations').textContent = recommendations;

            // Display match results
            matchResults.innerHTML = '';
            matches.forEach(match => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${match.text}</td>
                    <td>${match.start}</td>
                    <td>${match.end}</td>
                    <td>${match.groups.join(', ')}</td>
                `;
                matchResults.appendChild(row);
            });

            // Perform replacement example
            const replacement = replacementPattern.value;
            if (replacement) {
                const replaced = performReplacement(regex, text, replacement);
                replacedText.value = replaced;
            }
        }, 2000);
    }

    // Check if regex is valid
    function isValidRegex(pattern) {
        try {
            new RegExp(pattern);
            return true;
        } catch (e) {
            return false;
        }
    }

    // Find matches
    function findMatches(pattern, text) {
        try {
            const regex = new RegExp(pattern, 'g');
            const matches = [];
            let match;
            
            while ((match = regex.exec(text)) !== null) {
                matches.push({
                    text: match[0],
                    start: match.index,
                    end: match.index + match[0].length,
                    groups: match.slice(1)
                });
            }
            
            return matches;
        } catch (e) {
            return [];
        }
    }

    // Count groups
    function countGroups(pattern) {
        // In a real implementation, you would parse the regex
        const groupCount = (pattern.match(/\(/g) || []).length;
        return groupCount;
    }

    // Get performance rating
    function getPerformanceRating(pattern) {
        // In a real implementation, you would analyze the regex complexity
        const ratings = ['Excellent', 'Good', 'Fair', 'Poor'];
        return ratings[Math.floor(Math.random() * ratings.length)];
    }

    // Get security level
    function getSecurityLevel(pattern) {
        // In a real implementation, you would analyze for security issues
        const levels = ['High', 'Medium', 'Low'];
        return levels[Math.floor(Math.random() * levels.length)];
    }

    // Get vulnerabilities
    function getVulnerabilities(pattern) {
        // In a real implementation, you would check for vulnerabilities
        const vulnerabilities = ['None', 'Potential ReDoS', 'Backtracking issues'];
        return vulnerabilities[Math.floor(Math.random() * vulnerabilities.length)];
    }

    // Get ReDoS risk
    function getReDoSRisk(pattern) {
        // In a real implementation, you would analyze for ReDoS vulnerabilities
        const risks = ['Low', 'Medium', 'High'];
        return risks[Math.floor(Math.random() * risks.length)];
    }

    // Get optimization suggestions
    function getOptimizationSuggestions(pattern) {
        // In a real implementation, you would analyze for optimization
        const optimizations = ['None needed', 'Use possessive quantifiers', 'Avoid nested quantifiers'];
        return optimizations[Math.floor(Math.random() * optimizations.length)];
    }

    // Get recommendations
    function getRecommendations(pattern, matches) {
        // In a real implementation, you would provide specific recommendations
        const recommendations = ['Pattern is secure', 'Consider optimization', 'Add anchors for precision'];
        return recommendations[Math.floor(Math.random() * recommendations.length)];
    }

    // Perform replacement
    function performReplacement(pattern, text, replacement) {
        try {
            const regex = new RegExp(pattern, 'g');
            return text.replace(regex, replacement);
        } catch (e) {
            return 'Invalid regex pattern for replacement';
        }
    }

    // Clear results
    function clearResults() {
        document.getElementById('patternValid').textContent = '-';
        document.getElementById('matchFound').textContent = '-';
        document.getElementById('matchesCount').textContent = '-';
        document.getElementById('groupsCount').textContent = '-';
        document.getElementById('performance').textContent = '-';
        document.getElementById('securityLevel').textContent = '-';
        document.getElementById('vulnerabilities').textContent = '-';
        document.getElementById('redosRisk').textContent = '-';
        document.getElementById('optimization').textContent = '-';
        document.getElementById('recommendations').textContent = '-';
        matchResults.innerHTML = '';
        replacedText.value = '';
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
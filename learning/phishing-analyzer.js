document.addEventListener('DOMContentLoaded', function() {
    const phishingContent = document.getElementById('phishingContent');
    const analyzePhishing = document.getElementById('analyzePhishing');
    const clearAll = document.getElementById('clearAll');
    const phishingIndicators = document.getElementById('phishingIndicators');
    const urlReputation = document.getElementById('urlReputation');

    // Analyze phishing
    analyzePhishing.addEventListener('click', function() {
        const content = phishingContent.value.trim();
        
        if (!content) {
            alert('Please enter email content or URL to analyze.');
            return;
        }

        analyzePhishingContent(content);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        phishingContent.value = '';
        clearResults();
    });

    // Analyze phishing content
    function analyzePhishingContent(content) {
        // Display content analysis
        document.getElementById('contentType').textContent = 'Analyzing...';
        document.getElementById('senderAnalysis').textContent = 'Analyzing...';
        document.getElementById('subjectAnalysis').textContent = 'Analyzing...';
        document.getElementById('bodyAnalysis').textContent = 'Analyzing...';

        // Simulate phishing analysis
        setTimeout(function() {
            // In a real implementation, you would analyze the content for phishing indicators
            // For demonstration, we'll simulate results
            const contentType = detectContentType(content);
            const sender = analyzeSender(content);
            const subject = analyzeSubject(content);
            const body = analyzeBody(content);
            const attachments = analyzeAttachments(content);
            const probability = calculatePhishingProbability(content);
            const risk = getRiskLevel(probability);
            const indicators = countIndicators(content);
            const urls = analyzeURLs(content);
            const recommendation = getRecommendation(probability, risk);

            document.getElementById('contentType').textContent = contentType;
            document.getElementById('senderAnalysis').textContent = sender;
            document.getElementById('subjectAnalysis').textContent = subject;
            document.getElementById('bodyAnalysis').textContent = body;
            document.getElementById('attachmentAnalysis').textContent = attachments;
            document.getElementById('phishingProbability').textContent = probability + '%';
            document.getElementById('riskLevel').textContent = risk;
            document.getElementById('indicatorsFound').textContent = indicators;
            document.getElementById('urlAnalysis').textContent = urls;
            document.getElementById('recommendation').textContent = recommendation;

            // Display phishing indicators
            phishingIndicators.innerHTML = '';
            const indicatorsList = getPhishingIndicators(content);
            
            indicatorsList.forEach(indicator => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${indicator.indicator}</td>
                    <td><span class="badge bg-${indicator.status === 'Detected' ? 'danger' : 'success'}">${indicator.status}</span></td>
                    <td>${indicator.description}</td>
                    <td><span class="badge bg-${indicator.severity === 'High' ? 'danger' : indicator.severity === 'Medium' ? 'warning' : 'success'}">${indicator.severity}</span></td>
                `;
                phishingIndicators.appendChild(row);
            });

            // Display URL reputation
            urlReputation.innerHTML = '';
            const urlsList = getURLReputation(content);
            
            urlsList.forEach(url => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${url.url}</td>
                    <td><span class="badge bg-${url.status === 'Malicious' ? 'danger' : url.status === 'Suspicious' ? 'warning' : 'success'}">${url.status}</span></td>
                    <td>${url.reputation}</td>
                    <td>${url.threat}</td>
                `;
                urlReputation.appendChild(row);
            });
        }, 2000);
    }

    // Detect content type
    function detectContentType(content) {
        if (content.includes('@') && content.includes('.')) return 'Email';
        if (content.includes('http') || content.includes('www')) return 'URL';
        return 'Unknown';
    }

    // Analyze sender
    function analyzeSender(content) {
        if (content.includes('bank') && content.includes('@gmail.com')) return 'Suspicious: Spoofed domain';
        if (content.includes('@') && content.includes('.')) return 'Valid domain';
        return 'No sender information';
    }

    // Analyze subject
    function analyzeSubject(content) {
        if (content.includes('urgent') || content.includes('immediate')) return 'High pressure language detected';
        if (content.includes('verify') || content.includes('confirm')) return 'Verification request';
        return 'Normal subject line';
    }

    // Analyze body
    function analyzeBody(content) {
        const suspicious = [];
        if (content.includes('click here') || content.includes('click now')) suspicious.push('Urgent action requested');
        if (content.includes('account suspended') || content.includes('locked')) suspicious.push('Account scare tactics');
        if (content.includes('$') || content.includes('€') || content.includes('£')) suspicious.push('Financial incentives');
        return suspicious.length > 0 ? suspicious.join(', ') : 'No suspicious content';
    }

    // Analyze attachments
    function analyzeAttachments(content) {
        if (content.includes('.exe') || content.includes('.scr') || content.includes('.bat')) return 'Dangerous file types detected';
        if (content.includes('.pdf') || content.includes('.docx')) return 'Common document types';
        return 'No attachments detected';
    }

    // Calculate phishing probability
    function calculatePhishingProbability(content) {
        // In a real implementation, you would analyze the content
        return Math.floor(Math.random() * 100);
    }

    // Get risk level
    function getRiskLevel(probability) {
        if (probability > 80) return 'Critical';
        if (probability > 60) return 'High';
        if (probability > 40) return 'Medium';
        if (probability > 20) return 'Low';
        return 'Minimal';
    }

    // Count indicators
    function countIndicators(content) {
        // In a real implementation, you would count actual indicators
        return Math.floor(Math.random() * 10);
    }

    // Analyze URLs
    function analyzeURLs(content) {
        // In a real implementation, you would extract and analyze URLs
        const urlCount = (content.match(/https?:\/\//g) || []).length;
        return urlCount > 0 ? `${urlCount} URLs detected` : 'No URLs detected';
    }

    // Get recommendation
    function getRecommendation(probability, risk) {
        if (probability > 70) return 'Do not interact with this content';
        if (probability > 40) return 'Verify with sender before proceeding';
        return 'Content appears legitimate';
    }

    // Get phishing indicators
    function getPhishingIndicators(content) {
        // In a real implementation, you would analyze for specific indicators
        return [
            { indicator: 'Urgent Language', status: 'Detected', description: 'Creates sense of urgency', severity: 'High' },
            { indicator: 'Spoofed Sender', status: 'Not Detected', description: 'Sender domain appears legitimate', severity: 'Low' },
            { indicator: 'Suspicious Links', status: 'Detected', description: 'Links lead to external domains', severity: 'Medium' },
            { indicator: 'Grammar Errors', status: 'Not Detected', description: 'No obvious spelling mistakes', severity: 'Low' },
            { indicator: 'Unexpected Attachments', status: 'Not Detected', description: 'No suspicious file types', severity: 'Low' }
        ];
    }

    // Get URL reputation
    function getURLReputation(content) {
        // In a real implementation, you would check URL reputation
        const urls = content.match(/https?:\/\/[^\s]+/g) || [];
        if (urls.length === 0) return [{ url: 'No URLs', status: 'N/A', reputation: 'N/A', threat: 'N/A' }];
        
        return urls.slice(0, 3).map(url => ({
            url: url.substring(0, 50) + (url.length > 50 ? '...' : ''),
            status: Math.random() > 0.8 ? 'Malicious' : Math.random() > 0.6 ? 'Suspicious' : 'Safe',
            reputation: Math.random() > 0.7 ? 'Poor' : 'Good',
            threat: Math.random() > 0.8 ? 'Malware' : Math.random() > 0.6 ? 'Phishing' : 'None'
        }));
    }

    // Clear results
    function clearResults() {
        document.getElementById('contentType').textContent = '-';
        document.getElementById('senderAnalysis').textContent = '-';
        document.getElementById('subjectAnalysis').textContent = '-';
        document.getElementById('bodyAnalysis').textContent = '-';
        document.getElementById('attachmentAnalysis').textContent = '-';
        document.getElementById('phishingProbability').textContent = '-';
        document.getElementById('riskLevel').textContent = '-';
        document.getElementById('indicatorsFound').textContent = '-';
        document.getElementById('urlAnalysis').textContent = '-';
        document.getElementById('recommendation').textContent = '-';
        phishingIndicators.innerHTML = '';
        urlReputation.innerHTML = '';
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
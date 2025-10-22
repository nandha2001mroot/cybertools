document.addEventListener('DOMContentLoaded', function() {
    const resourceCategory = document.getElementById('resourceCategory');
    const searchResources = document.getElementById('searchResources');
    const clearAll = document.getElementById('clearAll');
    const resourcesTable = document.getElementById('resourcesTable');
    const learningConsole = document.getElementById('learningConsole');

    // Search resources
    searchResources.addEventListener('click', function() {
        const category = resourceCategory.value;
        searchVAPTResources(category);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        resourceCategory.value = 'all';
        clearResults();
    });

    // Search VAPT resources
    function searchVAPTResources(category) {
        // Display resource information
        document.getElementById('totalResources').textContent = 'Searching...';
        document.getElementById('beginnerResources').textContent = 'Counting...';
        document.getElementById('intermediateResources').textContent = 'Counting...';
        document.getElementById('advancedResources').textContent = 'Counting...';
        document.getElementById('freeResources').textContent = 'Counting...';
        document.getElementById('currentLevel').textContent = 'Detecting...';
        document.getElementById('nextSteps').textContent = 'Planning...';
        document.getElementById('recommendedTools').textContent = 'Selecting...';
        document.getElementById('practiceLabs').textContent = 'Finding...';
        document.getElementById('certifications').textContent = 'Listing...';

        // Simulate resource search
        setTimeout(function() {
            // In a real implementation, you would search for resources
            // For demonstration, we'll simulate results
            const total = 50;
            const beginner = 15;
            const intermediate = 20;
            const advanced = 15;
            const free = 35;
            const currentLevel = getCurrentLevel();
            const nextSteps = getNextSteps(currentLevel);
            const tools = getRecommendedTools();
            const labs = getPracticeLabs();
            const certs = getCertifications();

            document.getElementById('totalResources').textContent = total;
            document.getElementById('beginnerResources').textContent = beginner;
            document.getElementById('intermediateResources').textContent = intermediate;
            document.getElementById('advancedResources').textContent = advanced;
            document.getElementById('freeResources').textContent = free;
            document.getElementById('currentLevel').textContent = currentLevel;
            document.getElementById('nextSteps').textContent = nextSteps;
            document.getElementById('recommendedTools').textContent = tools.join(', ');
            document.getElementById('practiceLabs').textContent = labs.join(', ');
            document.getElementById('certifications').textContent = certs.join(', ');

            // Generate mock resources table
            resourcesTable.innerHTML = '';
            const resourceData = generateMockResources(category);
            
            resourceData.forEach(resource => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${resource.name}</td>
                    <td>${resource.type}</td>
                    <td><span class="badge bg-${resource.level === 'Beginner' ? 'success' : resource.level === 'Intermediate' ? 'warning' : 'danger'}">${resource.level}</span></td>
                    <td><span class="badge bg-${resource.cost === 'Free' ? 'success' : 'secondary'}">${resource.cost}</span></td>
                    <td>${resource.rating}/5</td>
                    <td><a href="${resource.link}" target="_blank" class="btn btn-sm btn-outline-primary">View</a></td>
                `;
                resourcesTable.appendChild(row);
            });

            // Generate mock learning console
            learningConsole.innerHTML = '';
            const consoleOutput = generateMockConsoleOutput(category, total);
            
            consoleOutput.forEach(line => {
                const div = document.createElement('div');
                div.textContent = line;
                learningConsole.appendChild(div);
            });
        }, 2000);
    }

    // Get current level
    function getCurrentLevel() {
        const levels = ['Beginner', 'Intermediate', 'Advanced'];
        return levels[Math.floor(Math.random() * levels.length)];
    }

    // Get next steps
    function getNextSteps(currentLevel) {
        const steps = {
            'Beginner': 'Learn web application basics',
            'Intermediate': 'Practice vulnerability assessment',
            'Advanced': 'Develop exploit techniques'
        };
        return steps[currentLevel] || 'Start with fundamentals';
    }

    // Get recommended tools
    function getRecommendedTools() {
        const tools = ['Nmap', 'Burp Suite', 'Metasploit', 'Wireshark', 'SQLMap'];
        const count = Math.floor(Math.random() * 3) + 2; // 2-5 tools
        const selected = [];
        for (let i = 0; i < count; i++) {
            const idx = Math.floor(Math.random() * tools.length);
            if (!selected.includes(tools[idx])) {
                selected.push(tools[idx]);
            }
        }
        return selected;
    }

    // Get practice labs
    function getPracticeLabs() {
        const labs = ['Hack The Box', 'TryHackMe', 'OverTheWire', 'VulnHub', 'PentesterLab'];
        const count = Math.floor(Math.random() * 3) + 2; // 2-5 labs
        const selected = [];
        for (let i = 0; i < count; i++) {
            const idx = Math.floor(Math.random() * labs.length);
            if (!selected.includes(labs[idx])) {
                selected.push(labs[idx]);
            }
        }
        return selected;
    }

    // Get certifications
    function getCertifications() {
        const certs = ['CEH', 'OSCP', 'CISSP', 'CompTIA Security+', 'GIAC'];
        const count = Math.floor(Math.random() * 3) + 2; // 2-5 certs
        const selected = [];
        for (let i = 0; i < count; i++) {
            const idx = Math.floor(Math.random() * certs.length);
            if (!selected.includes(certs[idx])) {
                selected.push(certs[idx]);
            }
        }
        return selected;
    }

    // Generate mock resources
    function generateMockResources(category) {
        const resources = [
            { name: 'OWASP WebGoat', type: 'Interactive Tutorial', level: 'Beginner', cost: 'Free', rating: 4.8, link: 'https://owasp.org/www-project-webgoat/' },
            { name: 'PortSwigger Academy', type: 'Web Security Course', level: 'Beginner', cost: 'Free', rating: 4.9, link: 'https://portswigger.net/web-security' },
            { name: 'Hack The Box', type: 'Penetration Testing Labs', level: 'Intermediate', cost: 'Free/Premium', rating: 4.7, link: 'https://www.hackthebox.com/' },
            { name: 'TryHackMe', type: 'Cybersecurity Training', level: 'Beginner', cost: 'Free/Premium', rating: 4.6, link: 'https://tryhackme.com/' },
            { name: 'Metasploit Unleashed', type: 'Exploit Framework Course', level: 'Advanced', cost: 'Free', rating: 4.5, link: 'https://www.offensive-security.com/metasploit-unleashed/' },
            { name: 'Nmap Network Scanning', type: 'Network Scanning Guide', level: 'Intermediate', cost: 'Free', rating: 4.4, link: 'https://nmap.org/book/toc.html' },
            { name: 'Burp Suite Documentation', type: 'Web Proxy Manual', level: 'Intermediate', cost: 'Free', rating: 4.3, link: 'https://portswigger.net/burp/documentation' },
            { name: 'Wireshark User Guide', type: 'Network Analysis Guide', level: 'Intermediate', cost: 'Free', rating: 4.2, link: 'https://www.wireshark.org/#docs' },
            { name: 'SQLMap Documentation', type: 'SQL Injection Guide', level: 'Intermediate', cost: 'Free', rating: 4.1, link: 'https://github.com/sqlmapproject/sqlmap/wiki' },
            { name: 'Kali Linux Documentation', type: 'Penetration Testing OS', level: 'Beginner', cost: 'Free', rating: 4.0, link: 'https://www.kali.org/docs/' }
        ];

        if (category === 'all') {
            return resources;
        }

        return resources.filter(resource => 
            resource.level.toLowerCase() === category ||
            resource.type.toLowerCase().includes(category) ||
            resource.cost.toLowerCase().includes(category)
        );
    }

    // Generate mock console output
    function generateMockConsoleOutput(category, total) {
        const output = [`$ vapt-learn --category ${category}`];
        
        if (total > 0) {
            output.push(`[+] Found ${total} VAPT learning resources`);
            output.push(`[+] Filtering by category: ${category}`);
            output.push(`[+] Recommended resources loaded`);
            output.push(`[+] Learning path initialized`);
        } else {
            output.push(`[-] No resources found for category: ${category}`);
            output.push(`[-] Try a different category`);
        }
        
        return output;
    }

    // Clear results
    function clearResults() {
        document.getElementById('totalResources').textContent = '-';
        document.getElementById('beginnerResources').textContent = '-';
        document.getElementById('intermediateResources').textContent = '-';
        document.getElementById('advancedResources').textContent = '-';
        document.getElementById('freeResources').textContent = '-';
        document.getElementById('currentLevel').textContent = '-';
        document.getElementById('nextSteps').textContent = '-';
        document.getElementById('recommendedTools').textContent = '-';
        document.getElementById('practiceLabs').textContent = '-';
        document.getElementById('certifications').textContent = '-';
        resourcesTable.innerHTML = '';
        learningConsole.innerHTML = '<div>$ vapt-learn --category all</div>';
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

    // Initialize with all resources
    searchVAPTResources('all');
});
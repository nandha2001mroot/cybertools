document.addEventListener('DOMContentLoaded', function() {
    const timelineData = document.getElementById('timelineData');
    const generateTimeline = document.getElementById('generateTimeline');
    const uploadFile = document.getElementById('uploadFile');
    const clearAll = document.getElementById('clearAll');
    const timelineEvents = document.getElementById('timelineEvents');
    const timelineVisualization = document.getElementById('timelineVisualization');

    // Generate timeline
    generateTimeline.addEventListener('click', function() {
        const data = timelineData.value.trim();
        
        if (!data) {
            alert('Please enter timeline data or upload a file.');
            return;
        }

        generateMACBTimeline(data);
    });

    // Upload file
    uploadFile.addEventListener('click', function() {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.csv,.json';
        
        fileInput.onchange = function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    timelineData.value = e.target.result;
                    generateMACBTimeline(e.target.result);
                };
                reader.readAsText(file);
            }
        };
        
        fileInput.click();
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        timelineData.value = '';
        clearResults();
    });

    // Generate MACB timeline
    function generateMACBTimeline(data) {
        // Display timeline statistics
        document.getElementById('totalEvents').textContent = 'Generating...';
        document.getElementById('dateRange').textContent = 'Calculating...';
        document.getElementById('uniqueFiles').textContent = 'Counting...';
        document.getElementById('eventTypes').textContent = 'Analyzing...';

        // Simulate timeline generation
        setTimeout(function() {
            // In a real implementation, you would parse timeline data
            // For demonstration, we'll simulate results
            const events = getRandomEventCount();
            const dateRange = getRandomDateRange();
            const files = getRandomFileCount();
            const types = getRandomEventTypes();
            const suspicious = getRandomSuspiciousEvents();

            document.getElementById('totalEvents').textContent = events;
            document.getElementById('dateRange').textContent = dateRange;
            document.getElementById('uniqueFiles').textContent = files;
            document.getElementById('eventTypes').textContent = types;
            document.getElementById('suspiciousEvents').textContent = suspicious;

            // Generate mock timeline events
            timelineEvents.innerHTML = '';
            const eventData = generateMockTimelineEvents(events);
            
            eventData.forEach(event => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${event.timestamp}</td>
                    <td>${event.file}</td>
                    <td>${event.macb}</td>
                    <td>${event.size}</td>
                    <td>${event.user}</td>
                    <td>${event.source}</td>
                `;
                timelineEvents.appendChild(row);
            });

            // Generate mock visualization
            timelineVisualization.innerHTML = `
                <div class="d-flex flex-column align-items-center justify-content-center h-100">
                    <i class="fas fa-chart-line fa-3x mb-3"></i>
                    <p class="text-center">Timeline visualization showing ${events} events</p>
                    <p class="text-center">Date range: ${dateRange}</p>
                    <p class="text-center">Suspicious events: ${suspicious}</p>
                </div>
            `;
        }, 2000);
    }

    // Get random event count
    function getRandomEventCount() {
        return Math.floor(Math.random() * 10000) + 1000; // 1K-10K events
    }

    // Get random date range
    function getRandomDateRange() {
        const start = new Date(2024, 0, 1);
        const end = new Date(2024, 11, 31);
        return `${start.toISOString().split('T')[0]} to ${end.toISOString().split('T')[0]}`;
    }

    // Get random file count
    function getRandomFileCount() {
        return Math.floor(Math.random() * 1000) + 100; // 100-1100 files
    }

    // Get random event types
    function getRandomEventTypes() {
        const types = ['M', 'A', 'C', 'B', 'MACB', 'MA', 'MC', 'MB'];
        return types[Math.floor(Math.random() * types.length)];
    }

    // Get random suspicious events
    function getRandomSuspiciousEvents() {
        return Math.floor(Math.random() * 50); // 0-50 suspicious events
    }

    // Generate mock timeline events
    function generateMockTimelineEvents(count) {
        const events = [];
        const files = ['document.pdf', 'image.jpg', 'program.exe', 'data.xlsx', 'archive.zip'];
        const users = ['Administrator', 'User1', 'Guest', 'SYSTEM', 'NETWORK SERVICE'];
        const sources = ['NTFS', 'Registry', 'Event Log', 'Prefetch', 'Jump List'];
        const macb = ['M', 'A', 'C', 'B', 'MACB', 'MA', 'MC', 'MB'];
        
        for (let i = 0; i < count; i++) {
            const date = new Date(2024, 0, 1);
            date.setSeconds(date.getSeconds() + Math.floor(Math.random() * 31536000)); // Random time in 2024
            events.push({
                timestamp: date.toISOString().replace('T', ' ').substring(0, 19),
                file: files[Math.floor(Math.random() * files.length)],
                macb: macb[Math.floor(Math.random() * macb.length)],
                size: formatFileSize(Math.floor(Math.random() * 10000000)),
                user: users[Math.floor(Math.random() * users.length)],
                source: sources[Math.floor(Math.random() * sources.length)]
            });
        }
        
        return events;
    }

    // Format file size
    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    // Clear results
    function clearResults() {
        document.getElementById('totalEvents').textContent = '-';
        document.getElementById('dateRange').textContent = '-';
        document.getElementById('uniqueFiles').textContent = '-';
        document.getElementById('eventTypes').textContent = '-';
        document.getElementById('suspiciousEvents').textContent = '-';
        timelineEvents.innerHTML = '';
        timelineVisualization.innerHTML = '<p class="text-center m-0">Timeline visualization will appear here</p>';
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
document.addEventListener('DOMContentLoaded', function() {
    const timestampInput = document.getElementById('timestampInput');
    const convertTimestamp = document.getElementById('convertTimestamp');
    const clearAll = document.getElementById('clearAll');
    const convertedTable = document.getElementById('convertedTable');
    const timelineTable = document.getElementById('timelineTable');

    // Convert timestamp
    convertTimestamp.addEventListener('click', function() {
        const input = timestampInput.value.trim();
        
        if (!input) {
            alert('Please enter a timestamp to convert.');
            return;
        }

        convertTimestampFormats(input);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        timestampInput.value = '';
        clearResults();
    });

    // Convert timestamp formats
    function convertTimestampFormats(input) {
        // Display input analysis
        document.getElementById('detectedFormat').textContent = 'Analyzing...';
        document.getElementById('epochTime').textContent = 'Converting...';
        document.getElementById('utcTime').textContent = 'Converting...';
        document.getElementById('localTime').textContent = 'Converting...';

        // Simulate timestamp conversion
        setTimeout(function() {
            // In a real implementation, you would parse and convert timestamps
            // For demonstration, we'll simulate results
            const format = detectTimestampFormat(input);
            const epoch = convertToEpoch(input, format);
            const utc = new Date(epoch * 1000).toUTCString();
            const local = new Date(epoch * 1000).toString();

            document.getElementById('detectedFormat').textContent = format;
            document.getElementById('epochTime').textContent = epoch;
            document.getElementById('utcTime').textContent = utc;
            document.getElementById('localTime').textContent = local;

            // Generate mock converted timestamps
            convertedTable.innerHTML = '';
            const conversions = generateMockConversions(epoch);
            
            conversions.forEach(conversion => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${conversion.format}</td>
                    <td>${conversion.value}</td>
                    <td>${conversion.description}</td>
                `;
                convertedTable.appendChild(row);
            });

            // Generate mock timeline
            timelineTable.innerHTML = '';
            const timeline = generateMockTimeline(epoch);
            
            timeline.forEach(event => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${event.event}</td>
                    <td>${event.timestamp}</td>
                    <td>${event.relative}</td>
                `;
                timelineTable.appendChild(row);
            });
        }, 2000);
    }

    // Detect timestamp format
    function detectTimestampFormat(input) {
        // In a real implementation, you would analyze the input
        const formats = ['Unix Timestamp', 'ISO 8601', 'Windows FILETIME', 'RFC 2822'];
        return formats[Math.floor(Math.random() * formats.length)];
    }

    // Convert to epoch
    function convertToEpoch(input, format) {
        // In a real implementation, you would convert based on format
        if (format === 'Unix Timestamp') {
            return parseInt(input);
        }
        return Math.floor(Date.now() / 1000);
    }

    // Generate mock conversions
    function generateMockConversions(epoch) {
        return [
            { format: 'Unix Timestamp', value: epoch, description: 'Seconds since Jan 1, 1970 UTC' },
            { format: 'Windows FILETIME', value: epoch * 10000000 + 116444736000000000, description: '100-nanosecond intervals since Jan 1, 1601 UTC' },
            { format: 'ISO 8601', value: new Date(epoch * 1000).toISOString(), description: 'Standardized date/time format' },
            { format: 'RFC 2822', value: new Date(epoch * 1000).toUTCString(), description: 'Email date format' },
            { format: 'Excel Serial', value: (epoch / 86400) + 25569, description: 'Days since Jan 1, 1900' }
        ];
    }

    // Generate mock timeline
    function generateMockTimeline(epoch) {
        const baseDate = new Date(epoch * 1000);
        return [
            { event: 'File Created', timestamp: baseDate.toISOString(), relative: '0 seconds' },
            { event: 'File Modified', timestamp: new Date(baseDate.getTime() + 300000).toISOString(), relative: '+5 minutes' },
            { event: 'File Accessed', timestamp: new Date(baseDate.getTime() + 600000).toISOString(), relative: '+10 minutes' },
            { event: 'File Deleted', timestamp: new Date(baseDate.getTime() + 900000).toISOString(), relative: '+15 minutes' }
        ];
    }

    // Clear results
    function clearResults() {
        document.getElementById('detectedFormat').textContent = '-';
        document.getElementById('epochTime').textContent = '-';
        document.getElementById('utcTime').textContent = '-';
        document.getElementById('localTime').textContent = '-';
        convertedTable.innerHTML = '';
        timelineTable.innerHTML = '';
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
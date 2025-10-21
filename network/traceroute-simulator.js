document.addEventListener('DOMContentLoaded', function() {
    const targetHost = document.getElementById('targetHost');
    const maxHops = document.getElementById('maxHops');
    const startTraceroute = document.getElementById('startTraceroute');
    const stopTraceroute = document.getElementById('stopTraceroute');
    const clearAll = document.getElementById('clearAll');
    const traceResults = document.getElementById('traceResults');
    const traceOutput = document.getElementById('traceOutput');
    const traceProgress = document.getElementById('traceProgress');

    let traceInterval;
    let currentHop = 1;
    let traceRunning = false;

    // Start traceroute
    startTraceroute.addEventListener('click', function() {
        const host = targetHost.value.trim();
        const max = parseInt(maxHops.value);

        if (!host) {
            alert('Please enter a target host.');
            return;
        }

        if (isNaN(max) || max < 1) {
            alert('Please enter a valid max hops value.');
            return;
        }

        traceResults.innerHTML = '';
        traceOutput.innerHTML = `traceroute to ${host}, ${max} hops max\n`;
        currentHop = 1;
        traceRunning = true;
        startTracerouteProcess(host, max);
    });

    // Stop traceroute
    stopTraceroute.addEventListener('click', function() {
        traceRunning = false;
        if (traceInterval) {
            clearInterval(traceInterval);
        }
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        targetHost.value = '';
        maxHops.value = '30';
        traceResults.innerHTML = '';
        traceOutput.innerHTML = '';
        traceProgress.style.width = '0%';
        traceRunning = false;
        if (traceInterval) {
            clearInterval(traceInterval);
        }
    });

    // Start traceroute process
    function startTracerouteProcess(host, max) {
        traceInterval = setInterval(function() {
            if (!traceRunning || currentHop > max) {
                clearInterval(traceInterval);
                traceRunning = false;
                return;
            }

            // Simulate traceroute response
            const ip = generateRandomIP();
            const hostname = generateHostname(ip);
            const rtt = Math.floor(Math.random() * 100) + 1;
            const location = generateLocation();

            // Add result row
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${currentHop}</td>
                <td>${ip}</td>
                <td>${hostname}</td>
                <td>${rtt} ms</td>
                <td>${location}</td>
            `;
            traceResults.appendChild(row);

            // Update output
            traceOutput.innerHTML += `${currentHop}  ${ip} (${hostname})  ${rtt} ms\n`;

            // Update progress
            const progress = (currentHop / max) * 100;
            traceProgress.style.width = progress + '%';

            // Simulate network delay
            currentHop++;
        }, 500); // Simulate network delay
    }

    // Generate random IP
    function generateRandomIP() {
        return `10.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
    }

    // Generate hostname
    function generateHostname(ip) {
        const prefixes = ['router', 'gateway', 'switch', 'firewall', 'proxy'];
        const suffixes = ['.local', '.net', '.com', '.org'];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
        return `${prefix}-${ip.replace(/\./g, '-')}${suffix}`;
    }

    // Generate location
    function generateLocation() {
        const locations = ['New York, USA', 'London, UK', 'Tokyo, Japan', 'Singapore', 'Frankfurt, Germany', 'Amsterdam, Netherlands'];
        return locations[Math.floor(Math.random() * locations.length)];
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
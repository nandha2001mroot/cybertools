document.addEventListener('DOMContentLoaded', function() {
    const targetHost = document.getElementById('targetHost');
    const packetCount = document.getElementById('packetCount');
    const startPing = document.getElementById('startPing');
    const stopPing = document.getElementById('stopPing');
    const clearAll = document.getElementById('clearAll');
    const pingOutput = document.getElementById('pingOutput');
    const pingProgress = document.getElementById('pingProgress');
    const packetsSent = document.getElementById('packetsSent');
    const packetsReceived = document.getElementById('packetsReceived');
    const packetLoss = document.getElementById('packetLoss');
    const avgRTT = document.getElementById('avgRTT');
    const targetInfo = document.getElementById('targetInfo');
    const resolvedIP = document.getElementById('resolvedIP');
    const hostStatus = document.getElementById('hostStatus');

    let pingInterval;
    let currentPacket = 1;
    let pingRunning = false;
    let receivedCount = 0;
    let rttSum = 0;

    // Start ping
    startPing.addEventListener('click', function() {
        const host = targetHost.value.trim();
        const count = parseInt(packetCount.value);

        if (!host) {
            alert('Please enter a target host.');
            return;
        }

        if (isNaN(count) || count < 1) {
            alert('Please enter a valid packet count.');
            return;
        }

        // Reset statistics
        currentPacket = 1;
        receivedCount = 0;
        rttSum = 0;
        pingRunning = true;
        pingOutput.innerHTML = `PING ${host}:\n`;
        targetInfo.textContent = host;
        resolvedIP.textContent = 'Resolving...';
        hostStatus.textContent = 'Testing...';

        // Simulate DNS resolution
        setTimeout(function() {
            resolvedIP.textContent = generateRandomIP();
            startPingProcess(host, count);
        }, 500);
    });

    // Stop ping
    stopPing.addEventListener('click', function() {
        pingRunning = false;
        if (pingInterval) {
            clearInterval(pingInterval);
        }
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        targetHost.value = '';
        packetCount.value = '4';
        pingOutput.innerHTML = '';
        pingProgress.style.width = '0%';
        packetsSent.textContent = '0';
        packetsReceived.textContent = '0';
        packetLoss.textContent = '0%';
        avgRTT.textContent = '0 ms';
        targetInfo.textContent = '-';
        resolvedIP.textContent = '-';
        hostStatus.textContent = '-';
        pingRunning = false;
        if (pingInterval) {
            clearInterval(pingInterval);
        }
    });

    // Start ping process
    function startPingProcess(host, count) {
        pingInterval = setInterval(function() {
            if (!pingRunning || currentPacket > count) {
                clearInterval(pingInterval);
                pingRunning = false;
                
                // Update final statistics
                updateStatistics(count, receivedCount, rttSum / receivedCount);
                hostStatus.textContent = receivedCount > 0 ? 'Reachable' : 'Unreachable';
                return;
            }

            // Simulate ping response
            const rtt = Math.floor(Math.random() * 100) + 1;
            const packetReceived = Math.random() > 0.1; // 90% success rate

            if (packetReceived) {
                receivedCount++;
                rttSum += rtt;
                
                pingOutput.innerHTML += `64 bytes from ${resolvedIP.textContent}: icmp_seq=${currentPacket} ttl=64 time=${rtt} ms\n`;
            } else {
                pingOutput.innerHTML += `Request timeout for icmp_seq ${currentPacket}\n`;
            }

            // Update statistics
            updateStatistics(currentPacket, receivedCount, rttSum / receivedCount);

            // Update progress
            const progress = (currentPacket / count) * 100;
            pingProgress.style.width = progress + '%';

            currentPacket++;
        }, 1000); // Simulate 1 second interval
    }

    // Update statistics
    function updateStatistics(sent, received, avg) {
        packetsSent.textContent = sent;
        packetsReceived.textContent = received;
        const loss = sent > 0 ? Math.round(((sent - received) / sent) * 100) : 0;
        packetLoss.textContent = loss + '%';
        avgRTT.textContent = avg > 0 ? Math.round(avg) + ' ms' : '0 ms';
    }

    // Generate random IP
    function generateRandomIP() {
        return `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
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
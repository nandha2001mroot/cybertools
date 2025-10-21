document.addEventListener('DOMContentLoaded', function() {
    const diskImageUpload = document.getElementById('diskImageUpload');
    const simulateCarving = document.getElementById('simulateCarving');
    const clearAll = document.getElementById('clearAll');
    const recoveredFiles = document.getElementById('recoveredFiles');
    const carvingProgress = document.getElementById('carvingProgress');
    const processStatus = document.getElementById('processStatus');

    // Simulate carving
    simulateCarving.addEventListener('click', function() {
        const file = diskImageUpload.files[0];
        
        if (!file) {
            alert('Please upload a disk image to carve.');
            return;
        }

        simulateFileCarving(file);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        diskImageUpload.value = '';
        clearResults();
    });

    // Simulate file carving
    function simulateFileCarving(file) {
        // Display file information
        document.getElementById('fileName').textContent = file.name;
        document.getElementById('fileSize').textContent = formatFileSize(file.size);
        document.getElementById('fileSystem').textContent = 'Simulating...';
        document.getElementById('sectorSize').textContent = 'Simulating...';

        // Simulate carving process
        processStatus.textContent = 'Initializing carving process...';
        carvingProgress.style.width = '0%';
        
        let progress = 0;
        const interval = setInterval(function() {
            progress += 5;
            carvingProgress.style.width = progress + '%';
            
            if (progress < 30) {
                processStatus.textContent = 'Scanning disk image for file signatures...';
            } else if (progress < 60) {
                processStatus.textContent = 'Identifying file boundaries...';
            } else if (progress < 90) {
                processStatus.textContent = 'Extracting recovered files...';
            } else {
                processStatus.textContent = 'Finalizing recovery...';
            }
            
            if (progress >= 100) {
                clearInterval(interval);
                completeCarvingSimulation();
            }
        }, 200);
    }

    // Complete carving simulation
    function completeCarvingSimulation() {
        // In a real implementation, you would carve files from the disk image
        // For demonstration, we'll simulate results
        const fileSystem = getRandomFileSystem();
        const sectorSize = getRandomSectorSize();
        const clusters = getRandomClusterCount();
        const recovered = getRandomFilesRecovered();
        const images = getRandomImageCount();
        const documents = getRandomDocumentCount();
        const executables = getRandomExecutableCount();
        const successRate = getRandomSuccessRate();

        document.getElementById('fileSystem').textContent = fileSystem;
        document.getElementById('sectorSize').textContent = sectorSize + ' bytes';
        document.getElementById('clusterCount').textContent = clusters;
        document.getElementById('filesRecovered').textContent = recovered;
        document.getElementById('images').textContent = images;
        document.getElementById('documents').textContent = documents;
        document.getElementById('executables').textContent = executables;
        document.getElementById('successRate').textContent = successRate + '%';

        // Generate mock recovered files
        recoveredFiles.innerHTML = '';
        const files = generateMockRecoveredFiles(recovered);
        
        files.forEach(file => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${file.name}</td>
                <td>${file.type}</td>
                <td>${file.size}</td>
                <td>${file.offset}</td>
                <td><span class="badge bg-${file.status === 'Recovered' ? 'success' : 'warning'}">${file.status}</span></td>
                <td><span class="badge bg-${file.integrity === 'Good' ? 'success' : file.integrity === 'Partial' ? 'warning' : 'danger'}">${file.integrity}</span></td>
            `;
            recoveredFiles.appendChild(row);
        });

        processStatus.textContent = 'Carving process completed successfully!';
    }

    // Format file size
    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    // Get random file system
    function getRandomFileSystem() {
        const systems = ['NTFS', 'FAT32', 'ext4', 'HFS+', 'exFAT'];
        return systems[Math.floor(Math.random() * systems.length)];
    }

    // Get random sector size
    function getRandomSectorSize() {
        const sizes = [512, 1024, 2048, 4096];
        return sizes[Math.floor(Math.random() * sizes.length)];
    }

    // Get random cluster count
    function getRandomClusterCount() {
        return Math.floor(Math.random() * 1000000) + 100000; // 100K-1M clusters
    }

    // Get random files recovered
    function getRandomFilesRecovered() {
        return Math.floor(Math.random() * 500) + 50; // 50-550 files
    }

    // Get random image count
    function getRandomImageCount() {
        return Math.floor(Math.random() * 100) + 10; // 10-110 images
    }

    // Get random document count
    function getRandomDocumentCount() {
        return Math.floor(Math.random() * 50) + 5; // 5-55 documents
    }

    // Get random executable count
    function getRandomExecutableCount() {
        return Math.floor(Math.random() * 30) + 2; // 2-32 executables
    }

    // Get random success rate
    function getRandomSuccessRate() {
        return Math.floor(Math.random() * 40) + 60; // 60-100%
    }

    // Generate mock recovered files
    function generateMockRecoveredFiles(count) {
        const files = [];
        const extensions = ['.jpg', '.png', '.pdf', '.docx', '.xlsx', '.exe', '.dll'];
        const types = ['Image', 'Document', 'Executable', 'Spreadsheet'];
        const statuses = ['Recovered', 'Partial'];
        const integrities = ['Good', 'Partial', 'Damaged'];
        
        for (let i = 0; i < count; i++) {
            const ext = extensions[Math.floor(Math.random() * extensions.length)];
            const type = types[Math.floor(Math.random() * types.length)];
            const status = statuses[Math.floor(Math.random() * statuses.length)];
            const integrity = integrities[Math.floor(Math.random() * integrities.length)];
            files.push({
                name: `recovered_${i}${ext}`,
                type: type,
                size: formatFileSize(Math.floor(Math.random() * 10000000)),
                offset: '0x' + (Math.floor(Math.random() * 1000000) * 512).toString(16),
                status: status,
                integrity: integrity
            });
        }
        
        return files;
    }

    // Clear results
    function clearResults() {
        document.getElementById('fileName').textContent = '-';
        document.getElementById('fileSize').textContent = '-';
        document.getElementById('fileSystem').textContent = '-';
        document.getElementById('sectorSize').textContent = '-';
        document.getElementById('clusterCount').textContent = '-';
        document.getElementById('filesRecovered').textContent = '-';
        document.getElementById('images').textContent = '-';
        document.getElementById('documents').textContent = '-';
        document.getElementById('executables').textContent = '-';
        document.getElementById('successRate').textContent = '-';
        recoveredFiles.innerHTML = '';
        carvingProgress.style.width = '0%';
        processStatus.textContent = 'Ready to carve';
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
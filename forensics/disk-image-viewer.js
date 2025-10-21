document.addEventListener('DOMContentLoaded', function() {
    const diskImageUpload = document.getElementById('diskImageUpload');
    const analyzeDisk = document.getElementById('analyzeDisk');
    const clearAll = document.getElementById('clearAll');
    const partitionTable = document.getElementById('partitionTable');
    const fileSystemTable = document.getElementById('fileSystemTable');

    // Analyze disk
    analyzeDisk.addEventListener('click', function() {
        const file = diskImageUpload.files[0];
        
        if (!file) {
            alert('Please upload a disk image to analyze.');
            return;
        }

        analyzeDiskImage(file);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        diskImageUpload.value = '';
        clearResults();
    });

    // Analyze disk image
    function analyzeDiskImage(file) {
        // Display disk information
        document.getElementById('imageName').textContent = file.name;
        document.getElementById('imageSize').textContent = formatFileSize(file.size);
        document.getElementById('sectorSize').textContent = 'Analyzing...';
        document.getElementById('partitionCount').textContent = 'Analyzing...';

        // Simulate disk analysis
        setTimeout(function() {
            // In a real implementation, you would parse the disk image
            // For demonstration, we'll simulate results
            const sectorSize = getRandomSectorSize();
            const partitions = getRandomPartitionCount();
            const fileSystems = getRandomFileSystems();
            const files = getRandomFileCount();
            const deleted = getRandomDeletedFileCount();
            const dirs = getRandomDirectoryCount();
            const unallocated = getRandomUnallocatedSpace();
            const status = 'Complete';

            document.getElementById('sectorSize').textContent = sectorSize + ' bytes';
            document.getElementById('partitionCount').textContent = partitions;
            document.getElementById('fileSystems').textContent = fileSystems;
            document.getElementById('filesFound').textContent = files;
            document.getElementById('deletedFiles').textContent = deleted;
            document.getElementById('directories').textContent = dirs;
            document.getElementById('unallocated').textContent = formatFileSize(unallocated);
            document.getElementById('analysisStatus').textContent = status;

            // Generate mock partition table
            partitionTable.innerHTML = '';
            const partitionData = generateMockPartitions(partitions);
            
            partitionData.forEach(partition => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${partition.number}</td>
                    <td>${partition.type}</td>
                    <td>${partition.startSector}</td>
                    <td>${partition.size}</td>
                    <td>${partition.fileSystem}</td>
                    <td><span class="badge bg-${partition.status === 'Active' ? 'success' : 'secondary'}">${partition.status}</span></td>
                `;
                partitionTable.appendChild(row);
            });

            // Generate mock file system table
            fileSystemTable.innerHTML = '';
            const fileData = generateMockFileSystem(files);
            
            fileData.forEach(file => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${file.name}</td>
                    <td>${file.type}</td>
                    <td>${file.size}</td>
                    <td>${file.created}</td>
                    <td>${file.modified}</td>
                    <td><span class="badge bg-${file.status === 'Active' ? 'success' : 'danger'}">${file.status}</span></td>
                `;
                fileSystemTable.appendChild(row);
            });
        }, 2000);
    }

    // Format file size
    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    // Get random sector size
    function getRandomSectorSize() {
        const sizes = [512, 1024, 2048, 4096];
        return sizes[Math.floor(Math.random() * sizes.length)];
    }

    // Get random partition count
    function getRandomPartitionCount() {
        return Math.floor(Math.random() * 8) + 1; // 1-8 partitions
    }

    // Get random file systems
    function getRandomFileSystems() {
        const systems = ['NTFS', 'FAT32', 'ext4', 'HFS+', 'exFAT'];
        const count = Math.floor(Math.random() * 3) + 1; // 1-3 file systems
        const selected = [];
        for (let i = 0; i < count; i++) {
            const idx = Math.floor(Math.random() * systems.length);
            if (!selected.includes(systems[idx])) {
                selected.push(systems[idx]);
            }
        }
        return selected.join(', ');
    }

    // Get random file count
    function getRandomFileCount() {
        return Math.floor(Math.random() * 10000) + 1000; // 1K-10K files
    }

    // Get random deleted file count
    function getRandomDeletedFileCount() {
        return Math.floor(Math.random() * 1000); // 0-1000 deleted files
    }

    // Get random directory count
    function getRandomDirectoryCount() {
        return Math.floor(Math.random() * 1000) + 100; // 100-1100 directories
    }

    // Get random unallocated space
    function getRandomUnallocatedSpace() {
        return Math.floor(Math.random() * 10000000000); // 0-10GB unallocated
    }

    // Generate mock partitions
    function generateMockPartitions(count) {
        const partitions = [];
        const types = ['Primary', 'Extended', 'Logical'];
        const fileSystems = ['NTFS', 'FAT32', 'ext4', 'HFS+'];
        
        for (let i = 0; i < count; i++) {
            const type = types[Math.floor(Math.random() * types.length)];
            const fs = fileSystems[Math.floor(Math.random() * fileSystems.length)];
            partitions.push({
                number: i + 1,
                type: type,
                startSector: Math.floor(Math.random() * 1000000),
                size: formatFileSize(Math.floor(Math.random() * 100000000000)),
                fileSystem: fs,
                status: Math.random() > 0.2 ? 'Active' : 'Inactive'
            });
        }
        
        return partitions;
    }

    // Generate mock file system
    function generateMockFileSystem(count) {
        const files = [];
        const extensions = ['.txt', '.jpg', '.png', '.pdf', '.docx', '.xlsx', '.exe', '.dll'];
        const types = ['Text', 'Image', 'Document', 'Spreadsheet', 'Executable', 'Library'];
        
        for (let i = 0; i < count; i++) {
            const ext = extensions[Math.floor(Math.random() * extensions.length)];
            const type = types[Math.floor(Math.random() * types.length)];
            const status = Math.random() > 0.1 ? 'Active' : 'Deleted';
            files.push({
                name: `file_${i}${ext}`,
                type: type,
                size: formatFileSize(Math.floor(Math.random() * 10000000)),
                created: getRandomDate(),
                modified: getRandomDate(),
                status: status
            });
        }
        
        return files;
    }

    // Get random date
    function getRandomDate() {
        const now = new Date();
        const daysAgo = Math.floor(Math.random() * 365);
        const date = new Date(now.setDate(now.getDate() - daysAgo));
        return date.toISOString().split('T')[0];
    }

    // Clear results
    function clearResults() {
        document.getElementById('imageName').textContent = '-';
        document.getElementById('imageSize').textContent = '-';
        document.getElementById('sectorSize').textContent = '-';
        document.getElementById('partitionCount').textContent = '-';
        document.getElementById('fileSystems').textContent = '-';
        document.getElementById('filesFound').textContent = '-';
        document.getElementById('deletedFiles').textContent = '-';
        document.getElementById('directories').textContent = '-';
        document.getElementById('unallocated').textContent = '-';
        document.getElementById('analysisStatus').textContent = '-';
        partitionTable.innerHTML = '';
        fileSystemTable.innerHTML = '';
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
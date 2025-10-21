document.addEventListener('DOMContentLoaded', function() {
    const directoryUpload = document.getElementById('directoryUpload');
    const hashAllFiles = document.getElementById('hashAllFiles');
    const clearAll = document.getElementById('clearAll');
    const hashTable = document.getElementById('hashTable');
    const processingLog = document.getElementById('processingLog');

    // Hash all files
    hashAllFiles.addEventListener('click', function() {
        const file = directoryUpload.files[0];
        
        if (!file) {
            alert('Please upload a directory archive to hash.');
            return;
        }

        hashAllDirectoryFiles(file);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        directoryUpload.value = '';
        clearResults();
    });

    // Hash all directory files
    function hashAllDirectoryFiles(file) {
        // Display file information
        document.getElementById('archiveName').textContent = file.name;
        document.getElementById('totalFiles').textContent = 'Calculating...';
        document.getElementById('processedFiles').textContent = '0';
        document.getElementById('failedFiles').textContent = '0';
        document.getElementById('processingTime').textContent = '0s';

        // Simulate file hashing
        processingLog.textContent = 'Starting file hashing process...\n';
        hashTable.innerHTML = '';

        setTimeout(function() {
            // In a real implementation, you would extract and hash files
            // For demonstration, we'll simulate results
            const totalFiles = getRandomFileCount();
            const processed = totalFiles;
            const failed = getRandomFailedCount();
            const processingTime = getRandomProcessingTime();

            document.getElementById('totalFiles').textContent = totalFiles;
            document.getElementById('processedFiles').textContent = processed;
            document.getElementById('failedFiles').textContent = failed;
            document.getElementById('processingTime').textContent = processingTime + 's';

            // Generate mock hash table
            const files = generateMockFiles(totalFiles);
            let processedCount = 0;
            
            const processFile = function(index) {
                if (index >= files.length) {
                    processingLog.textContent += 'Hashing process completed.\n';
                    return;
                }
                
                const file = files[index];
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${file.name}</td>
                    <td>${file.size}</td>
                    <td>${document.getElementById('md5Check').checked ? file.md5 : '-'}</td>
                    <td>${document.getElementById('sha1Check').checked ? file.sha1 : '-'}</td>
                    <td>${document.getElementById('sha256Check').checked ? file.sha256 : '-'}</td>
                    <td><span class="badge bg-success">Complete</span></td>
                `;
                hashTable.appendChild(row);
                
                processingLog.textContent += `Processed: ${file.name}\n`;
                processedCount++;
                document.getElementById('processedFiles').textContent = processedCount;
                
                setTimeout(() => processFile(index + 1), 100);
            };
            
            processFile(0);
        }, 2000);
    }

    // Get random file count
    function getRandomFileCount() {
        return Math.floor(Math.random() * 1000) + 100; // 100-1100 files
    }

    // Get random failed count
    function getRandomFailedCount() {
        return Math.floor(Math.random() * 10); // 0-10 failed
    }

    // Get random processing time
    function getRandomProcessingTime() {
        return Math.floor(Math.random() * 60) + 10; // 10-70 seconds
    }

    // Generate mock files
    function generateMockFiles(count) {
        const files = [];
        const extensions = ['.txt', '.jpg', '.png', '.pdf', '.docx', '.xlsx', '.exe', '.dll', '.zip'];
        const names = ['report', 'image', 'document', 'presentation', 'spreadsheet', 'program', 'library', 'archive'];
        
        for (let i = 0; i < count; i++) {
            const name = names[Math.floor(Math.random() * names.length)];
            const ext = extensions[Math.floor(Math.random() * extensions.length)];
            files.push({
                name: `${name}_${i}${ext}`,
                size: formatFileSize(Math.floor(Math.random() * 10000000)),
                md5: generateRandomHash(32),
                sha1: generateRandomHash(40),
                sha256: generateRandomHash(64),
                sha512: generateRandomHash(128),
                crc32: generateRandomCRC32()
            });
        }
        
        return files;
    }

    // Generate random hash
    function generateRandomHash(length) {
        let hash = '';
        for (let i = 0; i < length; i++) {
            hash += Math.floor(Math.random() * 16).toString(16);
        }
        return hash.toUpperCase();
    }

    // Generate random CRC32
    function generateRandomCRC32() {
        let crc = '';
        for (let i = 0; i < 8; i++) {
            crc += Math.floor(Math.random() * 16).toString(16);
        }
        return crc.toUpperCase();
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
        document.getElementById('archiveName').textContent = '-';
        document.getElementById('totalFiles').textContent = '-';
        document.getElementById('processedFiles').textContent = '-';
        document.getElementById('failedFiles').textContent = '-';
        document.getElementById('processingTime').textContent = '-';
        hashTable.innerHTML = '';
        processingLog.textContent = '';
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
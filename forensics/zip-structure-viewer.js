document.addEventListener('DOMContentLoaded', function() {
    const zipFileUpload = document.getElementById('zipFileUpload');
    const analyzeZIP = document.getElementById('analyzeZIP');
    const clearAll = document.getElementById('clearAll');
    const fileStructure = document.getElementById('fileStructure');
    const centralDirectory = document.getElementById('centralDirectory');

    // Analyze ZIP
    analyzeZIP.addEventListener('click', function() {
        const file = zipFileUpload.files[0];
        
        if (!file) {
            alert('Please upload a ZIP file to analyze.');
            return;
        }

        analyzeZIPStructure(file);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        zipFileUpload.value = '';
        clearResults();
    });

    // Analyze ZIP structure
    function analyzeZIPStructure(file) {
        // Display file information
        document.getElementById('fileName').textContent = file.name;
        document.getElementById('fileSize').textContent = formatFileSize(file.size);
        document.getElementById('compression').textContent = 'Analyzing...';
        document.getElementById('fileCount').textContent = 'Analyzing...';

        // Simulate ZIP analysis
        setTimeout(function() {
            // In a real implementation, you would parse the ZIP file
            // For demonstration, we'll simulate results
            const compression = getRandomCompression();
            const files = getRandomFileCount();
            const dirs = getRandomDirCount();
            const password = getRandomPasswordStatus();
            const encryption = getRandomEncryption();
            const suspicious = getRandomSuspiciousFiles();
            const embedded = getRandomEmbeddedArchives();
            const threat = getThreatLevel(suspicious, embedded);

            document.getElementById('compression').textContent = compression;
            document.getElementById('fileCount').textContent = files;
            document.getElementById('dirCount').textContent = dirs;
            document.getElementById('passwordProtected').textContent = password;
            document.getElementById('encryption').textContent = encryption;
            document.getElementById('suspiciousFiles').textContent = suspicious;
            document.getElementById('embeddedArchives').textContent = embedded;
            document.getElementById('threatLevel').textContent = threat;

            // Generate mock file structure
            fileStructure.innerHTML = '';
            const structure = generateMockFileStructure(files, dirs);
            
            structure.forEach(file => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${file.name}</td>
                    <td>${file.size}</td>
                    <td>${file.compressed}</td>
                    <td>${file.ratio}</td>
                    <td>${file.modified}</td>
                    <td>${file.type}</td>
                `;
                fileStructure.appendChild(row);
            });

            // Generate mock central directory
            centralDirectory.innerHTML = '';
            const directory = generateMockCentralDirectory();
            
            directory.forEach(entry => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${entry.field}</td>
                    <td>${entry.offset}</td>
                    <td>${entry.value}</td>
                    <td>${entry.description}</td>
                `;
                centralDirectory.appendChild(row);
            });
        }, 2000);
    }

    // Format file size
    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    // Get random compression
    function getRandomCompression() {
        const compressions = ['Deflate', 'Store', 'BZIP2', 'LZMA'];
        return compressions[Math.floor(Math.random() * compressions.length)];
    }

    // Get random file count
    function getRandomFileCount() {
        return Math.floor(Math.random() * 50) + 1; // 1-50 files
    }

    // Get random dir count
    function getRandomDirCount() {
        return Math.floor(Math.random() * 10); // 0-10 directories
    }

    // Get random password status
    function getRandomPasswordStatus() {
        return Math.random() > 0.9 ? 'Yes' : 'No';
    }

    // Get random encryption
    function getRandomEncryption() {
        const encryptions = ['None', 'Traditional PKWARE', 'AES-128', 'AES-192', 'AES-256'];
        return encryptions[Math.floor(Math.random() * encryptions.length)];
    }

    // Get random suspicious files
    function getRandomSuspiciousFiles() {
        const files = ['None', '1 executable', '2 executables', 'Script files', 'Hidden files'];
        return files[Math.floor(Math.random() * files.length)];
    }

    // Get random embedded archives
    function getRandomEmbeddedArchives() {
        const archives = ['None', '1 ZIP', '2 ZIPs', 'Nested archives'];
        return archives[Math.floor(Math.random() * archives.length)];
    }

    // Get threat level
    function getThreatLevel(suspicious, embedded) {
        if (suspicious !== 'None' || embedded !== 'None') {
            return 'High';
        }
        return Math.random() > 0.8 ? 'Medium' : 'Low';
    }

    // Generate mock file structure
    function generateMockFileStructure(fileCount, dirCount) {
        const files = [];
        const extensions = ['.txt', '.jpg', '.png', '.pdf', '.docx', '.xlsx'];
        const types = ['Text', 'Image', 'Document', 'Spreadsheet'];
        
        for (let i = 0; i < fileCount; i++) {
            const ext = extensions[Math.floor(Math.random() * extensions.length)];
            const type = types[Math.floor(Math.random() * types.length)];
            files.push({
                name: `file${i}${ext}`,
                size: formatFileSize(Math.floor(Math.random() * 1000000)),
                compressed: formatFileSize(Math.floor(Math.random() * 500000)),
                ratio: (Math.random() * 100).toFixed(1) + '%',
                modified: getRandomDate(),
                type: type
            });
        }
        
        // Add directories
        for (let i = 0; i < dirCount; i++) {
            files.push({
                name: `directory${i}/`,
                size: '0 bytes',
                compressed: '0 bytes',
                ratio: '0%',
                modified: getRandomDate(),
                type: 'Directory'
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

    // Generate mock central directory
    function generateMockCentralDirectory() {
        return [
            { field: 'Signature', offset: '0x00', value: '0x02014B50', description: 'Central Directory Signature' },
            { field: 'Version Made By', offset: '0x04', value: '0x0014', description: 'Version used to create archive' },
            { field: 'Version Needed', offset: '0x06', value: '0x0014', description: 'Minimum version to extract' },
            { field: 'General Flags', offset: '0x08', value: '0x0000', description: 'General purpose bit flags' },
            { field: 'Compression', offset: '0x0A', value: '0x0008', description: 'Compression method' },
            { field: 'Last Modified', offset: '0x0C', value: '0x0000', description: 'Last modification time' },
            { field: 'Last Modified Date', offset: '0x0E', value: '0x0000', description: 'Last modification date' },
            { field: 'CRC-32', offset: '0x10', value: '0x00000000', description: 'CRC-32 of uncompressed data' }
        ];
    }

    // Clear results
    function clearResults() {
        document.getElementById('fileName').textContent = '-';
        document.getElementById('fileSize').textContent = '-';
        document.getElementById('compression').textContent = '-';
        document.getElementById('fileCount').textContent = '-';
        document.getElementById('dirCount').textContent = '-';
        document.getElementById('passwordProtected').textContent = '-';
        document.getElementById('encryption').textContent = '-';
        document.getElementById('suspiciousFiles').textContent = '-';
        document.getElementById('embeddedArchives').textContent = '-';
        document.getElementById('threatLevel').textContent = '-';
        fileStructure.innerHTML = '';
        centralDirectory.innerHTML = '';
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
document.addEventListener('DOMContentLoaded', function() {
    const pdfFileUpload = document.getElementById('pdfFileUpload');
    const analyzeStreams = document.getElementById('analyzeStreams');
    const clearAll = document.getElementById('clearAll');
    const objectTable = document.getElementById('objectTable');
    const suspiciousTable = document.getElementById('suspiciousTable');

    // Analyze streams
    analyzeStreams.addEventListener('click', function() {
        const file = pdfFileUpload.files[0];
        
        if (!file) {
            alert('Please upload a PDF file to analyze.');
            return;
        }

        analyzePDFStreams(file);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        pdfFileUpload.value = '';
        clearResults();
    });

    // Analyze PDF streams
    function analyzePDFStreams(file) {
        // Display file information
        document.getElementById('fileName').textContent = file.name;
        document.getElementById('fileSize').textContent = formatFileSize(file.size);
        document.getElementById('pageCount').textContent = 'Analyzing...';
        document.getElementById('pdfVersion').textContent = 'Analyzing...';

        // Simulate PDF stream analysis
        setTimeout(function() {
            // In a real implementation, you would parse PDF objects
            // For demonstration, we'll simulate results
            const pages = getRandomPageCount();
            const version = getRandomPDFVersion();
            const objects = getRandomObjectCount();
            const streams = getRandomStreamObjects();
            const compressed = getRandomCompressedStreams();
            const encrypted = getRandomEncryptedStreams();
            const js = getRandomJavaScriptStatus();
            const embedded = getRandomEmbeddedFiles();

            document.getElementById('pageCount').textContent = pages;
            document.getElementById('pdfVersion').textContent = version;
            document.getElementById('objectCount').textContent = objects;
            document.getElementById('streamObjects').textContent = streams;
            document.getElementById('compressedStreams').textContent = compressed;
            document.getElementById('encryptedStreams').textContent = encrypted;
            document.getElementById('javascript').textContent = js;
            document.getElementById('embeddedFiles').textContent = embedded;

            // Generate mock object table
            objectTable.innerHTML = '';
            const objectsData = generateMockObjects(streams);
            
            objectsData.forEach(obj => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${obj.id}</td>
                    <td>${obj.type}</td>
                    <td>${obj.length}</td>
                    <td>${obj.compressed ? 'Yes' : 'No'}</td>
                    <td>${obj.encrypted ? 'Yes' : 'No'}</td>
                    <td>${obj.references}</td>
                `;
                objectTable.appendChild(row);
            });

            // Generate mock suspicious table
            suspiciousTable.innerHTML = '';
            const suspicious = generateMockSuspiciousElements(js, embedded);
            
            suspicious.forEach(element => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${element.element}</td>
                    <td>${element.type}</td>
                    <td>${element.location}</td>
                    <td><span class="badge bg-${element.risk === 'High' ? 'danger' : element.risk === 'Medium' ? 'warning' : 'success'}">${element.risk}</span></td>
                `;
                suspiciousTable.appendChild(row);
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

    // Get random page count
    function getRandomPageCount() {
        return Math.floor(Math.random() * 100) + 1; // 1-100 pages
    }

    // Get random PDF version
    function getRandomPDFVersion() {
        const versions = ['1.4', '1.5', '1.6', '1.7', '2.0'];
        return versions[Math.floor(Math.random() * versions.length)];
    }

    // Get random object count
    function getRandomObjectCount() {
        return Math.floor(Math.random() * 500) + 50; // 50-550 objects
    }

    // Get random stream objects
    function getRandomStreamObjects() {
        return Math.floor(Math.random() * 100) + 20; // 20-120 stream objects
    }

    // Get random compressed streams
    function getRandomCompressedStreams() {
        return Math.floor(Math.random() * 50) + 5; // 5-55 compressed streams
    }

    // Get random encrypted streams
    function getRandomEncryptedStreams() {
        return Math.floor(Math.random() * 20); // 0-20 encrypted streams
    }

    // Get random JavaScript status
    function getRandomJavaScriptStatus() {
        return Math.random() > 0.8 ? 'Present' : 'None';
    }

    // Get random embedded files
    function getRandomEmbeddedFiles() {
        const files = ['None', '1 file', '2 files', 'Image files', 'Data files'];
        return files[Math.floor(Math.random() * files.length)];
    }

    // Generate mock objects
    function generateMockObjects(count) {
        const objects = [];
        const types = ['Content', 'Image', 'Font', 'XObject', 'Annotation', 'JavaScript'];
        
        for (let i = 1; i <= count; i++) {
            const type = types[Math.floor(Math.random() * types.length)];
            const compressed = Math.random() > 0.5;
            const encrypted = Math.random() > 0.8;
            objects.push({
                id: `${i} 0 obj`,
                type: type,
                length: Math.floor(Math.random() * 10000),
                compressed: compressed,
                encrypted: encrypted,
                references: `${Math.floor(Math.random() * 10) + 1} refs`
            });
        }
        
        return objects;
    }

    // Generate mock suspicious elements
    function generateMockSuspiciousElements(js, embedded) {
        const elements = [];
        
        if (js === 'Present') {
            elements.push({
                element: 'JavaScript Action',
                type: 'Script',
                location: 'Object 5 0 obj',
                risk: 'High'
            });
        }
        
        if (embedded !== 'None') {
            elements.push({
                element: 'Embedded File',
                type: 'File',
                location: 'Object 10 0 obj',
                risk: 'Medium'
            });
        }
        
        if (Math.random() > 0.7) {
            elements.push({
                element: 'Launch Action',
                type: 'Action',
                location: 'Object 15 0 obj',
                risk: 'High'
            });
        }
        
        if (elements.length === 0) {
            elements.push({
                element: 'None detected',
                type: 'Clean',
                location: 'N/A',
                risk: 'Low'
            });
        }
        
        return elements;
    }

    // Clear results
    function clearResults() {
        document.getElementById('fileName').textContent = '-';
        document.getElementById('fileSize').textContent = '-';
        document.getElementById('pageCount').textContent = '-';
        document.getElementById('pdfVersion').textContent = '-';
        document.getElementById('objectCount').textContent = '-';
        document.getElementById('streamObjects').textContent = '-';
        document.getElementById('compressedStreams').textContent = '-';
        document.getElementById('encryptedStreams').textContent = '-';
        document.getElementById('javascript').textContent = '-';
        document.getElementById('embeddedFiles').textContent = '-';
        objectTable.innerHTML = '';
        suspiciousTable.innerHTML = '';
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
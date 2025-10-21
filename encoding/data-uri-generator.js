document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const fileUpload = document.getElementById('fileUpload');
    const textInput = document.getElementById('textInput');
    const generateDataURI = document.getElementById('generateDataURI');
    const clearAll = document.getElementById('clearAll');
    const dataURIOutput = document.getElementById('dataURIOutput');
    const copyDataURI = document.getElementById('copyDataURI');
    const previewURI = document.getElementById('previewURI');

    // Generate Data URI
    generateDataURI.addEventListener('click', function() {
        const file = fileUpload.files[0];
        const text = textInput.value.trim();

        if (file) {
            generateDataURIFromFile(file);
        } else if (text) {
            generateDataURIFromText(text);
        } else {
            alert('Please upload a file or enter text to generate Data URI.');
        }
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        fileUpload.value = '';
        textInput.value = '';
        dataURIOutput.value = '';
    });

    // Copy Data URI
    copyDataURI.addEventListener('click', function() {
        if (dataURIOutput.value) {
            dataURIOutput.select();
            document.execCommand('copy');
            alert('Data URI copied to clipboard!');
        }
    });

    // Preview URI
    previewURI.addEventListener('click', function() {
        if (dataURIOutput.value) {
            const newWindow = window.open();
            newWindow.document.write(`
                <html>
                    <head><title>Data URI Preview</title></head>
                    <body>
                        <h1>Data URI Preview</h1>
                        <div>
                            ${dataURIOutput.value.startsWith('image/') ? 
                                `<img src="${dataURIOutput.value}" style="max-width: 100%; max-height: 500px;" />` : 
                                `<pre>${dataURIOutput.value}</pre>`
                            }
                        </div>
                    </body>
                </html>
            `);
        }
    });

    // Generate Data URI from file
    function generateDataURIFromFile(file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const base64 = e.target.result.split(',')[1]; // Get base64 part
            const mimeType = file.type || 'application/octet-stream';
            const dataURI = `${mimeType};base64,${base64}`;
            dataURIOutput.value = dataURI;
        };
        reader.readAsDataURL(file);
    }

    // Generate Data URI from text
    function generateDataURIFromText(text) {
        const base64 = btoa(encodeURIComponent(text).replace(/%([0-9A-F]{2})/g, function(match, p1) {
            return String.fromCharCode('0x' + p1);
        }));
        const dataURI = `data:text/plain;charset=utf-8;base64,${base64}`;
        dataURIOutput.value = dataURI;
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
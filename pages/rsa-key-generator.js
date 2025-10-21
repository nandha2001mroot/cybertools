document.addEventListener('DOMContentLoaded', function() {
    const keySize = document.getElementById('keySize');
    const generateKeys = document.getElementById('generateKeys');
    const clearAll = document.getElementById('clearAll');
    const publicKey = document.getElementById('publicKey');
    const privateKey = document.getElementById('privateKey');
    const copyPublicKey = document.getElementById('copyPublicKey');
    const copyPrivateKey = document.getElementById('copyPrivateKey');

    // Generate RSA key pair
    generateKeys.addEventListener('click', async function() {
        try {
            const size = parseInt(keySize.value);
            const { publicKey: pubKey, privateKey: privKey } = await generateRSAKeyPair(size);
            
            publicKey.value = await exportPublicKey(pubKey);
            privateKey.value = await exportPrivateKey(privKey);
        } catch (error) {
            alert('Error generating RSA key pair: ' + error.message);
        }
    });

    // Clear all fields
    clearAll.addEventListener('click', function() {
        publicKey.value = '';
        privateKey.value = '';
    });

    // Copy public key
    copyPublicKey.addEventListener('click', function() {
        if (publicKey.value) {
            publicKey.select();
            document.execCommand('copy');
            alert('Public key copied to clipboard!');
        }
    });

    // Copy private key
    copyPrivateKey.addEventListener('click', function() {
        if (privateKey.value) {
            privateKey.select();
            document.execCommand('copy');
            alert('Private key copied to clipboard!');
        }
    });

    // Generate RSA key pair using Web Crypto API
    async function generateRSAKeyPair(size) {
        const keyPair = await window.crypto.subtle.generateKey(
            {
                name: "RSA-OAEP",
                modulusLength: size,
                publicExponent: new Uint8Array([1, 0, 1]),
                hash: "SHA-256",
            },
            true,
            ["encrypt", "decrypt"]
        );
        return keyPair;
    }

    // Export public key in PEM format
    async function exportPublicKey(key) {
        const exported = await window.crypto.subtle.exportKey("spki", key);
        const base64 = arrayBufferToBase64(exported);
        const pem = `-----BEGIN PUBLIC KEY-----\n${formatPEM(base64)}\n-----END PUBLIC KEY-----`;
        return pem;
    }

    // Export private key in PEM format
    async function exportPrivateKey(key) {
        const exported = await window.crypto.subtle.exportKey("pkcs8", key);
        const base64 = arrayBufferToBase64(exported);
        const pem = `-----BEGIN PRIVATE KEY-----\n${formatPEM(base64)}\n-----END PRIVATE KEY-----`;
        return pem;
    }

    // Convert ArrayBuffer to Base64
    function arrayBufferToBase64(buffer) {
        const bytes = new Uint8Array(buffer);
        let binary = '';
        for (let i = 0; i < bytes.byteLength; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }

    // Format PEM string with line breaks
    function formatPEM(pemString) {
        const lines = [];
        for (let i = 0; i < pemString.length; i += 64) {
            lines.push(pemString.substr(i, 64));
        }
        return lines.join('\n');
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
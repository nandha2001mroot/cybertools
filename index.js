// Enhanced tools data with cybersecurity focus and Nandha's expertise
const tools = [
    // Cryptography Tools
    {
        id: 1,
        name: "AES Encryptor/Decryptor",
        description: "Advanced Encryption Standard encryption and decryption tool",
        category: "cryptography",
        icon: "fas fa-lock",
        file: "pages/aes-encryptor.html",
        securityLevel: "high",
        expert: "Nandha Kumar M"
    },
    {
        id: 2,
        name: "RSA Key Generator",
        description: "Generate RSA public and private key pairs",
        category: "cryptography",
        icon: "fas fa-key",
        file: "pages/rsa-key-generator.html",
        securityLevel: "high",
        expert: "Nandha Kumar M"
    },
    {
        id: 3,
        name: "Base64 Encoder/Decoder",
        description: "Encode and decode Base64 strings",
        category: "encoding",
        icon: "fas fa-code",
        file: "pages/base64-encoder.html",
        securityLevel: "medium",
        expert: "Nandha Kumar M"
    },
    {
        id: 4,
        name: "SHA-256 Generator",
        description: "Generate SHA-256 hash of input text",
        category: "hashing",
        icon: "fas fa-fingerprint",
        file: "pages/sha256-generator.html",
        securityLevel: "high",
        expert: "Nandha Kumar M"
    },
    {
        id: 5,
        name: "Password Generator",
        description: "Generate secure random passwords",
        category: "cryptography",
        icon: "fas fa-key",
        file: "pages/password-generator.html",
        securityLevel: "high",
        expert: "Nandha Kumar M"
    },
    {
        id: 6,
        name: "MD5 Hash Generator",
        description: "Generate MD5 hash of input text",
        category: "hashing",
        icon: "fas fa-fingerprint",
        file: "pages/md5-generator.html",
        securityLevel: "low",
        expert: "Nandha Kumar M"
    },
    {
        id: 7,
        name: "IP Subnet Calculator",
        description: "Calculate subnet information for IP addresses",
        category: "network",
        icon: "fas fa-network-wired",
        file: "pages/ip-subnet-calculator.html",
        securityLevel: "medium",
        expert: "Nandha Kumar M"
    },
    {
        id: 8,
        name: "URL Encoder/Decoder",
        description: "Encode and decode URL parameters",
        category: "encoding",
        icon: "fas fa-link",
        file: "pages/url-encoder.html",
        securityLevel: "medium",
        expert: "Nandha Kumar M"
    },
    {
        id: 9,
        name: "Hex to ASCII Converter",
        description: "Convert between hexadecimal and ASCII",
        category: "encoding",
        icon: "fas fa-hexagon",
        file: "pages/hex-ascii-converter.html",
        securityLevel: "low",
        expert: "Nandha Kumar M"
    },
    {
        id: 10,
        name: "JWT Decoder",
        description: "Decode and analyze JWT tokens",
        category: "web-security",
        icon: "fas fa-id-card",
        file: "pages/jwt-decoder.html",
        securityLevel: "high",
        expert: "Nandha Kumar M"
    },
    {
        id: 11,
        name: "EXIF Metadata Viewer",
        description: "View EXIF metadata from images",
        category: "forensics",
        icon: "fas fa-camera",
        file: "pages/exif-viewer.html",
        securityLevel: "medium",
        expert: "Nandha Kumar M"
    },
    {
        id: 12,
        name: "Port Scanner",
        description: "Simulated port scanning tool",
        category: "network",
        icon: "fas fa-plug",
        file: "pages/port-scanner.html",
        securityLevel: "high",
        expert: "Nandha Kumar M"
    },
    {
        id: 13,
        name: "CSP Header Generator",
        description: "Generate Content Security Policy headers",
        category: "web-security",
        icon: "fas fa-shield-alt",
        file: "pages/csp-generator.html",
        securityLevel: "high",
        expert: "Nandha Kumar M"
    },
    {
        id: 14,
        name: "File Hash Calculator",
        description: "Calculate multiple hash types for files",
        category: "hashing",
        icon: "fas fa-file-signature",
        file: "pages/file-hash-calculator.html",
        securityLevel: "high",
        expert: "Nandha Kumar M"
    },
    {
        id: 15,
        name: "Binary Converter",
        description: "Convert between binary, decimal, hex",
        category: "encoding",
        icon: "fas fa-calculator",
        file: "pages/binary-converter.html",
        securityLevel: "low",
        expert: "Nandha Kumar M"
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayTools(tools);
    setupEventListeners();
    addCyberEffects();
    startTerminalAnimation();
    highlightNandha();
    addExpertInsights();
});

function displayTools(toolsArray) {
    const toolsGrid = document.getElementById('toolsGrid');
    toolsGrid.innerHTML = '';

    toolsArray.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = `tool-card ${tool.category}`;
        toolCard.innerHTML = `
            <a href="${tool.file}" class="text-decoration-none text-center">
                <i class="${tool.icon}"></i>
                <h5>${tool.name}</h5>
                <small>${tool.description}</small>
            </a>
        `;
        toolsGrid.appendChild(toolCard);
    });
}

function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        filterTools(searchTerm);
    });

    // Category filtering
    const categoryButtons = document.querySelectorAll('[data-category]');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            filterByCategory(category);
        });
    });
}

function filterTools(searchTerm) {
    const filteredTools = tools.filter(tool => 
        tool.name.toLowerCase().includes(searchTerm) || 
        tool.description.toLowerCase().includes(searchTerm)
    );
    displayTools(filteredTools);
}

function filterByCategory(category) {
    if (category === 'all') {
        displayTools(tools);
    } else {
        const filteredTools = tools.filter(tool => tool.category === category);
        displayTools(filteredTools);
    }
}

// Add cybersecurity visual effects
function addCyberEffects() {
    // Add terminal-like background animation
    document.body.style.background = `
        linear-gradient(135deg, var(--cyber-dark), var(--cyber-gray)),
        repeating-linear-gradient(
            0deg,
            rgba(0, 255, 65, 0.05) 0px,
            rgba(0, 255, 65, 0.05) 1px,
            transparent 1px,
            transparent 50px
        )
    `;
}

// Terminal animation effect
function startTerminalAnimation() {
    const terminalOutputs = document.querySelectorAll('.terminal-output');
    terminalOutputs.forEach(output => {
        let lines = [
            "System initialized...",
            "Security protocols active...",
            "Scanning for threats...",
            "All systems nominal...",
            "Ready for operation...",
            "Nandha's security tools loaded...",
            "GraphQL introspection enabled...",
            "Android pentesting tools ready...",
            "Security research mode active..."
        ];
        
        let currentLine = 0;
        setInterval(() => {
            if (currentLine < lines.length) {
                const prompt = document.createElement('div');
                prompt.className = 'terminal-prompt';
                prompt.textContent = lines[currentLine];
                output.appendChild(prompt);
                currentLine++;
            } else {
                currentLine = 0;
                output.innerHTML = '';
            }
        }, 2000);
    });
}

// Highlight Nandha's expertise
function highlightNandha() {
    // Add Nandha's expertise indicator
    const heroDesc = document.querySelector('.hero-description');
    if (heroDesc) {
        heroDesc.innerHTML += ' | Expertise by <a href="https://www.linkedin.com/in/nandha-kumar-m-952342159/" target="_blank" class="cyber-link">Nandha Kumar M</a>';
    }
}

// Add expert insights from Nandha's LinkedIn
function addExpertInsights() {
    const insights = [
        {
            title: "GraphQL Security",
            icon: "fas fa-bug",
            description: "GraphQL Introspection enabled → attacker maps full schema, finds sensitive queries/mutations"
        },
        {
            title: "Android Pentesting",
            icon: "fas fa-mobile-alt",
            description: "APK TOOL GUI Tools for easier reverse engineering and Android pentesting"
        },
        {
            title: "Deep Domain Discovery",
            icon: "fas fa-search",
            description: "Find deep domains without tools using simple dorks techniques"
        }
    ];

    const insightSection = document.querySelector('.expert-insights');
    if (insightSection) {
        const cardBody = insightSection.querySelector('.card-body');
        cardBody.innerHTML = '';
        
        insights.forEach(insight => {
            const insightItem = document.createElement('div');
            insightItem.className = 'insight-item mb-3';
            insightItem.innerHTML = `
                <h6><i class="${insight.icon} me-2"></i>${insight.title}</h6>
                <p class="small text-muted">${insight.description}</p>
            `;
            cardBody.appendChild(insightItem);
        });
    }
}
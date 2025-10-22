document.addEventListener('DOMContentLoaded', function() {
    // All tools data (organized by directory structure)
    const tools = [
        // Pages Tools (Main tools)
        {
            id: 1,
            name: "Base64 Encoder/Decoder",
            description: "Encode and decode Base64 strings for data transmission and obfuscation analysis",
            category: "encoding",
            icon: "fas fa-code",
            file: "pages/base64-encoder.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 2,
            name: "SHA-256 Generator",
            description: "Generate SHA-256 hash of input text for integrity verification and digital signatures",
            category: "hashing",
            icon: "fas fa-fingerprint",
            file: "pages/sha256-generator.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 3,
            name: "Password Generator",
            description: "Generate cryptographically secure random passwords with customizable options",
            category: "cryptography",
            icon: "fas fa-key",
            file: "pages/password-generator.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 4,
            name: "MD5 Generator",
            description: "Generate MD5 hash of input text (for compatibility, not recommended for security)",
            category: "hashing",
            icon: "fas fa-fingerprint",
            file: "pages/md5-generator.html",
            securityLevel: "low",
            expert: "Nandha Kumar M"
        },
        {
            id: 5,
            name: "RSA Key Generator",
            description: "Generate RSA public and private key pairs for secure communications",
            category: "cryptography",
            icon: "fas fa-key",
            file: "pages/rsa-key-generator.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 6,
            name: "IP Subnet Calculator",
            description: "Calculate subnet information for IP addresses in network security analysis",
            category: "network",
            icon: "fas fa-network-wired",
            file: "pages/ip-subnet-calculator.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 7,
            name: "URL Encoder/Decoder",
            description: "Encode and decode URL parameters for web security testing",
            category: "encoding",
            icon: "fas fa-link",
            file: "pages/url-encoder.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 8,
            name: "Hex to ASCII Converter",
            description: "Convert between hexadecimal and ASCII for binary data analysis",
            category: "encoding",
            icon: "fas fa-hexagon",
            file: "pages/hex-ascii-converter.html",
            securityLevel: "low",
            expert: "Nandha Kumar M"
        },
        {
            id: 9,
            name: "JWT Decoder",
            description: "Decode and analyze JWT tokens for authentication security testing",
            category: "web-security",
            icon: "fas fa-id-card",
            file: "pages/jwt-decoder.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 10,
            name: "EXIF Viewer",
            description: "View EXIF metadata from images for digital forensics analysis",
            category: "forensics",
            icon: "fas fa-camera",
            file: "pages/exif-viewer.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 11,
            name: "Port Scanner",
            description: "Simulated port scanning tool for network reconnaissance and security testing",
            category: "network",
            icon: "fas fa-plug",
            file: "pages/port-scanner.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 12,
            name: "CSP Generator",
            description: "Generate Content Security Policy headers to prevent XSS and other injection attacks",
            category: "web-security",
            icon: "fas fa-shield-alt",
            file: "pages/csp-generator.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 13,
            name: "File Hash Calculator",
            description: "Calculate multiple hash types for files in digital forensics and malware analysis",
            category: "hashing",
            icon: "fas fa-file-signature",
            file: "pages/file-hash-calculator.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 14,
            name: "Binary Converter",
            description: "Convert between binary, decimal, hex for low-level data analysis",
            category: "encoding",
            icon: "fas fa-calculator",
            file: "pages/binary-converter.html",
            securityLevel: "low",
            expert: "Nandha Kumar M"
        },

        // Cryptography Tools
        {
            id: 15,
            name: "AES Encryptor/Decryptor",
            description: "Advanced Encryption Standard encryption and decryption tool",
            category: "cryptography",
            icon: "fas fa-lock",
            file: "tools/cryptography/aes-encryptor.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 16,
            name: "Vigenère Cipher",
            description: "Polyalphabetic substitution cipher tool",
            category: "cryptography",
            icon: "fas fa-scroll",
            file: "tools/cryptography/vigenere-cipher.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 17,
            name: "Caesar Cipher",
            description: "Simple substitution cipher tool",
            category: "cryptography",
            icon: "fas fa-font",
            file: "tools/cryptography/caesar-cipher.html",
            securityLevel: "low",
            expert: "Nandha Kumar M"
        },
        {
            id: 18,
            name: "ROT13 Encoder",
            description: "Rotate by 13 places cipher tool",
            category: "cryptography",
            icon: "fas fa-sync",
            file: "tools/cryptography/rot13-encoder.html",
            securityLevel: "low",
            expert: "Nandha Kumar M"
        },
        {
            id: 19,
            name: "PBKDF2 Generator",
            description: "Password-Based Key Derivation Function generator",
            category: "cryptography",
            icon: "fas fa-keyboard",
            file: "tools/cryptography/pbkdf2-generator.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 20,
            name: "HMAC Generator",
            description: "Hash-based Message Authentication Code generator",
            category: "cryptography",
            icon: "fas fa-signature",
            file: "tools/cryptography/hmac-generator.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 21,
            name: "Diffie-Hellman Simulator",
            description: "Key exchange protocol simulator",
            category: "cryptography",
            icon: "fas fa-exchange-alt",
            file: "tools/cryptography/diffie-hellman-simulator.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 22,
            name: "One-Time Pad",
            description: "Theoretically unbreakable encryption method",
            category: "cryptography",
            icon: "fas fa-shield-alt",
            file: "tools/cryptography/one-time-pad.html",
            securityLevel: "very-high",
            expert: "Nandha Kumar M"
        },

        // Encoding Tools
        {
            id: 23,
            name: "Base32 Encoder/Decoder",
            description: "Encode and decode Base32 strings for data transmission",
            category: "encoding",
            icon: "fas fa-code",
            file: "tools/encoding/base32-encoder.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 24,
            name: "Base58 Encoder/Decoder",
            description: "Encode and decode Base58 strings for cryptocurrency applications",
            category: "encoding",
            icon: "fas fa-hexagon",
            file: "tools/encoding/base58-encoder.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 25,
            name: "Unicode Inspector",
            description: "Analyze Unicode characters and properties",
            category: "encoding",
            icon: "fas fa-language",
            file: "tools/encoding/unicode-inspector.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 26,
            name: "MIME Detector",
            description: "Detect MIME types from file signatures",
            category: "encoding",
            icon: "fas fa-file-medical",
            file: "tools/encoding/mime-detector.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 27,
            name: "Data URI Generator",
            description: "Generate Data URI from files or text",
            category: "encoding",
            icon: "fas fa-database",
            file: "tools/encoding/data-uri-generator.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 28,
            name: "Quoted-Printable",
            description: "Encode/decode Quoted-Printable format",
            category: "encoding",
            icon: "fas fa-quote-right",
            file: "tools/encoding/quoted-printable.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 29,
            name: "UUencode/Decode",
            description: "Encode/decode UUencoded data",
            category: "encoding",
            icon: "fas fa-file-code",
            file: "tools/encoding/uuencode-decode.html",
            securityLevel: "low",
            expert: "Nandha Kumar M"
        },
        {
            id: 30,
            name: "Binary Text Converter",
            description: "Convert between binary and text representations",
            category: "encoding",
            icon: "fas fa-calculator",
            file: "tools/encoding/binary-text-converter.html",
            securityLevel: "low",
            expert: "Nandha Kumar M"
        },

        // Hashing Tools
        {
            id: 31,
            name: "SHA-1 Generator",
            description: "Generate SHA-1 hash of input text",
            category: "hashing",
            icon: "fas fa-fingerprint",
            file: "tools/hashing/sha1-generator.html",
            securityLevel: "low",
            expert: "Nandha Kumar M"
        },
        {
            id: 32,
            name: "SHA-512 Generator",
            description: "Generate SHA-512 hash of input text",
            category: "hashing",
            icon: "fas fa-fingerprint",
            file: "tools/hashing/sha512-generator.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 33,
            name: "SHA-3 Generator",
            description: "Generate SHA-3 hash of input text",
            category: "hashing",
            icon: "fas fa-fingerprint",
            file: "tools/hashing/sha3-generator.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 34,
            name: "BLAKE3 Generator",
            description: "Generate BLAKE3 hash of input text",
            category: "hashing",
            icon: "fas fa-fingerprint",
            file: "tools/hashing/blake3-generator.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 35,
            name: "CRC32 Calculator",
            description: "Calculate CRC32 checksum",
            category: "hashing",
            icon: "fas fa-calculator",
            file: "tools/hashing/crc32-calculator.html",
            securityLevel: "low",
            expert: "Nandha Kumar M"
        },
        {
            id: 36,
            name: "Adler32 Calculator",
            description: "Calculate Adler32 checksum",
            category: "hashing",
            icon: "fas fa-calculator",
            file: "tools/hashing/adler32-calculator.html",
            securityLevel: "low",
            expert: "Nandha Kumar M"
        },
        {
            id: 37,
            name: "NTLM Generator",
            description: "Generate NTLM hash of passwords",
            category: "hashing",
            icon: "fas fa-key",
            file: "tools/hashing/ntlm-generator.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 38,
            name: "Hash Comparison",
            description: "Compare multiple hash values",
            category: "hashing",
            icon: "fas fa-compress-arrows-alt",
            file: "tools/hashing/hash-comparison.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 39,
            name: "Multi-Hash Generator",
            description: "Generate multiple hash types simultaneously",
            category: "hashing",
            icon: "fas fa-cubes",
            file: "tools/hashing/multi-hash-generator.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },

        // Network Tools
        {
            id: 40,
            name: "Traceroute Simulator",
            description: "Simulate traceroute to visualize network path",
            category: "network",
            icon: "fas fa-route",
            file: "tools/network/traceroute-simulator.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 41,
            name: "Ping Tester",
            description: "Test network connectivity and latency",
            category: "network",
            icon: "fas fa-network-wired",
            file: "tools/network/ping-tester.html",
            securityLevel: "low",
            expert: "Nandha Kumar M"
        },
        {
            id: 42,
            name: "DNS Lookup",
            description: "Perform DNS lookups for domain information",
            category: "network",
            icon: "fas fa-globe",
            file: "tools/network/dns-lookup.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 43,
            name: "WHOIS Viewer",
            description: "View domain registration information",
            category: "network",
            icon: "fas fa-search",
            file: "tools/network/whois-viewer.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 44,
            name: "HTTP Header Analyzer",
            description: "Analyze HTTP headers for security issues",
            category: "network",
            icon: "fas fa-file-code",
            file: "tools/network/http-header-analyzer.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 45,
            name: "TLS Cipher Suite",
            description: "Analyze TLS cipher suites for security",
            category: "network",
            icon: "fas fa-lock",
            file: "tools/network/tls-cipher-suite.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 46,
            name: "MAC Address Converter",
            description: "Convert between MAC address formats",
            category: "network",
            icon: "fas fa-ethernet",
            file: "tools/network/mac-address-converter.html",
            securityLevel: "low",
            expert: "Nandha Kumar M"
        },
        {
            id: 47,
            name: "CIDR Explainer",
            description: "Explain CIDR notation and subnetting",
            category: "network",
            icon: "fas fa-network-wired",
            file: "tools/network/cidr-explainer.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 48,
            name: "Port Reference",
            description: "Reference common network port numbers",
            category: "network",
            icon: "fas fa-plug",
            file: "tools/network/port-reference.html",
            securityLevel: "low",
            expert: "Nandha Kumar M"
        },
        {
            id: 49,
            name: "DNS Record Explorer",
            description: "Explore DNS record types and information",
            category: "network",
            icon: "fas fa-server",
            file: "tools/network/dns-record-explorer.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 50,
            name: "DNSSEC Demo",
            description: "Demonstrate DNS Security Extensions",
            category: "network",
            icon: "fas fa-shield-alt",
            file: "tools/network/dnssec-demo.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },

        // Web Security Tools
        {
            id: 51,
            name: "XSS Payload Tester",
            description: "Test cross-site scripting payloads",
            category: "web-security",
            icon: "fas fa-bug",
            file: "tools/web-security/xss-payload-tester.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 52,
            name: "CSP Generator",
            description: "Generate Content Security Policy headers",
            category: "web-security",
            icon: "fas fa-shield-alt",
            file: "tools/web-security/csp-generator.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 53,
            name: "Cookie Analyzer",
            description: "Analyze HTTP cookies for security issues",
            category: "web-security",
            icon: "fas fa-cookie",
            file: "tools/web-security/cookie-analyzer.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 54,
            name: "CORS Validator",
            description: "Validate Cross-Origin Resource Sharing",
            category: "web-security",
            icon: "fas fa-globe-americas",
            file: "tools/web-security/cors-validator.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 55,
            name: "Security.txt Generator",
            description: "Generate security.txt vulnerability disclosure files",
            category: "web-security",
            icon: "fas fa-file-alt",
            file: "tools/web-security/security-txt-generator.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 56,
            name: "Robots.txt Validator",
            description: "Validate robots.txt files for security",
            category: "web-security",
            icon: "fas fa-robot",
            file: "tools/web-security/robots-txt-validator.html",
            securityLevel: "low",
            expert: "Nandha Kumar M"
        },
        {
            id: 57,
            name: "Sitemap Parser",
            description: "Parse XML sitemaps for security analysis",
            category: "web-security",
            icon: "fas fa-sitemap",
            file: "tools/web-security/sitemap-parser.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 58,
            name: "OAuth Flow Visualizer",
            description: "Visualize OAuth authentication flows",
            category: "web-security",
            icon: "fas fa-key",
            file: "tools/web-security/oauth-flow-visualizer.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 59,
            name: "Open Redirect Tester",
            description: "Test for open redirect vulnerabilities",
            category: "web-security",
            icon: "fas fa-directions",
            file: "tools/web-security/open-redirect-tester.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 60,
            name: "Clickjacking Tester",
            description: "Test for clickjacking vulnerabilities",
            category: "web-security",
            icon: "fas fa-mouse-pointer",
            file: "tools/web-security/clickjacking-tester.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 61,
            name: "HSTS Checker",
            description: "Check HTTP Strict Transport Security headers",
            category: "web-security",
            icon: "fas fa-lock",
            file: "tools/web-security/hsts-checker.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 62,
            name: "API Key Scanner",
            description: "Scan for exposed API keys in source code",
            category: "web-security",
            icon: "fas fa-key",
            file: "tools/web-security/api-key-scanner.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 63,
            name: "Cloud Metadata URL",
            description: "Check for cloud metadata service endpoints",
            category: "web-security",
            icon: "fas fa-cloud",
            file: "tools/web-security/cloud-metadata-url.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 64,
            name: "S3 Bucket Validator",
            description: "Validate AWS S3 bucket security configurations",
            category: "web-security",
            icon: "fas fa-database",
            file: "tools/web-security/s3-bucket-validator.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },

        // Malware Tools
        {
            id: 65,
            name: "Shellcode Viewer",
            description: "View and analyze shellcode",
            category: "malware",
            icon: "fas fa-code",
            file: "tools/malware/shellcode-viewer.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 66,
            name: "Base64 Payload Decoder",
            description: "Decode Base64 encoded payloads",
            category: "malware",
            icon: "fas fa-unlock",
            file: "tools/malware/base64-payload-decoder.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 67,
            name: "JS Deobfuscator",
            description: "Deobfuscate JavaScript code",
            category: "malware",
            icon: "fas fa-code",
            file: "tools/malware/js-deobfuscator.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 68,
            name: "PowerShell Decoder",
            description: "Decode PowerShell commands",
            category: "malware",
            icon: "fas fa-terminal",
            file: "tools/malware/powershell-decoder.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 69,
            name: "YARA Validator",
            description: "Validate YARA rules for malware detection",
            category: "malware",
            icon: "fas fa-file-code",
            file: "tools/malware/yara-validator.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 70,
            name: "Magic Byte Identifier",
            description: "Identify file types from magic bytes",
            category: "malware",
            icon: "fas fa-magic",
            file: "tools/malware/magic-byte-identifier.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 71,
            name: "PE Header Viewer",
            description: "View Portable Executable headers",
            category: "malware",
            icon: "fas fa-file-code",
            file: "tools/malware/pe-header-viewer.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 72,
            name: "ELF Inspector",
            description: "Inspect Executable and Linkable Format files",
            category: "malware",
            icon: "fas fa-file-code",
            file: "tools/malware/elf-inspector.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 73,
            name: "PDF Metadata Extractor",
            description: "Extract metadata from PDF files",
            category: "malware",
            icon: "fas fa-file-pdf",
            file: "tools/malware/pdf-metadata-extractor.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 74,
            name: "Office Metadata Viewer",
            description: "View metadata from Office documents",
            category: "malware",
            icon: "fas fa-file-word",
            file: "tools/malware/office-metadata-viewer.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },

        // Forensics Tools
        {
            id: 75,
            name: "GPS Coordinate Extractor",
            description: "Extract GPS coordinates from images",
            category: "forensics",
            icon: "fas fa-map-marker-alt",
            file: "tools/forensics/gps-coordinate-extractor.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 76,
            name: "ZIP Structure Viewer",
            description: "View structure of ZIP archives",
            category: "forensics",
            icon: "fas fa-archive",
            file: "tools/forensics/zip-structure-viewer.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 77,
            name: "PNG Chunk Analyzer",
            description: "Analyze PNG image chunks",
            category: "forensics",
            icon: "fas fa-image",
            file: "tools/forensics/png-chunk-analyzer.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 78,
            name: "JPEG Segment Inspector",
            description: "Inspect JPEG file segments",
            category: "forensics",
            icon: "fas fa-image",
            file: "tools/forensics/jpeg-segment-inspector.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 79,
            name: "PDF Object Stream",
            description: "Analyze PDF object streams",
            category: "forensics",
            icon: "fas fa-file-pdf",
            file: "tools/forensics/pdf-object-stream.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 80,
            name: "File Carving Simulator",
            description: "Simulate file carving techniques",
            category: "forensics",
            icon: "fas fa-cut",
            file: "tools/forensics/file-carving-simulator.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 81,
            name: "Hash All Files",
            description: "Calculate multiple hash types for all files",
            category: "forensics",
            icon: "fas fa-file-signature",
            file: "tools/forensics/hash-all-files.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 82,
            name: "Timestamp Converter",
            description: "Convert between different timestamp formats",
            category: "forensics",
            icon: "fas fa-clock",
            file: "tools/forensics/timestamp-converter.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 83,
            name: "MACB Timeline",
            description: "Create MACB timeline for forensic analysis",
            category: "forensics",
            icon: "fas fa-timeline",
            file: "tools/forensics/macb-timeline.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 84,
            name: "Disk Image Viewer",
            description: "View disk images for forensic analysis",
            category: "forensics",
            icon: "fas fa-hdd",
            file: "tools/forensics/disk-image-viewer.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 85,
            name: "Steganography Detector",
            description: "Detect hidden data in images",
            category: "forensics",
            icon: "fas fa-eye-slash",
            file: "tools/forensics/steganography-detector.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 86,
            name: "File Entropy Analyzer",
            description: "Analyze file entropy for randomness",
            category: "forensics",
            icon: "fas fa-wave-square",
            file: "tools/forensics/file-entropy-analyzer.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },

        // Learning Tools
        {
            id: 87,
            name: "CTF Generator",
            description: "Generate Capture The Flag challenges",
            category: "learning",
            icon: "fas fa-flag",
            file: "tools/learning/ctf-generator.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 88,
            name: "Password Strength Meter",
            description: "Evaluate password strength",
            category: "learning",
            icon: "fas fa-key",
            file: "tools/learning/password-strength-meter.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 89,
            name: "Regex Tester",
            description: "Test regular expressions",
            category: "learning",
            icon: "fas fa-code",
            file: "tools/learning/regex-tester.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 90,
            name: "HTTP Request Builder",
            description: "Build and test HTTP requests",
            category: "learning",
            icon: "fas fa-network-wired",
            file: "tools/learning/http-request-builder.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 91,
            name: "TLS Handshake Simulator",
            description: "Simulate TLS/SSL handshakes",
            category: "learning",
            icon: "fas fa-handshake",
            file: "tools/learning/tls-handshake-simulator.html",
            securityLevel: "high",
            expert: "Nandha Kumar M"
        },
        {
            id: 92,
            name: "Phishing Analyzer",
            description: "Analyze phishing emails and URLs",
            category: "learning",
            icon: "fas fa-envelope",
            file: "tools/learning/phishing-analyzer.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 93,
            name: "TOTP Verifier",
            description: "Verify Time-Based One-Time Passwords",
            category: "learning",
            icon: "fas fa-clock",
            file: "tools/learning/totp-verifier.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 94,
            name: "Cryptographic Quiz",
            description: "Test cryptographic knowledge",
            category: "learning",
            icon: "fas fa-question-circle",
            file: "tools/learning/cryptographic-quiz.html",
            securityLevel: "low",
            expert: "Nandha Kumar M"
        },
        {
            id: 95,
            name: "OWASP Top 10 Explorer",
            description: "Explore OWASP Top 10 vulnerabilities",
            category: "learning",
            icon: "fas fa-bug",
            file: "tools/learning/owasp-top10-explorer.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 96,
            name: "CVE Lookup",
            description: "Search for Common Vulnerabilities and Exposures",
            category: "learning",
            icon: "fas fa-search",
            file: "tools/learning/cve-lookup.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 97,
            name: "Cyber Kill Chain",
            description: "Understand the stages of cyber attacks",
            category: "learning",
            icon: "fas fa-link",
            file: "tools/learning/cyber-kill-chain.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 98,
            name: "MITRE ATT&CK Navigator",
            description: "Navigate MITRE ATT&CK framework",
            category: "learning",
            icon: "fas fa-map",
            file: "tools/learning/mitre-attack-navigator.html",
            securityLevel: "medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 99,
            name: "Weekly Lab Planner",
            description: "Plan weekly cybersecurity lab exercises",
            category: "learning",
            icon: "fas fa-calendar",
            file: "tools/learning/weekly-lab-planner.html",
            securityLevel: "low",
            expert: "Nandha Kumar M"
        }
    ];

    // DOM elements
    const searchInput = document.getElementById('searchInput');
    const toolsGrid = document.getElementById('toolsGrid');
    const categoryButtons = document.querySelectorAll('[data-category]');

    // Initialize the page
    displayTools(tools);
    setupEventListeners();

    // Display tools
    function displayTools(toolsArray) {
        toolsGrid.innerHTML = '';
        
        if (toolsArray.length === 0) {
            toolsGrid.innerHTML = '<div class="col-12"><p class="text-center text-muted">No tools found matching your criteria.</p></div>';
            return;
        }

        toolsArray.forEach(tool => {
            const toolCard = document.createElement('div');
            toolCard.className = `col-md-4 col-sm-6 mb-4 tool-card ${tool.category}`;
            toolCard.innerHTML = `
                <div class="card h-100">
                    <div class="card-body text-center">
                        <a href="${tool.file}" class="text-decoration-none">
                            <i class="${tool.icon} fa-2x mb-3 text-primary"></i>
                            <h5 class="card-title">${tool.name}</h5>
                            <p class="card-text small text-muted">${tool.description}</p>
                            <div class="mt-2">
                                <span class="badge bg-${getSecurityBadgeClass(tool.securityLevel)}">${tool.securityLevel}</span>
                                <span class="badge bg-info">${tool.category}</span>
                            </div>
                        </a>
                    </div>
                </div>
            `;
            toolsGrid.appendChild(toolCard);
        });
    }

    // Get security badge class
    function getSecurityBadgeClass(level) {
        switch(level.toLowerCase()) {
            case 'very-high': return 'danger';
            case 'high': return 'warning';
            case 'medium': return 'info';
            case 'low': return 'secondary';
            default: return 'secondary';
        }
    }

    // Setup event listeners
    function setupEventListeners() {
        // Search functionality
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            filterTools(searchTerm);
        });

        // Category filtering
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

    // Filter tools by search term
    function filterTools(searchTerm) {
        const filteredTools = tools.filter(tool => 
            tool.name.toLowerCase().includes(searchTerm) || 
            tool.description.toLowerCase().includes(searchTerm) ||
            tool.category.toLowerCase().includes(searchTerm) ||
            tool.expert.toLowerCase().includes(searchTerm)
        );
        displayTools(filteredTools);
    }

    // Filter tools by category
    function filterByCategory(category) {
        if (category === 'all') {
            displayTools(tools);
        } else {
            const filteredTools = tools.filter(tool => tool.category === category);
            displayTools(filteredTools);
        }
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

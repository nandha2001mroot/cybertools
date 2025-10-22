document.addEventListener('DOMContentLoaded', function() {
    // All tools data (100+ tools)
    const tools = [
        // Cryptography Tools (20 tools)
        {
            id: 1,
            name: "AES Encryptor/Decoder",
            description: "Advanced Encryption Standard encryption and decryption tool. Essential for secure data protection.",
            category: "cryptography",
            icon: "fas fa-lock",
            file: "tools/cryptography/aes-encryptor.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 2,
            name: "RSA Key Generator",
            description: "Generate RSA public and private key pairs for asymmetric encryption.",
            category: "cryptography",
            icon: "fas fa-key",
            file: "tools/cryptography/rsa-key-generator.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 3,
            name: "Vigenère Cipher",
            description: "Polyalphabetic substitution cipher tool for classical cryptography analysis.",
            category: "cryptography",
            icon: "fas fa-scroll",
            file: "tools/cryptography/vigenere-cipher.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 4,
            name: "Caesar Cipher",
            description: "Simple substitution cipher tool for educational purposes.",
            category: "cryptography",
            icon: "fas fa-font",
            file: "tools/cryptography/caesar-cipher.html",
            securityLevel: "Low",
            expert: "Nandha Kumar M"
        },
        {
            id: 5,
            name: "ROT13 Encoder",
            description: "Rotate by 13 places cipher tool for basic obfuscation.",
            category: "cryptography",
            icon: "fas fa-sync",
            file: "tools/cryptography/rot13-encoder.html",
            securityLevel: "Low",
            expert: "Nandha Kumar M"
        },
        {
            id: 6,
            name: "PBKDF2 Generator",
            description: "Password-Based Key Derivation Function generator for secure key derivation.",
            category: "cryptography",
            icon: "fas fa-keyboard",
            file: "tools/cryptography/pbkdf2-generator.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 7,
            name: "HMAC Generator",
            description: "Hash-based Message Authentication Code generator for message integrity.",
            category: "cryptography",
            icon: "fas fa-signature",
            file: "tools/cryptography/hmac-generator.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 8,
            name: "Diffie-Hellman Simulator",
            description: "Key exchange protocol simulator for secure communication.",
            category: "cryptography",
            icon: "fas fa-exchange-alt",
            file: "tools/cryptography/diffie-hellman-simulator.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 9,
            name: "One-Time Pad",
            description: "Theoretically unbreakable encryption method for maximum security.",
            category: "cryptography",
            icon: "fas fa-shield-alt",
            file: "tools/cryptography/one-time-pad.html",
            securityLevel: "Very High",
            expert: "Nandha Kumar M"
        },
        {
            id: 10,
            name: "Base32 Encoder/Decoder",
            description: "Encode and decode Base32 strings for data transmission.",
            category: "cryptography",
            icon: "fas fa-code",
            file: "tools/cryptography/base32-encoder.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 11,
            name: "Base58 Encoder/Decoder",
            description: "Encode and decode Base58 strings for cryptocurrency applications.",
            category: "cryptography",
            icon: "fas fa-hexagon",
            file: "tools/cryptography/base58-encoder.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 12,
            name: "Base64 Encoder/Decoder",
            description: "Encode and decode Base64 strings for data obfuscation.",
            category: "cryptography",
            icon: "fas fa-code",
            file: "tools/cryptography/base64-encoder.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 13,
            name: "NTLM Hash Generator",
            description: "Generate NTLM hashes for Windows authentication testing.",
            category: "cryptography",
            icon: "fas fa-fingerprint",
            file: "tools/cryptography/ntlm-generator.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 14,
            name: "SHA-3 Generator",
            description: "Generate SHA-3 hash of input text for secure hashing.",
            category: "cryptography",
            icon: "fas fa-fingerprint",
            file: "tools/cryptography/sha3-generator.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 15,
            name: "BLAKE3 Generator",
            description: "Generate BLAKE3 hash of input text for fast hashing.",
            category: "cryptography",
            icon: "fas fa-fingerprint",
            file: "tools/cryptography/blake3-generator.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 16,
            name: "MD5 Generator",
            description: "Generate MD5 hash of input text (deprecated for security).",
            category: "cryptography",
            icon: "fas fa-fingerprint",
            file: "tools/cryptography/md5-generator.html",
            securityLevel: "Low",
            expert: "Nandha Kumar M"
        },
        {
            id: 17,
            name: "SHA-1 Generator",
            description: "Generate SHA-1 hash of input text (deprecated for security).",
            category: "cryptography",
            icon: "fas fa-fingerprint",
            file: "tools/cryptography/sha1-generator.html",
            securityLevel: "Low",
            expert: "Nandha Kumar M"
        },
        {
            id: 18,
            name: "SHA-256 Generator",
            description: "Generate SHA-256 hash of input text for secure hashing.",
            category: "cryptography",
            icon: "fas fa-fingerprint",
            file: "tools/cryptography/sha256-generator.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 19,
            name: "SHA-512 Generator",
            description: "Generate SHA-512 hash of input text for maximum security.",
            category: "cryptography",
            icon: "fas fa-fingerprint",
            file: "tools/cryptography/sha512-generator.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 20,
            name: "CRC32 Calculator",
            description: "Calculate CRC32 checksum for error detection.",
            category: "cryptography",
            icon: "fas fa-calculator",
            file: "tools/cryptography/crc32-calculator.html",
            securityLevel: "Low",
            expert: "Nandha Kumar M"
        },

        // Encoding Tools (15 tools)
        {
            id: 21,
            name: "Hex to ASCII Converter",
            description: "Convert between hexadecimal and ASCII for binary analysis.",
            category: "encoding",
            icon: "fas fa-hexagon",
            file: "tools/encoding/hex-ascii-converter.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 22,
            name: "URL Encoder/Decoder",
            description: "Encode and decode URL parameters for web security.",
            category: "encoding",
            icon: "fas fa-link",
            file: "tools/encoding/url-encoder.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 23,
            name: "Binary Converter",
            description: "Convert between binary, decimal, hex for low-level analysis.",
            category: "encoding",
            icon: "fas fa-calculator",
            file: "tools/encoding/binary-converter.html",
            securityLevel: "Low",
            expert: "Nandha Kumar M"
        },
        {
            id: 24,
            name: "Unicode Inspector",
            description: "Analyze Unicode characters and properties for security.",
            category: "encoding",
            icon: "fas fa-language",
            file: "tools/encoding/unicode-inspector.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 25,
            name: "MIME Detector",
            description: "Detect MIME types from file signatures for forensics.",
            category: "encoding",
            icon: "fas fa-file-medical",
            file: "tools/encoding/mime-detector.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 26,
            name: "Data URI Generator",
            description: "Generate Data URI from files or text for web applications.",
            category: "encoding",
            icon: "fas fa-database",
            file: "tools/encoding/data-uri-generator.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 27,
            name: "Quoted-Printable",
            description: "Encode/decode Quoted-Printable format for email analysis.",
            category: "encoding",
            icon: "fas fa-quote-right",
            file: "tools/encoding/quoted-printable.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 28,
            name: "UUencode/Decode",
            description: "Encode/decode UUencoded data for legacy file transfers.",
            category: "encoding",
            icon: "fas fa-file-code",
            file: "tools/encoding/uuencode-decode.html",
            securityLevel: "Low",
            expert: "Nandha Kumar M"
        },
        {
            id: 29,
            name: "Base32 Encoder/Decoder",
            description: "Encode and decode Base32 strings for data transmission.",
            category: "encoding",
            icon: "fas fa-code",
            file: "tools/encoding/base32-encoder.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 30,
            name: "Base58 Encoder/Decoder",
            description: "Encode and decode Base58 strings for cryptocurrency applications.",
            category: "encoding",
            icon: "fas fa-hexagon",
            file: "tools/encoding/base58-encoder.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 31,
            name: "Base64 Encoder/Decoder",
            description: "Encode and decode Base64 strings for data obfuscation.",
            category: "encoding",
            icon: "fas fa-code",
            file: "tools/encoding/base64-encoder.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 32,
            name: "Hex to ASCII Converter",
            description: "Convert between hexadecimal and ASCII for binary analysis.",
            category: "encoding",
            icon: "fas fa-hexagon",
            file: "tools/encoding/hex-ascii-converter.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 33,
            name: "URL Encoder/Decoder",
            description: "Encode and decode URL parameters for web security.",
            category: "encoding",
            icon: "fas fa-link",
            file: "tools/encoding/url-encoder.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 34,
            name: "Binary Converter",
            description: "Convert between binary, decimal, hex for low-level analysis.",
            category: "encoding",
            icon: "fas fa-calculator",
            file: "tools/encoding/binary-converter.html",
            securityLevel: "Low",
            expert: "Nandha Kumar M"
        },
        {
            id: 35,
            name: "Unicode Inspector",
            description: "Analyze Unicode characters and properties for security.",
            category: "encoding",
            icon: "fas fa-language",
            file: "tools/encoding/unicode-inspector.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },

        // Hashing Tools (15 tools)
        {
            id: 36,
            name: "SHA-1 Generator",
            description: "Generate SHA-1 hash of input text (deprecated for security).",
            category: "hashing",
            icon: "fas fa-fingerprint",
            file: "tools/hashing/sha1-generator.html",
            securityLevel: "Low",
            expert: "Nandha Kumar M"
        },
        {
            id: 37,
            name: "SHA-256 Generator",
            description: "Generate SHA-256 hash of input text for secure hashing.",
            category: "hashing",
            icon: "fas fa-fingerprint",
            file: "tools/hashing/sha256-generator.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 38,
            name: "SHA-512 Generator",
            description: "Generate SHA-512 hash of input text for maximum security.",
            category: "hashing",
            icon: "fas fa-fingerprint",
            file: "tools/hashing/sha512-generator.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 39,
            name: "SHA-3 Generator",
            description: "Generate SHA-3 hash of input text for secure hashing.",
            category: "hashing",
            icon: "fas fa-fingerprint",
            file: "tools/hashing/sha3-generator.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 40,
            name: "BLAKE3 Generator",
            description: "Generate BLAKE3 hash of input text for fast hashing.",
            category: "hashing",
            icon: "fas fa-fingerprint",
            file: "tools/hashing/blake3-generator.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 41,
            name: "MD5 Generator",
            description: "Generate MD5 hash of input text (deprecated for security).",
            category: "hashing",
            icon: "fas fa-fingerprint",
            file: "tools/hashing/md5-generator.html",
            securityLevel: "Low",
            expert: "Nandha Kumar M"
        },
        {
            id: 42,
            name: "CRC32 Calculator",
            description: "Calculate CRC32 checksum for error detection.",
            category: "hashing",
            icon: "fas fa-calculator",
            file: "tools/hashing/crc32-calculator.html",
            securityLevel: "Low",
            expert: "Nandha Kumar M"
        },
        {
            id: 43,
            name: "Adler32 Calculator",
            description: "Calculate Adler32 checksum for data integrity.",
            category: "hashing",
            icon: "fas fa-calculator",
            file: "tools/hashing/adler32-calculator.html",
            securityLevel: "Low",
            expert: "Nandha Kumar M"
        },
        {
            id: 44,
            name: "NTLM Generator",
            description: "Generate NTLM hash of passwords for Windows authentication.",
            category: "hashing",
            icon: "fas fa-key",
            file: "tools/hashing/ntlm-generator.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 45,
            name: "Hash Comparison",
            description: "Compare multiple hash values for integrity verification.",
            category: "hashing",
            icon: "fas fa-compress-arrows-alt",
            file: "tools/hashing/hash-comparison.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 46,
            name: "Multi-Hash Generator",
            description: "Generate multiple hash types simultaneously for analysis.",
            category: "hashing",
            icon: "fas fa-cubes",
            file: "tools/hashing/multi-hash-generator.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 47,
            name: "File Hash Calculator",
            description: "Calculate multiple hash types for files for integrity.",
            category: "hashing",
            icon: "fas fa-file-signature",
            file: "tools/hashing/file-hash-calculator.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 48,
            name: "Hash All Files",
            description: "Generate hashes for all files in a directory.",
            category: "hashing",
            icon: "fas fa-folder-open",
            file: "tools/hashing/hash-all-files.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 49,
            name: "MACB Timeline",
            description: "Generate MACB timeline from file hashes for forensics.",
            category: "hashing",
            icon: "fas fa-timeline",
            file: "tools/hashing/macb-timeline.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 50,
            name: "Disk Image Viewer",
            description: "View disk images and calculate hashes for analysis.",
            category: "hashing",
            icon: "fas fa-hdd",
            file: "tools/hashing/disk-image-viewer.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },

        // Network Tools (15 tools)
        {
            id: 51,
            name: "Traceroute Simulator",
            description: "Simulate traceroute to visualize network path analysis.",
            category: "network",
            icon: "fas fa-route",
            file: "tools/network/traceroute-simulator.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 52,
            name: "Ping Tester",
            description: "Test network connectivity and latency for diagnostics.",
            category: "network",
            icon: "fas fa-network-wired",
            file: "tools/network/ping-tester.html",
            securityLevel: "Low",
            expert: "Nandha Kumar M"
        },
        {
            id: 53,
            name: "DNS Lookup",
            description: "Perform DNS lookups for domain information analysis.",
            category: "network",
            icon: "fas fa-globe",
            file: "tools/network/dns-lookup.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 54,
            name: "WHOIS Viewer",
            description: "View domain registration information for recon.",
            category: "network",
            icon: "fas fa-search",
            file: "tools/network/whois-viewer.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 55,
            name: "HTTP Header Analyzer",
            description: "Analyze HTTP headers for security issues detection.",
            category: "network",
            icon: "fas fa-file-code",
            file: "tools/network/http-header-analyzer.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 56,
            name: "TLS Cipher Suite",
            description: "Analyze TLS cipher suites for security vulnerabilities.",
            category: "network",
            icon: "fas fa-lock",
            file: "tools/network/tls-cipher-suite.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 57,
            name: "MAC Address Converter",
            description: "Convert between MAC address formats for analysis.",
            category: "network",
            icon: "fas fa-ethernet",
            file: "tools/network/mac-address-converter.html",
            securityLevel: "Low",
            expert: "Nandha Kumar M"
        },
        {
            id: 58,
            name: "CIDR Explainer",
            description: "Explain CIDR notation and subnetting for networking.",
            category: "network",
            icon: "fas fa-network-wired",
            file: "tools/network/cidr-explainer.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 59,
            name: "Port Reference",
            description: "Reference common network port numbers for security.",
            category: "network",
            icon: "fas fa-plug",
            file: "tools/network/port-reference.html",
            securityLevel: "Low",
            expert: "Nandha Kumar M"
        },
        {
            id: 60,
            name: "DNS Record Explorer",
            description: "Explore DNS record types and information for recon.",
            category: "network",
            icon: "fas fa-server",
            file: "tools/network/dns-record-explorer.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 61,
            name: "DNSSEC Demo",
            description: "Demonstrate DNS Security Extensions for security.",
            category: "network",
            icon: "fas fa-shield-alt",
            file: "tools/network/dnssec-demo.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 62,
            name: "IP Subnet Calculator",
            description: "Calculate subnet information for IP addresses.",
            category: "network",
            icon: "fas fa-calculator",
            file: "tools/network/ip-subnet-calculator.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 63,
            name: "Port Scanner",
            description: "Simulated port scanning tool for reconnaissance.",
            category: "network",
            icon: "fas fa-plug",
            file: "tools/network/port-scanner.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 64,
            name: "Network Mapper",
            description: "Map network topology and services for analysis.",
            category: "network",
            icon: "fas fa-sitemap",
            file: "tools/network/network-mapper.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 65,
            name: "Packet Analyzer",
            description: "Analyze network packets for security analysis.",
            category: "network",
            icon: "fas fa-search",
            file: "tools/network/packet-analyzer.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },

        // Web Security Tools (15 tools)
        {
            id: 66,
            name: "JWT Decoder",
            description: "Decode and analyze JWT tokens for security testing.",
            category: "web-security",
            icon: "fas fa-id-card",
            file: "tools/web-security/jwt-decoder.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 67,
            name: "CSP Generator",
            description: "Generate Content Security Policy headers for protection.",
            category: "web-security",
            icon: "fas fa-shield-alt",
            file: "tools/web-security/csp-generator.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 68,
            name: "CORS Validator",
            description: "Validate Cross-Origin Resource Sharing for security.",
            category: "web-security",
            icon: "fas fa-globe-americas",
            file: "tools/web-security/cors-validator.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 69,
            name: "Security.txt Generator",
            description: "Generate security.txt vulnerability disclosure files.",
            category: "web-security",
            icon: "fas fa-file-alt",
            file: "tools/web-security/security-txt-generator.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 70,
            name: "Robots.txt Validator",
            description: "Validate robots.txt files for security compliance.",
            category: "web-security",
            icon: "fas fa-robot",
            file: "tools/web-security/robots-txt-validator.html",
            securityLevel: "Low",
            expert: "Nandha Kumar M"
        },
        {
            id: 71,
            name: "Sitemap Parser",
            description: "Parse XML sitemaps for security analysis.",
            category: "web-security",
            icon: "fas fa-sitemap",
            file: "tools/web-security/sitemap-parser.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 72,
            name: "OAuth Flow Visualizer",
            description: "Visualize OAuth authentication flows for analysis.",
            category: "web-security",
            icon: "fas fa-key",
            file: "tools/web-security/oauth-flow-visualizer.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 73,
            name: "Open Redirect Tester",
            description: "Test for open redirect vulnerabilities.",
            category: "web-security",
            icon: "fas fa-directions",
            file: "tools/web-security/open-redirect-tester.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 74,
            name: "Clickjacking Tester",
            description: "Test for clickjacking vulnerabilities.",
            category: "web-security",
            icon: "fas fa-mouse-pointer",
            file: "tools/web-security/clickjacking-tester.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 75,
            name: "HSTS Checker",
            description: "Check HTTP Strict Transport Security headers.",
            category: "web-security",
            icon: "fas fa-lock",
            file: "tools/web-security/hsts-checker.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 76,
            name: "API Key Scanner",
            description: "Scan for exposed API keys in source code.",
            category: "web-security",
            icon: "fas fa-key",
            file: "tools/web-security/api-key-scanner.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 77,
            name: "Cloud Metadata URL",
            description: "Check for cloud metadata service endpoints.",
            category: "web-security",
            icon: "fas fa-cloud",
            file: "tools/web-security/cloud-metadata-url.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 78,
            name: "S3 Bucket Validator",
            description: "Validate AWS S3 bucket security configurations.",
            category: "web-security",
            icon: "fas fa-database",
            file: "tools/web-security/s3-bucket-validator.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 79,
            name: "XSS Payload Tester",
            description: "Test cross-site scripting payloads for security.",
            category: "web-security",
            icon: "fas fa-bug",
            file: "tools/web-security/xss-payload-tester.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 80,
            name: "GraphQL Introspection",
            description: "Test GraphQL introspection for schema mapping.",
            category: "web-security",
            icon: "fas fa-project-diagram",
            file: "tools/web-security/graphql-introspection.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },

        // Forensics Tools (10 tools)
        {
            id: 81,
            name: "EXIF Viewer",
            description: "View EXIF metadata from images for forensics.",
            category: "forensics",
            icon: "fas fa-camera",
            file: "tools/forensics/exif-viewer.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 82,
            name: "Port Scanner",
            description: "Simulated port scanning tool for reconnaissance.",
            category: "forensics",
            icon: "fas fa-plug",
            file: "tools/forensics/port-scanner.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 83,
            name: "CSP Generator",
            description: "Generate Content Security Policy headers.",
            category: "forensics",
            icon: "fas fa-shield-alt",
            file: "tools/forensics/csp-generator.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 84,
            name: "File Hash Calculator",
            description: "Calculate multiple hash types for files.",
            category: "forensics",
            icon: "fas fa-file-signature",
            file: "tools/forensics/file-hash-calculator.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 85,
            name: "Binary Converter",
            description: "Convert between binary, decimal, hex.",
            category: "forensics",
            icon: "fas fa-calculator",
            file: "tools/forensics/binary-converter.html",
            securityLevel: "Low",
            expert: "Nandha Kumar M"
        },
        {
            id: 86,
            name: "GPS Coordinate Extractor",
            description: "Extract GPS coordinates from images.",
            category: "forensics",
            icon: "fas fa-map-marker-alt",
            file: "tools/forensics/gps-coordinate-extractor.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 87,
            name: "ZIP Structure Viewer",
            description: "View structure of ZIP archives.",
            category: "forensics",
            icon: "fas fa-archive",
            file: "tools/forensics/zip-structure-viewer.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 88,
            name: "PNG Chunk Analyzer",
            description: "Analyze PNG image chunks.",
            category: "forensics",
            icon: "fas fa-image",
            file: "tools/forensics/png-chunk-analyzer.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 89,
            name: "JPEG Segment Inspector",
            description: "Inspect JPEG file segments.",
            category: "forensics",
            icon: "fas fa-image",
            file: "tools/forensics/jpeg-segment-inspector.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 90,
            name: "PDF Metadata Extractor",
            description: "Extract metadata from PDF files.",
            category: "forensics",
            icon: "fas fa-file-pdf",
            file: "tools/forensics/pdf-metadata-extractor.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },

        // Malware Tools (5 tools)
        {
            id: 91,
            name: "Shellcode Viewer",
            description: "View and analyze shellcode for malware analysis.",
            category: "malware",
            icon: "fas fa-code",
            file: "tools/malware/shellcode-viewer.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 92,
            name: "Base64 Payload Decoder",
            description: "Decode Base64 encoded payloads for analysis.",
            category: "malware",
            icon: "fas fa-unlock",
            file: "tools/malware/base64-payload-decoder.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 93,
            name: "JS Deobfuscator",
            description: "Deobfuscate JavaScript code for analysis.",
            category: "malware",
            icon: "fas fa-code",
            file: "tools/malware/js-deobfuscator.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 94,
            name: "PowerShell Decoder",
            description: "Decode PowerShell commands for analysis.",
            category: "malware",
            icon: "fas fa-terminal",
            file: "tools/malware/powershell-decoder.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 95,
            name: "YARA Validator",
            description: "Validate YARA rules for malware detection.",
            category: "malware",
            icon: "fas fa-file-code",
            file: "tools/malware/yara-validator.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },

        // Learning Tools (10 tools)
        {
            id: 96,
            name: "CTF Generator",
            description: "Generate Capture The Flag challenges for training.",
            category: "learning",
            icon: "fas fa-flag",
            file: "tools/learning/ctf-generator.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 97,
            name: "Password Strength Meter",
            description: "Evaluate password strength using advanced metrics.",
            category: "learning",
            icon: "fas fa-key",
            file: "tools/learning/password-strength-meter.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 98,
            name: "Regex Tester",
            description: "Test regular expressions for pattern matching.",
            category: "learning",
            icon: "fas fa-code",
            file: "tools/learning/regex-tester.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 99,
            name: "HTTP Request Builder",
            description: "Build and test HTTP requests for security.",
            category: "learning",
            icon: "fas fa-network-wired",
            file: "tools/learning/http-request-builder.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 100,
            name: "TLS Handshake Simulator",
            description: "Simulate TLS/SSL handshakes for understanding.",
            category: "learning",
            icon: "fas fa-handshake",
            file: "tools/learning/tls-handshake-simulator.html",
            securityLevel: "High",
            expert: "Nandha Kumar M"
        },
        {
            id: 101,
            name: "Phishing Analyzer",
            description: "Analyze phishing emails and URLs for awareness.",
            category: "learning",
            icon: "fas fa-envelope",
            file: "tools/learning/phishing-analyzer.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 102,
            name: "TOTP Verifier",
            description: "Verify Time-Based One-Time Passwords for education.",
            category: "learning",
            icon: "fas fa-clock",
            file: "tools/learning/totp-verifier.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 103,
            name: "Cryptographic Quiz",
            description: "Test your knowledge of cryptographic concepts.",
            category: "learning",
            icon: "fas fa-question-circle",
            file: "tools/learning/cryptographic-quiz.html",
            securityLevel: "Low",
            expert: "Nandha Kumar M"
        },
        {
            id: 104,
            name: "OWASP Top 10 Explorer",
            description: "Explore OWASP Top 10 web vulnerabilities.",
            category: "learning",
            icon: "fas fa-bug",
            file: "tools/learning/owasp-top10-explorer.html",
            securityLevel: "Medium",
            expert: "Nandha Kumar M"
        },
        {
            id: 105,
            name: "CVE Lookup",
            description: "Search for Common Vulnerabilities and Exposures.",
            category: "learning",
            icon: "fas fa-search",
            file: "tools/learning/cve-lookup.html",
            securityLevel: "Medium",
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
        switch(level) {
            case 'Very High': return 'danger';
            case 'High': return 'warning';
            case 'Medium': return 'info';
            case 'Low': return 'secondary';
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

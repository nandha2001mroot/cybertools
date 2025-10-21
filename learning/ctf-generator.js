document.addEventListener('DOMContentLoaded', function() {
    const challengeCategory = document.getElementById('challengeCategory');
    const difficultyLevel = document.getElementById('difficultyLevel');
    const generateChallenge = document.getElementById('generateChallenge');
    const clearAll = document.getElementById('clearAll');
    const challengeFiles = document.getElementById('challengeFiles');

    // Generate challenge
    generateChallenge.addEventListener('click', function() {
        const category = challengeCategory.value;
        const difficulty = difficultyLevel.value;
        
        generateCTFChallenge(category, difficulty);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        clearResults();
    });

    // Generate CTF challenge
    function generateCTFChallenge(category, difficulty) {
        // Display challenge information
        document.getElementById('challengeTitle').textContent = 'Generating...';
        document.getElementById('challengePoints').textContent = 'Calculating...';
        document.getElementById('challengeCategoryDisplay').textContent = getCategoryName(category);
        document.getElementById('challengeDifficulty').textContent = getDifficultyName(difficulty);
        document.getElementById('challengeHint').textContent = 'Generating...';

        // Simulate challenge generation
        setTimeout(function() {
            // In a real implementation, you would generate a CTF challenge
            // For demonstration, we'll simulate results
            const title = getRandomChallengeTitle(category);
            const points = getRandomPoints(difficulty);
            const hint = getRandomHint(category);
            const description = getRandomDescription(category);
            const objective = getRandomObjective(category);
            const approach = getRandomSolutionApproach(category);
            const outcome = getRandomLearningOutcome(category);

            document.getElementById('challengeTitle').textContent = title;
            document.getElementById('challengePoints').textContent = points;
            document.getElementById('challengeHint').textContent = hint;
            document.getElementById('challengeDescription').textContent = description;
            document.getElementById('challengeObjective').textContent = objective;
            document.getElementById('solutionApproach').textContent = approach;
            document.getElementById('learningOutcome').textContent = outcome;

            // Generate mock challenge
            const challenge = generateMockChallenge(category, difficulty);
            document.getElementById('generatedChallenge').textContent = challenge;

            // Generate mock challenge files
            challengeFiles.innerHTML = '';
            const files = generateMockChallengeFiles(category);
            
            files.forEach(file => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${file.name}</td>
                    <td>${file.type}</td>
                    <td>${file.size}</td>
                    <td>${file.description}</td>
                `;
                challengeFiles.appendChild(row);
            });
        }, 2000);
    }

    // Get category name
    function getCategoryName(category) {
        const names = {
            'web': 'Web Exploitation',
            'crypto': 'Cryptography',
            'forensics': 'Forensics',
            'reverse': 'Reverse Engineering',
            'pwn': 'Binary Exploitation',
            'misc': 'Miscellaneous'
        };
        return names[category] || category;
    }

    // Get difficulty name
    function getDifficultyName(difficulty) {
        const names = {
            'easy': 'Easy',
            'medium': 'Medium',
            'hard': 'Hard',
            'insane': 'Insane'
        };
        return names[difficulty] || difficulty;
    }

    // Get random challenge title
    function getRandomChallengeTitle(category) {
        const titles = {
            'web': ['SQL Injection Vulnerability', 'Cross-Site Scripting Challenge', 'Command Injection Exploit', 'File Inclusion Attack'],
            'crypto': ['AES Encryption Challenge', 'RSA Decryption Puzzle', 'Base64 Obfuscation', 'Hash Collision Hunt'],
            'forensics': ['Memory Dump Analysis', 'Network Traffic Inspection', 'Image Steganography', 'Log File Investigation'],
            'reverse': ['CrackMe Binary Analysis', 'Obfuscated Code Challenge', 'Anti-Debugging Techniques', 'Packer Unpacking'],
            'pwn': ['Buffer Overflow Exploit', 'ROP Chain Construction', 'Heap Spraying Technique', 'Format String Vulnerability'],
            'misc': ['Programming Puzzle', 'Steganography Challenge', 'Network Protocol Analysis', 'Digital Forensics']
        };
        const categoryTitles = titles[category] || ['Generic Challenge'];
        return categoryTitles[Math.floor(Math.random() * categoryTitles.length)];
    }

    // Get random points
    function getRandomPoints(difficulty) {
        const points = {
            'easy': 100,
            'medium': 200,
            'hard': 400,
            'insane': 500
        };
        const basePoints = points[difficulty] || 100;
        return basePoints + Math.floor(Math.random() * 100);
    }

    // Get random hint
    function getRandomHint(category) {
        const hints = {
            'web': ['Look for input validation issues', 'Check for SQL injection vectors', 'Inspect HTTP headers'],
            'crypto': ['Consider common encryption modes', 'Try frequency analysis', 'Check for weak keys'],
            'forensics': ['Examine file headers carefully', 'Look for hidden data', 'Analyze timestamps'],
            'reverse': ['Use a disassembler to analyze code', 'Look for string references', 'Check for anti-analysis techniques'],
            'pwn': ['Look for buffer overflow opportunities', 'Consider memory corruption', 'Check for ASLR bypasses'],
            'misc': ['Think outside the box', 'Combine multiple techniques', 'Research the file format']
        };
        const categoryHints = hints[category] || ['General hint for this category'];
        return categoryHints[Math.floor(Math.random() * categoryHints.length)];
    }

    // Get random description
    function getRandomDescription(category) {
        const descriptions = {
            'web': 'A vulnerable web application with improper input validation that allows attackers to manipulate database queries.',
            'crypto': 'An encrypted message that requires breaking the cryptographic algorithm or finding the key through analysis.',
            'forensics': 'A digital artifact that contains hidden information or evidence that needs to be extracted through careful analysis.',
            'reverse': 'A compiled binary that implements a specific algorithm or protection mechanism that needs to be understood.',
            'pwn': 'A vulnerable program that can be exploited to gain control of execution flow or escalate privileges.',
            'misc': 'A miscellaneous challenge that combines various techniques or requires creative problem-solving.'
        };
        return descriptions[category] || 'A generic challenge description.';
    }

    // Get random objective
    function getRandomObjective(category) {
        const objectives = {
            'web': 'Exploit the vulnerability to retrieve the hidden flag from the database.',
            'crypto': 'Decrypt the message to reveal the plaintext flag value.',
            'forensics': 'Analyze the digital artifact to extract the concealed information.',
            'reverse': 'Understand the program logic to determine the correct input or bypass protection.',
            'pwn': 'Exploit the vulnerability to execute arbitrary code and retrieve the flag.',
            'misc': 'Apply creative problem-solving to uncover the hidden flag.'
        };
        return objectives[category] || 'Complete the challenge to obtain the flag.';
    }

    // Get random solution approach
    function getRandomSolutionApproach(category) {
        const approaches = {
            'web': 'Identify the vulnerable parameter, craft a payload to manipulate the backend query, and extract the flag.',
            'crypto': 'Analyze the encryption algorithm, find weaknesses or obtain the key, then decrypt the ciphertext.',
            'forensics': 'Use appropriate tools to examine the artifact, look for hidden data or metadata, and extract the flag.',
            'reverse': 'Disassemble the binary, analyze the code flow, and determine the correct input or bypass mechanism.',
            'pwn': 'Identify the vulnerability, develop an exploit payload, and execute it to gain control and retrieve the flag.',
            'misc': 'Combine multiple techniques, research specific formats or protocols, and apply creative solutions.'
        };
        return approaches[category] || 'Use appropriate tools and techniques to solve the challenge.';
    }

    // Get random learning outcome
    function getRandomLearningOutcome(category) {
        const outcomes = {
            'web': 'Understanding web application vulnerabilities and secure coding practices.',
            'crypto': 'Knowledge of cryptographic algorithms and common implementation flaws.',
            'forensics': 'Skills in digital evidence analysis and data recovery techniques.',
            'reverse': 'Experience with reverse engineering tools and binary analysis.',
            'pwn': 'Understanding of memory corruption vulnerabilities and exploit development.',
            'misc': 'Development of creative problem-solving and interdisciplinary skills.'
        };
        return outcomes[category] || 'General cybersecurity knowledge and practical skills.';
    }

    // Generate mock challenge
    function generateMockChallenge(category, difficulty) {
        const challenges = {
            'web': `#!/usr/bin/env python3
# Vulnerable Web Application
import sqlite3
from flask import Flask, request, render_template_string

app = Flask(__name__)

@app.route('/')
def index():
    username = request.args.get('username', '')
    if username:
        conn = sqlite3.connect(':memory:')
        cursor = conn.cursor()
        cursor.execute("CREATE TABLE users (username TEXT, password TEXT)")
        cursor.execute("INSERT INTO users VALUES ('admin', 'flag{THIS_IS_A_MOCK_FLAG}')")
        query = f"SELECT * FROM users WHERE username = '{username}'"
        cursor.execute(query)
        result = cursor.fetchall()
        return str(result)
    return render_template_string('<form>Username: <input name="username"></form>')

if __name__ == '__main__':
    app.run(debug=True)`,
            'crypto': `# AES Encryption Challenge
from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes
import base64

key = get_random_bytes(16)  # 128-bit key
cipher = AES.new(key, AES.MODE_ECB)

# Plaintext flag (this would normally be hidden)
plaintext = b"flag{AES_IS_NOT_SECURE_IN_ECB_MODE}"

# Pad plaintext to multiple of 16 bytes
padding_length = 16 - (len(plaintext) % 16)
plaintext += bytes([padding_length]) * padding_length

# Encrypt the flag
ciphertext = cipher.encrypt(plaintext)
print("Encrypted flag:", base64.b64encode(ciphertext).decode())

# Challenge: Decrypt the flag without knowing the key`,
            'forensics': `# Memory Dump Analysis Challenge
# A memory dump contains a hidden message
# Tools you might use:
# - Volatility for memory analysis
# - Strings to extract readable text
# - Hex editors for binary inspection

# Sample data (this would be a real memory dump)
memory_dump = b"This is a mock memory dump with a hidden flag{MEMORY_ANALYSIS_SKILLS}"

# Challenge: Find the hidden flag in the memory dump
# Hint: Look for strings that don't belong`,
            'reverse': `# Reverse Engineering Challenge
# This binary checks for a specific input
# Your task: Determine the correct input to get the flag

def check_password(password):
    # Mock implementation
    if len(password) == 8 and password[::-1] == "sserpxe":
        return True
    return False

# Challenge: Find the password that returns True
# Hint: The password is 8 characters long`,
            'pwn': `# Buffer Overflow Challenge
# Vulnerable C program
#include <stdio.h>
#include <string.h>

void vulnerable_function(char *input) {
    char buffer[64];
    strcpy(buffer, input);  // Vulnerable to buffer overflow
    printf("Input received: %s\\n", buffer);
}

int main() {
    char input[256];
    printf("Enter your input: ");
    fgets(input, sizeof(input), stdin);
    vulnerable_function(input);
    return 0;
}

// Challenge: Exploit the buffer overflow to change execution flow
// Hint: Overwrite the return address to jump to a specific function`,
            'misc': `# Miscellaneous Challenge
# This challenge combines multiple techniques

# Base64 encoded string
encoded = "ZmxhZ3tUSElTX0lTX0FfTVVDSF9FTkNPREVEX0ZMQUd9"

# Challenge: Decode the string to reveal the flag
# But there's a twist - you need to reverse the decoded string first!

# Hint: Think about the order of operations`
        };
        return challenges[category] || '# Generic Challenge\n# Implement your challenge here';
    }

    // Generate mock challenge files
    function generateMockChallengeFiles(category) {
        const files = [];
        const extensions = {
            'web': ['.py', '.html', '.php', '.js'],
            'crypto': ['.enc', '.key', '.txt', '.py'],
            'forensics': ['.pcap', '.mem', '.jpg', '.log'],
            'reverse': ['.exe', '.bin', '.so', '.apk'],
            'pwn': ['.c', '.bin', '.exploit.py', '.core'],
            'misc': ['.dat', '.misc', '.combined', '.solution']
        };
        const types = {
            'web': ['Python Script', 'HTML Template', 'PHP Script', 'JavaScript'],
            'crypto': ['Encrypted File', 'Key File', 'Text Document', 'Python Script'],
            'forensics': ['PCAP File', 'Memory Dump', 'Image File', 'Log File'],
            'reverse': ['Executable', 'Binary', 'Shared Library', 'Android Package'],
            'pwn': ['C Source', 'Binary Executable', 'Exploit Script', 'Core Dump'],
            'misc': ['Data File', 'Miscellaneous', 'Combined Data', 'Solution Guide']
        };
        
        const categoryExtensions = extensions[category] || ['.dat'];
        const categoryTypes = types[category] || ['Data File'];
        
        for (let i = 0; i < 3; i++) {
            const ext = categoryExtensions[Math.floor(Math.random() * categoryExtensions.length)];
            const type = categoryTypes[Math.floor(Math.random() * categoryTypes.length)];
            files.push({
                name: `challenge_file_${i}${ext}`,
                type: type,
                size: formatFileSize(Math.floor(Math.random() * 1000000)),
                description: `Challenge file for ${category} category`
            });
        }
        
        return files;
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
        document.getElementById('challengeTitle').textContent = '-';
        document.getElementById('challengePoints').textContent = '-';
        document.getElementById('challengeCategoryDisplay').textContent = '-';
        document.getElementById('challengeDifficulty').textContent = '-';
        document.getElementById('challengeHint').textContent = '-';
        document.getElementById('challengeDescription').textContent = '-';
        document.getElementById('challengeObjective').textContent = '-';
        document.getElementById('solutionApproach').textContent = '-';
        document.getElementById('learningOutcome').textContent = '-';
        document.getElementById('generatedChallenge').textContent = '';
        challengeFiles.innerHTML = '';
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
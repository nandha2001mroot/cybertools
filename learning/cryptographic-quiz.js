document.addEventListener('DOMContentLoaded', function() {
    const startQuiz = document.getElementById('startQuiz');
    const resetQuiz = document.getElementById('resetQuiz');
    const previousQuestion = document.getElementById('previousQuestion');
    const nextQuestion = document.getElementById('nextQuestion');
    const answerOptions = document.getElementById('answerOptions');

    // Quiz questions
    const quizQuestions = [
        {
            question: "What is the primary purpose of a cryptographic hash function?",
            options: [
                "To encrypt data",
                "To create a fixed-size digest of variable-length input",
                "To generate random numbers",
                "To compress data"
            ],
            correct: 1,
            explanation: "A cryptographic hash function creates a fixed-size output (digest) from variable-length input, making it useful for data integrity verification."
        },
        {
            question: "Which algorithm is used in Bitcoin mining?",
            options: [
                "SHA-1",
                "SHA-256",
                "MD5",
                "SHA-512"
            ],
            correct: 1,
            explanation: "Bitcoin uses SHA-256 as its proof-of-work algorithm for mining blocks."
        },
        {
            question: "What is the main advantage of asymmetric encryption over symmetric encryption?",
            options: [
                "Faster performance",
                "Smaller key sizes",
                "Key distribution",
                "Better compression"
            ],
            correct: 2,
            explanation: "Asymmetric encryption solves the key distribution problem of symmetric encryption by using a pair of keys (public and private)."
        },
        {
            question: "Which of the following is NOT a characteristic of a good cryptographic hash function?",
            options: [
                "Deterministic",
                "Pre-image resistant",
                "Collision resistant",
                "Reversible"
            ],
            correct: 3,
            explanation: "A good cryptographic hash function must be one-way (not reversible) to protect the original input."
        },
        {
            question: "What is the purpose of a digital signature?",
            options: [
                "To encrypt messages",
                "To authenticate the sender and ensure message integrity",
                "To compress data",
                "To anonymize communication"
            ],
            correct: 1,
            explanation: "Digital signatures provide authentication of the sender and ensure that the message has not been altered."
        },
        {
            question: "Which cryptographic primitive is used in Diffie-Hellman key exchange?",
            options: [
                "Symmetric encryption",
                "Asymmetric encryption",
                "Discrete logarithm problem",
                "Hash functions"
            ],
            correct: 2,
            explanation: "Diffie-Hellman key exchange relies on the discrete logarithm problem for its security."
        },
        {
            question: "What does HMAC stand for?",
            options: [
                "Hash-based Message Authentication Code",
                "High-speed Message Authentication Code",
                "Hashed Message Authentication Code",
                "Hierarchical Message Authentication Code"
            ],
            correct: 0,
            explanation: "HMAC stands for Hash-based Message Authentication Code, which combines a cryptographic hash function with a secret key."
        },
        {
            question: "Which of the following is a block cipher mode of operation?",
            options: [
                "ECB",
                "CTR",
                "CBC",
                "All of the above"
            ],
            correct: 3,
            explanation: "ECB (Electronic Codebook), CTR (Counter), and CBC (Cipher Block Chaining) are all block cipher modes of operation."
        },
        {
            question: "What is the purpose of a nonce in cryptography?",
            options: [
                "To increase key size",
               
document.addEventListener('DOMContentLoaded', function() {
    const bucketName = document.getElementById('bucketName');
    const validateBucket = document.getElementById('validateBucket');
    const generateNames = document.getElementById('generateNames');
    const clearAll = document.getElementById('clearAll');

    // Sample S3 bucket names
    const bucketNames = [
        'company-sensitive-data',
        'backup-storage-2024',
        'user-uploads-public',
        'logs-archive',
        'temp-storage-bucket',
        'config-backups',
        'customer-data-private'
    ];

    // Validate bucket
    validateBucket.addEventListener('click', function() {
        const name = bucketName.value.trim();
        
        if (!name) {
            alert('Please enter a bucket name.');
            return;
        }

        validateS3Bucket(name);
    });

    // Generate names
    generateNames.addEventListener('click', function() {
        const randomName = bucketNames[Math.floor(Math.random() * bucketNames.length)];
        bucketName.value = randomName;
        validateS3Bucket(randomName);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        bucketName.value = '';
        clearResults();
    });

    // Validate S3 bucket
    function validateS3Bucket(name) {
        // Display test results (simulated)
        document.getElementById('bucketExists').textContent = 'Checking...';
        document.getElementById('bucketRegion').textContent = 'Checking...';
        document.getElementById('creationDate').textContent = 'Checking...';
        document.getElementById('bucketOwner').textContent = 'Checking...';

        // Simulate validation process
        setTimeout(function() {
            // In a real implementation, you would make AWS API calls
            // For demonstration, we'll simulate results
            const exists = Math.random() > 0.3; // 70% chance of existing
            
            if (exists) {
                document.getElementById('bucketExists').textContent = 'Yes';
                document.getElementById('bucketRegion').textContent = 'us-east-1';
                document.getElementById('creationDate').textContent = '2024-01-15';
                document.getElementById('bucketOwner').textContent = 'Account: 123456789012';

                // Simulate security analysis
                const isPublic = Math.random() > 0.7; // 30% chance of being public
                const hasEncryption = Math.random() > 0.4; // 60% chance of having encryption
                const hasLogging = Math.random() > 0.5; // 50% chance of having logging

                document.getElementById('publicAccess').textContent = isPublic ? 'Public' : 'Private';
                document.getElementById('encryptionStatus').textContent = hasEncryption ? 'AES-256' : 'None';
                document.getElementById('loggingStatus').textContent = hasLogging ? 'Enabled' : 'Disabled';
                document.getElementById('securityLevel').textContent = isPublic ? 'Critical' : hasEncryption && hasLogging ? 'High' : 'Medium';

                // Generate mock ACL and policy
                const acl = generateMockACL(isPublic);
                const policy = generateMockPolicy(isPublic, hasEncryption);

                document.getElementById('bucketACL').textContent = JSON.stringify(acl, null, 2);
                document.getElementById('bucketPolicy').textContent = JSON.stringify(policy, null, 2);
            } else {
                document.getElementById('bucketExists').textContent = 'No';
                document.getElementById('bucketRegion').textContent = '-';
                document.getElementById('creationDate').textContent = '-';
                document.getElementById('bucketOwner').textContent = '-';
                document.getElementById('publicAccess').textContent = '-';
                document.getElementById('encryptionStatus').textContent = '-';
                document.getElementById('loggingStatus').textContent = '-';
                document.getElementById('securityLevel').textContent = 'N/A';
                document.getElementById('bucketACL').textContent = 'Bucket does not exist';
                document.getElementById('bucketPolicy').textContent = 'Bucket does not exist';
            }
        }, 2000);
    }

    // Generate mock ACL
    function generateMockACL(isPublic) {
        if (isPublic) {
            return {
                "Owner": { "ID": "123456789012" },
                "Grants": [
                    { "Grantee": { "URI": "http://acs.amazonaws.com/groups/global/AllUsers" }, "Permission": "READ" },
                    { "Grantee": { "ID": "123456789012" }, "Permission": "FULL_CONTROL" }
                ]
            };
        } else {
            return {
                "Owner": { "ID": "123456789012" },
                "Grants": [
                    { "Grantee": { "ID": "123456789012" }, "Permission": "FULL_CONTROL" }
                ]
            };
        }
    }

    // Generate mock policy
    function generateMockPolicy(isPublic, hasEncryption) {
        if (isPublic) {
            return {
                "Version": "2012-10-17",
                "Statement": [
                    {
                        "Sid": "PublicReadGetObject",
                        "Effect": "Allow",
                        "Principal": "*",
                        "Action": "s3:GetObject",
                        "Resource": `arn:aws:s3:::${bucketName.value}/*`
                    }
                ]
            };
        } else {
            const policy = {
                "Version": "2012-10-17",
                "Statement": [
                    {
                        "Sid": "DenyInsecureConnections",
                        "Effect": "Deny",
                        "Principal": "*",
                        "Action": "s3:*",
                        "Resource": [
                            `arn:aws:s3:::${bucketName.value}`,
                            `arn:aws:s3:::${bucketName.value}/*`
                        ],
                        "Condition": {
                            "Bool": {
                                "aws:SecureTransport": "false"
                            }
                        }
                    }
                ]
            };

            if (hasEncryption) {
                policy.Statement.push({
                    "Sid": "DenyUnencryptedObjectUploads",
                    "Effect": "Deny",
                    "Principal": "*",
                    "Action": "s3:PutObject",
                    "Resource": `arn:aws:s3:::${bucketName.value}/*`,
                    "Condition": {
                        "StringNotEquals": {
                            "s3:x-amz-server-side-encryption": "AES256"
                        }
                    }
                });
            }

            return policy;
        }
    }

    // Clear results
    function clearResults() {
        document.getElementById('bucketExists').textContent = '-';
        document.getElementById('bucketRegion').textContent = '-';
        document.getElementById('creationDate').textContent = '-';
        document.getElementById('bucketOwner').textContent = '-';
        document.getElementById('publicAccess').textContent = '-';
        document.getElementById('encryptionStatus').textContent = '-';
        document.getElementById('loggingStatus').textContent = '-';
        document.getElementById('securityLevel').textContent = '-';
        document.getElementById('bucketACL').textContent = '';
        document.getElementById('bucketPolicy').textContent = '';
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
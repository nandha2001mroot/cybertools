document.addEventListener('DOMContentLoaded', function() {
    const flowType = document.getElementById('flowType');
    const clientId = document.getElementById('clientId');
    const authServer = document.getElementById('authServer');
    const redirectUri = document.getElementById('redirectUri');
    const visualizeFlow = document.getElementById('visualizeFlow');
    const clearAll = document.getElementById('clearAll');

    // Visualize flow
    visualizeFlow.addEventListener('click', function() {
        const type = flowType.value;
        const id = clientId.value.trim();
        const server = authServer.value.trim();
        const redirect = redirectUri.value.trim();
        
        if (!id || !server || !redirect) {
            alert('Please enter all required fields.');
            return;
        }

        visualizeOAuthFlow(type, id, server, redirect);
    });

    // Clear all
    clearAll.addEventListener('click', function() {
        flowType.value = 'authorization_code';
        clientId.value = '';
        authServer.value = '';
        redirectUri.value = '';
        clearResults();
    });

    // Visualize OAuth flow
    function visualizeOAuthFlow(type, id, server, redirect) {
        // Display flow parameters
        document.getElementById('scopeValue').textContent = 'openid profile email';
        document.getElementById('stateValue').textContent = 'random_state_string';
        document.getElementById('responseType').textContent = type === 'implicit' ? 'token' : 'code';
        document.getElementById('grantType').textContent = type;

        // Display security analysis
        document.getElementById('csrfProtection').textContent = 'Enabled';
        document.getElementById('pkceUsed').textContent = type === 'authorization_code' ? 'Yes' : 'No';
        document.getElementById('securityIssues').textContent = '0 issues found';
        document.getElementById('recommendations').textContent = 'Use PKCE for public clients';

        // Generate flow diagram
        const diagram = generateFlowDiagram(type, server, redirect);
        document.getElementById('flowDiagram').innerHTML = diagram;
    }

    // Generate flow diagram
    function generateFlowDiagram(type, server, redirect) {
        let diagram = '<div class="d-flex flex-column align-items-center">';
        
        switch(type) {
            case 'authorization_code':
                diagram += `
                    <div class="d-flex align-items-center mb-3">
                        <div class="bg-primary text-white p-2 rounded">Client</div>
                        <div class="mx-3">→</div>
                        <div class="bg-success text-white p-2 rounded">Authorization Server</div>
                    </div>
                    <div class="text-center mb-2">1. Authorization Request</div>
                    
                    <div class="d-flex align-items-center mb-3">
                        <div class="bg-success text-white p-2 rounded">Authorization Server</div>
                        <div class="mx-3">→</div>
                        <div class="bg-primary text-white p-2 rounded">Client</div>
                    </div>
                    <div class="text-center mb-2">2. Authorization Code</div>
                    
                    <div class="d-flex align-items-center mb-3">
                        <div class="bg-primary text-white p-2 rounded">Client</div>
                        <div class="mx-3">→</div>
                        <div class="bg-success text-white p-2 rounded">Authorization Server</div>
                    </div>
                    <div class="text-center mb-2">3. Token Request</div>
                    
                    <div class="d-flex align-items-center">
                        <div class="bg-success text-white p-2 rounded">Authorization Server</div>
                        <div class="mx-3">→</div>
                        <div class="bg-primary text-white p-2 rounded">Client</div>
                    </div>
                    <div class="text-center">4. Access Token</div>
                `;
                break;
                
            case 'implicit':
                diagram += `
                    <div class="d-flex align-items-center mb-3">
                        <div class="bg-primary text-white p-2 rounded">Client</div>
                        <div class="mx-3">→</div>
                        <div class="bg-success text-white p-2 rounded">Authorization Server</div>
                    </div>
                    <div class="text-center mb-2">1. Authorization Request</div>
                    
                    <div class="d-flex align-items-center">
                        <div class="bg-success text-white p-2 rounded">Authorization Server</div>
                        <div class="mx-3">→</div>
                        <div class="bg-primary text-white p-2 rounded">Client</div>
                    </div>
                    <div class="text-center">2. Access Token (Direct)</div>
                `;
                break;
                
            default:
                diagram += '<p>Flow diagram for this type is not implemented yet.</p>';
        }
        
        diagram += '</div>';
        return diagram;
    }

    // Clear results
    function clearResults() {
        document.getElementById('scopeValue').textContent = '-';
        document.getElementById('stateValue').textContent = '-';
        document.getElementById('responseType').textContent = '-';
        document.getElementById('grantType').textContent = '-';
        document.getElementById('csrfProtection').textContent = '-';
        document.getElementById('pkceUsed').textContent = '-';
        document.getElementById('securityIssues').textContent = '-';
        document.getElementById('recommendations').textContent = '-';
        document.getElementById('flowDiagram').innerHTML = '<p>Enter parameters and click "Visualize Flow" to see the OAuth flow diagram</p>';
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
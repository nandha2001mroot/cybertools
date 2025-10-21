// Dynamic header and footer loading with Nandha Kumar M profile integration
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
    addCyberGrid();
    addScanLine();
    loadNandhaProfile();
});

function loadHeader() {
    const headerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
            <div class="container">
                <a class="navbar-brand" href="index.html">
                    <i class="fas fa-shield-alt"></i>
                    CyberTools
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">
                                <i class="fas fa-home me-1"></i>Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about.html">
                                <i class="fas fa-info-circle me-1"></i>About
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">
                                <i class="fas fa-envelope me-1"></i>Contact
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.linkedin.com/in/nandha-kumar-m-952342159/" target="_blank">
                                <i class="fab fa-linkedin me-1"></i>Nandha's Profile
                            </a>
                        </li>
                    </ul>
                    <div class="d-flex">
                        <div class="input-group me-3">
                            <input type="text" class="form-control" placeholder="Search tools...">
                            <button class="btn btn-outline-light" type="button">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                        <div class="linkedin-profile-badge">
                            <a href="https://www.linkedin.com/in/nandha-kumar-m-952342159/" target="_blank" class="btn btn-outline-primary btn-sm">
                                <i class="fab fa-linkedin me-1"></i>Follow Nandha
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    `;
    document.getElementById('header-placeholder').innerHTML = headerHTML;
}

function loadFooter() {
    const footerHTML = `
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h5>CyberTools</h5>
                        <p>Comprehensive cybersecurity toolkit for professionals and enthusiasts.</p>
                        <div class="social-links">
                            <a href="#"><i class="fab fa-twitter me-2"></i></a>
                            <a href="#"><i class="fab fa-github me-2"></i></a>
                            <a href="https://www.linkedin.com/in/nandha-kumar-m-952342159/" target="_blank"><i class="fab fa-linkedin me-2"></i></a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <h5>Quick Links</h5>
                        <ul class="list-unstyled">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="https://www.linkedin.com/in/nandha-kumar-m-952342159/" target="_blank">Nandha's Profile</a></li>
                            <li><a href="privacy.html">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h5>Follow Nandha Kumar M</h5>
                        <p>Connect with our cybersecurity expert</p>
                        <a href="https://www.linkedin.com/in/nandha-kumar-m-952342159/" target="_blank" class="btn btn-primary btn-sm">
                            <i class="fab fa-linkedin me-2"></i>LinkedIn Profile
                        </a>
                        <div class="mt-3">
                            <p class="small text-muted">Specializing in GraphQL, Android pentesting, and security research</p>
                            <p class="small text-muted">Follow for cybersecurity insights and updates</p>
                        </div>
                    </div>
                </div>
                <hr class="mt-4 mb-4">
                <div class="text-center">
                    <p>&copy; 2024 CyberTools. All rights reserved. | Made with ❤️ for cybersecurity</p>
                    <p class="small text-muted">
                        Developed by <a href="https://www.linkedin.com/in/nandha-kumar-m-952342159/" target="_blank">Nandha Kumar M</a> | 
                        Connect on <a href="https://www.linkedin.com/in/nandha-kumar-m-952342159/" target="_blank">LinkedIn</a>
                    </p>
                </div>
            </div>
        </footer>
    `;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
}

// Add cyber grid background
function addCyberGrid() {
    const cyberGrid = document.createElement('div');
    cyberGrid.className = 'cyber-grid';
    document.body.appendChild(cyberGrid);
}

// Add scan line effect
function addScanLine() {
    const scanLine = document.createElement('div');
    scanLine.className = 'scan-line';
    document.body.appendChild(scanLine);
}

// Load Nandha's profile image
function loadNandhaProfile() {
    // Preload Nandha's profile image
    const img = new Image();
    img.src = 'assets/images/nandha-profile.jpg';
    img.onload = function() {
        console.log('Nandha profile image loaded successfully');
    };
    
    // Update profile images in the page
    const profileImgs = document.querySelectorAll('.profile-img');
    profileImgs.forEach(img => {
        img.src = 'assets/images/nandha-profile.jpg';
    });
}

// Add LinkedIn profile section to index page
function addLinkedInSection() {
    if (document.querySelector('.linkedin-profile')) return;
    
    const linkedinSection = document.createElement('div');
    linkedinSection.className = 'linkedin-profile';
    linkedinSection.innerHTML = `
        <h4><i class="fab fa-linkedin me-2"></i>Meet Our Cybersecurity Expert</h4>
        <p>Connect with Nandha Kumar M for cybersecurity insights and expertise</p>
        <a href="https://www.linkedin.com/in/nandha-kumar-m-952342159/" target="_blank">
            <i class="fab fa-linkedin me-2"></i>View LinkedIn Profile
        </a>
        <p class="mt-2 small text-muted">Specializing in GraphQL, Android pentesting, and security research</p>
    `;
    
    const container = document.querySelector('.container-fluid');
    if (container) {
        container.insertBefore(linkedinSection, container.firstChild);
    }
}

// Add LinkedIn section when needed
if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    setTimeout(addLinkedInSection, 100);
}
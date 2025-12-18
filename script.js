// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Projects data - Add your projects here
const projects = [
    {
        title: "Games Developed in Unity",
        description: "Created 2D and 3D games both platformer and shooter games. Used the Unity engine and C# scripting using Unity documentation and .NET libraries. (Sep 2021 - Jan 2022)",
        tags: ["Unity", "C#", "Game Development", "2D", "3D", ".NET"],
        links: {
            demo: "https://noahmathew14.itch.io/"
        }
    },
    {
        title: "RISC-V Single Cycle Processor",
        description: "Created a RISC-V Single Cycle Processor programmed in Verilog. Created submodules involving the ALU (Arithmetic Logic Unit), Register File, Multiplexer, Flip Flop, Instruction Memory, Data Memory, and more. Used Vivado software environment. (Feb 2024 - Mar 2024)",
        tags: ["Verilog", "Xilinx Vivado", "Computer Architecture", "RISC-V", "FPGA"],
        links: {
            pdfs: [
                { name: "Control Signals", url: "docs/ RegWrite, ALUSrc_ALUCC_MemRead_MemWrite.pdf" },
                { name: "Controller & ALU Controller", url: "docs/Controller_ALUController.pdf" },
                { name: "Data Memory", url: "docs/DataMemory.pdf" }
            ]
        }
    }
];

// Function to create project card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';

    let tagsHTML = '';
    if (project.tags && project.tags.length > 0) {
        tagsHTML = `
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
        `;
    }

    let linksHTML = '';
    if (project.links) {
        const linkElements = [];
        
        if (project.links.github) {
            linkElements.push(`
                <a href="${project.links.github}" target="_blank" class="project-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                </a>
            `);
        }
        
        if (project.links.demo) {
            linkElements.push(`
                <a href="${project.links.demo}" target="_blank" class="project-link secondary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Demo
                </a>
            `);
        }
        
        // Handle single PDF (backward compatibility)
        if (project.links.pdf && typeof project.links.pdf === 'string') {
            linkElements.push(`
                <a href="${project.links.pdf}" target="_blank" class="project-link secondary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    PDF
                </a>
            `);
        }
        
        // Handle multiple PDFs
        if (project.links.pdfs && Array.isArray(project.links.pdfs)) {
            project.links.pdfs.forEach((pdf, index) => {
                const pdfName = pdf.name || `Document ${index + 1}`;
                linkElements.push(`
                    <a href="${pdf.url}" target="_blank" class="project-link secondary">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                        ${pdfName}
                    </a>
                `);
            });
        }

        if (linkElements.length > 0) {
            linksHTML = `<div class="project-links">${linkElements.join('')}</div>`;
        }
    }

    card.innerHTML = `
        ${tagsHTML}
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        ${linksHTML}
    `;

    return card;
}

// Function to render projects
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (projects.length === 0) {
        projectsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-secondary);">
                <p style="font-size: 1.125rem; margin-bottom: 1rem;">No projects added yet.</p>
                <p style="font-size: 0.875rem;">Add your projects to the <code>projects</code> array in <code>script.js</code></p>
            </div>
        `;
        return;
    }

    projectsGrid.innerHTML = '';
    projects.forEach(project => {
        const card = createProjectCard(project);
        projectsGrid.appendChild(card);
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = 'var(--shadow)';
    }
    
    lastScroll = currentScroll;
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});

// Export function to add projects dynamically (useful for future enhancements)
window.addProject = function(project) {
    projects.push(project);
    renderProjects();
};


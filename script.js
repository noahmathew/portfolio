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
        title: "4-Bit Up/Down Counter in Cadence Virtuoso",
        description: "Designed, implemented, and verified a hierarchical 4-bit synchronous up/down counter using custom CMOS logic in Cadence Virtuoso. The design was built from the transistor level upward, beginning with inverter, NAND, OR, and JK flip-flop building blocks, which were then hierarchically integrated to form the complete counter. A single global clock drives all flip-flops, while combinational gating logic controls synchronous up/down counting behavior. Full-custom physical layouts were created for each sub-block with proper transistor sizing, well placement, power routing, and interconnect strategy. The complete design passed Design Rule Check (DRC) and Layout Versus Schematic (LVS) verification, confirming correct device connectivity, pin definitions, and net consistency across hierarchical levels. Parasitic extraction was performed to evaluate post-layout effects. Functional correctness was validated through transient simulations, demonstrating correct binary counting from 0000 → 1111 during up-count mode and 1111 → 0000 during down-count mode, synchronized to the clock signal.",
        tags: ["Cadence Virtuoso", "CMOS", "VLSI", "Digital Design", "DRC", "LVS", "JK Flip-Flop", "Synchronous Design"],
        links: {
            pdfs: [
                { name: "See Report", url: "docs/EECS 119 _ Report #4.pdf" }
            ]
        }
    },
    {
        title: "4-Bit Full Adder/Subtractor in Cadence Virtuoso",
        description: "Designed and implemented a hierarchical 4-bit CMOS ripple-carry full adder in Cadence Virtuoso. Developed transistor-level schematics and layouts for inverters, NAND, and XOR gates, then instantiated them to form a multi-bit adder. Achieved full DRC/LVS clean verification. Simulations validated correct sum and carry propagation, highlighting ripple-carry delay and parasitic effects.",
        tags: ["Cadence Virtuoso", "CMOS", "VLSI", "Digital Design", "DRC", "LVS", "Circuit Design"],
        links: {
            pdfs: [
                { name: "See Report", url: "docs/_EECS 119 _ Report #3.pdf" }
            ]
        }
    },
    {
        title: "UST Hackathon - Smart Healthcare Optimizer",
        description: "Developed a Smart Healthcare Optimizer Website that uses both Quantum Computing and AI to help patients schedule their appointments efficiently. Implemented Random Forest Models along with TensorFlow frameworks to forecast the traffic for appointment scheduling for patients and a quantum-scheduler by using Grover's algorithm to minimize on-going delays that come from change of staff, patients that are in critical conditions, medical inventory, and more to ensure every patient is directed to the right doctor, room, and treatment at an efficient rate all while ensuring that the data is within HIPPA compliance. Showcased the scalability of our prototype and the potential problem-solving that can positively impact the healthcare industry.",
        tags: ["Quantum Computing", "AI", "Machine Learning", "TensorFlow", "Random Forest", "Grover's Algorithm", "Healthcare", "Web Development"],
        links: {
            pdfs: [
                { name: "Hackathon Presentation", url: "docs/2025 D3CODE - Hackathon Presentation Template (1).pptx" }
            ]
        }
    },
    {
        title: "Building Management System HVAC",
        description: "Constructed a makeshift Building Management System that included HVAC functionalities - desired temperature, determining when to turn heater/ac on/off, using API call from OpenWeatherApp to retrieve humidity data and then to calculate the feels like temperature. Implemented Ambient Lighting for when someone enters the room, and a security system for when the door is open/closed and for potential fires. All constructed onto a Raspberry Pi 5, with the freenove kit and implemented using python programming.",
        tags: ["Python", "Raspberry Pi", "IoT", "HVAC", "API Integration", "Embedded Systems", "Sensors"],
        links: {
            pdfs: [
                { name: "See BMS Report", url: "docs/Noah EECS 113 _ Final Project Report.pdf" }
            ]
        }
    },
    {
        title: "Controlling TurtleBot via Imitation Learning in ROS",
        description: "Built an imitation learning pipeline in ROS to control a TurtleBot using a neural network trained from expert demonstrations. Collected navigation data via RViz and rosbag, converted to CSV, trained an NN controller in Python/Keras, and deployed it in Gazebo. Evaluated performance against MPC using trajectory plots and loss curves.",
        tags: ["ROS", "Python", "Keras", "Neural Networks", "Imitation Learning", "Robotics", "Gazebo", "RViz"],
        links: {
            pdfs: [
                { name: "See Report", url: "docs/EECS 195 _ Lab 8 Report.pdf" }
            ]
        }
    },
    {
        title: "Software Engineering Team Project in C",
        description: "Chess Game: Was responsible in creating Computer decision-making logic. Implemented using the minimax algorithm and alpha-beta pruning. Online Poker Game: Was responsible in establishing client-server communication. Applied socket programming skills and the fundamentals of TCP protocols.",
        tags: ["C", "Algorithms", "Minimax", "Alpha-Beta Pruning", "Socket Programming", "TCP", "Client-Server"],
        links: {
            pdfs: [
                { name: "Chess User Manual", url: "docs/Chess_UserManual v0.0.pdf" },
                { name: "Poker User Manual", url: "docs/Poker_UserManual.pdf" },
                { name: "Poker Software Spec", url: "docs/Poker_SoftwareSpec (1).pdf" }
            ]
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
    },
    {
        title: "Games Developed in Unity",
        description: "Created 2D and 3D games both platformer and shooter games. Used the Unity engine and C# scripting using Unity documentation and .NET libraries. (Sep 2021 - Jan 2022)",
        tags: ["Unity", "C#", "Game Development", "2D", "3D", ".NET"],
        links: {
            demo: { name: "Unity Projects Tab", url: "https://noahmathew14.itch.io/" }
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
            // Support both string URL and object with custom name
            const demoUrl = typeof project.links.demo === 'string' ? project.links.demo : project.links.demo.url;
            const demoName = typeof project.links.demo === 'string' ? 'Demo' : (project.links.demo.name || 'Demo');
            linkElements.push(`
                <a href="${demoUrl}" target="_blank" class="project-link secondary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    ${demoName}
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

// Email Modal functionality
const emailLink = document.getElementById('emailLink');
const emailModal = document.getElementById('emailModal');
const emailModalClose = document.querySelector('.email-modal-close');
const copyButtons = document.querySelectorAll('.copy-btn');

// Open email modal
if (emailLink) {
    emailLink.addEventListener('click', (e) => {
        e.preventDefault();
        emailModal.classList.add('active');
    });
}

// Close email modal
if (emailModalClose) {
    emailModalClose.addEventListener('click', () => {
        emailModal.classList.remove('active');
    });
}

// Close modal when clicking outside
emailModal.addEventListener('click', (e) => {
    if (e.target === emailModal) {
        emailModal.classList.remove('active');
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && emailModal.classList.contains('active')) {
        emailModal.classList.remove('active');
    }
});

// Copy to clipboard functionality
copyButtons.forEach(button => {
    button.addEventListener('click', async () => {
        const email = button.getAttribute('data-email');
        const originalText = button.innerHTML;
        
        try {
            await navigator.clipboard.writeText(email);
            
            // Visual feedback
            button.classList.add('copied');
            button.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Copied!
            `;
            
            // Reset after 2 seconds
            setTimeout(() => {
                button.classList.remove('copied');
                button.innerHTML = originalText;
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = email;
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                button.classList.add('copied');
                button.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Copied!
                `;
                setTimeout(() => {
                    button.classList.remove('copied');
                    button.innerHTML = originalText;
                }, 2000);
            } catch (fallbackErr) {
                console.error('Fallback copy failed:', fallbackErr);
                alert('Failed to copy email. Please copy manually: ' + email);
            }
            document.body.removeChild(textArea);
        }
    });
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


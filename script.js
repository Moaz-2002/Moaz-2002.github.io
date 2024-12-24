document.addEventListener('DOMContentLoaded', () => {
    const skills = [
        { skill: "SolidWorks", desc: "3D CAD Design & Simulation", level: 92 },
        { skill: "AutoCAD", desc: "Technical Drawing & Design", level: 83 },
        { skill: "Python", desc: "Data Analysis & Automation", level: 75 },
        { skill: "Problem Solving", desc: "Analytical Thinking", level: 92 },
        { skill: "Microsoft 365", desc: "Office Suite & Collaboration", level: 83 },
        { skill: "Project Management", desc: "Team Leadership", level: 75 }
    ];

    const skillsGrid = document.getElementById('skills-grid');
    
    skills.forEach(item => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.innerHTML = `
            <h3>${item.skill}</h3>
            <p>${item.desc}</p>
            <div class="progress-bar">
                <div class="progress" style="width: ${item.level}%"></div>
            </div>
        `;
        skillsGrid.appendChild(skillCard);
    });
});
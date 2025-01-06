// Typing Effect for About Me Section
const typingText = "As a passionate and detail-oriented Data Analyst, I can transform raw data into actionable insights using advanced tools like SQL, Power BI, and Python. Although I am at the beginning of my career, I possess strong skills in data analysis, data visualization, and generating interactive reports that support informed decision-making. I am always focused on improving performance and uncovering patterns that contribute to operational efficiency. With a keen interest in maximizing the potential of data, I aim to help identify opportunities and guide strategic decisions. I am eager to continue developing my skills and contribute to the success of the team.";

let charIndex = 0;
const typingEffectElement = document.getElementById("typing-effect");

function typeWriter() {
    if (charIndex < typingText.length) {
        typingEffectElement.textContent += typingText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 50); // Adjust typing speed here
    } else {
        setTimeout(resetTyping, 10000); // Reset after 10 seconds
    }
}

function resetTyping() {
    typingEffectElement.textContent = "";
    charIndex = 0;
    typeWriter();
}

// Start typing effect
typeWriter();

// Manage Profile Form Submission
document.getElementById("edit-profile-form").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("profile-message").textContent = "Profile updated successfully!";
});

// Add Project Form Submission
document.getElementById("add-project-form").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("add-message").textContent = "Project added successfully!";
});

// Delete Project Form Submission
document.getElementById("delete-project-form").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("delete-message").textContent = "Project deleted successfully!";
});

// Edit Project Form Submission
document.getElementById("edit-project-form").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("edit-message").textContent = "Project updated successfully!";
});
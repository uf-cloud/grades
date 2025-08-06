const coursesData = {
    "summer2025": [
        { code: "COP3530", name: "Data Structures and Algorithms", grade: "A-" }
    ],
    "spring2024": [
        { code: "BSC2460", name: "Can we design 'better' humans? Should we?", grade: "A-" },
        { code: "CDA3101", name: "Introduction to Computer Organization", grade: "C" },
        { code: "COP3530", name: "Data Structures and Algorithm", grade: "W" },
        { code: "ENC3246", name: "Professional Communication for Engineers", grade: "B-" }
    ],
    "fall2024": [
        { code: "COP3503C", name: "Prog Fundamentals 2", grade: "B+" },
        { code: "COT3100", name: "Appli Discrete Struc", grade: "A-" },
        { code: "IDS2935", name: "Music & Social Engagement", grade: "A" },
        { code: "STA3032", name: "Engineer Statistics", grade: "A-" }
    ]
};

// Static GPA values per term
const gpaData = {
    "summer2025": {
        termGPA: "3.67",
        cumulativeGPA: "3.33"
    },
    "spring2024": {
        termGPA: "2.78",
        cumulativeGPA: "3.28"
    },
    "fall2024": {
        termGPA: "3.64",
        cumulativeGPA: "3.64"
    }
};

// Update grades and GPA based on selected term
function updateGrades() {
    const term = document.getElementById('term-dropdown').value;

    // Set GPAs from static object
    document.getElementById('term-gpa').textContent = gpaData[term].termGPA;
    document.getElementById('cumulative-gpa').textContent = gpaData[term].cumulativeGPA;

    // Render the courses
    const courses = coursesData[term];
    const coursesList = document.getElementById('courses-list');
    coursesList.innerHTML = ""; // Clear current list

    courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.classList.add('course');
        courseElement.innerHTML = `
            <p><strong>Course Code:</strong> ${course.code}</p>
            <p><strong>Course Name:</strong> ${course.name}</p>
            <p><strong>Grade:</strong> ${course.grade}</p>
        `;
        coursesList.appendChild(courseElement);
    });
}

// Initialize default view
window.onload = updateGrades;

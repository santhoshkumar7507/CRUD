document.addEventListener('DOMContentLoaded', () => {
    const API_URL = '/students';
    const form = document.getElementById('student-form');
    const grid = document.getElementById('student-grid');
    const statusMsg = document.getElementById('status-message');
    
    // State to track if we are updating
    let isUpdating = false;

    // Theme toggler
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️';
    }
    
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.textContent = '☀️';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggleBtn.textContent = '🌙';
        }
    });

    // Fetch and render all students
    async function fetchStudents() {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            renderStudents(data);
        } catch (error) {
            console.error('Error fetching students:', error);
            grid.innerHTML = `<div class="empty-state error">Failed to load students. Ensure the FastAPI server is running.</div>`;
        }
    }

    // Render cards to the grid
    function renderStudents(students) {
        if (students.length === 0) {
            grid.innerHTML = `<div class="empty-state">No students found. Add one to get started!</div>`;
            return;
        }

        grid.innerHTML = '';
        students.forEach(student => {
            const card = document.createElement('div');
            card.className = 'student-card';
            card.innerHTML = `
                <div class="card-header">
                    <span class="badge-id">ID: ${student.id}</span>
                </div>
                <div class="student-name">${student.name}</div>
                <div class="student-detail">🎓 Course: ${student.course}</div>
                <div class="student-detail">⏳ Age: ${student.age}</div>
                <div class="card-actions">
                    <button class="btn-small btn-edit" onclick="editStudent(${student.id}, '${student.name}', ${student.age}, '${student.course}')">Edit</button>
                    <button class="btn-small btn-delete" onclick="deleteStudent(${student.id})">Delete</button>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // Handle form submit (Create or Update)
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const studentData = {
            id: parseInt(document.getElementById('id').value),
            name: document.getElementById('name').value,
            age: parseInt(document.getElementById('age').value),
            course: document.getElementById('course').value
        };

        try {
            let response;
            if (isUpdating) {
                // Update
                response = await fetch(`${API_URL}/${studentData.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(studentData)
                });
            } else {
                // Create
                response = await fetch(API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(studentData)
                });
            }

            if (response.ok) {
                showStatus(isUpdating ? 'Student updated successfully!' : 'Student added successfully!', 'success');
                form.reset();
                isUpdating = false;
                document.getElementById('id').disabled = false; // Re-enable ID input
                document.querySelector('.btn-primary').innerText = "Register Student";
                fetchStudents();
            } else {
                const errData = await response.json();
                showStatus('Error: ' + (errData.detail || 'Failed to process request'), 'error');
            }
        } catch (error) {
            showStatus('Network error. Check connection.', 'error');
        }
    });

    // Edit function (attached to window so onclick works)
    window.editStudent = (id, name, age, course) => {
        document.getElementById('id').value = id;
        document.getElementById('id').disabled = true; // Cannot change ID for PUT usually, or just use it as key
        document.getElementById('name').value = name;
        document.getElementById('age').value = age;
        document.getElementById('course').value = course;
        
        isUpdating = true;
        document.querySelector('.btn-primary').innerText = "Update Student";
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Delete function
    window.deleteStudent = async (id) => {
        if (!confirm(`Are you sure you want to delete student ID ${id}?`)) return;

        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                showStatus('Student deleted successfully!', 'success');
                fetchStudents();
            } else {
                showStatus('Failed to delete student.', 'error');
            }
        } catch (error) {
            showStatus('Network error.', 'error');
        }
    };

    // Helper to show temporary status messages
    function showStatus(message, type) {
        statusMsg.textContent = message;
        statusMsg.className = type;
        setTimeout(() => {
            statusMsg.textContent = '';
            statusMsg.className = '';
        }, 3000);
    }

    // Initial load
    fetchStudents();
});

function processTest() {
    const age = document.getElementById("age").value;
    const familyHistory = document.getElementById("family-history").checked;
    const symptoms = document.getElementById("symptoms").value;

    let riskLevel = "Low Risk"; // Default risk level
    let precautions = [];

    // Logic to determine risk based on user input
    if (age > 40 || familyHistory || symptoms.toLowerCase().includes("blurry") || symptoms.toLowerCase().includes("pain")) {
        riskLevel = "High Risk";
        precautions = [
            "Visit an ophthalmologist for a thorough eye check-up.",
            "Get regular eye pressure tests.",
            "Avoid activities that may increase eye pressure (e.g., heavy lifting)."
        ];
    } else {
        precautions = [
            "Maintain regular eye health checks.",
            "Keep your eyes hydrated and get enough rest.",
            "Eat foods rich in antioxidants for eye health."
        ];
    }

    // Save the result to localStorage for later use
    localStorage.setItem('riskLevel', riskLevel);
    localStorage.setItem('precautions', JSON.stringify(precautions));

    // Redirect to result page
    window.location.href = 'result.html';
}

// Display result on result.html
window.onload = function() {
    if (window.location.pathname === "/result.html") {
        const resultMessage = localStorage.getItem('riskLevel');
        const precautions = JSON.parse(localStorage.getItem('precautions'));

        document.getElementById("result-message").innerText = `Your result: ${resultMessage}`;
        const precautionsList = document.getElementById("precautions-list");
        precautions.forEach((precaution) => {
            const li = document.createElement("li");
            li.innerText = precaution;
            precautionsList.appendChild(li);
        });
    }
};

// Go back to the test page from result.html
function goBack() {
    window.location.href = 'test.html';
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulated authentication (replace with your backend logic)
    if (username === 'test' && password === 'password') {
        alert('Login successful!');
        // Redirect to index.html (home page)
        window.location.href = "index.html";
    } else {
        alert('Login failed. Incorrect username or password.');
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    // Simulated registration (replace with your backend logic)
    alert('Registration successful!');
    window.location.href = "login.html";
});
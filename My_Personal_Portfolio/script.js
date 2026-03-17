let typing = document.getElementById("typing");

if (typing) {
    let text = "Aspiring Web Developer | CSE Student";
    let i = 0;

    function type() {
        if (i < text.length) {
            typing.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    type();
}


// Dynamic Projects
let container = document.getElementById("projectContainer");

if (container) {
    let projects = [
        {title: "Java Project", desc: "Java application"},
        {title: "Database Project", desc: "SQL system"},
        {title: "C# Project", desc: "Desktop app"}
    ];

    projects.forEach(p => {
        let div = document.createElement("div");
        div.className = "card";
        div.innerHTML = "<h3>" + p.title + "</h3><p>" + p.desc + "</p>";
        container.appendChild(div);
    });
}


// Form Validation
let form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let subject = document.getElementById("subject").value;
        let message = document.getElementById("message").value;
        let error = document.getElementById("formError");

        if (name === "" || email === "" || subject === "" || message === "") {
            error.innerText = "All fields required!";
            return;
        }

        if (!email.includes("@")) {
            error.innerText = "Invalid email!";
            return;
        }

        error.innerText = "Form submitted successfully!";
    });
}


// Dark Mode
let toggle = document.getElementById("modeToggle");

if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark");
}

if (toggle) {
    toggle.onclick = function() {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("mode", "dark");
        } else {
            localStorage.setItem("mode", "light");
        }
    };
}
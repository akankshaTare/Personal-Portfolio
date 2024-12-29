document.addEventListener("DOMContentLoaded", () => {
    // Highlight active navigation link based on current URL
    const navLinks = document.querySelectorAll("header nav a");
    const currentUrl = window.location.href;

    navLinks.forEach(link => {
        if (currentUrl.includes(link.getAttribute("href"))) {
            link.style.color = "#58a6ff";
        }
    });

    // Smooth scroll to sections (if using internal links like #section-id)
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            if (targetId.startsWith("#")) {
                e.preventDefault();
                document.querySelector(targetId).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Optional: Toggle dark/light mode
    const toggleThemeButton = document.createElement("button");
    toggleThemeButton.textContent = "Toggle Theme";
    toggleThemeButton.style.position = "fixed";
    toggleThemeButton.style.bottom = "20px";
    toggleThemeButton.style.right = "20px";
    toggleThemeButton.style.padding = "10px 15px";
    toggleThemeButton.style.backgroundColor = "#58a6ff";
    toggleThemeButton.style.color = "#fff";
    toggleThemeButton.style.border = "none";
    toggleThemeButton.style.borderRadius = "5px";
    toggleThemeButton.style.cursor = "pointer";

    document.body.appendChild(toggleThemeButton);

    toggleThemeButton.addEventListener("click", () => {
        const body = document.body;
        if (body.style.backgroundColor === "rgb(255, 255, 255)" || body.style.backgroundColor === "") {
            // Switch to dark mode
            body.style.backgroundColor = "#0d1117";
            body.style.color = "#c9d1d9";
            toggleThemeButton.style.backgroundColor = "#58a6ff";
            toggleThemeButton.style.color = "#fff";
        } else {
            // Switch to light mode
            body.style.backgroundColor = "#fff";
            body.style.color = "#000";
            toggleThemeButton.style.backgroundColor = "#000";
            toggleThemeButton.style.color = "#fff";
        }
    });

    // Contact form submission
    const form = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from reloading the page

        // Get values from the form
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        // Simple validation to check if all fields are filled
        if (name && email && phone && message) {
            // Show the success message
            successMessage.style.display = "block";

            // Optionally, clear the form after submission
            form.reset();

            // Hide the success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = "none";
            }, 5000);
        } else {
            alert("Please fill in all fields.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {

    const toggleBtn = document.getElementById("theme-toggle");
    const navbar = document.querySelector("nav");
    const links = document.querySelectorAll("nav ul li a");

    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            toggleBtn.textContent = "🌙";
        } else {
            toggleBtn.textContent = "☀️";
        }
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    links.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

});

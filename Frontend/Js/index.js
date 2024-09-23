document.addEventListener("DOMContentLoaded", function () {
    const navbarLinks = document.querySelectorAll("#navbar a");
    const sections = document.querySelectorAll("section");

    // Handle navbar link clicks
    navbarLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            // Hide all sections
            sections.forEach(section => {
                section.classList.remove("active");
            });

            // Show the selected section
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            targetSection.classList.add("active");
        });
    });

    // Optionally, show the home section by default
    sections[0].classList.add("active");

    // Handle Hire Me button click
    const hireMeButton = document.querySelector('#hire');
    hireMeButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Hide all sections
        sections.forEach(section => {
            section.classList.remove("active");
        });

        // Add 'active' class to the contact section
        const contactSection = document.querySelector('#contact');
        contactSection.classList.add('active');

        // Smooth scroll to the contact section
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});

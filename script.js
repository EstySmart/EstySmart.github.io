// =====================================
// ESTYSMART PORTFOLIO
// Esther Isioma Abiazie
// =====================================

document.addEventListener("DOMContentLoaded", () => {

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        e.preventDefault();

        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });


  // Add shadow to header when scrolling
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = "0 5px 25px rgba(0,0,0,0.35)";
    } else {
      header.style.boxShadow = "none";
    }
  });


  // Reveal sections when they enter the screen
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(section);
  });

});

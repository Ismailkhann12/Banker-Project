document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  // Toggle mobile menu and icon
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuToggle.classList.toggle("open");  // toggle cross icon
  });

  // Dropdown handling stays the same
  const allDropdowns = document.querySelectorAll(".dropdown");

  allDropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle");

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();

      // Close all other dropdowns
      allDropdowns.forEach((d) => {
        if (d !== dropdown) d.classList.remove("open");
      });

      // Toggle current dropdown
      dropdown.classList.toggle("open");
    });
  });

  // Close dropdown if clicking outside
  document.addEventListener("click", (e) => {
    allDropdowns.forEach((dropdown) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
      }
    });
  });
});


 const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  setInterval(() => {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
  }, 4000); // Slide changes every 4 seconds

  document.getElementById('mouse-icon').addEventListener('click', () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const centerPosition = (scrollHeight / 2) - (viewportHeight / 2);

    window.scrollTo({
      top: centerPosition,
      behavior: 'smooth'
    });
  });

//Gallery Section
    const buttons = document.querySelectorAll('.filter-buttons button');
    const items = document.querySelectorAll('.gallery-item');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        items.forEach(item => {
          if (filter === 'all' || item.classList.contains(filter)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });



    // How it work section
     const slides1 = [
    {
      title: "01. Online Applications",
      description: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      img: "Images/slide_1.jpg"
    },
    {
      title: "02. Document Review",
      description: "Documents are reviewed carefully to ensure correctness and completeness before proceeding to the next step.",
      img: "Images/slide_2.jpg"
    },
    {
      title: "03. Approval & Done",
      description: "Once verified and approved, the process is completed and confirmation is sent out instantly.",
      img: "Images/slide_3.jpg"
    }
  ];

  let currentSlide = 0;

  function updateSlide() {
    document.getElementById('slideImg').src = slides1[currentSlide].img;
    document.getElementById('slideTitle').textContent = slides1[currentSlide].title;
    document.getElementById('slideDesc').textContent = slides1[currentSlide].description;
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides1.length) % slides1.length;
    updateSlide();
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides1.length;
    updateSlide();
  }


  // Happy customers Section
   const testimonials = document.querySelectorAll('.testimonial');
  const dots = document.querySelectorAll('.dot');

  function showTestimonial(index) {
    testimonials.forEach(t => t.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
  }

  // Optional: Auto-switch every 5s
  let currentIndex1 = 0;
  setInterval(() => {
    currentIndex1 = (currentIndex1 + 1) % testimonials.length;
    showTestimonial(currentIndex1);
  }, 5000);
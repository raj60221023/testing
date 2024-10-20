 


// Smooth Scroll for Navigation Links
function smoothScroll() {
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Intersection Observer for Fade-in Sections
function fadeInSections() {
    const fadeInElements = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add 'visible' class when in view
                observer.unobserve(entry.target); // Stop observing after the fade-in
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the section is visible
    });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
}




// Script to simulate hover effect on mobile devices
document.addEventListener("DOMContentLoaded", function() {
    const icons = document.querySelectorAll(".icon");
    
    icons.forEach(icon => {
        icon.addEventListener("touchstart", function() {
            this.classList.add("hover");
        });
        
        icon.addEventListener("touchend", function() {
            this.classList.remove("hover");
        });
    });
});


// Sticky Header on Scroll
function stickyHeader() {
    const header = document.getElementById('main-header');
    const stickyClass = 'sticky';
    
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add(stickyClass);
        } else {
            header.classList.remove(stickyClass);
        }
    });
}

// Contact Form Submission Handler
function handleContactForm() {
    const contactForm = document.getElementById('contact-form');
    const confirmationMessage = document.getElementById('confirmation');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent page refresh

            const formData = new FormData(contactForm);
            const url = '/your-endpoint'; // Replace with actual API endpoint

            // Send form data to the server
            fetch(url, {
                method: 'POST',
                body: formData,
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Handle success response
                console.log('Form submission success:', data);
                contactForm.style.display = 'none'; // Hide form on success
                confirmationMessage.style.display = 'block'; // Show confirmation message
                contactForm.reset(); // Reset form fields
            })
            .catch(error => {
                // Handle any error that occurred during form submission
                console.error('Form submission error:', error);
                alert('There was an error sending your message. Please try again later.');
            });
        });
    }
}

// Initialize all functions
function init() {
    smoothScroll();
    fadeInSections();
    stickyHeader();
    handleContactForm();
}








var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function() {
  $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function($el) {
  $el.addEventListener('click', function() {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
  });
});

$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});



// Run the init function on DOMContentLoaded
document.addEventListener('DOMContentLoaded', init);

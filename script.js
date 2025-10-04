
// Custom JavaScript for Wild Wonders Zoo
document.addEventListener('DOMContentLoaded', function() {
    // Show welcome modal on page load
    var welcomeModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
    welcomeModal.show();
    
    // Gallery filtering functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryImgs = document.querySelectorAll('.gallery-img');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            galleryImgs.forEach(img => {
                const imgContainer = img.parentElement;
                if (filter === 'all' || img.getAttribute('data-type') === filter) {
                    img.style.display = 'block';
                    imgContainer.style.display = 'block';
                } else {
                    img.style.display = 'none';
                    imgContainer.style.display = 'none';
                }
            });
        });
    });
    
    // Ticket filtering functionality
    const ticketFilters = document.querySelectorAll('.ticket-filter');
    const tickets = document.querySelectorAll('.ticket-card');
    
    ticketFilters.forEach(filter => {
        filter.addEventListener('change', function() {
            const selectedTypes = Array.from(ticketFilters)
                .filter(f => f.checked)
                .map(f => f.value);
            
            if (selectedTypes.length === 0) {
                // Show all tickets if no filters selected
                tickets.forEach(ticket => {
                    ticket.style.display = 'block';
                });
            } else {
                // Show only tickets that match selected types
                tickets.forEach(ticket => {
                    const ticketType = ticket.getAttribute('data-type');
                    if (selectedTypes.includes(ticketType)) {
                        ticket.style.display = 'block';
                    } else {
                        ticket.style.display = 'none';
                    }
                });
            }
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Close mobile menu if open
                const navbarCollapse = document.getElementById('navbarNav');
                if (navbarCollapse.classList.contains('show')) {
                    new bootstrap.Collapse(navbarCollapse).hide();
                }
                
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add animation to accordion icons
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', function() {
            const icon = this.querySelector('.bi-chevron-down');
            if (icon) {
                icon.style.transition = 'transform 0.3s ease';
            }
        });
    });
    
    // Plan button click handler
    const planBtn = document.querySelector('.plan-btn');
    if (planBtn) {
        planBtn.addEventListener('click', function() {
            document.getElementById('visit').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});

// Carousel improvements
function initCarousel() {
    const carousel = document.getElementById('zooCarousel');
    if (!carousel) return;

    // Add smooth transition
    carousel.addEventListener('slide.bs.carousel', function (e) {
        const nextSlide = e.relatedTarget;
        console.log('Sliding to:', nextSlide);
    });

    // Auto-play with pause on hover
    carousel.addEventListener('mouseenter', function () {
        const bsCarousel = bootstrap.Carousel.getInstance(carousel);
        if (bsCarousel) {
            carousel.setAttribute('data-bs-interval', '0');
        }
    });

    carousel.addEventListener('mouseleave', function () {
        const bsCarousel = bootstrap.Carousel.getInstance(carousel);
        if (bsCarousel) {
            carousel.setAttribute('data-bs-interval', '5000');
        }
    });

    // Force image loading
    const carouselImages = carousel.querySelectorAll('img');
    carouselImages.forEach(img => {
        img.loading = 'eager'; // Force loading
        img.decoding = 'async';
    });

    console.log('Carousel initialized with', carouselImages.length, 'images');
}

// Добавьте вызов в DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // ... остальной код ...
    
    // Initialize carousel
    setTimeout(initCarousel, 500);
    
    // Force carousel images visibility
    const carouselImages = document.querySelectorAll('.carousel-item img');
    carouselImages.forEach(img => {
        img.style.display = 'block';
        img.style.visibility = 'visible';
        img.style.opacity = '1';
        img.style.width = '100%';
        img.style.height = '100%';
    });
});
        document.addEventListener('DOMContentLoaded', () => {
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
            const contactForm = document.getElementById('contactForm');
            const formMessage = document.getElementById('form-message');
            const hamburgerIcon = document.getElementById('hamburger-icon');
            const closeIcon = document.getElementById('close-icon');

            // 1. Mobile Menu 
            if (mobileMenuButton) {
                mobileMenuButton.addEventListener('click', () => {
                    const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
                    mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
                    mobileMenu.classList.toggle('hidden');
                    
                    hamburgerIcon.classList.toggle('hidden');
                    closeIcon.classList.toggle('hidden');
                });
            }

            // 2. Close mobile menu when a link is clicked
            mobileNavLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                    mobileMenuButton.setAttribute('aria-expanded', 'false');
                    
                    
                    hamburgerIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                });
            });

            // 3. Simple Form Submission Simulation
            if (contactForm) {
                contactForm.addEventListener('submit', (event) => {
                    event.preventDefault(); 
                    
                    formMessage.classList.remove('hidden');
                    
                   
                    setTimeout(() => {
                        formMessage.classList.add('hidden');
                        contactForm.reset();
                    }, 3000);
                });
            }
        });
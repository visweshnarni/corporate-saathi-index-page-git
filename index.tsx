document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const themeIconLight = document.getElementById('theme-icon-light');
    const themeIconDark = document.getElementById('theme-icon-dark');
    const htmlEl = document.documentElement;

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            htmlEl.classList.add('dark');
            themeIconDark.classList.remove('hidden');
            themeIconLight.classList.add('hidden');
        } else {
            htmlEl.classList.remove('dark');
            themeIconLight.classList.remove('hidden');
            themeIconDark.classList.add('hidden');
        }
    };

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // Default to light theme if no preference is saved
        applyTheme('light');
    }

    themeToggle.addEventListener('click', () => {
        const isDark = htmlEl.classList.toggle('dark');
        const newTheme = isDark ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // --- Desktop Dropdown Menus ---
    const schemesMenuBtn = document.getElementById('schemes-menu-btn');
    const schemesMenu = document.getElementById('schemes-menu');
    const servicesMenuBtn = document.getElementById('services-menu-btn');
    const servicesMenu = document.getElementById('services-menu');

    const dropdowns = [
        { btn: schemesMenuBtn, menu: schemesMenu },
        { btn: servicesMenuBtn, menu: servicesMenu }
    ];

    dropdowns.forEach(dropdown => {
        if (dropdown.btn && dropdown.menu) {
            dropdown.btn.addEventListener('click', (e) => {
                e.stopPropagation();
                // Hide other dropdowns
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown.menu !== dropdown.menu) {
                        otherDropdown.menu.classList.add('hidden');
                    }
                });
                // Toggle current dropdown
                dropdown.menu.classList.toggle('hidden');
            });
        }
    });

    // Close dropdowns when clicking outside
    window.addEventListener('click', (e) => {
        dropdowns.forEach(dropdown => {
            if (dropdown.btn && dropdown.menu && !dropdown.menu.classList.contains('hidden')) {
                 if (!dropdown.btn.contains(e.target as Node) && !dropdown.menu.contains(e.target as Node)) {
                    dropdown.menu.classList.add('hidden');
                 }
            }
        });
    });

    // --- Header Shadow on Scroll ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('shadow-md');
        } else {
            header.classList.remove('shadow-md');
        }
    });

    // --- Scroll Animations ---
    const animatedElements = document.querySelectorAll('.scroll-animate');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });


    // --- Login and Form Flow ---
    const mainContent = document.getElementById('main-content');
    const loginPage = document.getElementById('login-page');
    const formPage = document.getElementById('form-page');
    const getStartedBtns = document.querySelectorAll('.get-started-btn');
    const loginForm = document.getElementById('login-form');
    const detailsForm = document.getElementById('details-form');
    
    const selectionTypeRadios = document.querySelectorAll('input[name="selection-type"]');
    const planOptions = document.getElementById('plan-options');
    const serviceOptions = document.getElementById('service-options');

    let selectedPlanFromTrigger = '';

    getStartedBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            selectedPlanFromTrigger = (e.currentTarget as HTMLElement).dataset.plan;
            mainContent.classList.add('hidden');
            loginPage.classList.remove('hidden');
            formPage.classList.add('hidden');
            window.scrollTo(0, 0);
        });
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Simulate successful login
        loginPage.classList.add('hidden');
        formPage.classList.remove('hidden');
        window.scrollTo(0, 0);
        initializeDetailsForm();
    });

    const initializeDetailsForm = () => {
        // Set selection to "Plan"
        const planRadio = document.querySelector('input[name="selection-type"][value="plan"]') as HTMLInputElement;
        planRadio.checked = true;
        
        planOptions.classList.remove('hidden');
        serviceOptions.classList.add('hidden');

        // Pre-select the plan if one was clicked
        if (selectedPlanFromTrigger) {
            const planInput = document.querySelector(`input[name="plan"][value="${selectedPlanFromTrigger}"]`) as HTMLInputElement;
            if(planInput) {
                planInput.checked = true;
            }
        }
    };

    selectionTypeRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            const selection = (e.target as HTMLInputElement).value;
            if (selection === 'plan') {
                planOptions.classList.remove('hidden');
                serviceOptions.classList.add('hidden');
            } else {
                planOptions.classList.add('hidden');
                serviceOptions.classList.remove('hidden');
            }
        });
    });

    detailsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(detailsForm as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());
        console.log('Form Submitted:', data);
        alert('Thank you! Your details have been submitted.');
        // Potentially redirect or show a success message
        formPage.classList.add('hidden');
        mainContent.classList.remove('hidden');
    });

    // --- Contact Form ---
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());
        console.log('Contact Form Submitted:', data);
        alert('Thank you for your message! We will get back to you soon.');
        (contactForm as HTMLFormElement).reset();
    });

    // --- Footer See More Toggle ---
    const seeMoreBtn = document.getElementById('see-more-btn');
    const moreFooterLinks = document.getElementById('more-footer-links');

    if (seeMoreBtn && moreFooterLinks) {
        seeMoreBtn.addEventListener('click', () => {
            const isHidden = moreFooterLinks.classList.toggle('hidden');
            if (isHidden) {
                seeMoreBtn.textContent = 'See More';
            } else {
                seeMoreBtn.textContent = 'See Less';
            }
        });
    }

    // --- Process Section Animation ---
    const processSection = document.getElementById('process');
    if (processSection) {
        const steps = Array.from(processSection.querySelectorAll('.process-step')) as HTMLElement[];
        const lines = Array.from(processSection.querySelectorAll('.process-line-progress')) as HTMLElement[];
        const cards = Array.from(processSection.querySelectorAll('.process-card')) as HTMLElement[];

        let currentStep = -1;
        let animationInterval: number | null = null;
        let isPausedByUser = false;
        const animationSpeed = 3000; // 3 seconds per step

        const setActiveStep = (index: number) => {
            // Reset all active states first
            steps.forEach(s => s.classList.remove('active'));
            lines.forEach(l => l.classList.remove('active'));
            cards.forEach(c => c.classList.remove('active'));
            
            if (index >= 0 && index < steps.length) {
                // Activate the specific card for the current step
                cards[index].classList.add('active');

                // Activate steps cumulatively
                for (let i = 0; i <= index; i++) {
                    if (steps[i]) {
                        steps[i].classList.add('active');
                    }
                }

                // Activate lines cumulatively
                for (let i = 0; i < index; i++) {
                    if (lines[i]) {
                        lines[i].classList.add('active');
                    }
                }
            }
            currentStep = index;
        };
        
        const advanceStep = () => {
            if (isPausedByUser) return;
            let nextStep = currentStep + 1;
            if (nextStep >= steps.length) {
                nextStep = 0; // Loop back to the beginning
            }
            setActiveStep(nextStep);
        };

        const startAnimation = () => {
            if (animationInterval) clearInterval(animationInterval);
            if (isPausedByUser) return;
            // Run first step immediately, then start interval
            advanceStep();
            animationInterval = window.setInterval(advanceStep, animationSpeed);
        };

        const stopAnimation = () => {
            if (animationInterval) {
                clearInterval(animationInterval);
                animationInterval = null;
            }
        };
        
        // Click handlers to pause and manually select a step
        [...steps, ...cards].forEach((element, index) => {
            // Map card index back to its corresponding step index
            const stepIndex = index % steps.length;
            
            element.addEventListener('click', () => {
                isPausedByUser = true;
                stopAnimation();
                setActiveStep(stepIndex);
            });
        });

        // Resume animation on mouse leave if it was paused by user
        processSection.addEventListener('mouseleave', () => {
            if (isPausedByUser) {
                isPausedByUser = false;
                startAnimation();
            }
        });

        // Observer to play/pause animation based on section visibility
        const processObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                if (!animationInterval && !isPausedByUser) {
                   startAnimation();
                }
            } else {
                stopAnimation();
            }
        }, {
            threshold: 0.4 
        });
        
        processObserver.observe(processSection);
    }
});
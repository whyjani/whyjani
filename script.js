// ======SMOOTH SCROLL START HERE======
const lenis = new Lenis();

// Add a listener for the 'scroll' event
lenis.on('scroll', () => {
    console.log('Scroll event triggered');
    ScrollTrigger.update();
});

// Use gsap's ticker to handle animation
gsap.ticker.add((time) => {
    console.log('Ticker running');
    // Adjust the time factor as needed
    lenis.raf(time * 300);
});

// Configure gsap ticker for smoother animation
gsap.ticker.lagSmoothing(0);

// ======SMOOTH SCROLL END HERE======

// MOB NAV START HERE 
document.addEventListener('DOMContentLoaded', function () {
    const navBase = document.querySelector('.mob-nav-base');
    const navLines = document.querySelectorAll('.nav-lines');
    const mobNavLinks = document.querySelectorAll('.mob-nav-container-links a');
    const mobNavContainer = document.querySelector('.mob-nav-container');

    // Initialize GSAP timeline
    const timeline = gsap.timeline({ paused: true });

    // Add animations to the timeline
    timeline.to(mobNavContainer, {
        height: "100vh",
        duration: 2.5,
        ease: "expo.inOut",
    }).from(mobNavLinks, {
        y: 150,
        duration: 2.5,
        ease: "expo.inOut",
        skewY: 3,
        stagger: 0.1,
        delay: -2
    });

    navBase.addEventListener('click', toggleNav);

    function toggleNav() {
        if (!navBase.classList.contains('open')) {
            gsap.to(navLines[0], { duration: 0.5, rotate: 45, y: 10 });
            gsap.to(navLines[1], { duration: 1, rotate: -45, y: -10, ease: "expo.inOut" });
            navBase.classList.add('open');
            timeline.play(); // Play the timeline when navBase is open
        } else {
            gsap.to(navLines[0], { duration: 0.3, rotate: 0, y: 0 });
            gsap.to(navLines[1], { duration: 1, rotate: 0, y: 0, ease: "expo.inOut" });
            navBase.classList.remove('open');
            timeline.reverse(); // Reverse the timeline when navBase is closed
        }
    }
});

// MOB NAV END HERE 
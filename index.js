window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section');
    sections.forEach(section => {
        let sectionPos = section.getBoundingClientRect().top;
        let screenPos = window.innerHeight / 1.5;
        if (sectionPos < screenPos) {
            section.classList.add('visible');
        }
    });
});

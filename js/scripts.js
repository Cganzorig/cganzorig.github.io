document.addEventListener('DOMContentLoaded', () => {
    const sectionLinks = Array.from(document.querySelectorAll('.nav-links a'));
    const sections = sectionLinks
      .map((link) => document.querySelector(link.getAttribute('href')))
      .filter(Boolean);

    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Thank you for your message. I will get back to you soon.');
            form.reset();
        });
    }

    const linkById = new Map(
        sectionLinks
            .map((link) => [link.getAttribute('href').replace('#', ''), link])
    );

    const setActive = (id) => {
        sectionLinks.forEach((link) => link.classList.remove('is-active'));
        const activeLink = linkById.get(id);
        if (activeLink) {
            activeLink.classList.add('is-active');
        }
    };

    if (sections.length === 0) {
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            const visible = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

            if (visible[0]) {
                setActive(visible[0].target.id);
            }
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: [0.1, 0.3, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));

    const initial = sections.find((section) => section.getBoundingClientRect().top >= 0) || sections[0];
    if (initial) {
        setActive(initial.id);
    }

    sectionLinks.forEach((link) => {
        link.addEventListener('click', () => {
            const id = link.getAttribute('href').replace('#', '');
            setActive(id);
        });
    });
});

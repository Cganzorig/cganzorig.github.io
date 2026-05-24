document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Thank you for your message. I will get back to you soon.');
            form.reset();
        });
    }

    const visitCounter = document.getElementById('visit-count');
    if (visitCounter) {
        const timeout = setTimeout(() => {
            if (visitCounter.dataset.fetching === '1') {
                visitCounter.textContent = 'Visits: unavailable';
                visitCounter.dataset.fetching = '0';
            }
        }, 6000);

        visitCounter.dataset.fetching = '1';

        fetch('https://api.countapi.xyz/hit/cganzorig.github.io/homepage')
            .then((response) => response.json())
            .then((data) => {
                clearTimeout(timeout);
                visitCounter.dataset.fetching = '0';
                if (typeof data.value === 'number') {
                    visitCounter.textContent = `Visits: ${data.value.toLocaleString()}`;
                } else {
                    visitCounter.textContent = 'Visits: unavailable';
                }
            })
            .catch(() => {
                clearTimeout(timeout);
                visitCounter.dataset.fetching = '0';
                visitCounter.textContent = 'Visits: unavailable';
            });
    }
});

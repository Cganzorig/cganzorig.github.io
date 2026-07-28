document.addEventListener('DOMContentLoaded', () => {
    const article = document.querySelector('.article-page');
    if (!article || article.querySelector('#comments')) {
        return;
    }

    const section = document.createElement('section');
    section.id = 'comments';
    section.className = 'article-section comments-section';

    const heading = document.createElement('h2');
    heading.textContent = 'Discussion';

    const note = document.createElement('p');
    note.className = 'comments-note';
    note.textContent = 'Questions, corrections, and constructive criticism are welcome. Sign in with GitHub to comment.';

    const thread = document.createElement('div');
    thread.className = 'comments-thread';

    const giscus = document.createElement('script');
    giscus.src = 'https://giscus.app/client.js';
    giscus.async = true;
    giscus.crossOrigin = 'anonymous';
    giscus.dataset.repo = 'Cganzorig/cganzorig.github.io';
    giscus.dataset.repoId = 'R_kgDOMUAA7A';
    giscus.dataset.category = 'Announcements';
    giscus.dataset.categoryId = 'DIC_kwDOMUAA7M4DCL6_';
    giscus.dataset.mapping = 'pathname';
    giscus.dataset.strict = '1';
    giscus.dataset.reactionsEnabled = '1';
    giscus.dataset.emitMetadata = '0';
    giscus.dataset.inputPosition = 'top';
    giscus.dataset.theme = 'light';
    giscus.dataset.lang = 'en';
    giscus.dataset.loading = 'lazy';

    thread.appendChild(giscus);
    section.append(heading, note, thread);
    article.appendChild(section);
});

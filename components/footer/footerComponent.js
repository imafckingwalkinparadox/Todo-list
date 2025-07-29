export function footer() {
    let footer = document.createElement('footer');
    footer.className = 'footer';

    let enlace = document.createElement('a');
    enlace.href = 'https://github.com/imafckingwalkinparadox/Todo-list';
    enlace.target = '_blank';
    enlace.rel = 'noopener noreferrer';
    enlace.className = 'github-link';

    let logo = document.createElement('img');
    logo.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg';
    logo.alt = 'GitHub logo';
    logo.className = 'github-logo';

    enlace.appendChild(logo);

    let texto = document.createElement('span');
    texto.textContent = 'Ver repositorio';
    texto.className = 'github-text';
    enlace.appendChild(texto);

    footer.appendChild(enlace);

    return footer;
}

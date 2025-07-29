export function footer() {
    let footer = document.createElement('footer');
    footer.className = 'footer';

    // Crear el enlace
    let enlace = document.createElement('a');
    enlace.href = 'https://github.com/tu-usuario/tu-repo';  // ← Cambia esta URL
    enlace.target = '_blank';
    enlace.rel = 'noopener noreferrer';
    enlace.className = 'github-link';

    // Crear el logo de GitHub
    let logo = document.createElement('img');
    logo.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg';
    logo.alt = 'GitHub logo';
    logo.className = 'github-logo';

    // Agregar el logo al enlace
    enlace.appendChild(logo);

    // Agregar texto opcional
    let texto = document.createElement('span');
    texto.textContent = 'Ver repositorio';
    texto.className = 'github-text';
    enlace.appendChild(texto);

    // Agregar el enlace al footer
    footer.appendChild(enlace);

    return footer;
}

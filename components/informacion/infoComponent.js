export function informacion(info) {
    let div = document.createElement('div');
    div.className = "div-info";

    // Botones superiores
    const botones = document.createElement('div');
    botones.className = "botones-info";

    const btnAgregar = document.createElement('button');
    btnAgregar.textContent = "+ Tarea";
    btnAgregar.className = "btn-info";

    const btnArchivados = document.createElement('button');
    btnArchivados.textContent = "Archivados";
    btnArchivados.className = "btn-info";

    botones.appendChild(btnAgregar);
    botones.appendChild(btnArchivados);
    div.appendChild(botones);

    // Contenedor principal de la info
    const contenedor = document.createElement('div');
    contenedor.className = "contenedor-info";

    // Índice
    let indice = document.createElement('h2');
    indice.className = "info-indice";
    indice.textContent = "Tarea #" + info.indice;

    // Título
    let titulo = document.createElement('h3');
    titulo.className = "info-titulo";
    titulo.textContent = info.titulo;

    // Descripción
    let descripcion = document.createElement('p');
    descripcion.className = "info-descripcion";
    descripcion.textContent = info.descripcion;

    // Estado
    let estado = document.createElement('span');
    estado.className = "info-estado";
    estado.textContent = "Estado: " + info.estado;

    // Fechas
    const fechas = document.createElement('div');
    fechas.className = "info-fechas";

    const fechaAs = document.createElement('span');
    fechaAs.className = "info-fechaAs";
    fechaAs.textContent = "Asignado: " + info.fechaAs;

    const fechaEn = document.createElement('span');
    fechaEn.className = "info-fechaEn";
    fechaEn.textContent = "Entrega: " + info.fechaEn;

    fechas.appendChild(fechaAs);
    fechas.appendChild(fechaEn);

    // Integrantes
    let integrantes = document.createElement('div');
    integrantes.className = "info-integrantes";
    integrantes.textContent = "Integrantes: ";

    info.listaIntegrantes.forEach((emoji) => {
        let span = document.createElement('span');
        span.className = "emoji-integrante";
        span.textContent = emoji;
        integrantes.appendChild(span);
    });

    // Agregar al contenedor
    contenedor.appendChild(indice);
    contenedor.appendChild(titulo);
    contenedor.appendChild(descripcion);
    contenedor.appendChild(estado);
    contenedor.appendChild(fechas);
    contenedor.appendChild(integrantes);

    div.appendChild(contenedor);

    return div;
}

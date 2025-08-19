export function itemTarea(
    indice, 
    titulo, 
    estado, 
    fechaAs = "01/01/2025", 
    fechaEn = "31/01/2025", 
    listaIntegrantes = ["🙂", "😊", "😎"]
){
    let div = document.createElement('div');
    div.className = "item-tarea";

    // Número
    let divNumero = document.createElement('div');
    divNumero.className = "div-numero";
    divNumero.textContent = indice;
    div.appendChild(divNumero);

    // Título
    let h3Titulo = document.createElement('h3');
    h3Titulo.className = "titulo-tarea";
    h3Titulo.textContent = titulo;
    div.appendChild(h3Titulo);

    // Estado
    let divEstado = document.createElement('div');
    divEstado.className = "estado-tarea";
    divEstado.textContent = estado;
    div.appendChild(divEstado);

    // Fechas en fila
    let divFechas = document.createElement('div');
    divFechas.className = "fechas";

    let spanFechaAs = document.createElement('span');
    spanFechaAs.className = "fecha-asignacion";
    spanFechaAs.textContent = fechaAs;
    divFechas.appendChild(spanFechaAs);

    let spanFechaEn = document.createElement('span');
    spanFechaEn.className = "fecha-entrega";
    spanFechaEn.textContent = fechaEn;
    divFechas.appendChild(spanFechaEn);

    div.appendChild(divFechas);

    // Integrantes (emojis en círculos)
    let divIntegrantes = document.createElement('div');
    divIntegrantes.className = "lista-integrantes";

    if (Array.isArray(listaIntegrantes)) {
        listaIntegrantes.forEach(nombre => {
            let span = document.createElement('span');
            span.className = "integrante";
            span.textContent = nombre;
            divIntegrantes.appendChild(span);
        });
    }

    div.appendChild(divIntegrantes);

    // Botón eliminar
    let divEliminar = document.createElement('div');
    divEliminar.className = "eliminar-tarea";
    divEliminar.textContent = "🗑️";
    div.appendChild(divEliminar);

    return div;
}

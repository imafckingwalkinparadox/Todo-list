export function crearFormulario() {
    const formContainer = document.createElement('div');
    formContainer.className = "formulario-container";

    const form = document.createElement('form');
    form.className = "formulario-tarea";

    // Campo: Nombre de la tarea
    const labelTitulo = document.createElement('label');
    labelTitulo.textContent = "Nombre de la tarea:";
    const inputTitulo = document.createElement('input');
    inputTitulo.type = "text";
    inputTitulo.required = true;

    // Campo: Descripción de la tarea
    const labelDescripcion = document.createElement('label');
    labelDescripcion.textContent = "Descripción:";
    const inputDescripcion = document.createElement('textarea');
    inputDescripcion.rows = 3;
    inputDescripcion.required = true;

    // Campo: Estado
    const labelEstado = document.createElement('label');
    labelEstado.textContent = "Estado:";
    const selectEstado = document.createElement('select');
    ["Pendiente", "En progreso", "Finalizada"].forEach(opcion => {
        let opt = document.createElement('option');
        opt.value = opcion;
        opt.textContent = opcion;
        selectEstado.appendChild(opt);
    });

    // Campo: Fecha de asignación (automática)
    const labelFechaAs = document.createElement('label');
    labelFechaAs.textContent = "Fecha de asignación:";
    const fechaActual = new Date().toISOString().split("T")[0];
    const inputFechaAs = document.createElement('input');
    inputFechaAs.type = "date";
    inputFechaAs.value = fechaActual;
    inputFechaAs.disabled = true;

    // Campo: Fecha de entrega
    const labelFechaEn = document.createElement('label');
    labelFechaEn.textContent = "Fecha de entrega:";
    const inputFechaEn = document.createElement('input');
    inputFechaEn.type = "date";
    inputFechaEn.required = true;

    // Botón de envío
    const btnEnviar = document.createElement('button');
    btnEnviar.type = "submit";
    btnEnviar.textContent = "Agregar tarea";

    // Armar el formulario
    form.appendChild(labelTitulo);
    form.appendChild(inputTitulo);
    form.appendChild(labelDescripcion);
    form.appendChild(inputDescripcion);
    form.appendChild(labelEstado);
    form.appendChild(selectEstado);
    form.appendChild(labelFechaAs);
    form.appendChild(inputFechaAs);
    form.appendChild(labelFechaEn);
    form.appendChild(inputFechaEn);
    form.appendChild(btnEnviar);

    formContainer.appendChild(form);

    // Evento submit: mostrar datos en consola
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const datos = {
            titulo: inputTitulo.value,
            descripcion: inputDescripcion.value,
            estado: selectEstado.value,
            fechaAsignada: fechaActual,
            fechaEntrega: inputFechaEn.value
        };

        console.log("📌 Datos del formulario:");
        console.log(datos);

        form.reset(); // Limpia los campos
    });

    return formContainer;
}

import { itemTarea } from "../../moduls/itemTarea/itemTarea.js";

export function tarea(tareasDB = []) {
    let div_tarea = document.createElement('div');
    div_tarea.className = "tareas";

    tareasDB.forEach((e, index) => {
        div_tarea.appendChild(
            itemTarea(
                index + 1,
                e.titulo,
                e.estado,
                e.fechaAs,
                e.fechaEn,
                e.listaIntegrantes
            )
        );
    });

    return div_tarea;
}

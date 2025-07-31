import { itemTarea } from "../../moduls/itemTarea/itemTarea.js";

let tareasDB = [
    {titulo: "Hola mundo1"},
    {titulo: "Hola mundo2"},
    {titulo: "Hola mundo3"}
];
export function tarea(){
    let div_tarea = document.createElement('div');
    div_tarea.className = "tareas";

    tareasDB.forEach((e) => {
        div_tarea.appendChild(itemTarea(e.titulo));
    });
    
    return div_tarea;
}
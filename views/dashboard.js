import { header } from "../components/header/headerComponent.js";
import { footer } from "../components/footer/footerComponent.js";
import { informacion } from "../components/informacion/infoComponent.js";
import { tarea } from "../components/tareas/tareaComponent.js";



export function dashboard(){
    let dashboard = document.createElement('section');
    dashboard.className = "dashboard";

    dashboard.appendChild(header());

    let section1 = document.createElement('section');
    section1.className = "section-1";
    section1.appendChild(tarea());
    const info = {
        indice: 1,
        descripcion: "Hacer maqueta de volcanes.",
        titulo: "Proyecto Ciencias",
        estado: "Completado",
        fechaAs: "01/01/2025",
        fechaEn: "31/01/2025",
        listaIntegrantes: ["🙂", "😊", "😎"]
    };

    section1.appendChild(informacion(info));
    dashboard.appendChild(section1);

    dashboard.appendChild(footer());


    return dashboard;
}

document.body.appendChild(dashboard());
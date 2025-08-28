import { header } from "../components/header/headerComponent.js";
import { footer } from "../components/footer/footerComponent.js";
import { informacion } from "../components/informacion/infoComponent.js";
import { tarea } from "../components/tareas/tareaComponent.js";

export async function dashboard() {
    
    try {
        const resultado = await fetch("https://backend-todo-list-1-jysi.onrender.com/tareas");
        const datos = await resultado.json();
        let tareasDb = datos;
        console.log(tareasDb);

        let dashboard = document.createElement('section');
        dashboard.className = "dashboard";

        dashboard.appendChild(header());

        let section1 = document.createElement('section');
        section1.className = "section-1";
        section1.appendChild(tarea(tareasDb));
        section1.appendChild(informacion(tareasDb[0]))

        dashboard.appendChild(section1);

        dashboard.appendChild(footer());


        return dashboard;

    } catch (error) {
        console.error("Error: ", error);
    }
}

dashboard().then(elemento => {
    document.body.appendChild(elemento);
})



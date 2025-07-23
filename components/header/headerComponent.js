export function header(){
    let header = document.createElement('header');
    
    let h1 = document.createElement('h1');
    h1.innerText = "Todo-list";
    header.appendChild(h1);

    let div_Tareas = document.createElement('div');
    div_Tareas.className = "div-tareas";

    let div_pendientes = document.createElement('span');
    div_pendientes.className = "pendientes-label";
    div_pendientes.innerText = "Pendientes";

    let pending_item = document.createElement('span');
    pending_item.className = "cantidad-tareas";
    pending_item.innerText = "8";

    div_Tareas.appendChild(div_pendientes);
    div_Tareas.appendChild(pending_item);
    header.appendChild(div_Tareas);

    // Circulo usuario
    let divLogo_User = document.createElement('div');
    divLogo_User.className = "div-logo-user";
    header.appendChild(divLogo_User);

    return header;
}

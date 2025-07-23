export function header(){
    let header = document.createElement('header');
    
    let h1 = document.createElement('h1');
    h1.innerText = "Todo list";
    header.appendChild(h1);

    let div_Tareas = document.createElement('div');
    div_Tareas.className = "div-tareas";
    header.appendChild(div_Tareas);

    let divLogo_User = document.createElement('div');
    divLogo_User.className = "div-logo-user";
    header.appendChild(divLogo_User);

    return header;
}
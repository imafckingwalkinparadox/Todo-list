const root = document.getElementById("root");

const todoContainer = document.createElement("div");
todoContainer.className = "todo-container";

const loadingText = document.createElement("h1");
loadingText.className = "loading-title";
loadingText.textContent = "Cargando Todo List...";

todoContainer.appendChild(loadingText);

root.appendChild(todoContainer);

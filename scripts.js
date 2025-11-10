const container = document.getElementsByClassName("container-2");

function mostraMsg() {
    alert("Este é meu filme favorito!");
    let nota = prompt("Esse filme é nota:");

    const paragrafo = document.createElement("p");
    paragrafo.textContent = (nota);

    document.container.appendChild(paragrafo);


}
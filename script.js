let container = document.getElementById("container");
//idea: make row and grid loops
for (let i = 0; i < 6; i++) {
    let cell = document.createElement("block");
    let cells = document.getElementsByClassName("block")
    cell.innerHTML = "O";
    container.appendChild(cell);
}

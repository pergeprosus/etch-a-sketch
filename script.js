
//idea: make row and grid loops
//vertical loop(?)
for (let i = 0; i < 16; i++) {
    let container = document.getElementById("container");
    let cell = document.createElement("block");
    let allcell = document.getElementsByClassName("block")
    cell.innerHTML = "O";
    container.appendChild(cell);
}


//idea: make row and grid loops
//vertical loop(?)
for (let i = 0; i <= 16; i++) {
    let biggercontainer = document.getElementById("biggercontainer");
    let container = document.getElementById("container");
    let cell = document.createElement("gridcell");
    let allcell = document.getElementsByClassName("gridcell")
    cell.innerHTML = ""+ [i] +""
    container.appendChild(cell);
    biggercontainer.appendChild(container);
}

for (let i =0; i < 16; i++) {
}

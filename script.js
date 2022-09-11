let mainsize = 16;
//idea: make row and grid loops
//vertical loop(?)
let biggercontainer = document.getElementById("biggercontainer");
for (let i = 0; i <= mainsize; i++) {
    let container = document.getElementById("rowcontainer");
    let cell = document.createElement("gridcell");
    let cell2 = document.createElement("gridcell");
    let neurow = document.createElement("rowcontainer");
    biggercontainer.appendChild(neurow);
    //let allcell = document.getElementsByClassName("gridcell")
    container.appendChild(cell);
    neurow.appendChild(cell2);
}

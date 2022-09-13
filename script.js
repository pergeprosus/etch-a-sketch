let mainsize = 16;
//idea: make row and grid loops
//vertical loop(?)
let smallercontainer = document.getElementById("smallercontainer");
let biggercontainer = document.getElementById("biggercontainer");
let container = document.getElementById("rowcontainer");
let gridcell = document.getElementById("gridcell");

for (let i = 0; i <= mainsize - 1; i++) {
    let cell = document.createElement("gridcell");
    container.appendChild(cell);
    console.log('cell is made')

}
//Clone containers
for (let j = 0; j <= mainsize - 2; j++) {
    let containerclone = container.cloneNode(true);
    smallercontainer.appendChild(containerclone);
    console.log('clone is made')
}
document.querySelector('gridcell').addEventListener("click", flark);
function flark() {
    gridcell.style.backgroundColor = 'red';
    return;
}




//Current goal: allow fullscale cells for each new one
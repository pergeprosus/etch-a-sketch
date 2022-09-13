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
    console.log('number of cells in a row');

}
//Clone containers
for (let j = 0; j <= mainsize - 2; j++) {
    let containerclone = container.cloneNode(true);
    smallercontainer.appendChild(containerclone);
    console.log('number of clones (cells - 1)')

}

if ('gridcell') {
document.querySelector('gridcell').addEventListener('mouseover', function() {
document.querySelector('gridcell').style.backgroundColor = 'black'
})
}

//Current goal: test functional event listen

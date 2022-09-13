let mainsize = 16;
let mainsize2 = mainsize - 1;
//idea: make row and grid loops
//vertical loop(?)
let smallercontainer = document.getElementById("smallercontainer");
let biggercontainer = document.getElementById("biggercontainer");
let container = document.getElementById("rowcontainer");
let gridcell = document.getElementById("gridcell");
let grids = document.querySelectorAll("gridcell");
for (let q = 0; q <= mainsize2; q++) {
    let cell = document.createElement("gridcell");
    container.appendChild(cell);
}
for (let i = 0; i <= (mainsize2); i++) {
    let grids = document.querySelectorAll("gridcell");
    //First grid's mouseover loop thing
    grids[i].addEventListener('mouseover', function () {
        grids[i].style.backgroundColor = 'black';
    })
    console.log('number of cells in a row that will be colored');
}
//Clone containers
for (let j = 0; j <= mainsize2 - 1; j++) {
    let cell = document.createElement("gridcell");
    let containerclone = container.cloneNode(true);
    smallercontainer.appendChild(containerclone);
    console.log('number of clone rows (cells - 1)')
}
//current goal: Maybe add clone pixel to second loop and do the loop again difernt?
//new idea

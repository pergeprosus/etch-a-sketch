let mainsize = 16;
let mainsize2 = mainsize - 1;
let smallercontainer = document.getElementById("smallercontainer");
let biggercontainer = document.getElementById("biggercontainer");
let container = document.getElementById("rowcontainer");
let gridcell = document.getElementById("gridcell");
let grids = document.querySelectorAll("gridcell");
let button = document.getElementById("sizerequest")

function gridcellcreation() {
for (let q = 0; q <= mainsize2; q++) {
    let cell = document.createElement("gridcell");
    container.appendChild(cell);
    let grids = document.querySelectorAll("gridcell");
    console.log('number of cells in a row that will be colored');
}
}
gridcellcreation();

function clonerowcreation () {
for (let j = 0; j <= mainsize2 - 1; j++) {
    let cell = document.createElement("gridcell");
    let containerclone = container.cloneNode(true);
    smallercontainer.appendChild(containerclone);
    console.log('number of clone rows (cells - 1)')
}
}
clonerowcreation();

function colorenabler () {
let zingle = document.getElementsByTagName('gridcell');
for (let z = 0; z < zingle.length; z++) {
    zingle[z].addEventListener('mouseover', function () {
        zingle[z].style.backgroundColor = 'black';
    })
}
}
colorenabler();

//Current goal: Allow for dynamic box sizes
button.addEventListener('click', function () {
    console.log('button press')
    mainsize2 = 32;
    gridcellcreation();
})
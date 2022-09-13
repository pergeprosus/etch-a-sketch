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
    let grids = document.querySelectorAll("gridcell");
    //First grid's mouseover loop thing
    function clip() {
    grids[i].addEventListener('mouseover', function () {
        grids[i].style.backgroundColor = 'black';
        console.log('touch')
    })
}
clip();
    console.log('number of cells in a row');
}

//Clone containers
for (let j = 0; j <= mainsize - 2; j++) {
    let gridcell = document.getElementById("gridcell");
    let cell = document.createElement("gridcell");
    let containerclone = container.cloneNode(true);
    let gridclone = cell.cloneNode(true);
    smallercontainer.appendChild(containerclone);
    let grids = document.querySelectorAll("gridcell");
    //clone grid's mouseover loop thing



    console.log('number of clone rows (cells - 1)')
}
//current goal: Maybe add clone pixel to second loop and do the loop again difernt?

let mainsize = 8;
let smallercontainer = document.getElementById("smallercontainer");
let biggercontainer = document.getElementById("biggercontainer");
let container = document.getElementById("rowcontainer");
let gridcell = document.getElementById("gridcell");
let grids = document.querySelectorAll("gridcell");
let button = document.getElementById("sizerequest")
let sizecounter = document.getElementById("thesize")

function sizecounteration() {
    sizecounter.innerHTML = "" + mainsize + " x " + mainsize + "";
}
sizecounteration();
function gridcellcreation() {
    for (let q = 0; q < mainsize; q++) {
        let cell = document.createElement("gridcell");
        container.appendChild(cell);
        let grids = document.querySelectorAll("gridcell");
        console.log('number of cells in a row that will be colored');
    }
}
gridcellcreation();
function clonerowcreation() {
    for (let j = 0; j < (mainsize - 1); j++) {
        let containerclone = container.cloneNode(true);
        smallercontainer.appendChild(containerclone);
        console.log('number of clone rows (cells - 1)')
    }
}
clonerowcreation();
function colorenabler() {
    let zingle = document.getElementsByTagName('gridcell');
    for (let z = 0; z < zingle.length; z++) {
        let randomcolor;
        
        zingle[z].addEventListener('mouseover', function () {
            zingle[z].style.backgroundColor = 'black';
        })
    }
}
colorenabler();

function scaler() {
    let container = document.getElementById('rowcontainer');
    let containers = document.getElementsByTagName('rowcontainer')
    let elements = container.getElementsByTagName('gridcell');
    let smallercontainer = document.getElementById("smallercontainer");
    let smalcontainlength = document.getElementById("smallercontainer").childElementCount;
    for (let i = 0; i <= elements.length; i++) {
        let element = elements[i];
        element.style.transform = "scale(" + (1 / elements.length) + ")";
    }
}
let elements = container.getElementsByTagName('gridcell');

function removeall() {
    for (let i = 1; i < mainsize; i++) {
        let smallcontainer = document.getElementById('smallercontainer');
        let rowcontainer = document.getElementById('rowcontainer');
        rowcontainer.removeChild(rowcontainer.lastChild);
        smallcontainer.removeChild(smallcontainer.lastChild);
    }

}

function colorgone() {
    let zingle = document.getElementsByTagName('gridcell');
    for (let z = 0; z < zingle.length; z++) {

        zingle[z].style.backgroundColor = 'white';
    }
}

function gridsize() {
    let containers = document.getElementsByTagName('rowcontainer');
    let gridso = document.getElementsByTagName('gridcell');

    for (let n = 0; n < gridso.length; n++) {
        gridso[n].style.width = gridso[n].offsetHeight;
        console.log("achieved")
    }
}


//Current goal: Allow for dynamic box sizes
button.addEventListener('click', function () {
    if (mainsize < 100) {
        console.log(mainsize)
        removeall();
        gridcellcreation();
        mainsize++;
        clonerowcreation();
        colorenabler();
        colorgone();
        sizecounteration();
    }
    else {
        alert("INVALID ENTRY");
    }

})
//ERAUSRE ONLY DOES 16...FIX THIS!
//rows get removed after second time even if equal...how to fix?
//The issue seems to be a removal of a grid?
//Removall is deleting the main container?
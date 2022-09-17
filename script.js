let mainsize = 8;
let mainsize2 = mainsize - 1;
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
    for (let q = 0; q <= mainsize - 1; q++) {
        let cell = document.createElement("gridcell");
        container.appendChild(cell);
        let grids = document.querySelectorAll("gridcell");
        console.log('number of cells in a row that will be colored');
    }
}
gridcellcreation();
function clonerowcreation() {
    for (let j = 0; j <= mainsize - 2; j++) {
        let containerclone = container.cloneNode(true);
        smallercontainer.appendChild(containerclone);
        console.log('number of clone rows (cells - 1)')
    }
}
clonerowcreation();
function colorenabler() {
    let zingle = document.getElementsByTagName('gridcell');
    for (let z = 0; z < zingle.length; z++) {
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
    for (let i = 0; i <= mainsize2; i++) {
        let smallcontainer = document.getElementById('smallercontainer');
        let containers = document.getElementsByTagName('rowcontainer');
        let container = document.getElementById('rowcontainer');
        smallcontainer.removeChild(smallcontainer.lastChild);
        container.removeChild(container.lastChild);
        
    }
    console.log("removed")
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
        //gridso[n].style.height = "  " + (1 / gridso.length) + "px";
        console.log("achieved")

    }
}


//Current goal: Allow for dynamic box sizes
button.addEventListener('click', function () {
    mainsize = prompt("Enter the new size (must be below 100)");
    if (mainsize < 100 && mainsize !== null && mainsize !== "") {
        console.log('button press');
        removeall();

        gridcellcreation();
        clonerowcreation();
        gridsize();
        colorgone();
        colorenabler();
        sizecounteration();
        console.log(mainsize)
    }
    else {
        alert("INVALID ENTRY");
        mainsize = 8;
    }

})
//ERAUSRE ONLY DOES 16...FIX THIS!
//rows get removed after second time even if equal...how to fix?

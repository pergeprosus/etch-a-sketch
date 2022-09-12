let mainsize = 16;
//idea: make row and grid loops
//vertical loop(?)
let smallercontainer = document.getElementById("smallercontainer");
let biggercontainer = document.getElementById("biggercontainer");
let container = document.getElementById("rowcontainer");
for (let i = 0; i <= mainsize - 1; i++) {
    let cell = document.createElement("gridcell");
    container.appendChild(cell);
}
//Clone containers
for (let j = 0; j <= mainsize - 3; j++) {
    let containerclone = container.cloneNode(true);
    smallercontainer.appendChild(containerclone);
}


//Current goal: allow fullscale cells for each new one
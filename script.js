let mainsize = 16;
//idea: make row and grid loops
//vertical loop(?)
let smallercontainer = document.getElementById("smallercontainer");
let biggercontainer = document.getElementById("biggercontainer");
for (let i = 0; i <= mainsize - 1; i++) {
    let container = document.getElementById("rowcontainer");
    let cell = document.createElement("gridcell");
    container.appendChild(cell);
}

for (let i = 0; i <= mainsize; i++) {
    let flip = document.createElement("rowcontainer");
    smallercontainer.appendChild(flip);
}
//Current goal: allow fullscale cells for each new one
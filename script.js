function createGrid(num){
    const container = document.querySelector(".container");
    let widthOfContainer = container.offsetWidth;

    for (let i = 0; i<num*num; i++){
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.width = widthOfContainer/ num + "px";
        grid.style.height = widthOfContainer/ num + "px";

        grid.addEventListener("mouseover", () => {
            hoverEffect(grid);
        });

        container.appendChild(grid);
    }
    console.log(widthOfContainer);
}

// function hoverEffect(container){
//     container.style.backgroundColor = "black";
// }

function hoverEffect(container){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let RGBColor = "rgb(" + r + "," + g + "," + b + ")";
    container.style.backgroundColor = RGBColor;
}

function resizeGrid(){
    let newSize = 0;
    while (newSize<=0 || newSize>=61){
        newSize = Number(prompt("Enter your new Grid Size between 1 and 60"));
    }
    return newSize;
}

function removeGrid(num){
    for (let i = 0; i<num*num; i++){
        let grid = document.querySelector(".container>div");
        grid.remove();
    }
}

let n = 16;
createGrid(n);

const btn = document.querySelector(".resize");
btn.addEventListener("click", () => {
    removeGrid(n);
    n = resizeGrid();
    createGrid(n);
});






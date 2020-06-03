const container = document.querySelector("#container");
const width = 960;

function createGrid(size) {
    container.setAttribute("style", `grid-template-columns: repeat(${size}, ${width/size}px); grid-template-rows: repeat(${size}, ${width/size}px)`);

    for(let i = 0; i < size*size; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", `ingrid`);
        div.addEventListener("mouseover", ()=> {
            div.setAttribute("style", `background-color: rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`);
        });
        container.appendChild(div);
    }
}

createGrid(16);

const button = document.querySelector("button");

button.addEventListener("click", () => {
    let divs = document.querySelectorAll(".ingrid");
    for(let i = 0; i < divs.length; i++) {
        divs[i].remove();
    }

    let size = promptSize();

    createGrid(size);
});

function promptSize() {
    let size = +prompt("New size (must be integer > 0): ");
    console.log(typeof size);
    if(size != NaN && size <= 0) {
        alert("Invalid size! (Defaulted to 16)");
        return 16;
    }
    return size;
}
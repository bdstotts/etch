const container = document.querySelector('#container');
let box = document.getElementsByClassName("box");
let dimension = 16;



for (let i=0; i<dimension; i++){
    const rowBox = document.createElement("div");
    rowBox.classList.add("rowBox");
    //rowBox.textContent = "This is a row box";
    container.appendChild(rowBox);

       for(j=0;j<dimension;j++){
            let box = document.createElement("div");
            box.classList.add("box");
            //box.classList.add("hovered2");
            box.textContent = "b"
            rowBox.appendChild(box);

              //console.log(box.);
       }

}

//console.log(box.classList);

document.getElementsByClassName("box").onmouseover = function()
{mouseOverBox()};
function mouseOverBox(){
    document.getElementsByClassName("box").classList.add("hovered")}

document.getElementById("test").onmouseover = function()
{mouseOverHeader()};
function mouseOverHeader(){
    document.getElementById("test").classList.add("hovered")}
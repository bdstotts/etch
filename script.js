const container = document.querySelector('#container');
let dimension = 8;
//rowBox
const rowBox = document.createElement("div");
rowBox.classList.add("rowBox");
//box
const box = document.createElement("div");
box.classList.add("box");
box.textContent = "b";

container.appendChild(rowBox);

for(i=0; i<dimension; i++){
    rowBox.appendChild(box.cloneNode(true));
}

for(i=0;i<dimension-1; i++){
    container.appendChild(rowBox.cloneNode(true));
}

console.log(container)
console.log(rowBox)
console.log(box)

/*const boxes = document.getElementsByClassName("box");

console.log(boxes)

boxes.onmouseover = function(){
    mouseOver()};
    function mouseOVer(){
        document.getElementsByClassName("box").classList.add("hovered")
    }

document.getElementsByClassName("classy").onmouseover = function()
{mouseOverOne()};
function mouseOverOne(){
    document.getElementsByClassName("classy").classList.add("hovered")}



document.getElementById("test").onmouseover = function()
{mouseOverHeader()};
function mouseOverHeader(){
    document.getElementById("test").classList.add("hovered")}*/

const boxy = document.querySelectorAll("div.box");
var hovered = "hovered"

function change(el, hovered) {
    [].forEach.call(boxy, function(box) {
      if (box.className === "box") {
        el.classList.add(hovered);
      }
    });
}
[].forEach.call(boxy, function(box) {
    box.addEventListener("mouseover", function() {
      change(this, hovered);
    });
  });


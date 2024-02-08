const container = document.querySelector('#container');

const button = document.querySelector("button");

let dimension = "";
//console.log(dimension)
function setCanvas() {
  document.querySelectorAll('.rowBox').forEach(e => e.remove());
  //alert("Nice job clicking the buttton")
  dimension = prompt("Enter a number 10-100 to select your etch-a-sketch resolution. Higher means better definition.");
  console.log(dimension)

  if (dimension>100){
        alert("That number is too high. Your resolution has been set to 100")
        dimension=100}

        console.log(dimension)






//rowBox
const rowBox = document.createElement("div");
rowBox.classList.add("rowBox");
//box
const box = document.createElement("div");
box.classList.add("box");
box.textContent = "";

container.appendChild(rowBox);
//create one rowBox filled with boxes
for(i=0; i<dimension; i++){
rowBox.appendChild(box.cloneNode(true));
}
// clone the rowBox * dimensions
for(i=0;i<dimension-1; i++){
container.appendChild(rowBox.cloneNode(true));
}


const boxy = document.querySelectorAll("div.box");
var hovered = "hovered"

// what happens when each box is moused over
function change(el, hovered) {
[].forEach.call(boxy, function(box) {
  if (box.className === "box") {
    el.classList.add(hovered);
  }
});
}
// the function to add the mouseover event listener to each box
[].forEach.call(boxy, function(box) {
box.addEventListener("mouseover", function() {
  change(this, hovered);
});
});

}


button.addEventListener("click", setCanvas);

/*
    if(dimension<10)
      if (dimension>100){
            alert("That number is too high. Your resolution has been set to 100")
            dimension=100}



    


//rowBox
const rowBox = document.createElement("div");
rowBox.classList.add("rowBox");
//box
const box = document.createElement("div");
box.classList.add("box");
box.textContent = "";

container.appendChild(rowBox);
//create one rowBox filled with boxes
for(i=0; i<dimension; i++){
    rowBox.appendChild(box.cloneNode(true));
}
// clone the rowBox * dimensions
for(i=0;i<dimension-1; i++){
    container.appendChild(rowBox.cloneNode(true));
}


const boxy = document.querySelectorAll("div.box");
var hovered = "hovered"

// what happens when each box is moused over
function change(el, hovered) {
    [].forEach.call(boxy, function(box) {
      if (box.className === "box") {
        el.classList.add(hovered);
      }
    });
}
// the function to add the mouseover event listener to each box
[].forEach.call(boxy, function(box) {
    box.addEventListener("mouseover", function() {
      change(this, hovered);
    });
  });*/


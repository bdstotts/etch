const container = document.querySelector('#container');
const clear = document.getElementById("clear");
const button = document.querySelector("button");
var box = ""
var rowBox=""
var dimension = "";
var hovered = ""
var boxy = ""
//console.log(dimension)

//...................................................................................
function setCanvas() {
  document.querySelectorAll('.rowBox').forEach(e => e.remove());
  dimension = prompt("Enter a number 10-100 to select your etch-a-sketch resolution. Higher means better definition.");
  console.log(dimension)

  if (dimension>100){
        alert("That number is too high. Your resolution has been set to 100")
        dimension=100}

        console.log(dimension)

    //rowBox
    rowBox = document.createElement("div");
    rowBox.classList.add("rowBox");
    //box
    box = document.createElement("div");
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


    boxy = document.querySelectorAll("div.box");

    // what happens when each box is moused over
    function change(el) {
        [].forEach.call(boxy, function(box) {
          if (box.className === "box") {
            el.classList.add("hovered");
          }
        });
        }
// the function to add the mouseover event listener to each box
[].forEach.call(boxy, function(box) {
box.addEventListener("mouseover", function() {
  change(this, "hovered");
  //console.log(document.getElementsByClassName("hovered").length)
});
});
}
//.....................................................................................
button.addEventListener("click", setCanvas);

//Resetting the canvas
clear.addEventListener("click", resetCanvas)
hovered = document.getElementsByClassName("hovered")

//function to reset canvas
function resetCanvas(){
  for (i=0;i=hovered.length; i++){
    hovered[0].classList.remove("hovered")
  }
}
 
  





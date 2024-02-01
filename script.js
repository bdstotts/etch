const container = document.querySelector('#container');

let dimension = 2;

for (let i=0; i<dimension; i++){
    const rowBox = document.createElement("div");
    rowBox.classList.add("rowBox");
    //rowBox.textContent = "This is a row box";
    container.appendChild(rowBox);

        for(j=0;j<dimension;j++){
            const box = document.createElement("div");
            box.classList.add("box");
            box.textContent = "box"
            rowBox.appendChild(box);
        }

}
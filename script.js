const container = document.querySelector('#container');

//const main = document.createElement('div');
//main.classList.add("main");

/*const box = document.createElement("div");
box.classList.add("box");
box.textContent = "This is the box to dupe."*/

//container.appendChild(box);

let dimension = 6;

/*for (let i=0; i <dimension; i++){

        const firstBox = document.createElement("div");
        firstBox.classList.add("firstBox");
        firstBox.textContent = "First Box"
        container.appendChild(firstBox);

        for (let i=0; i <dimension-1; i++){

            const box = document.createElement("div");
            box.classList.add("box");
            box.textContent = "Following Boxes"
            container.appendChild(box);
        }
    }*/

for (let i=0; i<dimension; i++){
    const rowBox = document.createElement("div");
    rowBox.classList.add("rowBox");
    //rowBox.textContent = "This is a row box";
    container.appendChild(rowBox);

        for(j=0;j<dimension;j++){
            const box = document.createElement("div");
            box.classList.add("box");
            box.textContent = "Following Boxes"
            rowBox.appendChild(box);
        }

}
const container = document.querySelector('#container');

//const main = document.createElement('div');
//main.classList.add("main");

const box = document.createElement("div");
box.classList.add("box");
box.textContent = "This is the box to dupe."

container.appendChild(box);

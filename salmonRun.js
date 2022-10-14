"use strict";
const WIDTH = 500;
const HEIGHT = 500;
const COLORS = ["red", "orange", "yellow", "green", "blue", "purple"];
let board = document.body.querySelector(".game-board");
let salmons = [{
        "name": "Derrick",
        "primaryColor": COLORS[0],
        "secondaryColor": COLORS[4],
        "speed": 1
    },
    {
        "name": "Robin",
        "primaryColor": COLORS[1],
        "secondaryColor": COLORS[5],
        "speed": 1
    }];
// Create Salmon Run Game
let game = new SalmonRun(WIDTH, HEIGHT);
// Add salmons to game and append to board
salmons.map((s) => {
    let salmon = game.addSalmon(s);
    salmon.reportProps();
    createAndAppendSalmonHTML(salmon);
});
/** Take a salmon instance, generate div with inline css, append to board */
function createAndAppendSalmonHTML(salmon) {
    let salmonDiv = document.createElement('div');
    salmonDiv.textContent = salmon.image;
    salmonDiv.setAttribute("class", "fish");
    salmonDiv.setAttribute("id", `${salmon.id}`);
    salmonDiv.style.color = salmon.color;
    salmonDiv.addEventListener('click', handleFishClick);
    board === null || board === void 0 ? void 0 : board.appendChild(salmonDiv);
}
function handleFishClick(evt) {
    let salmonDiv = evt.currentTarget;
    let id = salmonDiv === null || salmonDiv === void 0 ? void 0 : salmonDiv.getAttribute('id');
    let salmon = game.salmons.find((s) => s.id === parseInt(id));
    salmon === null || salmon === void 0 ? void 0 : salmon.alternateColors();
    salmonDiv === null || salmonDiv === void 0 ? void 0 : salmonDiv.style.color = salmon === null || salmon === void 0 ? void 0 : salmon.color;
}

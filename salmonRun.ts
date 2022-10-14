
const WIDTH = 500;
const HEIGHT = 500;
const COLORS = ["red", "orange", "yellow", "green", "blue", "purple"];
let board: Element | null = document.body.querySelector(".game-board");
let salmons: SalmonInterface[] = [{
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
let game: SalmonRun = new SalmonRun(WIDTH, HEIGHT);

// Add salmons to game and append to board
salmons.map((s: SalmonInterface) : void => {
  let salmon = game.addSalmon(s);
  salmon.reportProps();
  createAndAppendSalmonHTML(salmon);
});

/** Take a salmon instance, generate div with inline css, append to board */
function createAndAppendSalmonHTML(salmon: Salmon) : void {
  let salmonDiv: HTMLElement = document.createElement('div');
  salmonDiv.textContent = salmon.image;
  salmonDiv.setAttribute("class", "fish");
  salmonDiv.setAttribute("id", `${salmon.id}`);
  salmonDiv.style.color = salmon.color;
  salmonDiv.addEventListener('click', handleFishClick);
  board?.appendChild(salmonDiv);
}

function handleFishClick(evt: MouseEvent) : void {
  if (evt.currentTarget instanceof HTMLDivElement) {
    let salmonDiv = <HTMLDivElement> evt.currentTarget;
    let id = salmonDiv.getAttribute('id');
    let salmon = game.salmons.find((s: Salmon) => s.id === parseInt(id));
    salmon?.alternateColors();
    salmonDiv.style.color = salmon?.color;
  }
  throw Error('Invalid event target');
}
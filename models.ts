
interface SalmonInterface {
  primaryColor: string;
  secondaryColor: string;
  speed: number;
  name: string;
}

class Salmon {
  id: number;
  primaryColor: string;
  secondaryColor: string;
  speed: number;
  name: string;
  color: string;
  image: string;
  x: number;
  y: number;


  constructor(salmon:SalmonInterface, x:number, y:number, id:number) {
    this.id = id;
    this.color = salmon.primaryColor;
    this.primaryColor = salmon.primaryColor;
    this.secondaryColor = salmon.secondaryColor;
    this.speed = salmon.speed;
    this.name = salmon.name;
    this.image = `𓆟`;
    this.x = 0;
    this.y = 0;
  }

  greet(): string {
    return `Blub I'm ${this.name}`;
  }

  //possible loss of context
  alternateColors(): void {
    this.color = this.color === this.primaryColor ? this.secondaryColor : this.primaryColor;
    console.log(this.greet());
  }

  reportProps(): void {
    console.log(this.color, this.primaryColor, this.secondaryColor, this.speed, this.name, this.image, this.x, this.y);
  }
}

class SalmonRun {
  numClicked: number;
  salmons: Salmon[];
  width: number;
  height: number;

  constructor(width:number, height:number, salmons:Salmon[] = []) {
    this.width = width;
    this.height = height;
    this.numClicked = 0;
    this.salmons = salmons;
  }

  //TODO: take evt target, compare to salmons array, increase numClicked if in array
  increaseNumClick(): void {
    this.numClicked += 1;
  }

  getNumSalmon(): number {
    return this.salmons.length;
  }

  addSalmon(salmonInput: SalmonInterface): Salmon {
    let x = getRandomInt(this.width);
    let y = getRandomInt(this.height);
    const salmon = new Salmon(salmonInput, x, y, this.salmons.length);
    this.salmons.push(salmon);
    console.log(`Added a ${salmon.primaryColor} salmon named ${salmon.name}`);
    return salmon;
  }

  createSalmons(salmons:SalmonInterface[]): void {
    salmons.map(this.addSalmon);
  }



}

function getRandomInt(max:number): number {
  return Math.floor(Math.random() * Math.floor(max));

}

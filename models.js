"use strict";
class Salmon {
    constructor(salmon, x, y, id) {
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
    greet() {
        return `Blub I'm ${this.name}`;
    }
    //possible loss of context
    alternateColors() {
        this.color = this.color === this.primaryColor ? this.secondaryColor : this.primaryColor;
        console.log(this.greet());
    }
    reportProps() {
        console.log(this.color, this.primaryColor, this.secondaryColor, this.speed, this.name, this.image, this.x, this.y);
    }
}
class SalmonRun {
    constructor(width, height, salmons = []) {
        this.width = width;
        this.height = height;
        this.numClicked = 0;
        this.salmons = salmons;
    }
    //TODO: take evt target, compare to salmons array, increase numClicked if in array
    increaseNumClick() {
        this.numClicked += 1;
    }
    getNumSalmon() {
        return this.salmons.length;
    }
    addSalmon(salmonInput) {
        let x = getRandomInt(this.width);
        let y = getRandomInt(this.height);
        const salmon = new Salmon(salmonInput, x, y, this.salmons.length);
        this.salmons.push(salmon);
        console.log(`Added a ${salmon.primaryColor} salmon named ${salmon.name}`);
        return salmon;
    }
    createSalmons(salmons) {
        salmons.map(this.addSalmon);
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

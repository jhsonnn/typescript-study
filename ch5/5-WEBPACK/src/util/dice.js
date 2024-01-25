"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dice {
    constructor(sides) {
        this.sides = sides;
    }
    roll() {
        let number = Math.floor(Math.random() * this.sides) + 1;
        return number;
    }
}
exports.default = Dice;

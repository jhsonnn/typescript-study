"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dice_1 = __importDefault(require("./util/dice"));
const labels = {
    button: "주사위 굴리기",
    div: " 결과 ",
};
function main() {
    const button = document.createElement("button");
    const resultDiv = document.createElement("div");
    button.innerText = labels.button;
    document.body.append(button, resultDiv);
    const dice = new dice_1.default(6);
    button.addEventListener("click", () => {
        resultDiv.innerText = `${labels.div}${dice.roll()}`;
    });
}
main();

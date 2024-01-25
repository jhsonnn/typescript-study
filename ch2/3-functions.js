"use strict";
/* 함수 타입 */
// Parameter
function add(x, y) {
    return x + y;
}
const result = add(10, 5);
// Parameter II
// function addToCart(name: string, price: number, quantity: number){
//     return `${name}, ${price}, ${quantity}`;
// }
// addToCart("orange", 100, 5)
// //오류
// // addToCart("pineapple", 150)
// // addToCart("grape", 110, 10, false)
//파라미터 기본값 설정
// Default Parameter
// ; 2개를 전달하나 3개를 전달하나 함수 내에 전달되는 개수는 같음
// 2개를 전달해도 마지막 quantity는 기본 값으로 1 지정했기 때문에 자동으로 지정
// function addToCart(name:string, price:number, quantity:number = 1){
//     return `${name}, ${price}, ${quantity}`;
// }
// addToCart("orange", 10) // "orange, 10, 1" 반환
// addToCart("pineapple", 5, 3) //"pineapple", 5, 3" 반환
// optional parameter
// ; 전달 되지 않는 파라미터에 대비해서 처리해야함
// 케이스1
// function addToCart(name:string, price:number, quantity?){
//     if(quantity){
//         //quantity 파라미터 전달 되었을 때
//         //logic 처리
//     }
//     return `${name}, ${price}, ${quantity}`;
// }
//케이스2
// function addToCart(name:string, price:number, quantity?){
//     //quantity가 전달되었을 때는 그대로 사용하고 전달되지 않았을 떄는 1 사용
//     return `${name}, ${price}, ${quantity || 1}`;
// }
// addToCart("Orange", 150)
// addToCart("grape", 100, 2)
// Contextual Typing
// map(), reduce(), filter(), forEach()
//map() 콜백 함수를 받음
// map(element => {element.element에 대한 처리})
// const numbers: number[] = [1,2,3,4,5]
// const letters: string[] = ["a", "b", "c", "d"]
// numbers.map(element=>{
//     element.element에 대한 처리
// })
// letters.forEach(letter=>{
//     letter.letter에 대한 처리
// })
// Return type annotation
// function addTwoValues(x: number, y: number): 반환타입{
// }
function addTwoValues(x, y) {
    return `${x}${y}`;
}
function addTwoNumbers(x, y) {
    //오류
    // return `${x}${y}`;
    return x + y;
}
function isTen(x, y) {
    //오류
    // return `${x}${y}`;
    return x + y === 10;
}
//void, never
function logMessage(message) {
    console.log(message);
}
//해당 함수는 절대로 반환값이 존재하지 않을 때
//무한정으로 동작하는 함수, 예외처리 함수
function throwError(message) {
    throw new Error(message);
}

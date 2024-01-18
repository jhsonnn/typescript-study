
/* 변수 */
let myNumber = 5;
let myString = "Hello";
let myBool = true;

myNumber = 23
myNumber = 10
//오류
// myNumber = "15"



/* 함수 반환 타입 */
//반환 타입 지정하지 않아도 아래 n에서는 컴파일러에서 number 타입이라는 것을 추론
// function add(x: number, y: number){
//     return x+y;
// }

// const n = add(10, 5);


//반환 타입 지정하지 않아도 아래 n에서는 함수의 리턴 값이 문자열 이어붙이기이므로
//n 타입은 자동으로 string으로 지정
function add(x: number, y: number){
    return `${x}${y}`; //문자열 이어붙이기
}

const n = add(10,5)



/* 배열 & 객체 */
let nums = [1,2,3,4];
//오류
// nums.push("hello")

let user = {name: "Eli", age: 30}
//오류
// user.age = "30"


let mixedValues = [1,2,3,"red", "green", "blue"]
"use strict";
// try {
//     // 에러가 발생할 수도 있는 코드를 실행하는 공간
//     fn() // -> throw new Error("something went wrong")
// } catch(error) {
//     //"something went wrong" 이 부분이 error객체의 message속성으로 할당됨
//     console.error(error.message); 
// } finally {
//     // 에러의 유무와 상관없이 항상 실행
//     // 상태 복구 or 사용자에게 알리는 기능하는 코드
// }
function checkPositiveNumber(num) {
    if (num < 0) {
        //에러 발생
        throw new Error("number should be positive");
    }
    console.log(`${num} is a positive number`);
}
try {
    checkPositiveNumber(10);
    // checkPositiveNumber 함수에서 예외가 발생
    // ->함수의 실행 흐름이 바로 중단
    // ->가장 가까운 try, catch 구문으로 제어가 이동됨
    checkPositiveNumber(-10);
    //캐치 블록의 error를 타입할 수 있음.
    //any or unknown
    //그러나 unknown을 선택하는게 any보다 안전함
    // 그 이유는 any의 경우 타입 검사 없이 error의 message라는 속성에 바로 접근이 가능
    // 만약 error에서 message라는 속성이 없으면? 런타임 에러가 발생하게 됨
    // 그러나 unknown은 명시적인 타입 검사를 해야한다는 요구사항이 있음
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
}
// Error 클래스 : JS에서 제공하는 표준 에러 클래스
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}
try {
    throw new CustomError("custom error...");
}
catch (error) {
    if (error instanceof CustomError) {
        console.error(error.message);
    }
}

"use strict";
//문자열(string)
const a = '';
const b = "";
const c = ''; //템플릿 리터럴
let myName = "Steve";
let message = `Hello, ${myName}`;
myName.toLocaleUpperCase();
// 불가 message = 123;
//숫자 타입(number)
let n = 100;
// 불가 숫자 타입에 문자열 공백 넣음
//n = "";
// 불가 number 타입 변수에 문자열 타입의 메소드 적용함
//n.toUpperCase();
let count = 10;
let price = 9.99;
let temperature = -15;
let distance = 3.4e-5;
let total = count * price;
let average = total / 2;
//특수한 타입
let infinity = Infinity;
let infinity2 = Infinity;
let minusInfinity = -Infinity;
let iAmNotANumber = NaN;
// 불리언(boolean)
let isOpen = true;
let isCompleted = false;
if (isOpen) {
    console.log("hello we ar open!");
}
if (!isCompleted) {
    console.log("job not complete");
    console.log(!isCompleted);
}
// && || !
let isAvailable = isOpen && !isCompleted;
//null 널 타입
let user = null;
function login(userName) {
    user = userName;
}
function logout() {
    user = null;
}
login("Joey");
logout();
//any 타입
//타입정보 부족할 때만 사용하지만 되도록 사용하지 x
let someValue;
someValue.toString();
someValue = false;
someValue.toFixed();

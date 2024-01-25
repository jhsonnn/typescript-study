"use strict";
/* 교차 타입 (intersection type) */
// ; 두 개 이상의 타입을 결합해서 모든 타입의 속성을 갖는 단일 타입을 생성  
const person = {
    name: 'John',
    age: 33
};
const guest = {
    id: 100,
    name: "Paul"
};
const user = {
    id: 123,
    name: "Lee",
    age: 30,
    email: "test@email.com"
};
//K가 T의 유효한 키 중 하나임을 보장(판단해줌)
function getProp(obj, key) {
    return obj[key];
}
const obj = { x: 10, y: 20, c: 15 };
//객체를 전달 받고 객체의 key 중 하나를 매개변수로 받고 
const value = getProp(obj, "y"); // 20 반환

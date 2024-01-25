"use strict";
/* 기본 문법 */
//  interface 이름{
//     속성이름:속성타입;
//     속성이름:속성타입;
//     메서드이름(): 메서드타입;
//  }
//  interface User{
//     id: number;
//     name: string;
//     isPremium: boolean;
//     someMethod(): void;
//  }
//  //객체 이용한 인터페이스 사용
//  //모든 프로퍼티가 있어야 함(하나라도 빠지면 안됨)
//  const userA: User = { 
//     id: 10,
//     name: "Bill",
//     isPremium: false,
//     someMethod(){
//         console.log("some method called");
//     }
//  };
const testUser = {
    id: 100,
    name: "Nathan",
    isPremium: false,
    greet(message) {
        return `${message}, ${this.name}`;
    }
};
testUser.greet("Hello"); // Hello, Nathan
const personA = {
    name: "Eli",
    age: 30
};
const studentA = {
    name: "John",
    age: 29,
    studentId: 12345,
    employeeId: 123
};
const rect = { width: 100, height: 200 };
function getArea(rectangle) {
    return rectangle.width * rectangle.height;
}

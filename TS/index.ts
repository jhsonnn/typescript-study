//TS ch.2
// let 이름: string = "kim";
// let 이름: string[] = ["kim", "park"];

//object 타입
// let 이름: { name?: string } = { name: "kim" };

// let 이름: string | number = "kim";

// type Name = string | number;
// let 이름: Name = 123;

//함수 타입
// function 함수(x: number): number {
//   return x * 2;
// }

//튜플 타입
// type Member = [number, boolean];
// let john: Member = [123, true];

// type Member = {
//   name: string;
// };
// let john: Member = { name: "kim" };

//모든 object 속성 타입
// type Member = {
//   [key: string]: string;
// };
// let john: Member = { name: "kim", age: "123" };

//class 타입 지정
// class User {
//   name1: string;
//   constructor(name: string) {
//     this.name1 = name;
//   }
// }

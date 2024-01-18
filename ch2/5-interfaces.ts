 
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
 
 
 
 /* type alias vs interface */
// 두 기능의 목적은 크게 다르지 않다
//1.
// type alias => typue User = {}
// interface => interface User { }
//2.
// type alias => 객체 포함, 리터럴, 원시값 등을 타입으로 가질 수 있다.
// interface => 객체 타입으로 사용해야 한다.
//3.
// 확장 문법이 다르다.



 /* readonly & optional property */
// interface User{
//     readonly id: number;
//     name: string;
//     isPremium?: boolean;
// }

// const testUser: User = {
//     id: 100,
//     name: "John"
// }
// //오류 ; readonly이므로
// // testUser.id = 200




 /* 메서드 / 함수 타입 */
 //case 1.
// interface User{
//     readonly id: number;
//     name: string;
//     isPremium?: boolean;
//     greet(): void;
// }

// const testUser: User = {
//     id: 100,
//     name: "Nathan",
//     isPremium: false,
//     greet(){
//         console.log("Hello Nathan")
//     }
// }
// //greet()의 반환값이 없으면 문제없이 실행됨
// testUser.greet();

// case 2.
interface User{
    readonly id: number;
    name: string;
    isPremium?: boolean;
    greet(message: string): string;
}

const testUser: User = {
    id: 100,
    name: "Nathan",
    isPremium: false,
    greet(message: string){
        return `${message}, ${this.name}`;
    }
}
testUser.greet("Hello"); // Hello, Nathan



 /* 확장 및 조합 */
 //인터페이스 만들기
 interface Person{
    name: string;
    age: number;
 }
//확장
interface Employee {
    employeeId: number;
}

 interface Student extends Person, Employee {
    studentId: number;
 }

 const personA: Person = {
    name: "Eli",
    age: 30
 }

 const studentA: Student = {
    name: "John",
    age: 29,
    studentId: 12345,
    employeeId: 123
 }

 interface Rectangle {
    width: number;
    height: number;
  }
  
  const rect: Rectangle = { width: 100, height: 200 };
  
  function getArea(rectangle: Rectangle): number {
    return rectangle.width * rectangle.height;
  }
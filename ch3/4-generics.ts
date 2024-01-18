{
/* 제네릭 */
// 타입을 매개변수처럼 전달해서 유연하고 재사용 가능한 컴포넌트를 만들 수 있도록 해주는 것
// 다양한 타입에 동작하는 함수, 클래스, 인터페이스 등을 정의할 수 있음
// 코드 중복 줄이고 타입 안정성 향상
// 다양한 다른 타입에서 동작하는 코드를 만들 수 있도록 도와주는 패턴

// 기본 구조
// <타입>
// <T>
// function genericFunction<T>(arg: T): T{
//     return arg;
// }
// interface GenericInterface<T> {

// }
// class GenericClass<T> {

// }



/* 빌트인 제네릭 타입 */

// array
//Array<string>
let numbers: Array<number> = [1,2,3,4,5]
let strings: Array<string> = ["1", "2", "3", "4"]

//선택된 요소를 명확하게 사용 가능
let div = document.querySelector<HTMLDivElement>("#myDiv1");
let button = document.querySelector<HTMLButtonElement>("#myButton1");
//해당 요소의 속성에 접근 가능
// button이 존재하는지 여부를 속성에 접근하기 전에 항상 확인해줘야하는데
// ? 조건부를 사용하여 메서드에 접근해주면 됨 
button?.click();


//코드 중복 발생하는 케이스
// function getFirstElement(arr: number[]){
//     if(!arr.length){
//         return undefined;
//     }

//     return arr[0];
// }
// const firstNumber = getFirstElement(numbers);

// function getFirstStringElement(arr: string[]){
//     if(!arr.length){
//         return undefined;
//     }

//     return arr[0];
// }
// const firstString = getFirstStringElement(strings);

//=>generic 함수 이용하여 수정
function getFirstElement<T>(arr: T[]): T | undefined{
    if(!arr.length){
        return undefined;
    }

    return arr[0];
}
const firstNumber = getFirstElement(numbers);
const firstString = getFirstElement(strings);



/* 제네릭 인터페이스 */
// interface strDict {
//     [key: string]: string;
// }
// let strObj: strDict = {
//     name: "Elliot",
// }

// interface numDict {
//     [key: string]: number;
// }
// let numObj: numDict = {
//     age: 30,
// }
//=>제네릭 인터페이스 만들기
interface Dict<T> {
    [key: string]: T;
}
let strObj: Dict<string> = {
    name: "Elliot"
}
let numObj: Dict<number> = {
    age: 30,
}


//2개 이상 타입의 제너릭 인터페이스 만들기
interface Entry<K, V> {
    key: K;
    value: V;
}
let entry: Entry<string, number> = {
    key: "age",
    value: 30
}
let entry2: Entry<number, string[]> = {
    key: 1,
    value: ["red", "green", "yellow"]
}


}
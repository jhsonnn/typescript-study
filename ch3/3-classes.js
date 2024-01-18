"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Country_name;
/* Continent 클래스 만들기 */
class Continent {
    constructor(name) {
        this.continentName = name;
    }
    getContinentName() {
        return this.continentName;
    }
}
/* Continent 클래스를 상속 받는 Country 클래스 */
class Country extends Continent {
    constructor(continentName, name, capital) {
        //부모클래스의 constructor를 호출해주는 super
        super(continentName);
        _Country_name.set(this, void 0);
        __classPrivateFieldSet(this, _Country_name, name, "f");
        this.capital = capital;
    }
    //국가 정보 출력하는 메서드
    getInfo() {
        return `${__classPrivateFieldGet(this, _Country_name, "f")}, ${this.capital}, ${this.getContinentName()}`;
    }
}
_Country_name = new WeakMap();
//constructor에 파라미터 전달하기
let country = new Country("Asia", "South Korea", "Seoul");
console.log(country.getInfo());
/* 추상 클래스 (abstract) */
class AbstractCountry {
    constructor(name, capital) {
        this.name = name;
        this.capital = capital;
    }
    //멤버나 메소드에도 abstract 키워드를 사용할 수 있다.
    setup() {
        console.log("setup complete");
    }
}
// 추상클래스 사용
//추상클래스는 인스턴스를 만들어서 사용하는게 안됨!
// 추상클래스는 인스턴스화 할 수 없다!
// 오류
// const myCountry = new AbstractCountry()
// 방법 : 
// step 1. 클래스를 하나 만들어서 상속을 받아야 함
class MyCountry extends AbstractCountry {
    //displayInfo()와 같이 abstract 화 된 것의 구현은 해당 클래스에서 해야함
    displayInfo() {
        console.log("display info called");
    }
}
// step 2. 클래스 만들어서 추상클래스 상속 받은 후에 new 키워드 사용 가능
const myCountry = new MyCountry("Germany", "Berlin");
//가능
myCountry.setup();
myCountry.displayInfo();
/* Country 클래스 만들고 생성자 만들어 값 할당하기 */
// //방법 1
// class Country{
//     name: string;
//     capital: string;
// }
// //클래스를 인스턴스화
// let country = new Country();
// //필드 추가해서 값 할당
// country.name = "South Korea";
// country.capital = "Seoul";
//방법 2
//클래스 인스턴스 만듦과 동시에 값 할당
//생성자 만듦과 동시에 값 할당
//constructor pattern
// class Country{
//     name: string;
//     capital: string;
//     constructor(name: string, capital: string){
//         this.name = name;
//         this.capital = capital;
//     }
// }
// //constructor에 파라미터 전달하기
// let country = new Country("South Korea", "Seoul");
// console.log(country)

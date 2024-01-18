
/* interface  */
// 클래스가 따라야 할 구체적인 구조 정의
// 클래스를 설계할 때 인터페이스를 통해 필요한 속성, 메소드의 시그니처를 정의해서 모든 정의된 규칙을 충족시킨다.
interface ContinentInterface {
    //인터페이스는 기본적으로 public
    //private, protected는 추가하지 않는다!
    //클래스에 implements 라는 키워드를 사용하여 클래스에 적용시킨다.
    getContinentName(): string;
}

//extends 키워드 있는 경우에는 해당 키워드 다음에 implements 키워드 사용!
interface CountryInterface {
    capital: string;
    getInfo(): string;
}

/* Continent 클래스 만들기 */
class Continent implements ContinentInterface{
    continentName: string;

    constructor(name: string){
        this.continentName = name;
    }

    getContinentName(){
        return this.continentName;
    }
}

/* Continent 클래스를 상속 받는 Country 클래스 */
class Country extends Continent implements CountryInterface{
    #name: string;
    capital: string;

    constructor(continentName: string, name: string, capital: string){
        //부모클래스의 constructor를 호출해주는 super
        super(continentName)
        this.#name = name;
        this.capital = capital;
    }
    //국가 정보 출력하는 메서드
    getInfo(){
        return `${this.#name}, ${this.capital}, ${this.getContinentName()}`;
    }
}
//constructor에 파라미터 전달하기
let country = new Country("Asia","South Korea", "Seoul");

console.log(country.getInfo());



/* 추상 클래스 (abstract) */
abstract class AbstractCountry {
    name: string;
    capital: string;

    constructor(name: string, capital: string){
        this.name = name;
        this.capital = capital;
    }

    //멤버나 메소드에도 abstract 키워드를 사용할 수 있다.
    setup(): void{
        console.log("setup complete")
    }
    abstract displayInfo(): void;
}

// 추상클래스 사용
//추상클래스는 인스턴스를 만들어서 사용하는게 안됨!
// 추상클래스는 인스턴스화 할 수 없다!
// 오류
// const myCountry = new AbstractCountry()
// 방법 : 
// step 1. 클래스를 하나 만들어서 상속을 받아야 함
class MyCountry extends AbstractCountry{
    //displayInfo()와 같이 abstract 화 된 것의 구현은 해당 클래스에서 해야함
    displayInfo(): void {
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

{
/* Partial<T> */
// 타입 T의 모든 속성을 선택적으로(Optional) 만듦

// type User = {
//     id: number;
//     name: string;
//     email: string;
// }
// type PartialUser = Partial<User>

// type Product = {
//     id: number;
//     price: number;
// }
// type PartialProduct = Partial<Product>

// //문제 없음
// const product: PartialProduct = {

// }
// //오류
// //id , price 속성이 없기 때문에 오류 발생
// const product2: Product = {
    
// }





/* Readonly<T> */

// type User = {
//     id: number;
//     name: string;
// }

// const user: Readonly<User> = {
//     id: 1,
//     name: "John",
// }

// //오류
// //값 변경하지 못함
// // user.id = 10
// // user.name = "Amy"





/* Pick<T, K> */
// T라는 전달하는 객체에서 K라는 속성을 추출

// type User = {
//     id: number;
//     name: string;
//     email: string;
// }
// //"name"이라는 속성만 사용할 수 있는 타입 만들기
// type UserWithNameOnly = Pick<User, "name">;

// const user: UserWithNameOnly = {
//     name: "Lee"
// }





/* Omit<T, K> */
// ; 특정 속성을 제외한 나머지 속성으로 새로운 타입을 만들어라

type Product = {
    id: number;
    name: string;
    price: number;
    uniqueCode: number;
}

type ProductWithOmit = Omit<Product, "uniqueCode" | "price">;





/* Record<K, T> */
//; K 타입의 key와 T 타입의 값으로 구성된 객체 타입을 생성
// K와 T는 사용자가 직접 정의 할 수 있어 객체 타입으로 사용해도 무방
//모든 키가 값은 타입의 값을 가지도록 함

type Country = "South Korea" | "United States" | "Canada";
type Capital = string;

type CountryCapitals = Record<Country, Capital>;

const capitals: CountryCapitals = {
    "South Korea": "Seoul",
    "United States": "Washington D.C",
    "Canada": "Ottawa",
}

//국가 별 정보를 상세하게 매핑하기
type CountryInfo = {
    capital: string;
    population: number;
    continent: string;
}
type CountryInfoMap = Record<Country, CountryInfo>;

const countyInfo: CountryInfoMap = {
    "South Korea": {
        capital: "Seoul",
        population: 51_000_000,
        continent: "Asia"
    },
    "United States": {
        capital: "Washington D.C",
        population: 331_000_000,
        continent: "North America"
    },
    "Canada": {
        capital: "Ottawa",
        population: 83_000_000,
        continent: "North America"
    }
}





/* Parameters<T> */
// ; 함수의 매개변수 타입을 튜플로 추출해서 타입으로 만들어 줌
// 함수를 반복적으로 사용할 때 유용한 유틸리티

//EX1
// type SomeFunction = (id: number) => void;
// //id라는 시그니처를 바탕으로 튜플을 만들고 반환해주고 타입으로 지정하여 타입 파라미터 생성
// type Param = Parameters<SomeFunction>

// function someFunction(...param:Param){
//     //파라미터를 함수 내부에서 읽어올 때는 구조분해 할당 사용
//     //튜플타입으로 전달되기 때문에
//     const [id] = param;

// }
// //함수 호출 때는 number 타입의 id를 전달하도록 하게됨
// someFunction(100)

//EX2
type SaveUser = (name: string, age: number) => void;

type Params = Parameters<SaveUser>

function saveUser(...params: Params){
    const [ name, age ] = params;
}

saveUser("David", 33)


}

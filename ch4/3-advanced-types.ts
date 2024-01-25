
/* 교차 타입 (intersection type) */
// ; 두 개 이상의 타입을 결합해서 모든 타입의 속성을 갖는 단일 타입을 생성  

type A = { name: string }
type B = { age: number }

//A와 B의 모든 속성을 포함하는 객체를 생성할 때 사용됨
type Person = A & B;

const person: Person = {
    name: 'John',
    age: 33
}


type UserBase = { id: number };
type WithName = { name: string };
type WithEmail = { email: string };
type WithAge = { age: number };

type GuestUser = UserBase & WithName;
type User = UserBase & WithName & WithEmail & WithAge;


const guest: GuestUser = {
    id: 100,
    name: "Paul"
}
const user: User = {
    id: 123,
    name: "Lee",
    age: 30,
    email: "test@email.com"
}





/* 조건부 타입 (conditional type) */
// ; 타입을 정의할 때 특정 조건에 따라 하나의 타입 또는 또 다른 타입으로 정의할 수 있게 해주는 패턴

// 삼항 조건 연산자 condition ? true:false
// 이걸 타입에도 적용시킬 수 있음

//T가 extends 키워드를 사용하여 U로 확장하면 X가 선택, 아니면 Y가 선택됨
//한 타입이 다른 타입에 할당이 가능한지 검사하고 ? 여부에 따라 X냐 Y냐 결정
//type ConditionalType = T extends U ? X : Y;

type IsNumber<T> = T extends number ? "Yes" : "No";

type Result1 = IsNumber<number> // "Yes"
type Result2 = IsNumber<string> // "No"


type JsonOrText<T extends "json" | "text"> = T extends "json" ? object : string;

type JsonResponse = JsonOrText<"json"> // object
type TextResponse = JsonOrText<"text"> // string





/* keyof 타입 연산자 */
// ; 객체 타입에서 모든 키(속성 이름)를 문자 리터럴 or 숫자 리터럴로 추출할 때 사용하는 패턴
// 이 연산자를 통해 객체 타입의 모든 키를 유니언 타입으로 가져올 수 있게됨

type MyObject = {
    a: number;
    b: string;
    c: boolean;
}

//MyObject 키를 유니언 타입으로 추출
type Keys = keyof MyObject; // 리터럴 유니언 타입 "a" | "b" | "c"

//K가 T의 유효한 키 중 하나임을 보장(판단해줌)
function getProp<T, K extends keyof T>(obj: T, key: K){
    return obj[key];
}

const obj = { x: 10, y: 20, c:15 };
//객체를 전달 받고 객체의 key 중 하나를 매개변수로 받고 
const value = getProp(obj, "y"); // 20 반환





/* mapped type (매핑 타입) */
// ; 기존 타입을 새로운 타입으로 변환한다.
// 기존 타입의 각 프로퍼티들을 반복해서 새로운 타입을 생성할 수 있음
// 그 과정을 통해서 프로퍼티 타입을 변경하거나 새로운 속성을 추가하거나 할 때 사용되는 패턴

//기본 구조
//T ; 원본 타입
type Mapped<T> = {
    //각 타입의 key를 반복해서 매핑
    //P ; 각 속성의 이름을 나타내는 타입 변수
    //=> 타입스크립트가 내부적으로 P라는 속성에 각 속성의 이름들을 임시적으로 저장했다가 다시 매핑할 때 사용함
    //keyof T ; T에 모든 키들을 유니언 타입으로 가져옴
    // 이걸 반복해서 T[P]의 P 에 지정하는 구조 => P에 해당하는 T의 프로퍼티 타입이 되는 것임
    [P in keyof T]: T[P]
}

//모든 프로퍼티들을 선택적으로 만들어주는 맵 타입
type OptionalType<T> = {
    [P in keyof T]?: T[P]
}
type ReadonlyType<T> = {
    readonly [P in keyof T]: T[P]
}
type UserType = {
    id: number;
    name: string;
    age: number;
    email: string;
}
//UserType에 OptionalType 적용시키기
//UserType 외 모든 속성을 선택적으로 변환
type OptinalUserType = OptionalType<UserType>

//UserType에 ReadonlyType 적용시키기
//UserType의 모든 속성을 Readonly로 변환
type ReadonlyUserType = ReadonlyType<UserType>


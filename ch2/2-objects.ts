
/* 기본 객체 타입 */
// {
//     property_name: property_type
// }

// let monitor: { brand: string; price: number; };

// 방법1
// monitor.brand = "LG";
// monitor.price = 120;

// 방법2
// monitor = {
//     brand: "LG",
//     price: 120
// }

//에러
//displaySize라는 property가 없으므로
// monitor.displaySize = "22inch"





/* 타입 추론*/

let monitor = {
    brand: "LG",
    price: 120
}
//에러
// monitor.price = "123";
// monitor.displaySize = "12inch";





/* Optional 프로퍼티 */
// let user: {id: string; name: string; age?: number; };

//3개의 프로퍼티가 있지만 2개의 프로퍼티만 전달해도 오류가 발생 안함
//=> user 객체의 타입정의를 할 때
//age는 ?를 사용함으로서 해당 프로퍼티는 선택사항이라는 것을 전달했음
//=>따라서 오류 발생 안함(선택적인 프로퍼티 이므로)
// user = {
//     id: "1234",
//     name: "John",
// }





/* Readonly 프로퍼티 */
//; 읽기 전용 프로퍼티
// 객체를 다루다 보면 프로퍼티를 변경하거나 변경하면 안되는 상황이 있음
// 읽기 전용 프로퍼티는 객체가 처음 생성될 때만 값을 할당할 수 있으며
// 그 이후에는 변경할 수 없음

// let user: { readonly id: string; name: string; age?: number; }

// user = {
//     id: "1234",
//     name: "John",
// }

// user.name = "John Smith";
// //오류
// //이러한 readonly 프로퍼티는 환경설정 정보를 담고 있는 객체에 사용이 됨
// user.id = "5678";

// //EX ; 환경설정 정보는 readonly를 붙여서 변경될 수 없도록 함
// // 이런 패턴은 실무에서 자주 쓰임
// let apiConfig: {
//     readonly clientKdy: string;
//     readonly url: string;
// }





/* 타입 별칭 (Type Alias) */
// 객체 옆에 직접적으로 리터럴로 표현하면서 타입을 일일이 지정하였음
// 리터럴으로만 반복적으로 지정하게 되면 코드가 지저분해짐. 가독성 떨어짐
// ; 이를 보완하기 위해 사용
// 사용자 정의 타입 조합에 이름을 할당해서 필요한 곳에 적용할 수 있도록 해줌
// 재사용이 가능

// type 이름 = {
//     id: string;
// }

// //타입 별칭 만들기
// type UserType = {
//     id: string;
//     name: string;
//     age: number;
// }
// //타입 별칭 사용하는 객체 만들기
// let user1: UserType = {
//     id: "1",
//     name: "John",
//     age: 20
//     //프로퍼티 추가
//     //오류
//     // email: "text@email.com"
// }
// let user2: UserType = {
//     id: "2",
//     name: "Sarah",
//     age: 30
// }

// //타입 별칭 사용하는 배열 만들기
// let users: UserType[];

// users.push(user1)
// users.push(user2)

//에러
//프로퍼티가 부족한 걸 넣었으므로
// users.push({})
// users.push({
//     id: "1",
// })





/* Nested 객체 (중첩 객체) */
//api 요청, 응답에 사용되는 json객체들이 nested 객체 형태로 많이 사용됨
// Nested 객체를 타입한다는 것은 해당 객체의 형태와 구조를 바탕으로 타입을 명시

//타입 별칭 만들기
//밑의 것을 먼저 만들고 난 후 그걸 바탕으로 타입 별칭을 구성한다.
// type Payload = {
//     timestamp: number;
//     type: string;
//     user: {
//         id: string;
//         isActive: boolean;
//     }
// }

// const payload: Payload = {
//     timestamp: 12893718,
//     type: 'event',
//     user: {
//         id: "123",
//         isActive: true
//     }
// }

//추가할 경우
type Payload = {
    timestamp: number;
    type: string;
    user: {
        readonly id: string;
        isActive?: boolean;
        //email 추가
        email: string[];
    }
}

const payload: Payload = {
    timestamp: 12893718,
    type: 'event',
    user: {
        id: "123",
        isActive: true,
        email: [ "test1@email.com", "test2@email.com" ]
    }
}
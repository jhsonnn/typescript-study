// let 회원들: number[] = [1, 2, 3];
var 회원들 = [1, "2", 3];
var 오브젝트 = { a: "123" };
//any 타입 => ts를 쓰는 의미가 없어짐
// let 이름: any;
// 이름 = 123;
// 이름 = true;
//unknown 타입 => any와 같음
//any 보다는 안전
// let 이름: unknown;
// 이름 = 123;
// 이름 = {};
//any보다 안전한 이유
//에러발생!
// let 변수1: string = 이름;
//그러나 any인 경우는 에러가 나지 않음
// let 이름: any;
// 이름 = 123;
// 이름 = {};
// let 변수1: string = 이름;
// let 나이: string | number;
// //나이가 숫자인지 문자인지 모름
// //문자 + 1도 가능 => 문자1
// 나이 + 1;
//에러
// let 나이: unknown = 1;
// //숫자 타입이어야 숫자 연산 가능
// 나이 - 1;
//숙제1
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
//숙제2
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

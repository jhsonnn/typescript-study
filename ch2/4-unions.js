"use strict";
/* 유니언 기초 */
// let userId: string | number;
// userId = 1
// userId = "100"
// //오류
// // userId = true
// // userId = {}
// function printUserId(id: string | number){
//     console.log(id)
// }
// printUserId("1")
// printUserId(1)
// //오류
// // printUserId({})
/* Type narrowing */
// function processValue(value: number | string){
//     //에러발생
//     return value.toUpperCase();
// }
//=> 타입 좁히기
function processValue(value) {
    //타입 checking
    //문자열인 경우
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    //숫자의 경우
    return value.toString().toUpperCase();
}
/* 배열 사용 예시 */
// let mixedValues: (string | number)[];
// mixedValues.push("100")
// mixedValues.push(100)
// //오류
// mixedValues.push([])
/* 리터럴과 유니언 타입 */
//리터럴 ; 타입 자체를 값과 타입으로 동시에 사용
// let id: "1";
// //오류
// // id = "2"
// const toggle = (option: "on" | "off") => {
//     console.log(option);
// }
// toggle("on")
// toggle("off")
// //오류
// // toggle(true)
// // toggle(0)
//타입 alias 만들기
// type Size = "xs" | "s" | "m" | "l" | "xl";
// let tShirtSize: Size;
// tShirtSize = "m"
// //오류
// // tShirtSize = "xxl"
// function setSize(size: Size) {
//     switch(size){
//         case "xs":
//             //xs 처리
//             break;
//         case "s":
//             //s 처리
//             break;
//         //..
//     }
// }
/* type aliases와 유니언 */
//타입 정의
// type SuccessCode = 200 | 201 | 202
// type ErrorCode = 500 | 501 | 503
// let responseCode: SuccessCode | ErrorCode;
// responseCode = 200
// responseCode = 503
// //오류
// responseCode = 403


/* 상수 단언 */
// 확장할 수 없는 리터럴 타입의 변수를 생성
// 애플리케이션 전역에 걸쳐 올바른 값 사용을 보장
// 컴파일러의 정확한 타입 추론을 돕는다

//const someObject = {} as const

/* 객체 */
// //형태 : const objName = {} as const;

// const book = {
//     title: "TypeScript Guide",
//     author: "coding moon"
// } as const;
// //오류 ; reaonly로 바뀌었으므로
// // book.title = "another title"


/* 배열 */
// //형태 : const arrName = [] as const;
// const nums = [1,2,3,4,5] as const;
// //오류
// // nums.push(6)



//실용적인 예
const config = {
    server: "http://api.somedomain.com",
    port: 8080,
    version: 2
}as const;
//오류
// config.server = "https:"



// 주문 시스템의 상태 정보
export const statusCodeMap = {
    101: "ordered",
    102: "pending",
    103: "completed"
} as const;

//statusCodeMap 객체의 키를 유니언으로 추출하여 사용
// 즉 객체의 상태정보 메세지에 접근하기 쉬워진다는 뜻임
export type statusCodeKeys = keyof typeof statusCodeMap;

//상태 처리 함수
function handleStatus(statusCode: statusCodeKeys){
    //message는 statusCodeMap의 상태메세지를 사용가능한 유니언 리터럴 타입
    //이를 바탕으로 함수에 전달되는 statusCode를 바탕으로 로직 처리를 함
    const message = statusCodeMap[statusCode];
    //UI 업데이트 또는 로직처리
}
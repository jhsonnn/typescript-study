"use strict";
/* 비동기 프로그래밍 */
// 비동기 처리 ; 동시에 실행되지 않는 작업들을 좀 더 효율적으로 처리하는 프로그래밍 방식
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//Promise 객체 사용 : 비동기 작업을 위한 JS 객체
//비동기 작업을 한 후에 성공적으로 완료하면 resolve라는 콜백, 실패는 reject 콜백 사용
// const sync = () => {
//     console.log("동기 작업")
// }
// const asyncFn = () => {
//     return new Promise((resolve)=>{
//         resolve("비동기 작업 완료")
//     })
// }
// function main(){
//     //동기 작업 호출
//     sync();
//     //비동기 작업 호출
//     // 비동기 실행 : 특정 코드의 실행이 완료될 때까지 기다리지 않고
//     // 다음 코드를 실행하는 프로그래밍 패턴
//     asyncFn().then((value)=> console.log(value));
//     sync();
//     sync();
// }
// //호출 순서와는 다르게 작업 진행
// /*
// 동기 작업
// 동기 작업
// 동기 작업
// 비동기 작업 완료
// */
// //이유 : async()는 비동기 작업이기 때문
// //JS는 싱글스레드이므로 하나의 콜스택이 존재
// // 콜스택에 sync가 호출 순서대로 쌓임
// // 그러나 비동기 작업을 하는 함수들은
// // event task라는 큐에 들어감
// // async도 여기에 들어감
// //=> 따라서 JS는 callstack에 있는 sync를 먼저 꺼낸 후
// // event loop라는 곳에서 call stack이 비어있을 때,
// // event task라는 큐에 함수가 존재한다면 해당 함수인 async를 꺼냄
// // 따라서 위와 같은 호출 순서가 만들어짐
// interface MyDataType{
//     id: number;
//     name: string;
// }
// main();
// /* 제네릭 프로미스 */
// //; TS에서는 제네릭 프로미스를 사용한다.
// //Promise<T>
// //제네릭 T를 사용해서 비동기 작업의 연산 결과 타입을 T 안에 명시해준다.
// //T는 Promise가 완료되었을 때 반환되는 값의 타입을 나타낸다.
// const fetchData = (): Promise<MyDataType> => {
//     return new Promise((resolve, reject) => {
//         // 로직 수행(비동기)
//         //flag 변수 만들기
//         const success = true;
//         if(success){
//             const data = {
//                 id: 1,
//                 name: "test"
//             }
//             resolve(data);
//         }else{
//             //이 부분 실행되면 catch 블록 실행
//             reject("something went wrong");
//         }
//     });
// };
// fetchData()
//     //resolve 메소드가 성공적으로 호출이 될 때 전달되는 값을
//     //then메소드 콜백을 통해 사용을 하고 data라는 변수를 통해 접근한다
//     //data는 현재 string인데
//     //그 이유는 Promise<string>으로 반환값으로 string을 사용하였기 때문
//     .then((data) => console.log(data))
//     //현재 success가 true이므로 catch 메소드에 들어오지는 않겠지만
//     //비동기 작업을 할 떄는 비동기 처리를 해줘야함
//     .catch((error) => console.error(error));
// /* async와 await */
// //함수 앞에 async가 있으면 이 함수는 비동기적으로 사용이 된다는 것을 표현해주는 것임
// //async는 항상 promise를 반환한다
// //await ; 
// // async function 함수_이름() {
// //     //비동기 로직 추가
// //     const data = await 비동기함수(); 
// // }
// async function doFetch(){
//     //비동기 로직
//     //fetchData라는 비동기 함수에서 데이터를 전달받을 때까지 기다리고
//     //data를 받으면 콘솔에 출력하는 다음 작업을 수행한다
//     const data = await fetchData();
//     console.log(data);
// }
// doFetch();
// /*
// 동기 작업
// 동기 작업
// 동기 작업
// 비동기 작업 완료
// data fetch complete
// data fetch complete
// */
// //data fetch complete가 두번 수행된 이유
// //fetchData()에서 promise 체이닝을 통해 1번,
// //async await을 통해 1번 호출하여 총 2번
// //promise 체이닝과 async awiat의 차이점
// // 가독성
// //동작 방식은 비슷
// // async & await은 비동기 코드인데 이걸 동기적 코드로 작성할 수 있게 도와줌
// //반면에 promise 체인은 중첩이 되면 복잡성 증가, 가독성 문제가 생기며 중첩이되면 복잡성이 증가하여 유지보수 측면에서 비효율적
const sync = () => {
    console.log("동기 작업");
};
const asyncFn = () => {
    return new Promise((resolve) => {
        resolve("비동기 작업 완료");
    });
};
function main() {
    //동기 작업 호출
    sync();
    //비동기 작업 호출
    // 비동기 실행 : 특정 코드의 실행이 완료될 때까지 기다리지 않고
    // 다음 코드를 실행하는 프로그래밍 패턴
    asyncFn().then((value) => console.log(value));
    sync();
    sync();
}
function loadConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("/api/config");
        const configData = yield response.json();
        return configData;
    });
}
function fetchData2(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const data = yield response.json();
        return data;
    });
}
main();
/* 제네릭 프로미스 */
//; TS에서는 제네릭 프로미스를 사용한다.
//Promise<T>
//제네릭 T를 사용해서 비동기 작업의 연산 결과 타입을 T 안에 명시해준다.
//T는 Promise가 완료되었을 때 반환되는 값의 타입을 나타낸다.
const fetchData = () => {
    return new Promise((resolve, reject) => {
        // 로직 수행(비동기)
        //flag 변수 만들기
        const success = true;
        if (success) {
            const data = {
                id: 1,
                name: "test"
            };
            resolve(data);
        }
        else {
            //이 부분 실행되면 catch 블록 실행
            reject("something went wrong");
        }
    });
};
fetchData()
    //resolve 메소드가 성공적으로 호출이 될 때 전달되는 값을
    //then메소드 콜백을 통해 사용을 하고 data라는 변수를 통해 접근한다
    //data는 현재 string인데
    //그 이유는 Promise<string>으로 반환값으로 string을 사용하였기 때문
    .then((data) => console.log(data))
    //현재 success가 true이므로 catch 메소드에 들어오지는 않겠지만
    //비동기 작업을 할 떄는 비동기 처리를 해줘야함
    .catch((error) => console.error(error));
/* async와 await */
//함수 앞에 async가 있으면 이 함수는 비동기적으로 사용이 된다는 것을 표현해주는 것임
//async는 항상 promise를 반환한다
//await ; 
// async function 함수_이름() {
//     //비동기 로직 추가
//     const data = await 비동기함수(); 
// }
function doFetch() {
    return __awaiter(this, void 0, void 0, function* () {
        //비동기 로직
        //fetchData라는 비동기 함수에서 데이터를 전달받을 때까지 기다리고
        //data를 받으면 콘솔에 출력하는 다음 작업을 수행한다
        const data = yield fetchData();
        console.log(data);
    });
}
doFetch();

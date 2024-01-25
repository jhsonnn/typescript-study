"use strict";
/*
dom을 다룰 때는
tsconfig.json 파일 내
"strictNullChecks": true
로 설정해야함
*/
//JS에서 제공되는 모든 DOM API를 그대로 사용
//타입 정의 파일 제공 'lib.dom.d.ts'
//타입스크립트에서 HTML요소를 다룰 때는 HTMLElement 를 기반으로 함
//HTMLElement div, a, p, head,
//<a id="myLink" href="https://google.com">google</a>
// const link1 = document.getElementById("myLink")
// const link2 = document.querySelector("#myLink")
// //오류
//Property href does not exist on type 'HTMLElement'
// if(link1){
//     link1.href=""
// }
// if(link2){
//     link2.href=""
// }
/* 타입 단언으로 문제 해결 */
//타입 단언을 하면
const link1 = document.getElementById("myLink");
const link2 = document.querySelector("#myLink");
//조건절 안의 내용이 없어도 무방함
// if(link1 instanceof HTMLAnchorElement){
//     link1.href="http://google.ca"
// }
link1.href = "http://google.ca";
link2.href = "";
/* 그렇다면 요소를 다룰 때마다 타입단언을 사용해야 하나? */
//DOM element에도 제네릭 타입의 메소드가 있음!
//createElement의 경우 태그와 일치하는 요소를 찾고 변수에 해당 요소의 타입 할당
const img = document.createElement('img');
//따라서 .src메소드에 문제없이 접근 가능
img.src = "";
const anchor = document.createElement("a");
anchor.href = "";
const div = document.querySelector("div");
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.click();
    ß;
});
/* 이벤트 핸들링 */
//<div id="myDiv"></div>
const myDiv = document.getElementById("myDiv");
myDiv === null || myDiv === void 0 ? void 0 : myDiv.addEventListener("click", (e) => {
    //e : 자동으로 마우스 이벤트 타입이 지정된다.
    //e는 기본적으로 마우스 이벤트 타입이지만 키보드 이벤트 타입을 지정하고 싶을 때
    //직접적으로 타입을 지정해주면 된다.
    //myDiv?.addEventListener("click", (e: Event)=>{
    //광범위하게 일반화된 Event객체를 사용해도 됨
    //마우스 이벤트의 경우
    if (e instanceof MouseEvent) {
        //로직 구현
        const x = e.clientX;
        const y = e.clientY;
    }
    //키보드 이벤트의 경우
    if (e instanceof KeyboardEvent) {
        console.log(e.code);
    }
});

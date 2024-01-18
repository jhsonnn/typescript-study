/* 타입 단언(assertion) */


/* 기본 구조 */
//표현식 as 지정할 타입


const someValue: unknown = "Hey there";

//에러
//someValue는 문자열이 아니라 unknown 타입이므로 length 사용 불가
// const len = someValue.length; // ?

//타입단언 사용
const len = (someValue as string).length


//html 내부 요소에 접근을 하고 그 html 내부 속성을 사용할 때 타입 단언이 사용됨

// disabled ; 버튼 element에 실제로 존재하는 속성
//이 속성을 JS를 통해 바꿔주고 싶을 때
//disabled라는 속성은 HTMLElement에 존재하지 않는다고 뜸
//실제 HTMLElement에 존재하지 않는 것이 아니라
//타입시스템에서 기본적으로 제공하는 HTMLElement의 타입에 존재하지 않는다는 뜻임
// const button = document.getElementById("button");
// button.disabled = true;

//이러한 상황일 때 사용하는 것이 타입 변환
const button = document.getElementById("button") as HTMLButtonElement;

//방법1
if(button instanceof HTMLButtonElement){
    button.disabled = false;
}
//방법2
if(button){
    button.disabled = true;
}
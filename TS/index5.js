// function 함수(x: number): number {
//   return x * 2;
// }
// let result = 함수(30);
// void 타입
// return 하고 싶은 값이 없을 경우
// function 함수(x: number): void {
//   1 + 1;
// }
// function 함수(x: number): void {
//   1 + 1;
// }
// //number 타입의 파라미터가 반드시 있어야 함
// 함수(2);
//함수 파라미터 선택 사항으로 만들기
//파라미터는 옵션, 있어도 되고 없어도 됨
// function 함수(x?: number): void {
// }
// 함수();
//? 의 원리
// undefined가 포함된 union 타입을 만드는 것과 동일함
//즉 아래의 표현과 같음
function 함수(x) { }
//숙제1
function funTest(x) {
    if (x) {
        console.log("안녕하세요" + x);
    }
    else {
        console.log("이름이 없습니다.");
    }
}
funTest("홍길동");

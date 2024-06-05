//타입 narrowing

// function myFunc(x: number | string) {
//   if (typeof x === "string") {
//     return x + "1";
//   } else {
//     return x + 1;
//   }
// }

// myFunc(123);

//2. type narrowing

// function myFunc(x: number | string) {
//   let arr: number[] = [];

//   //type narrowing
//   if (typeof x === "number") {
//     arr[0] = x;
//   }
// }

// myFunc(123);

//3. type assertion(타입 덮어쓰기)
function myFunc(x: number | string) {
  let arr: number[] = [];

  //as 문법의 용도
  //1. union 타입을 하나의 타입으로 확정하고 싶을 때 사용
  // 타입을 변경할 때 사용하는 용도가 아님
  //2. 내가 어떤 타입이 들어올 지 확실히 알고 있을 때 사용

  arr[0] = x as number;
}

myFunc(123);

//숙제1
function hw1(arr) {
  let resultArr: number[] = [];

  arr.forEach((element) => {
    if (typeof element === "string") {
      resultArr.push(Number(element));
    } else {
      resultArr.push(element);
    }
  });

  return resultArr;
}
console.log(hw1(["1", 2, "3"]));

//숙제2

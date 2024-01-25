"use strict";
//배열 타입 방법 1 : type[]
let nums = [1, 2, 3, 4, 5]; //숫자만 허용
let strs = ["a", "b", "c"]; //문자열만 허용
let bools = [false, false, true]; //boolean 만 허용
for (const str of strs) {
    let length = str.length;
    console.log(length);
}
nums.push(6);
nums.push(7);
//에러
//nums.push("8")
//nums[0] = "1"
//bools.push(1)
//배열 타입 방법 2 : Array<type>
// let nums2: Array<number> = [1,2,3,4,5] //숫자만 허용
// let strs2: Array<string> = ["a", "b", "c"] //문자열만 허용
// nums.push(6)
// nums.push(7)
// //에러
// //nums.push("8")
// //nums[0] = "1"

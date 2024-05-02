//TS ch.3
// let 이름 = "kim";

//array의 타입
// let 회원들: string[] = ["kim", "park"];

//object 타입 제한
// let 회원들: { member1: string; member2: string } = {
//   member1: "kim",
//   member2: "park",
// };

//Q1
let me: { name: string; age: number; birthPlace: string } = {
  name: "jhsonnn",
  age: 35,
  birthPlace: "secret",
};

//Q2
let singer: { song: string; singer: string } = {
  song: "favorite song",
  singer: "singer",
};

//Q3
let project: {
  member: string[];
  days: number;
  started: boolean;
} = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

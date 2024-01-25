"use strict";
// import add from './utils.js' // 또는 "./utils"
Object.defineProperty(exports, "__esModule", { value: true });
// import { log, appName, User } from './utils';
// console.log(appName);
// const user = new User("John");
// log(user.getName());
/* 모듈 불러올 때 이름 변경하는 문법 */
//불러온 모듈 이름 as 변경할 이름
const utils_1 = require("./utils");
console.log(utils_1.appName);
const user = new utils_1.User("John");
(0, utils_1.log)(user.getName());
const student = {
    id: 123,
    name: "Jess",
    age: 18,
};
//student
function createStudentProfile(profile) {
    console.log(`${profile.studentId}, ${profile.photoUrl}`);
}
createStudentProfile({
    studentId: student.id,
    photoUrl: "https://somephotourl.png",
});

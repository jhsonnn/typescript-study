"use strict";
//export default
// ; 무조건 메인 모듈이 됨
// export default function add(x: number, y: number){
//     return x+y;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.appName = exports.log = void 0;
//다수의 내보내기
function log(message) {
    console.log(message);
}
exports.log = log;
//변수 내보내기
exports.appName = "demo";
class User {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
exports.User = User;

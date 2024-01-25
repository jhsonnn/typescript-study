"use strict";
/* 타입 선언/ 정의 파일 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log("hello typescript")
// console.print("hello")
//.ts => 구현코드
//.d.ts => 타입 정보 제공하고 이를 통해 타입 검사,
//JS와의 호환성 제공
/* lodash */
//import _ from "lodash";
const _ = __importStar(require("lodash"));
let max = _.max([3, 5, 7, 1, 2, 6, 2]);
console.log(max);
let shuffledArray = _.shuffle([12, 3, 5, 1, 6]);
console.log(shuffledArray);

/* 타입 선언/ 정의 파일 */

// console.log("hello typescript")

// console.print("hello")

//.ts => 구현코드
//.d.ts => 타입 정보 제공하고 이를 통해 타입 검사,
        //JS와의 호환성 제공




/* lodash */
//import _ from "lodash";
import * as _ from "lodash";

let max = _.max([3,5,7,1,2,6,2]);
console.log(max)

let shuffledArray = _.shuffle([12,3,5,1,6])
console.log(shuffledArray);
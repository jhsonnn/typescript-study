
/* 기본 문법 */
// 각 요소의 타입과 순서 제한
let myTuple: [string, number, boolean]
// myTuple = ["Hello", 15, false]; // OK
// //에러
// // myTuple = ["Hello", true, 1];
// // myTuple = ["Hello", 15];


/* 사용 예시 1 */
function getUserInfo(): [number, string]{
    return [1, "Sam"]
}
//JS의 구조분해 할당
//getUserInfo()의 반환값을 각각 userid와 username에 저장함
const [userid, username] = getUserInfo()


/* 사용 예시 2 */
//type alias 사용
type Flavor = string;
type Price = number;

type IceCream = [Flavor, Price]

const vanila: IceCream = ["Vanila", 500]
//값이 일정한 위치에 일정한 타입으로 저장됨
vanila[0] //string
vanila[1] //number


/* 사용 예시 3 */
type lat = number;
type lng = number;

type coord = [lat, lng];

let coords: coord[] = [];
coords.push([36, -95])
coords.push([38, -76])
//오류
// coords.push([false, "1"])


//튜플타입 내부에 있는 요소들을 사용할 때 타입 안정성을 보장
for(const [lat, lng] of coords){
    console.log(lat, lng);
}
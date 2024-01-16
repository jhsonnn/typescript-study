//문자열(string)

const a: string = '';
const b: string = "";
const c: string = ''; //템플릿 리터럴


let myName: string = "Steve";
let message: string = `Hello, ${myName}`;

myName.toLocaleUpperCase()

// 불가 message = 123;


//숫자 타입(number)

let n: number =100;
// 불가 숫자 타입에 문자열 공백 넣음
//n = "";
// 불가 number 타입 변수에 문자열 타입의 메소드 적용함
//n.toUpperCase();


let count: number = 10;
let price: number = 9.99;
let temperature: number = -15;
let distance: number = 3.4e-5;

let total: number = count * price;
let average: number = total / 2;

//특수한 타입
let infinity = Infinity;
let infinity2: number = Infinity;
let minusInfinity: number = -Infinity;
let iAmNotANumber: number = NaN;

// 불리언(boolean)
let isOpen:boolean = true;
let isCompleted:boolean = false;

if(isOpen){
    console.log("hello we ar open!")
}
if(!isCompleted){
    console.log("job not complete")
    console.log(!isCompleted);
}

// && || !
let isAvailable: boolean = isOpen && !isCompleted;

//null 널 타입
let user: string | null = null;

function login(userName: string){
    user = userName;
}

function logout(){
    user = null;
}

login("Joey")
logout()

//any 타입
//타입정보 부족할 때만 사용하지만 되도록 사용하지 x
let someValue: any;

someValue.toString();
someValue = false;
someValue.toFixed();

//export default
// ; 무조건 메인 모듈이 됨
// export default function add(x: number, y: number){
//     return x+y;
// }

//다수의 내보내기
export function log(message: string){
    console.log(message);
}

//변수 내보내기
export const appName = "demo";

export class User{
    private name: string;
    constructor(name: string){
        this.name = name;
    }

    getName(){
        return this.name;
    }
}
"use strict";
{
    /* typeof 타입 좁히기 */
    // type Id = number | string;
    // let id: Id = 1;
    // if(typeof id === "string"){
    //     //문자열 Id 경우 로직 처리
    // }
    // function getId(id: Id){
    //     if(typeof id === "number"){
    //         return id;
    //     }
    //     return Number(id);
    // }
    // getId(1)
    // getId("1")
    /* 동일성/동등성 좁히기 (equality narrowing) */
    // ; 변수의 타입을 좀 더 구체적으로 좁힘
    // 변수가 특정 값과 동일한지, 일치하는 지 확인해서 그 타입을 좁힘
    // typeof를 이용해서 타입을 확인하는 것이 아니라 값을 있는 그대로 확인
    // type Option = "on" | "off";
    // function power(option: Option){
    //     if(option === "off"){
    //         console.log("power off")
    //     }else{
    //         console.log("power on")
    //     }
    // }
    // power("on")
    // power("off")
    /* in 키워드 사용 */
    // type iOS = { iMessage: ()=>void; }
    // type android = { message: ()=>void; }
    // function sendMessage(os: iOS | android){
    //     if("iMessage" in os){
    //         os.iMessage(); // iOS로 좁혀진다.
    //     }else{
    //         os.message(); // android 케이스
    //     }
    // }
    // sendMessage({ iMessage: ()=> { console.log("sending iMessage")}}) // iOS 타입
    // sendMessage({ message: ()=>{ console.log("sending message")}}) // android 타입
    /* instanceof narrowing 패턴 */
    // let myObject = new MyObject();
    // if(myObject instanceof MyObject){
    //     //myObject가 MyObject 클래스의 인스턴스라면
    //     //~~~ 기능 구현
    // }
    // api의 응답 처리 함수를 다루는 케이스
    // class ApiResponse {
    //     data: any;
    // }
    // class ErrorResponse {
    //     message: string;
    // }
    // async function handleApiResponse(response: any){
    //     //type narrowing
    //     if(response instanceof ApiResponse){
    //         //데이터 처리
    //     }else if(response instanceof ErrorResponse){
    //         //에러 처리
    //     }
    // }
    // const apiResponse = new ApiResponse();
    // const errorResponse = new ErrorResponse();
    // handleApiResponse(apiResponse);
    // handleApiResponse(errorResponse);
    /* 타입 가드 (type predicates) */
    // ; 타입스크립트에서 사용자 정의타입 가드를 만들 때 사용하는 특별한 형태의 함수선언
    // function 이름: something is SomeType{
    // }
    function isErrorResponse(response) {
        return response.message !== undefined;
    }
    const response = { message: "error.." };
    if (isErrorResponse(response)) {
        //에러 케이스
        console.log(response.message);
    }
    function handleResponse(response) {
        if (response.type === "success") {
            console.log("data:", response.data);
        }
        else {
            console.log(response.message);
        }
    }
}

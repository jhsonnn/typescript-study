/* 기본 문법 */
//첫번째 상수 값을 1로 지정하면 그 다음 상수들은 1씩 증가하는 값으로 자동 생성
// enum 이름 {
//     상수값1 = 1,
//     상수값2,
//     상수값3
// }

import { CursorPos } from "readline";


/* 숫자형 Enum */
enum PlayerState{
    Buffering,
    Playing,
    Paused,
    Seeking,
}

// let currentState: PlayerState;
// //currentState = PlayerState.Buffering;
// currentState = PlayerState.Playing;
// //오류
// // currentState = "Playing"

// const isPlaying = (state: PlayerState) => {
//     return state === PlayerState.Playing;
// }
// //플레이어 재생중?
// isPlaying(currentState); //true



/* 문자형 Enum */
enum Direction {
    Left = "LEFT",
    Right = "RIGHT",
    Up = "UP",
    Down = "DOWN",
}
function move(dir: Direction){
    switch(dir){
        case Direction.Left:
            //왼쪽 로직
            break;
        case Direction.Right:
            //오른쪽 로직
            break;
        //...
    }
}

move(Direction.Left);
move(Direction.Right);



// import add from './utils.js' // 또는 "./utils"

// import { log, appName, User } from './utils';

// console.log(appName);

// const user = new User("John");

// log(user.getName());





/* 모듈 불러올 때 이름 변경하는 문법 */
//불러온 모듈 이름 as 변경할 이름
import { log as Logger, appName, User } from './utils';

//타입 불러오기
import { Student, StudentProfile } from './student';

console.log(appName);

const user = new User("John");

Logger(user.getName());

const student: Student = {
    id: 123,
    name: "Jess",
    age: 18,
}


//student
function createStudentProfile(profile: StudentProfile){
    console.log(`${profile.studentId}, ${profile.photoUrl}`)
}

createStudentProfile({
    studentId: student.id,
    photoUrl: "https://somephotourl.png",
});

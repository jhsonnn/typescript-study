"use strict";
/* 기본 객체 타입 */
// {
//     property_name: property_type
// }
// let monitor: { brand: string; price: number; };
// 방법1
// monitor.brand = "LG";
// monitor.price = 120;
// 방법2
// monitor = {
//     brand: "LG",
//     price: 120
// }
//에러
//displaySize라는 property가 없으므로
// monitor.displaySize = "22inch"
/* 타입 추론*/
let monitor = {
    brand: "LG",
    price: 120
};
const payload = {
    timestamp: 12893718,
    type: 'event',
    user: {
        id: "123",
        isActive: true,
        email: ["test1@email.com", "test2@email.com"]
    }
};

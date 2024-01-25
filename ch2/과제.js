"use strict";
let mixedArray = [1, 'two', 3];
let mixedArray2 = [1, 'two', 3];
const myCar = {
    name: "Benz",
    year: 2024,
    drive: () => { console.log("Drive"); }
};
function removeOdds(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
function formatBook(book) {
    return `Title: ${book.title}, Author: ${book.author}`;
}
function getNumberOfDoors(car) {
    return car.numberOfDoors;
}
function createPerson(name, age) {
    return [name, age];
}
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
})(Day || (Day = {}));
function getActivityForDay(day) {
    switch (day) {
        case Day.Monday:
            return "Study";
        case Day.Tuesday:
            return "Study2";
        case Day.Wednesday:
            return "Study3";
        case Day.Thursday:
            return "Study4";
        case Day.Friday:
            return "Relax";
        default:
            return "Relax";
    }
}

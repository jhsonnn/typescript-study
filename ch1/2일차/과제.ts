let mixedArray: [number, string, number] = [1, 'two', 3];

let mixedArray2: (number | string)[] = [1, 'two', 3];


interface Car {
    name: string;
    year: number;
    drive(): void;
}
const myCar: Car = {
    name: "Benz",
    year: 2024,
    drive: () => { console.log("Drive")}
}

interface Product {
    name: string;
    price?: number;
    productId: number;
}

interface Vehicle{
    readonly serialNumber: number;
    type: string;
}


type StringNumberTuple = [string, number]

function removeOdds(numbers: number[]): number[]{
    return numbers.filter(num => num%2===0)
}

interface Book { title: string; author: string; }
function formatBook(book: Book): string {
  return `Title: ${book.title}, Author: ${book.author}`;
}


interface Vehicle { wheels: number; }
interface Car extends Vehicle { numberOfDoors: number; }
function getNumberOfDoors(car: Car): number {
  return car.numberOfDoors;
}

type NameAge = [string, number ];
function createPerson(name: string, age: number): NameAge {
  return [name, age];
}


enum Day { Monday, Tuesday, Wednesday, Thursday, Friday }
function getActivityForDay(day: Day): string {
    switch(day){
        case Day.Monday:
            return "Study"
        case Day.Tuesday:
            return "Study2"
        case Day.Wednesday:
            return "Study3"
        case Day.Thursday:
            return "Study4"
        case Day.Friday:
            return "Relax"
        default:
            return "Relax"
    }
}
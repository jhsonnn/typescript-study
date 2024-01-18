{
/* 제네릭 클래스 */

class Item<T> {
    #content: T | null;

    constructor(){
        //인스턴스 생성 시 곧바로 null
        this.#content = null;
    }

    setItem(value: T){
        this.#content = value;
    }
    //꺼내오는 것. 매개변수 없고 반환 값 타입 T
    getItem(): T | null{
        return this.#content;
    }
}

const numberItem = new Item<number>();
numberItem.setItem(100);
numberItem.getItem(); // 100반환


const stringItem = new Item<string>();
stringItem.setItem("Hello");
stringItem.getItem(); // Hello 반환



/* 클래스와 인터페이스를 함께 사용하는 패턴 */
// 사용자 데이터 / User 데이터

// interface User{
//     id: number;
//     name: string;
// }

// interface Product{
//     id: number;
//     price: number;
//     name: string;
// }

// interface Store<T>{
//     findById(id: number): T | undefined;
//     save(item: T): void;
// }

// // User 저장소 class
// // 클래스에서 인터페이스를 사용할 때는 implements 를 사용한다.
// class UserRepository implements Store<User>{
//     #users: User[] = [];

//     //Store 이라는 인터페이스를 적용시킬 것이므로 Store 인터페이스 요소 모두 존재해야함
//     findById(id: number): User | undefined{
//         return this.#users.find(user => user.id === id);
//     }
//     save(user: User): void{
//         this.#users.push(user);
//     }
// }

// const userRepo = new UserRepository();
// userRepo.save({
//     id: 1,
//     name: "Josh"
// })
// userRepo.save({
//     id: 2,
//     name: "Amy"
// })

// console.log(userRepo.findById(1)) // Josh


// class ProductRepository implements Store<Product> {
//     #products: Product[] = [];

//     findById(id: number): Product | undefined {
//         return this.#products.find(product => product.id === id);
//     }

//     save(product: Product): void{
//         this.#products.push(product);
//     }
// }

// const productRepo = new ProductRepository();

// productRepo.save({
//     id: 10,
//     price: 100,
//     name: "Keyboard"
// })

// productRepo.save({
//     id: 20,
//     price: 200,
//     name: "Mouse"
// })

// console.log(productRepo.findById(20))



/* 제네릭 제약 추가 */

interface User{
    id: number;
    name: string;
}

interface Product{
    id: number;
    price: number;
    name: string;
}

/*** 제네릭 인터페이스 제약 조건 걸기 ***/
//Store 인터페이스를 WithId 인터페이스로 제약조건 걸기
//id 속성을 무조건 가지고 있도록
interface WithId {
    id: number;
}
interface Store<T extends WithId>{
    findById(id: number): T | undefined;
    save(item: T): void;
}

// User 저장소 class
// 클래스에서 인터페이스를 사용할 때는 implements 를 사용한다.
class UserRepository implements Store<User>{
    #users: User[] = [];

    //Store 이라는 인터페이스를 적용시킬 것이므로 Store 인터페이스 요소 모두 존재해야함
    findById(id: number): User | undefined{
        return this.#users.find(user => user.id === id);
    }
    save(user: User): void{
        this.#users.push(user);
    }
}

const userRepo = new UserRepository();
userRepo.save({
    id: 1,
    name: "Josh"
})
userRepo.save({
    id: 2,
    name: "Amy"
})

console.log(userRepo.findById(1)) // Josh


class ProductRepository implements Store<Product> {
    #products: Product[] = [];

    findById(id: number): Product | undefined {
        return this.#products.find(product => product.id === id);
    }

    save(product: Product): void{
        this.#products.push(product);
    }
}

const productRepo = new ProductRepository();

productRepo.save({
    id: 10,
    price: 100,
    name: "Keyboard"
})

productRepo.save({
    id: 20,
    price: 200,
    name: "Mouse"
})

console.log(productRepo.findById(20))
}
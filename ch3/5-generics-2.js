"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Item_content, _UserRepository_users, _ProductRepository_products;
{
    /* 제네릭 클래스 */
    class Item {
        constructor() {
            _Item_content.set(this, void 0);
            //인스턴스 생성 시 곧바로 null
            __classPrivateFieldSet(this, _Item_content, null, "f");
        }
        setItem(value) {
            __classPrivateFieldSet(this, _Item_content, value, "f");
        }
        //꺼내오는 것. 매개변수 없고 반환 값 타입 T
        getItem() {
            return __classPrivateFieldGet(this, _Item_content, "f");
        }
    }
    _Item_content = new WeakMap();
    const numberItem = new Item();
    numberItem.setItem(100);
    numberItem.getItem(); // 100반환
    const stringItem = new Item();
    stringItem.setItem("Hello");
    stringItem.getItem(); // Hello 반환
    // User 저장소 class
    // 클래스에서 인터페이스를 사용할 때는 implements 를 사용한다.
    class UserRepository {
        constructor() {
            _UserRepository_users.set(this, []);
        }
        //Store 이라는 인터페이스를 적용시킬 것이므로 Store 인터페이스 요소 모두 존재해야함
        findById(id) {
            return __classPrivateFieldGet(this, _UserRepository_users, "f").find(user => user.id === id);
        }
        save(user) {
            __classPrivateFieldGet(this, _UserRepository_users, "f").push(user);
        }
    }
    _UserRepository_users = new WeakMap();
    const userRepo = new UserRepository();
    userRepo.save({
        id: 1,
        name: "Josh"
    });
    userRepo.save({
        id: 2,
        name: "Amy"
    });
    console.log(userRepo.findById(1)); // Josh
    class ProductRepository {
        constructor() {
            _ProductRepository_products.set(this, []);
        }
        findById(id) {
            return __classPrivateFieldGet(this, _ProductRepository_products, "f").find(product => product.id === id);
        }
        save(product) {
            __classPrivateFieldGet(this, _ProductRepository_products, "f").push(product);
        }
    }
    _ProductRepository_products = new WeakMap();
    const productRepo = new ProductRepository();
    productRepo.save({
        id: 10,
        price: 100,
        name: "Keyboard"
    });
    productRepo.save({
        id: 20,
        price: 200,
        name: "Mouse"
    });
    console.log(productRepo.findById(20));
}

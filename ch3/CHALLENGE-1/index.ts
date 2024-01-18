
// 제네릭 클래스 (큐 방식으로 동작하는 클래스)
// 큐 : 선형 자료구조, FIFO(First-In-First-Out)

class GenericQueue<T>{
    //배열을 이용하여 item 저장
    private items: T[] = [];
    
    //enqueue 메소드 (큐를 데이터에 추가)
    enqueue(item: T): void{
        this.items.push(item);
    }
    //dequeue 메소드 (큐의 맨 처음 데이터를 꺼낸다)
    dequeue(): T | undefined{
        return this.items.shift();
    }
    //peak 메소드 (큐의 맨 처음 데이터를 확인)
    peek(): T | undefined{
        return this.items[0];
    }
    //size 메소드 (현재 큐의 사이즈 반환)
    size(): number {
        return this.items.length;
    }

}

const stringQ = new GenericQueue<string>();
stringQ.enqueue("Hello");
console.log(stringQ.peek());
stringQ.dequeue();
stringQ.enqueue("TypeScript");
console.log(stringQ.size());
console.log(stringQ.peek());
 


const numberQ = new GenericQueue<number>();
numberQ.enqueue(10);
numberQ.enqueue(20);
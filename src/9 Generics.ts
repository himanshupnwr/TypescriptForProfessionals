class GenericQueue<T> {
    data: Array<T> = [];
    push(item: T) { this.data.push(item); }
    pop(): T | undefined { return this.data.shift(); }
  }

const genericQueue = new GenericQueue<number>();
genericQueue.push(123);
genericQueue.push(456);

console.log(genericQueue.pop()?.toPrecision(1));
console.log(genericQueue.pop()?.toPrecision(1));
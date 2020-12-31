class Heap {
    // default constructor is min-heap
    constructor(comparator = (a, b) => a - b, input = []) {
        this.arr = input;
        this.comparator = comparator;
        if (this.size() > 1) {
            for (let i = Heap.parent(this.size() - 1); i >= 0; i--) {
                this.heapifyDown(i);
            }
        }
    }

    push(elem) {
        this.arr.push(elem);
        this.heapifyUp(this.size() - 1);
    }

    peek() {
        return this.size() > 0 ? this.arr[0] : null;
    }

    pop() {
        if (this.size() === 0)
            return null;

        const temp = this.arr[0];
        this.arr[0] = this.arr[this.size() - 1];
        this.arr[this.size() - 1] = temp;

        const result = this.arr.pop();
        this.heapifyDown(0);
        return result;
    }

    size() {
        return this.arr.length;
    }

    maxPriorityChild(idx) {
        if (Heap.rightChild(idx) < this.size() && this.comparator(this.arr[Heap.rightChild(idx)], this.arr[Heap.leftChild(idx)]) < 0)
            return Heap.rightChild(idx);
        return Heap.leftChild(idx);
    }

    heapifyUp(idx) {
        if (idx === 0)
            return;
        const parentIdx = Heap.parent(idx);
        if (this.comparator(this.arr[idx], this.arr[parentIdx]) < 0) {
            const temp = this.arr[parentIdx];
            this.arr[parentIdx] = this.arr[idx];
            this.arr[idx] = temp;
            this.heapifyUp(parentIdx);
        }
    }

    heapifyDown(idx) {
        if (Heap.leftChild(idx) >= this.size())
            return;
        const childIdx = this.maxPriorityChild(idx);
        if (this.comparator(this.arr[childIdx], this.arr[idx]) < 0) {
            const temp = this.arr[childIdx];
            this.arr[childIdx] = this.arr[idx];
            this.arr[idx] = temp;
            this.heapifyDown(childIdx);
        }
    }

    static leftChild(idx) { return 2 * idx + 1; }
    static rightChild(idx) { return 2 * idx + 2; };
    static parent(idx) { return Math.floor((idx - 1) / 2); }
}


///////////////////////////////////////

const h = new Heap((a, b) => a - b);
for (let i = 10; i > -10; i--) {
    h.push(i);
}

while (h.size()) {
    console.log(h.pop());
}
class BinaryHeap {
    constructor(fn) {
        this.heap = [];
        this.size = 0;
        this.fn = fn;
    }

    insert(data) {
        this.heap.push(data);
        this.size++;
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            const element = this.heap[index];
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];

            if (this.fn(parent, element)) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }
}

/**
 * 
 */
const maxHeap = new BinaryHeap((parent, child) => {
    return parent >= child;
});

maxHeap.insert(33);
maxHeap.insert(44);
maxHeap.insert(2);
maxHeap.insert(50);
maxHeap.insert(45);
maxHeap.insert(24);
maxHeap.insert(5);

/**
 * 
 */
const minHeap = new BinaryHeap((parent, child) => {
    return parent <= child;
});

minHeap.insert(33);
minHeap.insert(44);
minHeap.insert(2);
minHeap.insert(50);
minHeap.insert(45);
minHeap.insert(24);
minHeap.insert(5);

console.log(minHeap.heap);
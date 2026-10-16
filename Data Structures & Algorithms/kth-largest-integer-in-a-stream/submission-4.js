class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    pop() {
        if (this.size() === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();

        return min;
    }

    bubbleUp() {
        let index = this.size() - 1;

        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);

            if (this.heap[parent] <= this.heap[index]) break;

            [this.heap[parent], this.heap[index]] =
                [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.size();

        while (true) {
            let smallest = index;
            let left = 2 * index + 1;
            let right = 2 * index + 2;

            if (
                left < length &&
                this.heap[left] < this.heap[smallest]
            ) {
                smallest = left;
            }

            if (
                right < length &&
                this.heap[right] < this.heap[smallest]
            ) {
                smallest = right;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] =
                [this.heap[smallest], this.heap[index]];

            index = smallest;
        }
    }
}

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.minHeap = new MinHeap();

        for (const num of nums) {
            this.minHeap.push(num);

            if (this.minHeap.size() > k) {
                this.minHeap.pop();
            }
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.push(val);

        if (this.minHeap.size() > this.k) {
            this.minHeap.pop();
        }

        return this.minHeap.peek();
    }
}

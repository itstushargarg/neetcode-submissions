class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        if(k==1) return nums;
        let heap = new MaxHeap();
        let mapW = new Map();
        let res = new Array();
        let i = 0
        for(; i < k; i++) {
            heap.add(nums[i]);
            if(mapW.has(nums[i])){
                mapW.set(nums[i], mapW.get(nums[i])+1);
            }
            else {
                mapW.set(nums[i], 1);
            }
        }
        // console.log(heap);
        for(; i < nums.length; i++){

            //add max of current heap to res
            let maxVal = heap.peek();
            res.push(maxVal);

            // add new val to map
            if(mapW.has(nums[i])){
                mapW.set(nums[i], mapW.get(nums[i])+1);
            }
            else {
                mapW.set(nums[i], 1);
            }
            // remove old value from map
            console.log(i-k);
            mapW.set(nums[i-k], mapW.get(nums[i-k]) -1);

            // add new val to heap
            heap.add(nums[i]);
            // console.log(res);
            // console.log(mapW);

            maxVal = heap.peek();
            // while maxval not in map, remove
            while(mapW.get(maxVal) == 0){
                // console.log(heap);
                // console.log(maxVal);
                heap.pop();
                maxVal = heap.peek();
            }
            // console.log(heap);
        }
        res.push(heap.peek());
        return res;
    }
}

class MaxHeap {
    // capacity = 10;
    // size = 0;
    items = new Array();

    getLeftChildIndex(i){
        return (2*i)+1;
    }
    getRightChildIndex(i){
        return (2*i)+1;
    }
    getParentIndex(i){
        return Math.floor((i-1)/2);
    }
    hasLeftChild(i){
        let size = this.items.length;
        if(size > this.getLeftChildIndex(i)){
            return true;
        } 
        else {
            false;
        }
    }
    hasRightChild(i){
        let size = this.items.length;
        if(size > this.getRightChildIndex(i)){
            return true;
        } 
        else {
            false;
        }
    }
    hasParent(i){
        if(0 <= this.getParentIndex(i)){
            return true;
        } 
        else {
            false;
        }
    }
    getLeft(i){
        if(this.hasLeftChild(i)){
            return this.items[this.getLeftChildIndex(i)];
        }
    }
    getRight(i){
        if(this.hasRightChild(i)){
            return this.items[this.getRightChildIndex(i)];
        }
    }
    getParent(i){
        if(this.hasParent(i)){
            return this.items[this.getParentIndex(i)];
        }
    }
    swap(i, j){
        let temp = this.items[i];
        this.items[i] = this.items[j];
        this.items[j] = temp;
    }
    peek(){
        if(this.items.length >= 0){
            return this.items[0];
        }
        return undefined;
    }
    heapifyDown(){
        let i = 0;
        while(this.hasLeftChild(i)){
            let largeIndex = this.getLeftChildIndex(i);
            if(this.hasRightChild(i) &&
                this.items[this.getRightChildIndex(i)] > this.items[this.getLeftChildIndex(i)]){
                    largeIndex = this.getRightChildIndex(i);
                }
            if(this.items[largeIndex] > this.items[i]){
                this.swap(i, largeIndex);
                i = largeIndex;
            }
            else {
                return;
            }
        }
    }
    heapifyUp(){
        let i = this.items.length - 1;
        while(this.hasParent(i)){
            if(this.getParent(i) < this.items[i]){
                this.swap(i, this.getParentIndex(i));
                i = this.getParentIndex(i);
            }
            else{
                return;
            }
        }
    }
    pop(){
        if(this.items.length >= 0){
            let val = this.items[0];
            this.items[0] = this.items[this.items.length -1];
            // console.log("Pop");
            // console.log(this.items);
            this.items = this.items.slice(0, this.items.length-1);
            this.heapifyDown();
            return val;
        }
        else {
            return undefined;
        }
    }
    add(val){
        this.items[this.items.length] = val;
        this.heapifyUp();
    }

}
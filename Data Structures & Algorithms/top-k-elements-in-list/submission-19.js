class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = new Map();
        for(let i = 0; i<nums.length; i++){
            freqMap.set(nums[i], (freqMap.get(nums[i]) || 0) + 1);
        }

        let bucket = Array(nums.length + 1).fill().map(() => [])

        for (let [val, freq] of freqMap.entries()){
            bucket[freq].push(val);
        }

        let result = [];
        for (let i = bucket.length -1; i>=0 && result.length < k; i--){
            for(let num of bucket[i]) {
                result.push(num);
                if(result.length == k) break;
            }
        }
        return result;
    }
}

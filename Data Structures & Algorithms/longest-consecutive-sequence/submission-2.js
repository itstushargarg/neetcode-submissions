class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        nums.sort((a,b) => a-b);
        console.log(nums);
        let seqList = new Map();
        for(let i = 0; i < nums.length; i++){
            if(seqList.has(nums[i]-1)){
                seqList.set(nums[i], seqList.get(nums[i]-1) + 1)
            }
            else {
                seqList.set(nums[i], 1)
            }
        }
        let maxCnt = 0;
        for(let [key, val] of seqList){
            if(val > maxCnt){
                maxCnt = val;
            }
        }
        return maxCnt;
    }
}

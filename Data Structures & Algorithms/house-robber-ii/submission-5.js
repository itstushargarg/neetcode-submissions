class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let max1 = [], maxNot1 = [];
        if(nums.length == 1) return nums[0]
        if(nums.length == 2) return Math.max(nums[1],nums[0])
        let i = 0
        for(; i <nums.length-1; i++){
            if(i==0){
                maxNot1[i] = 0;
                max1[i] = nums[i];
            }
            else{
                if(i==1){
                    maxNot1[i] = nums[i];
                    max1[i] = Math.max(nums[i],nums[i-1]);
                }
                else {
                    maxNot1[i] = Math.max(maxNot1[i-1], maxNot1[i-2]+nums[i])
                    max1[i] = Math.max(max1[i-1], max1[i-2]+nums[i])
                }
            }
        }
        // console.log(max1[i-1]);
        let max = Math.max(max1[i-1],maxNot1[i-2]+nums[i])
        return max;
    }
}

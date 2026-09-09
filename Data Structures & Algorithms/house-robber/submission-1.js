class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let max = [];
        let i = 0;
        for(; i < nums.length; i++){
            if(i==0){
                max[i] = nums[i];
            }
            else if(i==1){
                max[i] = Math.max(nums[i], nums[i-1])
            }
            else {
                max[i] = Math.max(max[i-1],nums[i]+max[i-2])
            }
        }
        return max[i-1];
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort();
        if(nums.length <= 1) 
            return false;
        
        for (let i = 1; i < nums.length; i++){
            if(nums[i]==nums[i-1])
            {
                return true;
            }
        }
        return false;
    }
}

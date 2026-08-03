class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hasDuplicate = false;
        nums.sort();
        if(nums.length <= 1) 
            return hasDuplicate;
        
        for (let i = 1; i < nums.length; i++){
            if(nums[i]==nums[i-1])
            {
                hasDuplicate = true;
                break;
            }
        }
        return hasDuplicate;
    }
}

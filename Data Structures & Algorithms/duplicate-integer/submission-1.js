class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hasDuplicate = false;
        let duplicateMap = new Map();
        nums.sort();
        for (let i = 0; i < nums.length; i++){
            if(!duplicateMap.has(nums[i]))
                duplicateMap.set(nums[i], true)
            else
            {
                hasDuplicate = true;
                break;
            }
        }
        return hasDuplicate;
    }
}

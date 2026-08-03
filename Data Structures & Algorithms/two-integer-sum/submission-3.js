class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let partnerMap = new Map();
        for( let i = 0; i<nums.length; i++){
            if(partnerMap.has(nums[i])){
                return [partnerMap.get(nums[i]), i];
            }
            partnerMap.set(target-nums[i], i);
        }
    }
}

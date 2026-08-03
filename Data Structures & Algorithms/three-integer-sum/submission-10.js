class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // first sort the array
        nums.sort((a, b) => a- b)
        // declare the result array
        let result = []

        // loop through the array
        for(let i = 0; i < nums.length;i++){
            if(nums[i] > 0) break;
            if(i > 0 && nums[i] === nums[i - 1]) continue;

            // declare the pointers for each index
            let left = i + 1
            let right = nums.length - 1
            // set the loop condition
            while(left < right){
                // get the sum of the values from the loop and the pointers
                let sum = nums[i] + nums[left] + nums[right]
                // compare the sum with 0
                if(sum > 0){
                    right--
                }else if(sum < 0){
                    left++
                }else{
                    result.push([nums[i], nums[left], nums[right]])
                    left++
                    right--
                    // do another while loop
                    while(left < right && nums[left] === nums[left - 1]){
                        left++
                    }
                }
            }
        }
        return result;
    }
}
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let product = 1;
        let hasZero = false;
        // check if 2 are zeros
        let has2Zero = false;
        for(let val of nums){
            if(val==0){
                if(hasZero){
                    has2Zero = true;
                    break;
                }
                else
                    hasZero = true;
            }
        }

        if(has2Zero){
            let arr = new Array(nums.length).fill(0);
            return arr;
        }

        for(let val of nums){
            if(val != 0)
            product = product*val;
            else
            hasZero = true;
        }
        for(let i = 0; i < nums.length; i++){
            if(hasZero){
                if(nums[i] == 0){
                    nums[i] = product;
                }
                else{
                    nums[i] = 0;
                }
            }
            else{
                nums[i] = product/nums[i];
            }
        }
        return nums;
    }
}

class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for(let i = 0; i < numbers.length; i++){
            let first = numbers[i];
            let second = target - first;
            //binary search second number
            let e = numbers.length - 1;
            let s = i+1;
            while(s<=e){
                let mid = Math.floor((e+s)/2);
                console.log(mid);
                if(numbers[mid]== second){
                    return [i+1,mid+1];
                }
                if(second > numbers[mid]){
                    s = mid+1;
                }
                else{
                    e = mid-1;
                }
            }
        }
    }
}

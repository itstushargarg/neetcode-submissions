class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let cMap = new Map();
        for (let i = 0; i < nums.length; i++){
            if(cMap.has(nums[i])){
                let count = cMap.get(nums[i]);
                cMap.set(nums[i], count+1);
            }
            else {
                cMap.set(nums[i], 1);
            }
        }
        let arr = []
        for(let i = 0; i < k; i++){
            arr[i] = [1]
        }
        let i = 0;
        console.log("size:"+cMap.size);
        cMap.forEach(function(val,key){
            console.log("key:"+key);
            console.log("val:"+val);
            if(i<k){
                arr[i] = [val, key];
                i++
            }
            else {
                let lowestVal = arr[0][0];
                let lVI = 0;
                for(let j = 1; j < k; j++){
                    if(arr[j][0] < lowestVal){
                        lowestVal = arr[j][0];
                        lVI = j;
                    }
                }
                if(lowestVal < val){
                    arr[lVI] = [val, key];
                }
            }
        });
        let arrF = []
        for(let i = 0; i < k; i++){
            console.log(arr[i]);
            arrF[i] = arr[i][1];
        }
        return arrF;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=> a-b);
        let resMap = new Map();
        let res = [];
        for(let i = 0; i < nums.length; i++){
            for(let j = i+1; j<nums.length; j++){
                let n3 = 0-nums[i]-nums[j];
                if(resMap.has(n3)){
                    resMap.get(n3).push(i+","+j);
                }
                else
                    resMap.set(n3, [(i+","+j)]);
            }
        } 
        for(let i = 0; i < nums.length; i++){
            if(resMap.has(nums[i])){
                let vals = resMap.get(nums[i]);
                for(let v of vals){
                    let ind = v.split(",");
                    if(i!=ind[0] && i!=ind[1]){
                        let newVal = [nums[i],nums[ind[0]],nums[ind[1]]].sort((a,b)=>a-b).join(",");
                        if(res.indexOf(newVal)==-1) res.push(newVal);
                    }
                }
            }
        }
        let resArr = [];
        for(let v of res){
            resArr.push(v.split(","));
        }

        return resArr;
    }
}

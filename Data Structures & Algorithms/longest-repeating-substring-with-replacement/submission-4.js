class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        if(s.length <= k) return s.length;
        let fMap = new Map();
        let l = 0, r = 0;
        let res = k+1;
        for(; r < s.length; r++){
            if(fMap.has(s[r])){
                fMap.set(s[r], fMap.get(s[r])+1);
            }
            else {
                fMap.set(s[r], 1);
            }
            while((r-l+1) - Math.max(...fMap.values()) > k){
                fMap.set(s[l], fMap.get(s[l])-1);
                l++;
            }
            // console.log(fMap)
            res = Math.max(res, r-l+1)
        }
        return res;
    }
}

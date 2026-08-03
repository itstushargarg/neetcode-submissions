class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let aMap = new Map();
        let start = null;
        let l = 0;
        let i = 0;
        for(; i < s.length; i++){
            if(start == null){
                start = i;
                aMap.set(s[i], i);
            }
            else {
                if(aMap.has(s[i])){
                    let p = aMap.get(s[i]);
                    l = l > (i - start) ? l : (i - start);
                    for(let j = start; j<p; j++){
                        aMap.delete(s[j]);
                    }
                    start = p+1;
                    aMap.set(s[i], i);
                }
                else {
                    aMap.set(s[i], i);
                }
            }
        }
        l = l > (i - start) ? l : (i - start);
        return l;
    }
}

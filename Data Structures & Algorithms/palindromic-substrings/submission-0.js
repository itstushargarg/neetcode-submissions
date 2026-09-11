class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        if(s.length == 1) return 1;
        if(s.length == 2){
            if(s[0] == s[1]) return 3;
            else return 2;
        } 
        let maxL = 0;
        let p = "";
        let pCount = 0;
        for(let i = 0; i < s.length; i++){
            let l = i, r = i;
            while(l >= 0 && r <= s.length-1){
                if(s[l] == s[r]){
                    pCount++;
                    l--;
                    r++;
                }
                else{
                    break;
                }
            }
            l = i,
            r = i+1;
            while(l >= 0 && r <= s.length-1){
                if(s[l] == s[r]){
                    pCount++;
                    l--;
                    r++;
                }
                else{
                    break;
                }
            }
        }
        return pCount;
    }
}

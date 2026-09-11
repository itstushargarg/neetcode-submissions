class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        if(s.length == 1) return s;
        if(s.length == 2 && s[0] == s[1]) return s;
        let maxL = 0;
        let p = "";
        for(let i = 0; i < s.length-1; i++){
            let l = i, r = i;
            while(l >= 0 && r <= s.length-1){
                if(s[l] == s[r]){
                    l--;
                    r++;
                }
                else{
                    break;
                }
            }
            l++;
            r--;
            if(r-l+1 > maxL){
                maxL = r-l+1;
                p = s.slice(l, l+maxL)
            }
            l = i,
            r = i+1;
            while(l >= 0 && r <= s.length-1){
                if(s[l] == s[r]){
                    l--;
                    r++;
                }
                else{
                    break;
                }
            }
            l++;
            r--;
            if(r-l+1 > maxL){
                maxL = r-l+1;
                p = s.slice(l, l+maxL)
            }
        }
        return p;
    }
}

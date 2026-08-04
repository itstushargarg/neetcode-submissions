class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;
        let found = false;
        s1 = s1.split("").sort().join("");
        let l = 0, r=s1.length;
        for(; r<=s2.length; r++, l++){
            let s = s2.substring(l,r).split("").sort().join("");
            if(s===s1) return true;
        }
        return found;
    }
}

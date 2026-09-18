class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    cntMap = new Map();
    numDecodings(s) {
        // console.log(s)
        // console.log(0+s > 0);
        if(s[0] == '0' || s.length <= 0) return 0;
        let num = 0+s;
        if(num <= 26){
            if(num <= 10){
                return 1;
            }
            else {
                return 2;
            }
        }
        else {
            let f2 = 0+s.slice(0,2);
            let s1 = s.slice(1,s.length);
            let s2 = s.slice(2,s.length);
            
            let c2 = this.cntMap.has(s2) ? this.cntMap.get(s2) : this.numDecodings(s.slice(2,s.length));
            if(!this.cntMap.has(s2)) this.cntMap.set(s2, c2);
            let c1 = this.cntMap.has(s1) ? this.cntMap.get(s1) : this.numDecodings(s.slice(1,s.length));
            if(!this.cntMap.has(s1)) this.cntMap.set(s1, c1);
            c2 = f2 <= 26 && s[0] != '0' ? c2 : 0;
            return c1+c2;
        }
    }
}

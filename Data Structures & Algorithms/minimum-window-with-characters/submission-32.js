class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let res = "";
        if(t.length == 0 || t.length > s.length) return "";
        let st = 0, end = 0;
        let tCount = new Map();
        let wordC = new Map();
        let have = 0, needed = 0;
        for(let i = 0; i < t.length; i++){
            if(tCount.has(t[i])){
                tCount.set(t[i], tCount.get(t[i])+1);
            }
            else{
                tCount.set(t[i], 1);
                needed++;
            }
        }
        for(; end < s.length; end++){
            if(wordC.has(s[end])){
                wordC.set(s[end], wordC.get(s[end])+1);
            }
            else{
                wordC.set(s[end], 1);
            }
            if(tCount.has(s[end]) && tCount.get(s[end]) == wordC.get(s[end])){
                have++;
                // found substring
                while(needed == have){
                    if(res == "" || res.length > (end-st+1)){
                        // console.log(tCount);
                        // console.log(wordC);
                        res = s.substring(st, end+1);
                        // console.log(res);
                    }
                    wordC.set(s[st], wordC.get(s[st]) - 1);
                    // console.log(wordC);
                    if(tCount.has(s[st]) && (tCount.get(s[st]) > wordC.get(s[st]))){
                        have -= 1;
                    }
                    st++;
                }
            }
        }
        return res;
    }
}

class Solution {
    isAlphanumeric(char) {
        const code = char.charCodeAt(0);
        return (
            (code >= 48 && code <= 57) ||  // 0-9
            (code >= 65 && code <= 90) ||  // A-Z
            (code >= 97 && code <= 122)    // a-z
        );
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if(s.length <= 1) return true;
        let i = 0, j = s.length-1;
        while(i<j){
            while(!this.isAlphanumeric(s[i])){
                if(i < j-1){
                    i++;
                }
                else return true
            }
            while(!this.isAlphanumeric(s[j])){
                if(j > i+1){
                    j--;
                }
                else return true
            }
            let a = s[i].toLowerCase();
            let b = s[j].toLowerCase();
            if(a!=b){
                console.log("a"+a);
                console.log("b"+b);
                return false;
            }
            i++;
            j--;
        }
    return true;
    }
}

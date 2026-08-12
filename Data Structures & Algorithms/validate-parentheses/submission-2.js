class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let p = new Array();
        for(let i = 0; i<s.length; i++){
            if(s[i] == '(' || s[i] == '{' || s[i] == '[') p.push(s[i]);
            if(s[i] == ')') {
              if(p[p.length-1] == '(') p = p.slice(0,p.length-1);
              else return false;  
            } 
            if(s[i] == '}'){
                if(p[p.length-1] == '{') p = p.slice(0,p.length-1);
                else return false;
            } 
            if(s[i] == ']') {
                if(p[p.length-1] == '[') p = p.slice(0,p.length-1);
                else return false;
            } 
        }
        return p.length == 0;
    }
}

class Solution {
    
    getAnagramSignature(str){
        return str.split("").sort().join("");
    }

    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let anagramGroups = new Map();
        for(let str of strs){
            let aSig = this.getAnagramSignature(str);
            if(anagramGroups.has(aSig)){
                anagramGroups.get(aSig).push(str);
            }
            else {
                anagramGroups.set(aSig, [str]);
            }
        }

        let aGList = [];
        anagramGroups.forEach(function(value,key) {
            aGList.push(value);
        });
        return aGList;
    }

}

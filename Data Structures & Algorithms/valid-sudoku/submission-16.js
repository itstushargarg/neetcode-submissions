class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rowSet = new Array(9).fill(0).map(()=>new Set());
        let colSet = new Array(9).fill(0).map(()=>new Set());
        let boxSet = new Map();

        for(let i = 0; i<9; i++){
            for(let j = 0; j<9; j++){
                let val = board[i][j];
                let boxKey = Math.floor(i/3) + "," + Math.floor(j/3);

                // console.log(boxKey);
                // console.log(boxSet.has(boxKey));
                if(val === ".") continue;
                if(!boxSet.has(boxKey)){
                    boxSet.set(boxKey, new Set());
                }
                if(rowSet[i].has(val) ||
                colSet[j].has(val) ||
                boxSet.get(boxKey).has(val)){
                    return false;
                }
                rowSet[i].add(val);
                colSet[j].add(val);
                boxSet.get(boxKey).add(val);
                // console.log(boxSet.has(boxKey));
            }
        }
        return true;
    }
}

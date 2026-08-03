class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        if(board.length != 9 && board[0].length != 9){
            return false;
        }
        let subBoxes = [
            [
                "00","01","02",
                "10","11","12",
                "20","21","22"
            ],
            [
                "03","04","05",
                "13","14","15",
                "23","24","25"
            ],
            [
                "06","07","08",
                "16","17","18",
                "26","27","28"
            ],
            [
                "30","31","32",
                "40","41","42",
                "50","51","52"
            ],
            [
                "33","34","35",
                "43","44","45",
                "53","54","55"
            ],
            [
                "36","37","38",
                "46","47","48",
                "56","57","58"
            ],
            [
                "60","61","62",
                "70","71","72",
                "80","81","82"
            ],
            [
                "63","64","65",
                "73","74","75",
                "83","84","85"
            ],
            [
                "66","67","68",
                "76","77","78",
                "86","87","88"
            ],
        ]

        for(let i = 0; i<board.length; i++){
            let refArrR = new Array(9).fill(1);
            let refArrC = new Array(9).fill(1);
            for(let j = 0; j<board[0].length; j++){
                // compute for each row
                // console.log(refArrR[parseInt(board[i][j])]);
                if(refArrR[parseInt(board[i][j])] == 0){
                    return false;
                }
                else {
                    refArrR[parseInt(board[i][j])] -= 1;
                }

                // compute for each column
                // console.log(refArrR[parseInt(board[j][i])]);
                if(refArrC[parseInt(board[j][i])] == 0){
                    return false;
                }
                else {
                    refArrC[parseInt(board[j][i])] -= 1;
                }
            }
        }

        for(let i = 0; i < subBoxes.length; i++){
            let refArr = new Array(9).fill(1);
            for(let j = 0; j < subBoxes[i].length; j++){
                // console.log(subBoxes[i][j]);
                // console.log(subBoxes[i][j][0]);
                let iSB = parseInt(subBoxes[i][j][0])
                let jSB = parseInt(subBoxes[i][j][1])

                let index = parseInt(board[iSB][jSB]) || 0
                // console.log(index);
                if(index==0) continue;
                if(refArr[index-1] == 0){
                    // console.log("False");
                    // console.log(board[iSB][jSB]);
                    // console.log(iSB);
                    // console.log(jSB);
                    return false;
                }
                else {
                    refArr[index-1] -= 1;
                }
            }
        }
        return true;
    }
}

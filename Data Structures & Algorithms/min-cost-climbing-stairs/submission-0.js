class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let minCost = [];
        let i = 0;
        for(; i <= cost.length; i++){
            if(i == 0 || i ==1){
                minCost[i] = 0;
            }
            else {
                let costA = cost[i-1] + minCost[i-1];
                let costB = cost[i-2] + minCost[i-2];
                // console.log(costA)
                // console.log(costB)
                minCost[i] = costA > costB ? costB : costA; 
            }
        }
        // console.log(i);
        return minCost[i-1];
    }
}

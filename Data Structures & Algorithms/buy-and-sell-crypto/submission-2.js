class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minVal = prices[0];
        let maxProfit = 0;
        for(let i = 1; i<prices.length; i++){
            let val = prices[i];
            if(val < minVal){
                minVal = val;
            }
            let p = val - minVal;
            if(p > maxProfit){
                maxProfit = p;
            }
        }
        return maxProfit;
    }
}

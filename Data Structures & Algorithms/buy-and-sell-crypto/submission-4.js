class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minVal = prices[0];
        let maxProfit = 0;
        for(let i = 1; i<prices.length; i++){
            if(prices[i] < minVal){
                minVal = prices[i];
            }
            let p = prices[i] - minVal;
            if(p > maxProfit){
                maxProfit = p;
            }
        }
        return maxProfit;
    }
}

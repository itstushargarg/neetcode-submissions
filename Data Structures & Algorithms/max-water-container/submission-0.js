class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let cLength = heights.lenth;
        let maxWater = 0;
        let s=0, e=heights.length -1;
        while(s<e){
            let ht = heights[s] > heights[e] ? heights[e] : heights[s];
            let cap = (e-s)*ht;
            if(cap>maxWater){
                maxWater = cap;
            }
            if(heights[s] > heights[e]){
                e--;
            }
            else {
                s++
            }
        }
        return maxWater;
    }
}

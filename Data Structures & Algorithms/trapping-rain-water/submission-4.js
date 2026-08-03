class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxL = new Array(height.length).fill(0);
        let maxR = new Array(height.length).fill(0);
        let l = 1, r = height.length -2;
        let maxCap = 0;
        while(r>=0){
                maxL[l] = height[l-1] > maxL[l-1] ? height[l-1] : maxL[l-1];
                maxR[r] = height[r+1] > maxR[r+1] ? height[r+1] : maxR[r+1];
            l++;
            r--;
        }
        for(let i = 0; i <height.length-1; i++){
            let maxICap = maxL[i] > maxR[i] ? maxR[i] : maxL[i];
            let capAtI = maxICap-height[i];
            if(capAtI > 0){
                maxCap += capAtI;
            } 
        }
        return maxCap;
    }
}

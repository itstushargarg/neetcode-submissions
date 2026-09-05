class Solution {
    /**
     * @param {number} n
     * @return {number}
     */

    sMap = [];
    climbStairs(n) {
        if(n<= 1) return 1;
        if(this.sMap[n]) return this.sMap[n];

        this.sMap[n] = this.climbStairs(n-1) + this.climbStairs(n-2);
        return this.sMap[n];
    }
}

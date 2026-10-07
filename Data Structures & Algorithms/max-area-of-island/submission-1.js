class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let lengthI = grid.length;
        let lengthJ = grid[0].length;
        let maxCount = 0;
        for(let i = 0; i < lengthI; i++){
            for(let j = 0; j < lengthJ; j++){
                if(grid[i][j] == 1){
                    let count = 0;
                    // console.log(i,j);
                    count = this.markIsland(i,j,grid,count)
                    if(maxCount < count){
                        maxCount = count;
                    }
                }
            }
        }
        return maxCount;
    }

    markIsland(i,j,grid,count){
        count++;
        grid[i][j] = -1;
        if(i-1 >= 0 && grid[i-1][j]==1){
            count = this.markIsland(i-1, j, grid, count);
        }
        if(j-1 >= 0 && grid[i][j-1]==1){
            count = this.markIsland(i, j-1, grid, count);
        }
        if(i+1 < grid.length && grid[i+1][j]==1){
            count = this.markIsland(i+1, j, grid, count);
        }
        if(j+1 < grid[0].length && grid[i][j+1]==1){
            count = this.markIsland(i, j+1, grid, count);
        }
        return count;
    }
}

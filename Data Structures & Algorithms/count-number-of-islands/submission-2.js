class Solution {

    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let islandCount = 0;
        let iLength = grid.length;
        let jLength = grid[0].length;
        for(let i = 0; i < iLength; i++){
            for(let j = 0; j < jLength; j++){
                if(grid[i][j] == "1"){
                    islandCount++;
                    this.markIsland(i,j,grid);
                }
            }
        }
        return islandCount;
    }

    markIsland(i, j, grid) {
        grid[i][j] = "-1";
        if(i-1 >= 0 && grid[i-1][j] == "1"){
            this.markIsland(i-1, j, grid)
        }
        if(j-1 >= 0 && grid[i][j-1] == "1"){
            this.markIsland(i, j-1, grid)
        }
        if(i+1 < grid.length && grid[i+1][j] == "1"){
            this.markIsland(i+1, j, grid)
        }
        if(j+1 < grid[0].length && grid[i][j+1] == "1"){
            this.markIsland(i, j+1, grid)
        }
    }
}

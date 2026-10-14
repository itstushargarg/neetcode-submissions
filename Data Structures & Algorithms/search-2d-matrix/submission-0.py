class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        l = 0
        r = (len(matrix)-1)*len(matrix[0]) + len(matrix[0]) - 1
        while(l<=r):
            # print(il, ir, jl, jr)
            mid = (l+r)//2
            mid_i = (mid)//len(matrix[0])
            mid_j = mid%len(matrix[0])
            print(f'Mid: {mid_i}, {mid_j}')
            if matrix[mid_i][mid_j] == target:
                return True
            elif matrix[mid_i][mid_j] > target:
                r = mid-1
            else:
                l = mid+1
        return False;

class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        min_k = 1
        max_k = -1
        for i in range(len(piles)):
            if piles[i] > max_k:
                max_k = piles[i]
        biggest_pile = max_k
        minn_k = max_k
        print('Max K: ', max_k)
        while(min_k <= max_k):
            mid_k = (min_k+max_k)//2
            mid_speed = 0
            for i in range(len(piles)):
                mid_speed_i = piles[i]//mid_k
                if (piles[i]%mid_k) > 0:
                    mid_speed_i += 1
                mid_speed += mid_speed_i
            # print(mid_k, minn_k, mid_speed, h)
            if mid_speed <= h:
                if mid_k < minn_k:
                    minn_k = mid_k
                max_k = mid_k-1
            else:
                min_k = mid_k+1
        return minn_k
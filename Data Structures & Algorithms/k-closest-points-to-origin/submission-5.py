import heapq
from typing import List

class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        heap = []

        for x, y in points:
            dist = x * x + y * y
            heapq.heappush(heap, (dist, [x, y]))

        result = []

        for i in range(k):
            x, point = heapq.heappop(heap)
            result.append(point)

        return result
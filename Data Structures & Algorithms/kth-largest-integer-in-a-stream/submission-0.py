import heapq

class KthLargest:
    # num_list
    
    def __init__(self, k: int, nums: List[int]):
        self.k = k
        self.heap = nums
        heapq.heapify(self.heap)
        # print(self.heap)
        while(len(self.heap) > k):
            heapq.heappop(self.heap)        

    def add(self, val: int) -> int:
        heapq.heappush(self.heap, val)
        while(len(self.heap) > self.k):
            heapq.heappop(self.heap)
        return(self.heap[0])

        

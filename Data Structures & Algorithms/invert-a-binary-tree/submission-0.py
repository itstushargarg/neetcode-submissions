# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if root == None:
            return root
        node = root.left
        root.left = root.right
        root.right = node
        if root.left != None:
            Solution.invertTree(self, root.left)
        if root.right != None:
            Solution.invertTree(self, root.right)
        return root        
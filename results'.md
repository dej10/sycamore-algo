### Explanation:

**Recursive Function (`dfs`):**  
- The function takes three inputs: the current node, the direction of the previous edge (`isLeft`), and the current zigzag length.  
- It updates the maximum zigzag length (`maxZigzag`) if the current path is longer than the previous maximum.  
- Then it explores the left and right children of the current node. When moving to the next node, it either continues the zigzag by switching directions or resets the zigzag length if the direction is not switched.

**Base Case:**  
- The recursion stops when the current node is `null`, as there is no further path to explore.

**Initialization:**  
- The zigzag can start by going either left or right from the root. Therefore, we initiate the recursion for both cases.

**Complexity:**  
- **Time Complexity:** \(O(N)\), since every node in the tree is visited exactly once.  
- **Space Complexity:** \(O(H)\), where \(H\) is the height of the tree, because the recursive calls are stored in the stack.  

This approach ensures efficient traversal while keeping the logic straightforward.
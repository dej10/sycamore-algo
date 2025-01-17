class Tree {
  x: number;
  l: Tree | null;
  r: Tree | null;

  constructor(x: number = 0, l: Tree | null = null, r: Tree | null = null) {
    this.x = x;
    this.l = l;
    this.r = r;
  }
}

function solution(T: Tree): number {
  let maxZigzag = 0;

  const dfs = (node: Tree | null, isLeft: boolean, length: number): void => {
    if (!node) return;

    maxZigzag = Math.max(maxZigzag, length);

    if (isLeft) {
      dfs(node.l, false, length + 1); 
      dfs(node.r, true, 1); 
    } else {
      dfs(node.r, true, length + 1);
      dfs(node.l, false, 1); 
    }
  };

  if (T.l) dfs(T.l, false, 1); 
  if (T.r) dfs(T.r, true, 1);

  return maxZigzag;
}



const tree = new Tree(
  5,
  new Tree(3, new Tree(20, new Tree(6), null), null),
  new Tree(
    10,
    new Tree(1),
    new Tree(15, new Tree(30, null, new Tree(9)), new Tree(8))
  )
);

console.log(solution(tree)); // Output: 2

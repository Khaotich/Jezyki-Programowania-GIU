function BST(key, left, right)
{
    this.key = key;
    this.left = left;
    this.right = right;
}

BST.prototype[Symbol.iterator] = function*()
{
    if(this.left) 
    {
        yield* this.left;
    }

    yield this.key;
    
    if(this.right)
    {
        yield* this.right;
    }

}

let tree = new BST(8, new BST(3, new BST(1, null, null), new BST(6, new BST(4, null, null), new BST(7, null, null))), new BST(10, null, new BST(12, null, null)));
for(let x of tree) console.log(x)
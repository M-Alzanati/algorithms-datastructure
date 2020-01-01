class Node {
    constructor(date, left, right) {
        this.date = date;
        this.left = left;
        this.right = right;
    }
}

/**
 * hight of BST
 * @param {*} root 
 */
function height(root) {
    if (root == null) {
        return -1;
    }

    let rDepth = height(root.right);
    let lDepth = height(root.left);

    if (rDepth > lDepth)
        return rDepth + 1;
    else
        return lDepth + 1;
}

/**
 * traverse in order
 * @param {*} root 
 */
function levelOrder(root) {
    const arr = [root];

    while (arr.length > 0) {
        const node = arr.shift(0);

        console.log(node.data + " ");

        if (node.left != null) arr.push(node.left);
        if (node.right != null) arr.push(node.right);
    }
}
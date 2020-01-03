class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.hight = 0;
    }
}

class BalancedTree {
    constructor(data) {
        this.root = new Node(data);
    }

    insert(data, node = this.root) {
        if (data > node.data) {
            if (!node.right) {
                node.right = new Node(data);
                node.right.hight = node.hight + 1;
            } else {
                this.insert(data, node.right);
            }
        } else {
            if (!node.left) {
                node.left = new Node(data);
                node.left.hight = node.hight + 1;
            } else {
                this.insert(data, node.left);
            }
        }
    }

    find(data, node = this.root) {
        if (node === null) return null;

        if (data > node.data) {
            return this.find(data, node.right);
        } else if (data < node.data) {
            return this.find(data, node.left)
        } else {
            return node;
        }
    }
}


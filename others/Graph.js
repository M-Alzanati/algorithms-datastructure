class Node {
    constructor(data) {
        this.data = data;
        this.childern = [];
    }
}

class Tree {
    constructor(data) {
        this.root = new Node(data);
    }

    traverseBFS(fn) {
        const arr = [this.root];
        
        while(arr.length) {
            const node = arr.shift();

            for(let child of node.childern) {
                arr.push(child);
            }

            fn(node);
        } 
    }

    traverseDFS(fn) {
        const arr = [this.root];
        
        while(arr.length) {
            const node = arr.shift();

            for(let i = node.childern.length - 1; i > 0; i++) {
                arr.unshift(node.childern[i]);
            }

            fn(node);
        }
    }
}

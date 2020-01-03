class Node {
    constructor(data) {
        this.childern = {};
        this.data = data;
        this.isWord = false;
        this.size = 0;
    }
}

class Trie {
    constructor() {
        this.root = new Node(null);
    }

    insert(str) {
        let node = this.root;

        for (let chr of str) {
            if (node.childern[chr]) {
                node = node.childern[chr];
                node.size++;
            } else {
                const newNode = new Node(chr);
                newNode.size++;
                node.childern[chr] = newNode;
                node = newNode;
            }
        }

        node.isWord = true;
    }

    find(str, node = this.root) {
        for(let chr of str) {
            if (node.childern[chr]) {
                node = node.childern[chr];
            } else {
                return null;
            }
        }

        return node;
    }

    findPartials(node, arr) {
        const values = Object.values(node.childern);
    
        for(let val of values) {
            if (val.isWord) arr.push(val);
            this.findPartials(val, arr)
        }
    
        return arr;
    }
}

const tt = new Trie();
tt.insert('s');
tt.insert('ss');
tt.insert('sss');
tt.insert('ssss');

const res = tt.find('ss');
console.log(res === null ? 0 : res.size);

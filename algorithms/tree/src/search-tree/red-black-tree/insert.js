const Node = require('./Node');
const {RED, BLACK} = Node;

function insert(root, value) {
    const node = recursiveInsert(root, value);
    if(!root) {
        node.color = BLACK;
        return node;
    }
    return adjust(node);
}

function recursiveInsert(root, value) {
    if(!root) {
        return new Node(value);
    }

    const key = value > root.value ? 'right' : 'left';
    if(root[key]) {
        return recursiveInsert(root[key], value);
    } else {
        root[key] = new Node(value, root);
        return root[key];
    } 
}

function adjust(node) {
    if(!node?.parent) {
        console.log(666, node.value)
        node.color = BLACK;
        // root 节点
        return node;
    }
    if(node.parent.color === RED) {
        const parent = node.parent;
        const grand = parent.parent;
        const [parentKey, uncleKey] = parent.left === parent ? ['left', 'right'] : ['right', 'left'];
        const uncle = parent[uncleKey];
        if(uncle?.color == BLACK || !uncle) {
            parent.color = BLACK;
            grand.color = RED;
            if(grand.parent) {
                const grandKey = grand.parent.left === grand ? 'left' : 'right';
                grand.parent[grandKey] = parent;
            } else {
                // root 节点
                return parent;
            }
            grand[parentKey] = parent[uncleKey];
            parent[uncleKey] = grand;       
        } else if(uncle?.color == RED){
            parent.color = BLACK;
            uncle.color = BLACK;
            grand.color = RED;
            adjust(grand)
        }
    }
}

module.exports = insert;
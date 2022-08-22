const Node = require('../Node')

function recursiveInsert(root, value) {
    if(!root) {
        return new Node(value);
    }

    const key = value > root.value ? 'right' : 'left';
    
    if(root[key]) {
        return recursiveInsert(root[key], value);
    } else {
        root[key] = new Node(value);
        return root[key];
    } 
}

module.exports = recursiveInsert;
function recursiveFind(root, value) {
    if(!root) {
        return false;
    } else if (root.value == value) {
        return root;
    } else {
        return recursiveFind(root[value > root.value ? 'right' : 'left'], value);
    }
}

module.exports = recursiveFind;
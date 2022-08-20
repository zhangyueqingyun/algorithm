function inOrderTraverse(root) {
    const list = [];

    function traverse(node) {
        list.push(node.data);
        node.left && traverse(node.left);
        node.right && traverse(node.right);
    }
    traverse(root, list);
    
    return list;
}

module.exports = inOrderTraverse;
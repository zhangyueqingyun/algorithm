function preOrderTraverse(root) {
    const list = [];

    function traverse(node) {
        node.left && traverse(node.left);
        list.push(node.data);
        node.right && traverse(node.right);
    }
    traverse(root, list);
    
    return list;
}

module.exports = preOrderTraverse;
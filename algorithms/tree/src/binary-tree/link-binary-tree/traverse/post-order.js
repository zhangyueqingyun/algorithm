function postOrderTraverse(root) {
    const list = [];

    function traverse(node) {
        node.left && traverse(node.left);
        node.right && traverse(node.right);
        list.push(node.data);
    }
    traverse(root, list);
    
    return list;
}

module.exports = postOrderTraverse;
function preOrderTraverse(values) {
    let list = [];
    function traverse(i) {
        const leftIndex = i * 2 + 1;
        const rightIndex = i * 2 + 2;
        (leftIndex < values.length) && traverse(leftIndex);
        list.push(values[i]);
        (rightIndex < values.length) && traverse(rightIndex);
    }
    traverse(0);
    return list;
}

module.exports = preOrderTraverse;
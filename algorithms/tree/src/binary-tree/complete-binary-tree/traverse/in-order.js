function inOrderTraverse(values) {
    let list = [];
    function traverse(i) {
        const leftIndex = i * 2 + 1;
        const rightIndex = i * 2 + 2;
        
        list.push(values[i]);
        (leftIndex < values.length) && traverse(leftIndex);
        (rightIndex < values.length) && traverse(rightIndex);
    }
    traverse(0);
    return list;
}

module.exports = inOrderTraverse;
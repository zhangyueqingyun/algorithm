function postOrderTraverse(values) {
    let list = [];
    function traverse(i) {
        const leftIndex = i * 2 + 1;
        const rightIndex = i * 2 + 2;
        (leftIndex < values.length) && traverse(leftIndex);
        (rightIndex < values.length) && traverse(rightIndex);
        list.push(values[i]);
    }
    traverse(0);
    return list;
}

module.exports = postOrderTraverse;
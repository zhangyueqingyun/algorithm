function recursiveDelete(root, value, parent, key) {
    if(!root) {
        return { success: false };
    } else if (root.value == value) {
        const node = mergeTree(root.left, root.right);
        parent && (parent[key] = node);
        return {
            success: true,
            root: !parent && node
        };
    } else {
        return recursiveDelete(
            root[value > root.value ? 'right' : 'left'], 
            value, 
            root, 
            key
        );
    }
}

function mergeTree(rootA, rootB) {
    if(!rootA || !rootB) {
        return rootA || rootB;
    } 
    
    const [minRoot, maxRoot] = rootA.value > rootB.value ? [rootB, rootA] : [rootA, rootB];
    let next = minRoot; 
    while(next) {
        const attr = maxRoot.value > next.value ? 'right' : 'left';
        if(!next[attr]) {
            next[attr] = maxRoot;
            next = null;
        } else {
            next = next[attr];
        } 
    }
    return minRoot;
}

module.exports = recursiveDelete;
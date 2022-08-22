function loopDelete(root, value) {
    if(root.value === value) {
        return {success: true, root: mergeTree(root.left, root.right)};
    } 
    let parent = root; 
    while(parent) {
        let key = parent.value > value ? 'left' : 'right',
            node = parent[key];
        if(node.value === value) {
            parent[key] = mergeTree(node.left, node.right);
            return {success: true, root};
        } else {
            parent = parent[key];
        }
    }
    return {success: false, root};
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

module.exports = loopDelete;
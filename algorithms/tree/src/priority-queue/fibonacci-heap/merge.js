function merge(node) {
    if(!node) return;

    const hash = {};

    let cur = node;
    do {
        setHash(hash, cur);
        cur = cur.right;
    } while (cur !== node)

    let duplicateSubHeaps;
    while(duplicateSubHeaps =  checkDuplicate(hash)) {
        duplicateSubHeaps.reduce(function(prevRoot, curRoot) {
            if(prevRoot.degree == curRoot.degree) {
                const {degree} = prevRoot;
                clearHash(hash, degree, prevRoot, curRoot);

                const [minRoot, maxRoot] = compareRoot(prevRoot, curRoot);
                if(degree == 0) {
                    minRoot.firstChild = maxRoot;
                    maxRoot.left = maxRoot;
                    maxRoot.right = maxRoot;
                } else {
                    const {firstChild} = minRoot;
                    maxRoot.right = firstChild;
                    maxRoot.left = firstChild.left;
                    firstChild.left.right = maxRoot;
                    firstChild.left = maxRoot;
                }

                minRoot.degree += 1;
                setHash(hash, minRoot);

                return minRoot;
            }
            return curRoot;
        })
    }

    return getHeapFromHash(hash);
}

function getHeapFromHash(hash) {
    let minNode;
    Object.values(hash).map(item=> {
        const node = item[0];
        minNode ??= node;
        minNode = (minNode.value > node.value) ? node : minNode;
        node.left = node;
        node.right = node;
        return node;
    }).reduce((prev, cur) => {
        if(prev) {
            prev.left = cur.left;
            cur.left.right = prev;
            prev.right = cur;
            cur.left = prev;
        }
        return cur;
    });
    return minNode;
}

function clearHash(hash, degree, rootA, rootB) {
    hash[degree] = hash[degree].filter(root => (root !== rootA && root !== rootB));
    (!hash[degree].length) && (delete hash[degree]);
}

function setHash(hash, root) {
    hash[root.degree] ??=[];
    hash[root.degree].push(root);
}

function checkDuplicate(hash) {
    for(let degree in hash) {
        if(hash[degree]?.length > 1) {
            return hash[degree];
        }
    }
}

function compareRoot(rootA, rootB) {
    return (rootA.value < rootB.value) ? [rootA, rootB] : [rootB, rootA];
}

module.exports = merge;

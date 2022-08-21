const SubMinHeap = require('./SubMinHeap');
const Node = require('./Node')

class BinomialHeap {
    constructor(values)  {
        for(let value of values) {
            this.enqueue(value);
        }
    }

    enqueue(value) {
        let heap = new SubMinHeap(new Node(value), 0, this.list);
        heap.next = this.heap;
        
        const hash = {};
        while(heap) {
            setHash(hash, heap);
            heap = heap.next;
        }

        let duplicateSubHeaps;
        while(duplicateSubHeaps =  checkDuplicate(hash)) {
            duplicateSubHeaps.reduce(function(prevSubTree, curSubTree) {
                if(prevSubTree.degree == curSubTree.degree) {
                    const {root: prevRoot, degree} = prevSubTree;
                    const {root: curRoot} = curSubTree;

                    clearHash(hash, degree, prevSubTree, curSubTree);

                    const {maxRoot, minRoot} = compareRoot(prevRoot, curRoot);
                    maxRoot.sibling = minRoot.firstChild;
                    minRoot.firstChild = maxRoot;

                    const newDegree = degree + 1;
                    const newSubHeap = new SubMinHeap(minRoot, newDegree);
                    
                    setHash(hash, newSubHeap);

                    return newSubHeap;
                }
                return curSubTree;
            })
        }

        const values = Object.values(hash).map(item=>item[0]);
        values.reduce((prev, cur) => {
            prev && (prev.next = cur);
            return cur;
        })

        this.heap = getHeapFromHash(hash);
    }
}

function getHeapFromHash(hash) {
    const subHeaps = Object.values(hash).map(item=>item[0]);
    subHeaps.reduce((prev, cur) => {
        prev && (prev.next = cur);
        return cur;
    })
    return subHeaps[0]; 
}

function clearHash(hash, degree, subTreeA, subTreeB) {
    hash[degree] = hash[degree].filter(tree => (tree !== subTreeA && tree !== subTreeB));
    (!hash[degree].length) && (delete hash[degree]);
}

function setHash(hash, heap) {
    hash[heap.degree] ??=[];
    hash[heap.degree].push(heap);
}

function checkDuplicate(hash) {
    for(let degree in hash) {
        if(hash[degree]?.length > 1) {
            return hash[degree];
        }
    }
}

function compareRoot(rootA, rootB) {
    if(rootA.value < rootB.value) {
        return {
            minRoot: rootA,
            maxRoot: rootB 
        }
    }
    return {
        minRoot: rootB,
        maxRoot: rootA 
    }
}

module.exports = BinomialHeap;
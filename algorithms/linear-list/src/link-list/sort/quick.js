function quickSort(list) {
    const {head} = list;
    list.head =  quickSortImpl(head);
    return list;
}

function quickSortImpl(head) {
    if(!head?.next) return head;
    let larger, equal, smaller;
    const value = head.value;
    let node = head;
    while(node) {
        const next = node.next;
        if(node.value > value) {
            node.next = larger;
            larger = node;
        } else if (node.value === value) {
            node.next = equal;
            equal = node;
        } else {
            node.next = smaller;
            smaller = node;
        }
        node = next;
    }
    larger = quickSortImpl(larger);
    smaller = quickSortImpl(smaller);
    let result = smaller || equal || larger;
    [smaller, equal, larger].reduce(function(last, current) {
        if(last) {
            while (last?.next) {
                last = last.next;
            }
            last.next = current;        
        }
        return current;
    })
    return result;
}

const {performance} = require('@z-algorithm/core');
module.exports = performance("quick-sort", quickSort);
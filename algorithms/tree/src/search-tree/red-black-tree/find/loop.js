function loopFind(root, value) {
    let next = root; 
    while(next) {
        if(next.value === value) {
            return next;
        } else {
            next = next[value > next.value ? 'right' : 'left'];
        }
    }
    return false;
}

module.exports = loopFind;
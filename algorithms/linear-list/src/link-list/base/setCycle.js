function setCycle(list, index) {
    if(index === -1) return list;
    let current = list.head, i = 0;
    while(current && index !== i) {
        current = current.next;
        i++;
    }
    let target = current;
    while(current.next){
        current = current.next;
        i++;
    }
    current.next = target;
    list.hasCycle = true;
    list.cyclePrintLength = (i + 1) * 2;
    return list;
}

module.exports = setCycle;

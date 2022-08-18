function countSort (list) {
    const {head} = list,
        sortedArr = [];
        
    let current = head,
        currentInd = 0;

    while(current) {
        let cursor = head,
            num = 0, 
            cursorInd = 0;
        while(cursor) {
            if(cursor.value < current.value || cursor.value === current.value && cursorInd < currentInd) {
                num++;
            }
            cursorInd++;
            cursor = cursor.next;
        }
        sortedArr[num] = current;
        current = current.next;
        currentInd++;
    }

    sortedArr.reduce(function (last, current) {
        last.next = current;
        return current;
    })
    
    list.head = sortedArr[0];
    sortedArr[sortedArr.length-1].next = null;
    
    return list;
}

const {performance} = require('@z-algorithm/core');
module.exports = performance("count-sort", countSort);
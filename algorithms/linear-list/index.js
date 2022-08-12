const SequenceList = require('./src/SequenceList')

class LinkList {
    constructor(values = [], type = 'sequnce-list'){
        switch(type){
            case 'sequence-list':
            default:
            {
                this.list = new SequenceList(values)
            }
        }
    }

    insert(){
        this.list?.insert?.(...arguments)
    }
}

const sequenceList = new LinkList([1, 3, 5, 7])
sequenceList.insert(2, 1)
const AlgorithmPerformance = require('@z-algorithm/performance');

class SequenceList {
    constructor(values = []){
        this.originValues = values;
        this.perf = new AlgorithmPerformance('sequence-list');
    }
    
    get values() {
        return [...this.originValues];
    }

    set values(values) {
        this.originValues = values;
    }
    /**
     * 插入
     * @param {val: number} 待插入的值
     * @param {ind: number} 插入的下标
     */
    insert(val, ind) {
        const values = this.values;

        this.perf.start('insert', values);
        
        for(let i = values.length; i > ind; i--){
            values[i] = values[i - 1];
        }
        values[ind] = val;
        
        this.perf.end('insert', values);
        this.perf.print('insert');
        
        return values;
    }

    /**
     * 删除
     * @param {ind: number} 待删除的下标
     */
    delete(ind) {
        const values = this.values
        
        for(let i = ind; i < values.length; i++){
            values[i] = values[i + 1];
        }
        
        return values;
    }

    /**
     * 更新
     * @param {val: number} 带更新的值
     * @param {ind: number} 待更新的下标
     * @return {number} 旧值
     */
    update(val, ind) {
        const values = this.values;

        const oldVal = values[ind];
        values[ind] = val;

        return values;
    }


    /**
     * 排序
     * @param {type: string} 排序算法的类型
     */
    sort(type) {
        const values = this.values;

        const insertionSort = require('./sort/insertion');
        return insertionSort(this.perf, values);
    }

    /**
     * 查找
     * @param {val: number} 查找的目标值
     * @param {type: string} 查找算法的类型
     * @return {number} 旧的下标，未找到返回 -1
     */
    find(val, type) {}
}

module.exports = SequenceList;
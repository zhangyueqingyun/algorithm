class SequenceList {
    constructor(values = []){
        this.values = values;
    }
    
    /**
     * 插入
     * @param {val: number} 待插入的值
     * @param {ind: number} 插入的下标
     */
    insert(val, ind) {
        for(let i = this.values.length; i > ind; i--){
            this.values[i] = this.values[i - 1];
        }
        this.values[i] = val;
    }

    /**
     * 删除
     * @param {ind: number} 待删除的下标
     */
    delete(ind) {
        for(let i = ind; i < this.values.length; i++){
            this.values[i] = this.values[i + 1];
        }
    }

    /**
     * 更新
     * @param {val: number} 带更新的值
     * @param {ind: number} 待更新的下标
     * @return {number} 旧值
     */
    update(val, ind) {
        const oldVal = this.values[ind];
        this.values[ind] = val;
        return oldVal;
    }


    /**
     * 排序
     * @param {type: string} 排序算法的类型
     */
     sort() {}

    /**
     * 查找
     * @param {val: number} 查找的目标值
     * @param {type: string} 查找算法的类型
     * @return {number} 旧的下标，未找到返回 -1
     */
    find(val, type) {}
}
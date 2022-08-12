class SequenceList {
    constructor(values){
        this.values = values;
    }
    
    /**
     * 插入
     * @param {val: number} 待插入的值
     * @param {ind: number} 插入的下标
     */
    insert(val, ind) {}

    /**
     * 删除
     * @param {ind: number} 待删除的下标
     */
    delete() {}

    /**
     * 更新
     * @param {val: number} 带更新的值
     * @param {ind: number} 待更新的下标
     * @return {number} 旧值
     */
    update() {}

    /**
     * 查找
     * @param {val: number}
     * @return {number} 旧的下标，未找到返回 -1
     */
    find() {}

    /**
     * 排序
     */
    sort() {}
}
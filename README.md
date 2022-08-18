# z-algorithm
### 更新提示 
由于新增 @z-algorithm/core、 @z-algorithm/utils、uuidjs 包，更新后为避免报错请重新安装依赖。

## 概览
一个 javascript 的算法运行和性能测试框架。

写给前端小伙伴们学习、测试算法。
## 已有算法
- 序列：冒泡排序、桶排序、计数排序、插入排序、归并排序、快速排序、基数排序、选择排序、队列、栈。
- 链表：插入（单指针、双指针）；删除（单指针、双指针）、判断有环（穷举法、快慢指针法、哈希法）、交换（双指针），判断相交、冒泡排序、桶排序、计数排序、插入排序、归并排序、快速排序、队列、栈。

## 启动项目
~~~shell
# 全局安装 pnpm
npm install pnpm -g

# 在项目根目录执行以下命令安装依赖
pnpm i -r

# 启动项目
# 若无缓存，会自动读取 algorithms 下的算法提供选择
# 若有缓存，自动执行缓存中的算法，避免重复输入
pnpm start
~~~

## 清除缓存
清除缓存后，重新执行 pnpm start 会提示选择算法
~~~shell
pnpm clear
~~~
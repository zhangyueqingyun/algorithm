# z-algorithm
一个 javascript 的算法运行和性能测试框架。

写给前端小伙伴们学习、测试算法。
## 进度
目前只写了对序列插入的操作，持续更新。

## 启动项目
~~~shell
# 全局安装 pnpm
npm install pnpm -g

# 在项目根目录执行以下命令安装依赖
pnpm i -r

# 启动项目
# 若无缓存，该命令会自动读取 algorithms 下的算法提供选择
# 若有缓存，自动执行缓存中的算法，避免重复输入
pnpm start

# 启动 linear-list 算法
# linear-list 必须为 algorithms 下的算法项目
pnpm start linear-list 
~~~

## 清除缓存
清除缓存后，重新执行 pnpm start 会提示选择算法
~~~shell
pnpm clear
~~~
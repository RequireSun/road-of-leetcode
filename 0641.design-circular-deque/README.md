# 0641. 设计循环双端队列

这题只要是个正常人就能写出来吧, 不知道这题为什么是 medium.

## 解法 1 ([normal.js](./normal.js))

就是把 length 和 limit 都缓存了, 加速读写.

然后存一个 head 一个 tail, 快速取双端的值.

![成绩](assets/normal.png)

# 0622. 设计循环队列

## 解法 1 ([normal.js](./normal.js))

非常基本的解法, 记录总长度、当前长度、头、尾, 并新建 Uint16 数组存储数据 (Uint8 只到 256, 满足不了需求).

![成绩](./assets/normal.png)
# 0350. 两个数组的交集 2

## 解法 1 ([mark.js](./mark.js))

先确定下哪个更短, 然后在长的里面不断搜索短的的每个元素, 能搜到就标记为 -1, 并将数值加到结果中.

我曾经试过用 map 保存, 或者是先排序后查找, 但效率都不如直接搜索高.

![成绩](assets/mark.png)

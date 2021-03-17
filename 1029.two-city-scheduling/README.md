# 1029. 两地调度

## 解法 1 ([greedy.js](./greedy.js))

计算所有人去两地之间花费的差值, 排列后直接从中间分开, 各去自己更值得去的城市.

![成绩](assets/greedy.png)

## 解法 2 ([dynamic-programming.js](./dynamic-programming.js))

根据题意, 可总结倒推规律:

```
最终结果 = min(
    最后一个人去 A 的花费 + minCost(count(B) - count(A) === 1), 
    最后一个人去 B 的花费 + minCost(count(A) - count(B) === 1)
)
```

如果不追求效率, 实际上可以用上面的方法直接递归计算了.

为了方便书写, 我们将两地命名为甲、乙, 总共有 10 个人, 分别命名为 A B C D E F G H I J.

倒推可得如下表结构 (左下代表去 甲, 右上代表去 乙):

|  /|  0|  1|  2|   3|    4|    5|     6|      7|       8|        9|        10|
|---|---|---|---|----|-----|-----|------|-------|--------|---------|----------|
|  0|  /|  /|  /|   /|    /|    /|     /|      /|       /|        /|         /|
|  1|  /|  /|  /|   /|    /|    /|     /|      /|       /|        /|         A|
|  2|  /|  /|  /|   /|    /|    /|     /|      /|       /|        A|        AB|
|  3|  /|  /|  /|   /|    /|    /|     /|      /|       A|       AB|       ABC|
|  4|  /|  /|  /|   /|    /|    /|     /|      A|      AB|      ABC|      ABCD|
|  5|  /|  /|  /|   /|    /|    /|     A|     AB|     ABC|     ABCD|     ABCDE|
|  6|  /|  /|  /|   /|    /|    A|    AB|    ABC|    ABCD|    ABCDE|    ABCDEF|
|  7|  /|  /|  /|   /|    A|   AB|   ABC|   ABCD|   ABCDE|   ABCDEF|   ABCDEFG|
|  8|  /|  /|  /|   A|   AB|  ABC|  ABCD|  ABCDE|  ABCEDF|  ABCDEFG|  ABCDEFGH|
|  9|  /|  /|  A|  AB|  ABC| ABCD| ABCDE| ABCDEF| ABCDEFG| ABCDEFGH| ABCDEFGHI|
| 10|  /|  A| AB| ABC| ABCD|ABCDE|ABCEDF|ABCDEFG|ABCDEFGH|ABCDEFGHI|ABCDEFGHIJ|

以相邻的四个单元格为例:

|两次之前的结果|上个人去了乙|
|---|---|
|上个人去了甲|当前结果|

裁剪掉部分无意义区域 case: 0~4 单元格部分, 横纵区域下该部分的内容均为 A~D 四人全都去

|/|    0|     1|      2|       3|        4|         5|
|---|---|------|-------|--------|---------|----------|
|0|    /|     A|     AB|     ABC|     ABCD|     ABCDE|
|1|    A|    AB|    ABC|    ABCD|    ABCDE|    ABCDEF|
|2|   AB|   ABC|   ABCD|   ABCDE|   ABCDEF|   ABCDEFG|
|3|  ABC|  ABCD|  ABCDE|  ABCEDF|  ABCDEFG|  ABCDEFGH|
|4| ABCD| ABCDE| ABCDEF| ABCDEFG| ABCDEFGH| ABCDEFGHI|
|5|ABCDE|ABCEDF|ABCDEFG|ABCDEFGH|ABCDEFGHI|ABCDEFGHIJ|

则我们可以通过逆向法从左上角开始生成表结构, 即:

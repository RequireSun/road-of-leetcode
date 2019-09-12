# 0412. Fizz Buzz

## 解法 1 ([normal.js](./normal.js))

这题主要拼的就是复杂度优化, 唯一的优化点就是取余操作.
 
这个操作非常耗时, 我参考的这种方法是把取余换成两个标志位, 每次加到 3 / 5 就替换字符并重置.

此外我自己还做了个优化, 将最常用 (也比较好写) 的 === 3 放在前面, 并在其内部判断 === 15, 以此减少达成次数较少的 === 15 的运行次数.

### 思路来源

[https://leetcode.com/problems/fizz-buzz/discuss/89931/Java-4ms-solution-Not-using-%22%22-operation](https://leetcode.com/problems/fizz-buzz/discuss/89931/Java-4ms-solution-Not-using-%22%22-operation)

![成绩](./assets/normal.png)

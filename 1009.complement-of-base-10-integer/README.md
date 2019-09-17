# 1009. 十进制整数的反码

## 解法 1 ([string.js](./string.js))

非常简单, 直接转二进制, 然后逐位拼字符串, 最后转回数字.

![成绩](./assets/string.png)

## 解法 2 ([minus.js](./minus.js))

二进制的反码, 就相当于一个大于当前数字的二进制位全都是 1 的数字 (n 为 5 时这个数字就是 7 (111), n 为 10 时这个数字就是 15 (1111)) 与当前数字的差.

所以我这里直接求出来这个二进制全是 1 的数字, 然后求差, 就是最终结果了.

### 思路来源

[https://leetcode.com/problems/complement-of-base-10-integer/discuss/256740/JavaC%2B%2BPython-Find-111.....1111-greater-N](https://leetcode.com/problems/complement-of-base-10-integer/discuss/256740/JavaC%2B%2BPython-Find-111.....1111-greater-N)

![成绩](./assets/minus.png)

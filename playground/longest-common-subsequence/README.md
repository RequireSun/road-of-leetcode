最长公共子序列
===

常见面试题, 在 leetcode 中编号 No.1143.

[1143.longest-common-subsequence](../../1143.longest-common-subsequence)

动态规划经典题目, 动态规划思路:

1. 理清 `res[cur] = ? res[cur - n] ?` (本题为二维, 自增子串那个题是一维)
1. 列出表达式
1. 转成代码

比如本题的表达式就为:

```javascript
if (i === -1 || j === -1) {
    // 计算辅助值, 含义为任何一串长度为 0 时
    // 两串的最长公共子序列长度均为 0
    res[i][j] = 0;
} else if (arr1[i] === arr2[j]) {
    // 当前位相同, 即可将上一位的最大子串长度 +1
    res[i][j] = res[i - 1][j - 1];
} else {
    // 当前位不同, 判断:
    // arr1[0 ~ i] & arr2[0 ~ j-1]
    // arr1[0 ~ i-1] & arr2[0 ~ j]
    // 这两个 case 谁的公共子串更长一点, 并使用该值 
    res[i][j] = max(res[i][j - 1], res[i - 1][j]);
}
```

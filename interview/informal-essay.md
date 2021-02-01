## JavaScript 原理 - 引用

fill 函数只执行一次, 将同一个数组在另一个数组里重写 10 次.

```
var matrix = Array(10).fill(Array(10).fill(0));
for (let i = 0; i < matrix.length; ++i) {
  for (let j = 0; j < matrix[i].length; ++j) {
     matrix[i][j] += 1;
  }
}
matrix.reduce(
  (sum, row) => sum + row.reduce(
    (_sum, cell) => _sum + cell, 0), 
  0
);
```

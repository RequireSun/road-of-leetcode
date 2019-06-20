解题中发现的小技巧
===

基本都来自其他人的答案, 不是独立自主发现的.

## binary &= -binary

可以取到数字二进制格式下最右侧的那个 1, 例:

```
let binary = 5;

binary &= -binary;

assert(1 === binary);
```

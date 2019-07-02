# 编译原理

钻研了一会之后感觉太难了, 并且根本不适用于 leet 这种偏效率类的场景.

放弃了, 直接用遍历法求解了.

## 消除左递归

参考: [https://www.jianshu.com/p/7cd310e6c74e](https://www.jianshu.com/p/7cd310e6c74e)

### 基础

对于 `P -> Pa | b`, 可以知道该式在最终展开后最左侧一定会存在一个 `b`, 比如: `baaaaaa` (因为算式总归是需要结束的嘛, 左侧是无限左递归的, 根本不可能结束).

所以可以把递归的部分提取出来, 改写成右侧进行递归的格式:

```
P -> bP'
P' -> aP' | ε
```

### 间接左递归

存在如下文法 G，消除左递归:

```
S -> Qc | c
Q -> Rb | b
R -> Sa | a
```

1. 把文法 G 的所有非终结符随意排列, 并编号:

    R、Q、S

1. 按上面的排列顺序，对这些非终结符进行遍历

1. 将当前处理的非终结符中的__序号小于等于__它的非终结符进行替换处理, 大于的不管

    1. R:
        
        R 的右部中的非终结符有 S;
        
        S 的下标大于 R, 可以暂时不处理;
        
        所以此时R改写为: `R -> Sa | a`

    1. Q:
    
        Q 的右部中的非终结符有 R;
        
        R 的下标小于 Q, 将 R 的右部替换进来;

        所以此时 Q 改写为: `Q -> Sab | ab | b`;
        
        S 的下标大于 Q, 可以暂时不处理;
        
        所以此时 Q 改写为: `Q -> Sab | ab | b`;

    1. S:
        S 的右部中的非终结符有 Q;
        
        Q 的下标小于 S，将 Q 的右部替换进来;
        
        所以此时 S 改写为: `S -> Sabc |abc | bc | c`;
        
        S 的下标等于 S, 可以暂时不处理;
        
        所以此时 S 改写为: `S -> Sabc |abc | bc | c`;

1. 消除 i 序号的非终结符的直接左递归 (如果存在的话)
    
    ```
    S -> Sabc |abc | bc | c
    ∴ 设 X = abc，Y = abc | bc | c
    ∴ 直接消除左递归的结果是:
    S  →  abcS' | bcS' | cS'
    S'  → abcS' | ε
    ```

1. 删除其中不可达的非终结符, 这里就是 Q、R 了

    ```
    ∴ 最终消除左递归的结果是
    S -> abcS' | bcS' | cS'
    S' -> abcS' | ε
    ```

### 求 FIRST 和 FOLLOW 集

实在是太难描述了, 直接看连接吧:

[https://www.cnblogs.com/standby/p/6792774.html](https://www.cnblogs.com/standby/p/6792774.html)

## 相关阅读

基于文法分析的计算器实现:

[https://www.cnblogs.com/nankezhishi/archive/2008/11/20/1337930.html](https://www.cnblogs.com/nankezhishi/archive/2008/11/20/1337930.html)

自己动手写编译器:

[https://pandolia.net/tinyc/index.html](https://pandolia.net/tinyc/index.html)

生成文法分析表:

[https://www.cnblogs.com/standby/p/6792814.html](https://www.cnblogs.com/standby/p/6792814.html)

基数排序
===

+ 稳定性

    稳定（只能排数字，从个位开始比较的）

+ 复杂度

    - 时间复杂度

        O(n*r)（r 是数字长度）

    - 空间复杂度

        O(n+r)（r 是数字长度）

+ 原理

    先根据个位将数组排好，然后是十位，百位，不断向前，最后整个都是有序的。

    中间需要借助队列空间来把不同尾号的结果存起来，最后再把队列全都吐出来，组装结果数组。

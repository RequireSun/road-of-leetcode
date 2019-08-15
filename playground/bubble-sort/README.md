冒泡排序
===

+ 稳定性

    稳定（两数若是相同，则直接跳过不予处理）

+ 复杂度

    - 时间复杂度

        O(n) ~ O(n^2)

        * 最好情况：

            数组有序

        * 最坏情况：

            数组逆序

    - 空间复杂度

        O(1)

        根本就不需要额外空间

+ 原理

    从第一位开始遍历，每相近的两个进行比较，将更大的置后，这样一次循环之后即可确保最后一项即为最大值。这样循环遍历 n 次，每次遍历的长度都缩减 1（因为刚才的规律，所以 value(n) > value(n - 1) 总是成立，不需要再遍历那么多了），最终结果就是有序的了。

+ 优化

    按照上文的说法做出来的算法是非常稳定的 O(n^2) 复杂度，无论如何都不会变。这是因为该算法无论数组是否已经有序，都会继续后面的计算，这非常没有必要。可以设置一个标志位，用于标记该次循环是否有进行过数值交换，如果没有发生过交换，则证明数组已有序，无需继续进行排序。

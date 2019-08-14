
/**
 * 异或交换数值
 * @param array
 * @param a
 * @param b
 */
const swap = (array, a, b) => {
    if (a === b) {
        return;
    }
    array[a] ^= array[b];
    array[b] ^= array[a];
    array[a] ^= array[b];
};

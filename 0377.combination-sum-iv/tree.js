/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    const l = nums.length;
    let result = [];
    let temp;
    
    for (let i = 0; i < l; ++i) {
        temp = recursion(0, nums[i]);
        
        if (temp) {
            result.push(...temp);
        }
    }
    
    return result.length;
    
    function recursion(value, cur) {
        const sum = value + cur;
        const result = [];
        let temp;
        
        if (sum === target) {
            return [[cur]];
        } else if (sum > target) {
            return undefined;
        }
        
        for (let i = 0; i < l; ++i) {
            temp = recursion(sum, nums[i]);
            
            if (temp) {
                result.push(...temp);
            }
        }
        
        if (result.length) {
            for (let i = 0, l = result.length; i < l; ++i) {
                result[i].push(cur);
            }
            return result;
        }
    }
};
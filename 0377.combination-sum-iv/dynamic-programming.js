/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    const array = new Array(target + 1);
    let least = 0;
    let i;
    
    for (i = 0; i <= target; ++i) {
        array[i] = 0;
    }
    
    while (nums[nums.length - 1] > target) {
        nums.pop();
    }
    if (nums[nums.length - 1] === target) {
        array[target] = 1;
        nums.pop();
    }
    
    const numsCount = nums.length;
    
    for (i = 0; i < numsCount; ++i) {
        array[nums[i]] = 1;
    }
    
    while (least !== -1 && least < target) {
        for (i = 0; i < numsCount; ++i) {
            if (least + nums[i] <= target) {
                array[least + nums[i]] += array[least];
            }
        }
        
        array[least] = 0;
        
        for (++least; least < target; ++least) {
            if (array[least]) {
                break;
            }
        }
    }
    
    return array[target];
};
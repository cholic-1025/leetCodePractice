/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    let i = 0, j = 0;
    let sum = 0;
    let resultLength = 0;
    const length = nums.length;
    for(; j < length; j++) {
        sum += nums[j];
        while(sum >= target) {
            const currentLength = j + 1 - i;
            resultLength = currentLength < resultLength || resultLength === 0 ? currentLength : resultLength;
            sum -= nums[i];
            i++;
        }
    }
    return resultLength;
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let i = 0, j = nums.length - 1;
    let k = j;
    const result = [];
    while(k >= 0) {
        const left = nums[i] * nums[i];
        const right = nums[j] * nums[j];
        if (left > right) {
            result[k] = left;
            i++;
        } else {
            result[k] = right;
            j--;
        }
        k--;
    }
    return result;
};

const result = sortedSquares([-3, -1, 0, 2, 5, 8]);
console.log(result);
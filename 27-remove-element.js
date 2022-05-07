/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let i = 0, j = 0;
    const length = nums.length;
    while(j < length) {
          if (nums[j] !== val) {
              nums[i] = nums[j];
              i++;
          }
        j++;
    }
    return i;
};
    
    
const result = removeElement([1,2,3,4,5,6], 2);
console.log(result);
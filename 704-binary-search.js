var search = function(nums, target) {
    const length = nums.length;
    let i = 0, j = length - 1;
    do {
        let centerIdx = Math.floor((i + j)/2);
        let centerNum = nums[centerIdx];
        if (centerNum === target) {
            return centerIdx;
        } else if (centerNum < target) {
            i = centerIdx + 1;
        } else {
            j = centerIdx - 1;
        }
    } while(i <= j)
    return -1;
};
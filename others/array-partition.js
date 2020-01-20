/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    if (!nums || nums.length === 1) return nums[0];

    let n = (nums.length / 2);
    if (n === 1) return Math.min(...nums);

    nums.sort((a, b) => {
        if (a < b) return -1;
        else return 1;
    });
    
    let min = 0;
    for(let i = 0; i < nums.length; i += 2) {
        let tmp = [];
        for(let j = i; j < (2 + i); j++) {
            tmp.push(nums[j]);
        }
        min += Math.min(...tmp);
    }

    return min;
};


console.log(arrayPairSum([1, 1]));
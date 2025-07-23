var twoSum = function (nums, target) {
  let obj = {};
  let diff;

  for (let i = 0; i < nums.length; i++) {
    diff = target - nums[i];

    if (obj[diff] !== undefined) {
      return [obj[diff], i];
    }

    obj[nums[i]] = i;
  }
};

function threeSum(arr, target) {
// write your code here
	nums.sort((a, b) => a - b); // Sort the array in ascending order

  let closestSum = Infinity; // Variable to store the closest sum to the target

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1; // Pointer to the element next to nums[i]
    let right = nums.length - 1; // Pointer to the last element

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      // Update the closestSum if the current sum is closer to the target
      if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
        closestSum = sum;
      }

      if (sum < target) {
        left++; // Increment the left pointer if the sum is smaller than the target
      } else if (sum > target) {
        right--; // Decrement the right pointer if the sum is larger than the target
      } else {
        return sum; // Return the target sum if found
      }
    }
  }

  return closestSum; // Return the closest sum to the target
  
}

module.exports = threeSum;

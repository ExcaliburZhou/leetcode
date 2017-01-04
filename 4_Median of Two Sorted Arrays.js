/**
 * Created by Excalibur on 17/1/4.
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var nums = nums1.concat(nums2).sort((a, b) => a - b);
    var len = nums.length;
    return len % 2 === 0 ? (nums[len/2] + nums[len/2 - 1])/2 : nums[(len-1)/2];
};
/**
 * Created by Excalibur on 16/11/30.
 */

//Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
//    You may assume that each input would have exactly one solution.
//
//    Example:
//Given nums = [2, 7, 11, 15], target = 9,
//
//    Because nums[0] + nums[1] = 2 + 7 = 9,
//return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(var i = 0, len = nums.length; i < len; i++){
        for(var j = i + 1; j < len; j++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
};

var a = twoSum([1,2,3,4], 5);
console.log(a);
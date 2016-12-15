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
var twoSum0 = function(nums, target) {
    for(var i = 0, len = nums.length; i < len; i++){
        for(var j = i + 1; j < len; j++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
};
/**
 * 这答案中规中矩,跑赢了49.29%的人
 * 然而并不满足...
 * 现在循环一次,在map中将数字和位置都记录下来,以备后用
 */

var twoSum1 = function(nums, target) {
    var map = {};
    for(var i = 0, len = nums.length; i < len; i++){
        var res = target - nums[i];
        if(map[res] !== undefined){
            return [map[res], i]
        }
        map[nums[i]] = i;
    }
};

/**
 * ok,击败75%,一本满足
 *
 * */

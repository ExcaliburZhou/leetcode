/**
 * Created by Excalibur on 17/1/4.
 */
//Given an array of integers, every element appears twice except for one. Find that single one.
//
//    Note:
//Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 首先的想法是,用一个数组把第一次遇到的数存起来,再次遇到的时候就直接删除了
 */

var singleNumber0 = function(nums) {
    var num = [];
    for(var i = 0, len = nums.length; i < len; i++){
        var item = nums[i];
        var index = num.indexOf(item);
        if(index == -1){
            num.push(item)
        }else {
            num.splice(index, 1)
        }
    }
    return num[0];
};

/**
 * 效率惨不忍睹,也没有达到题意不占额外内存的要求
 * 换个思维,遇到数后在剩余数组中查找此数,能找到就把后面的数也删除了,没找到直接返回此数
 *
 */


var singleNumber1 = function(nums) {
    for(var i = 0, len = nums.length; i < len; i++){
        var num = nums[i];
        var index = nums.lastIndexOf(num);
        if(index === i){
            return num;
        }else {
            nums.splice(index, 1);
        }
    }
};

/**
 * 好吧,效率更差了,主要是nums.splice的锅
 * 那么如果事先将nums排序,就直接将数和紧接着的后面一个比,会不会好一点?
 */

var singleNumber2 = function(nums) {
    nums = nums.sort((a, b) => a - b);
    for(var i = 0, len = nums.length; i < len;){
        if(nums[i] !== nums[i + 1]){
            return nums[i];
        }
        i += 2;
    }
};

/**
 * 日了狗了...还是不高,只beats个位数;
 * 如下是抄的别人的代码
 */
var singleNumber3 = function(nums) {
    var num = 0;
    for(var i = 0, len = nums.length; i < len; i ++){
        num ^= nums[i]
    }
    return num;
};

/**
 * 也是人才,能想到异或...
 * 注: 0 ^ n = n, n ^ n = 0;
 * n代表任意数,所以两次相同的数会异或为0,最后一个异或的只有一次,等于本身...
 * 其实思路都是一样,开关开启和闭合,如何实现的问题
 * 也算学到的一个奇技淫巧了...
 */

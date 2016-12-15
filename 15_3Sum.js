/**
 * Created by Excalibur on 16/11/30.
 */
//Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
//
//    Note: The solution set must not contain duplicate triplets.
//
//    For example, given array S = [-1, 0, 1, 2, -1, -4],
//
//    A solution set is:
//    [
//        [-1, 0, 1],
//        [-1, -1, 2]
//    ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/**
 *  初体验,想到的是回溯方法,效率不忍直视
 *  唯一的好处是,当时想的如果是4个数呢,5个数呢,只要改个path.length===count的值就好了
 *
 * */
var threeSum0 = function(nums) {

    var result = [];
    var Obj = {};
    (function cal(arr, path){
        path = path.concat();
        if(path.length === 3){
            var res = path.reduce((pre, next)=> pre+next, 0);
            if(res === 0 ){
                res = path.sort();
                path = res.join('-');
                !Obj[path] && result.push(res);
                Obj[path] = true;
            }
            return;
        }else {
            for(var i = 0, len = arr.length; i < len; i++){
                cal(arr.slice(i + 1), path.concat(arr[i]));
            }
        }
    })(nums, []);

    return result;
};

/**
 * 然而计算一看,WTF,计算300ms,不能忍,果断放弃
 * 然后想到了循环,既然只3个数相加为0,就直接找三个数呗
 */

var threeSum1 = function(nums) {
    var result = [];
    var Obj = {};
    for(var i = 0, len = nums.length; i < len; i ++){
        for(var j = i + 1; j < len; j++){
            for(var k = j + 1; k < len; k++){
                var sum = nums[i] + nums[j] + nums[k];
                if(sum === 0){
                    var res = [nums[i], nums[j], nums[k]];
                    var key = res.sort().join('-');
                    !Obj[key] && result.push(res);
                    Obj[key] = true;
                    break;
                }
            }
        }
    }
    return result;
};

/**
 * 果然提升到了30ms,不是一个量级
 * 然而这就完事了么,再想深一点,若nums中有重复数字,每次取值的时候,实际上是不需要再次取这个重复数的
 * 于是,先将nums排序, 然后自增的时候可以变化一下
 */

var threeSum2 = function(nums) {
    var result = [];
    var Obj = {};
    nums = nums.sort((a, b) => a - b);
    for(var i = 0, len = nums.length; i < len;){
        for(var j = i + 1; j < len;){
            for(var k = j + 1; k < len;){
                var sum = nums[i] + nums[j] + nums[k];
                if(sum === 0){
                    var res = [nums[i], nums[j], nums[k]];
                    var key = res.sort().join('-');
                    !Obj[key] && result.push(res);
                    Obj[key] = true;
                    break;
                }
                k = nums.lastIndexOf(nums[k]) + 1;
            }
            j = nums.lastIndexOf(nums[j]) + 1;
        }
        i = nums.lastIndexOf(nums[i]) + 1;
    }
    return result;
};

/**
 * ok,打道回府,等等,只超过31.88%的开发者是怎么回事,继续折腾吧...
 * 换一种思路,a + b + c = 0 -> a + b = -c
 * 啥意思?就是最内层的循环其实不是必要的
 * 另外,nums.length < 3,直接返回空就好
 */
var threeSum3 = function(nums) {
    var result = [];
    if(nums.length < 3) return result;
    var Obj = {};
    nums = nums.sort((a, b) => a - b);
    for(var i = 0, len = nums.length; i < len;){
        for(var j = i + 1; j < len;){
            var sum = arr[i] + arr[j];
            var index = nums.indexOf(-sum, j + 1);
            if(index > -1 && index !== i && index !== j){
                var res = [nums[i], nums[j], -sum];
                var key = res.sort().join('-');
                !Obj[key] && result.push(res);
                Obj[key] = true;
                break;
            }
            j = nums.lastIndexOf(nums[j]) + 1;
        }
        i = nums.lastIndexOf(nums[i]) + 1;
    }
    return result;
};

/**
 * 好了,终于超过51%了,还是不满足,下回再折腾...
 */

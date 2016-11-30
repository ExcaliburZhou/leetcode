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
var threeSum = function(nums) {

    var result = [];
    var Obj = {};
    var cal = function(arr, path, count){
        path = path.concat();
        if(path.length === count){
            var res = path.reduce((pre, next)=> pre+next, 0);
            if(res === 0 ){
                res = path.sort();
                path = res.join('');
                !Obj[path] && result.push(res);
                Obj[path] = true;
            }
            return;
        }else {
            for(var i = 0, len = arr.length; i < len; i++){
                path.push(arr[i]);
                cal(arr.slice(i + 1), path, count);
                path.pop();
            }
        }
    }

    cal(nums, [], 3);

    return result;
};

//var a = [-1,0,1,2,-1,-4];
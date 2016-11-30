/**
 * Created by Excalibur on 16/11/30.
 */


//Given a string, find the length of the longest substring without repeating characters.
//
//    Examples:
//
//Given "abcabcbb", the answer is "abc", which the length is 3.
//
//Given "bbbbb", the answer is "b", with the length of 1.
//
//Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length <=1) return s.length;
    var result = 1;
    for(var i = 0, len = s.length; i < len; i++){
        var res = s[i];
        for(var j = i + 1; j< len; j++){
            if(res.indexOf(s[j]) === -1){
                res += s[j];
            }else {
                break;
            }
        }
        result = Math.max(result, res.length);
    }
    return result;
};

console.log(lengthOfLongestSubstring('adb'));
/**
 * Created by Excalibur on 17/1/4.
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var sa = s.trim().split(' ');
    var str = sa.slice(-1)[0];
    return str ? str.length : 0;
};
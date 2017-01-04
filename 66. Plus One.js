/**
 * Created by Excalibur on 17/1/4.
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(var i = digits.length - 1; ;){
        var item = digits[i] + 1;
        digits[i] = item % 10;
        if(item < 10){
            break;
        }else {
            if(i === 0){
                digits.unshift(1);
                break;
            }
            i--;
        }
    }
    return digits;
};

// beats 86.30%...有史最高
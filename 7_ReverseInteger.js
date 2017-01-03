/**
 * Created by Excalibur on 17/1/3.
 */
var reverse = function(x) {
    var y = Math.abs(x) + '';
    y = +y.split('').reverse().join('');
    if(y > Math.pow(2, 31) - 1) return 0;
    return x < 0 ? -y : y;
};
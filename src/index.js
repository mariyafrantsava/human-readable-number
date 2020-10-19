module.exports = function toReadable(number) {
    let result = '';
    let num = [];
    num[0] = 'zero';
    num[1] = 'one';
    num[2] = 'two';
    num[3] = 'three';
    num[4] = 'four';
    num[5] = 'five';
    num[6] = 'six';
    num[7] = 'seven';
    num[8] = 'eight';
    num[9] = 'nine';
    num[10] = 'ten';
    num[11] = 'eleven';
    num[12] = 'twelve';
    num[13] = 'thirteen';
    num[14] = 'fourteen';
    num[15] = 'fifteen';
    num[16] = 'sixteen';
    num[17] = 'seventeen';
    num[18] = 'eighteen';
    num[19] = 'nineteen';

    /* if (number > 13 && number < 20) {
         num += (`${num[number.slice(-1)]}` + 'teen');*/
    num[20] = 'twenty';
    num[30] = 'thirty';
    num[40] = 'forty';
    num[50] = 'fifty';
    num[60] = 'sixty';
    num[70] = 'seventy';
    num[80] = 'eighty';
    num[90] = 'ninety';

    /*else(number >= 100) {
        number += (`${num[number.slice(0, 1)]}` + 'hundred');
    }*/
    //number = 534;
    if (number === 0) {
        return num[0];
    }

    let thousand = Math.trunc(number / 1000);
    if (thousand > 0) {
        result = num[thousand] + ' thousand ';
        number -= thousand * 1000;
    }

    let hundred = Math.trunc(number / 100);
    if (hundred > 0) {
        result += num[hundred] + ' hundred ';
        number -= hundred * 100;
    }

    let tenths = number;
    let tenthCheck = Math.trunc(number / 10);



    if (tenths > 9 && tenths < 20) {
        result += num[tenths];
    }
    if (tenths > 19 && tenths < 100) {
        result += num[tenthCheck * 10];
        let cents = number % 10;
        if (cents > 0) {
            result += ' ' + num[cents];
        }
    }
    if (tenths < 10 && tenths > 0) {
        result += ' ' + num[tenths];
    }




    result = result.replace('  ', ' ').trim();
    console.log(result);
    return result;
}
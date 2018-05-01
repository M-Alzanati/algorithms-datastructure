/**
 * @author:
 * @description: Implement function to print all number representation up to n digits
 * @example: printbinary(2)
 *          0 0 
 *          0 1
 *          1 0
 *          1 1
 */

function printbinary(digits, prefix = '') {
    if (digits === 0) {
        console.log(prefix.trim());
    } else {
        printbinary(digits - 1, prefix + '0 ');
        printbinary(digits - 1, prefix + '1 ');
    }
}

function printdecimal(digits, prefix = '') {
    if (digits === 0) {
        console.log(prefix.trim());
    } else {
        for (let i = 0; i <= 9; i++) {
            printdecimal(digits - 1, prefix + i);
        }
    }
}

module.exports = {
    printbinary,
    printdecimal
};
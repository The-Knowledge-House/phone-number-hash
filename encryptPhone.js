/**
 * @function encryptPhoneNumber should take a phone number and hash it for security and privacy purposes.
 * @param number will always be a string formatted as such '111-223-1123'. Your function should return the first 6 digits as * and only the last 4 shown. Ex:
 * ' 111-223-1123 ' should be ' ***-***-1123 '
 */

const encryptPhoneNumber = num => {
    let onlyNums = num.split('').filter(val => Number(val)).fill('*', 0, 6);

    onlyNums.splice(3, 0, '-'), onlyNums.splice(7, 0, '-');

    return onlyNums.join('');
}

console.log(encryptPhoneNumber('9171232456'));


module.exports = encryptPhoneNumber;

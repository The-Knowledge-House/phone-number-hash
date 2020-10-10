/**
 * @function encryptPhoneNumber should take a phone number and hash it for security and privacy purposes.
 * @param number will always be a string formatted as such '111-223-1123'. Your function should return the first 6 digits as * and only the last 4 shown. Ex:
 * ' 111-223-1123 ' should be ' ***-***-1123 '
 */

function encryptPhoneNumber(number) {
  let firstNumber = number.split('');
  let secondNumber = [];
  for (let x = 0; x < firstNumber.length; x++) {
    if (firstNumber[x] == `-` || x >= 8) {
    secondNumber.push(firstNumber[x]);
    } else {
      secondNumber.push(firstNumber[x] = `*`);
    }
  }
  return secondNumber.join(``);
}
encryptPhoneNumber(`646-597-2606`);



module.exports = encryptPhoneNumber;
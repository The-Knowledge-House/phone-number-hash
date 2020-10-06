/**
 * @function encryptPhoneNumber should take a phone number and hash it for security
 * and privacy purposes. @param number will always be a string formatted
 * as such '111-223-1123'. Your function should return the first 6 digits as * and only
 * the last 4 shown. Ex:' 111-223-1123 ' should be ' ***-***-1123 '
 */

function encryptPhoneNumber(num) {
  let array = num.split("");
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (i <= 6 && parseInt(array[i]) >= 1) {
      newArray.push((array[i] = "*"));
    } else if (i >= 7 && parseInt(array[i]) >= 1) {
      newArray.push(array[i]);
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray.join("");
}

module.exports = encryptPhoneNumber;

/**
 * @function encryptPhoneNumber should take a phone number and hash it for security and privacy purposes.
 * @param number will always be a string formatted as such '111-223-1123'. Your function should return the first 6 digits as * and only the last 4 shown. Ex:
 * ' 111-223-1123 ' should be ' ***-***-1123 '
 */


 module.exports = encryptPhoneNumber;

//this needs to go in the encryptphone.js and will then work
//solution
function encryptPhoneNumber(num) {
    let encrypted = "";
    for (let i = 0; i < num.length; i++){
      (i < 7 && num[i] != "-") ? encrypted += "*" : encrypted += num[i];
    }
    return encrypted;
  }

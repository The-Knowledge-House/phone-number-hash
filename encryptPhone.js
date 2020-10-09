/**
 * @function encryptPhoneNumber should take a phone number and hash it for security and privacy purposes.
 * @param number will always be a string formatted as such '111-223-1123'. Your function should return the first 6 digits as * and only the last 4 shown. Ex:
 * ' 111-223-1123 ' should be ' ***-***-1123 '
 */
function encryptPhoneNumber(number) {
  let section = number.split("-");

  for (let i = 0; i < section.length; i++) {
    if (i <= 1) {
      section.splice(i, 1, "***");
    }
  }
  return section.join("-");
}

module.exports = encryptPhoneNumber;

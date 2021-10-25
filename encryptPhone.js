/**
 * @function encryptPhoneNumber should take a phone number and hash it for security and privacy purposes.
 * @param number will always be a string formatted as such '111-223-1123'. Your function should return the first 6 digits as * and only the last 4 shown. Ex:
 * ' 111-223-1123 ' should be ' ***-***-1123 '
 */
function encryptPhoneNumber(phoneNumber) {
	let encrypted = '';
	let storedNumber = phoneNumber;

	for (let i = 0; i < storedNumber.length; i++) {
		if (i === 3 || i === 7) {
			encrypted += '-';
		} else if (i < 3 || (i > 3 && i < 7)) {
			encrypted += '*';
		} else {
			encrypted += storedNumber[i];
		}
	}
	return encrypted;
}
module.exports = encryptPhoneNumber;

/**
 * @function encryptPhoneNumber should take a phone number and hash it for security and privacy purposes.
 * @param number will always be a string formatted as such '111-223-1123'. Your function should return the first 6 digits as * and only the last 4 shown. Ex:
 * ' 111-223-1123 ' should be ' ***-***-1123 '
 */
module.exports = encryptPhoneNumber;

function encryptPhoneNumber(arr) {
	// splitting aarr of strings into an order list of substrings
	let newPhoneArray = arr.split("");
	// setting a new variable of savePhoneNum and assign it a value empty array
	let savePhoneNum = [];
	// checking to see if there is not - and blocking every number less than equal to 6
	// else push newPhoneArray[i]
	for (let i = 0; i < newPhoneArray.length; i++) {
		if (newPhoneArray[i] !== "-" && i <= 6) {
			savePhoneNum.push((newPhoneArray[i] = "*"));
		} else {
			savePhoneNum.push(newPhoneArray[i]);
		}
	}
	// returning the array back as a string using the join method
	return savePhoneNum.join("");
}

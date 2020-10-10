/*** @function encryptPhoneNumber should take a phone number and hash it for security and privacy purposes.
 * @param number will always be a string formatted as such '111-223-1123'. Your function should return the first 6 digits as * and only the last 4 shown. Ex:
 * ' 111-223-1123 ' should be ' ***-***-1123 '
 */

module.exports = encryptPhoneNumber;

function encryptPhoneNumber(number) {
	let numberSplit = number.split("");
	for ( let i = 0; i <=6; i++) {

	if (numberSplit[i] == "-") {

	}else{
		numberSplit[i] = "*";
	} 
  }
  return numberSplit.join("");
}	
	
	let phoneNumber = encryptPhoneNumber("212-555-1867");
	console.log(phoneNumber);

	
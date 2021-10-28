//problem 
const encryptPhoneNumber = require('../encryptPhone')

describe('Encrypy Phone Number', () => {
  describe.each([['888-445-3421', '***-***-3421']])(
    'double(%d)',
    (input, expected) => {
      test(`returns hashed number: ${expected}`, () => {
        expect(encryptPhoneNumber(input)).toBe(expected)
      })
    }
  )
})

//solution
function encryptPhoneNumber(num) {
    let encrypted = "";
    for (let i = 0; i < num.length; i++){
      (i < 7 && num[i] != "-") ? encrypted += "*" : encrypted += num[i];
    }
    return encrypted;
  }
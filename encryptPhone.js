/**
 * @function encryptPhoneNumber should take a phone number and hash it for security and privacy purposes.
 * @param number will always be a string formatted as such '111-223-1123'. Your function should return the first 6 digits as * and only the last 4 shown. Ex:
 * ' 111-223-1123 ' should be ' ***-***-1123 '
 */
 function encryptPhoneNumber(num){
     /*       first way  time : 1.66s
    
    
    
     let str = num.split("");
    let newStr = [];
    for (let i = 0; i < str.length; i++) {
        if (i <= 6 && str[i] !=='-') {
            newStr.push(str[i] = "*");
        }  else {
            newStr.push(str[i]);
}}
return newStr.join("");
*/  

/*         2nd answer   time: 0.875 s
 return num 
 .split('')
 .reduce((acc ,curr,index,array)=>{
     return index <= 6 && curr !== '-' ? acc + '*' : acc +curr;
 },'')

 */  

    //// 3rd time is faster time : 0.865 
let str = num.split("");
 let newStr = [];
 str.forEach ((cur , index , array ) =>{
     newStr.push(index <= 6 && cur !== '-' ? '*' :cur); 
 })

return newStr.join('');
 







}


 
 //console.log(encryptPhoneNumber('111-223-1123'));

module.exports = encryptPhoneNumber;

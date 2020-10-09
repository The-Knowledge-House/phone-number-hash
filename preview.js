function encryptPhoneNumber(number) {
  let section = number.split("-");

  for (let i = 0; i < section.length; i++) {
    if (i <= 1) {
      section.splice(i, 1, "***");
    }
  }
  return section.join("-");
}
console.log(encryptPhoneNumber("111-223-1123"));

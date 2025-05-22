function checkEmailId(str) {
  str = str.toLowerCase();
  let atIndex = str.indexOf('@');
  let dotIndex = str.indexOf('.', atIndex);
  return atIndex > 0 && dotIndex > atIndex + 1;
}

console.log(checkEmailId("test@domain.com")); 
console.log(checkEmailId("test.domain@com"));

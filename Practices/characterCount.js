// function charCount(str) {
//   let result = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       if (result[char] > 0) {
//         result[char]++;
//       } else {
//         result[char] = 1;
//       }
//     }
//   }
//   return result;
// }
// console.log(charCount("hallo Everyone!"));

// By refractoring the code using (for ..of )

function charCount(str) {
  let obj = {};
  for (let chars of str) {
    let char = chars.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}
console.log(charCount("Good Morning!!!"));

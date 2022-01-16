// string input
const str = 'aanyyeeeddk';

const largestConsecutiveCharacter = (string) => {
  // length of the string inputed
  let len = string.length;

  // storing the result
  let res = '';

  // returning empty string if the length of the string input is 0
  if (string.length === 0) {
    return res;
  }

  // temporarily storing the repeated characters
  let temp = '';

  for (let i = 0; i < len; i++) {
    // when index is 0
    if (i === 0) {
      if (string[i] === string[i + 1]) {
        temp += string[i];
      }
    }
    // when index > 0
    if (i > 0) {
      if (string[i] === string[i - 1]) {
        temp += string[i];
      }
      if (string[i] !== string[i - 1]) {
        temp = string[i];
      }
      // Compares the length of the temporary string and result string
      if (temp.length > res.length) {
        res = temp;
      }
    }
  }
  return res;
};

console.log(largestConsecutiveCharacter(str));

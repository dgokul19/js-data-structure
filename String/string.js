export const reverseString = textString => {
  return textString
    .split('')
    .reverse()
    .join('')
    .toLowerCase();
};
// remove all repeated duplicates. geeksforgeek, acaaabbbacdddd
export const removeRepeatedCharacter = textString => {
  let stringArr = textString.split('');
  let uniq = [];
  stringArr.forEach((val, index) => {
    console.log('val', val, '------ stringArr', stringArr[index - 1]);

    if (val === stringArr[index - 1]) {
      let indexFind = uniq.indexOf(val);
      if(indexFind) {
        uniq.pop();
      }
    } else {
      uniq.push(val);
      console.log('uniq', uniq);
    }
  });
  return uniq.join('');
};

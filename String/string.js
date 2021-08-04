export const reverseString = textString => {
  return textString
    .split('')
    .reverse()
    .join('')
    .toLowerCase();
};
// remove all repeated duplicates. geeksforgeek, a c a a a b b b a c d d d d
export const removeRepeatedCharacter = textString => {
  let stringArr = textString.split('');
  let uniq = [];

  for (let i in stringArr) {
    let prevIndex = i - 1;
    let nextIndex = Number(i) + 1;
    if (
      stringArr[i] !== stringArr[prevIndex] && 
      stringArr[i] !== stringArr[nextIndex]
    ) {
      uniq.push(stringArr[i]);
    }
  }

  return uniq.join('');
};

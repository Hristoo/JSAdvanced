function findTheLongestWord(input, startChar) {
  let regexFindWordsStartWith = new RegExp("(?<!\w)(" + startChar + "\\w+)", "i");
  // variable ^startChar in regex
  input = regexFindWordsStartWith.exec(input);
  let longest = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i].length > longest.length) {
      longest = input[i];
    }
  }

  return longest;
}
console.log(
  findTheLongestWord("What we do in life echoes to eternity!", "l")
);

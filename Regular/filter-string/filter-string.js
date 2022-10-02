const string = 'Привет! Как дела?';

const vowels = ['у','е','ы','а','о','э','ё','я','и'];

const getVowels = str => {
  let extracted = '';

  for (let i = 0; i < str.length; i++) {
    const currentLet = str[i];
    
    if (vowels.indexOf(currentLet) != -1) {
      extracted += currentLet;
    }
  }
  return extracted;
}

console.log(getVowels(string));
let languages = ['Java', 'JavaScript', 'C#', 'PHP', 'Python'];

languages.indexOf('JavaScript'); // Returns the index of the item or -1 if the item is not in the array

languages.findIndex(function (item) { // Returns the index of the item or -1 if the item is not in the array
  return item === 'JavaScript';
});

languages.find(function (item) { // Returns the item or "Undefined" if the item is not in the array
  return item === 'JavaScript';
})

languages.includes('JavaScript') // Returns true if the item is in the array or false if not

function searchlanguages(language) { // Choose one option
  for(lang in languages) { // Option 1
    if(lang === language) {
      return i;
    }
  }

  for (let i = 0; i < languages.length; i++) { // Option 
    if(languages[i] === language) {
      return i;
    }
  }
  return -1;
}
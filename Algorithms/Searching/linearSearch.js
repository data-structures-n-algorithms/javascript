const languages = ['Java', 'JavaScript', 'C#', 'PHP', 'Python']

// Returns the index of the item or -1 if the item is not in the array
languages.indexOf('JavaScript')

// Returns the index of the item or -1 if the item is not in the array
languages.findIndex((item) => item === 'JavaScript')

// Returns the item or "Undefined" if the item is not in the array
languages.find((item) => item === 'JavaScript')

// Returns true if the item is in the array or false if not
languages.includes('JavaScript')

// Choose one option
function searchlanguages(language) {
  // Option 1
  languages.forEach((lang, i) => {
    if (lang === language) return i

    return -1
  })

  // Option 2
  languages.map((lang, i) => {
    if (lang === language) return i

    return -1
  })

  // Option 3
  for (let i = 0; i < languages.length; i++) {
    if (languages[i] === language) return i

    return -1
  }
}

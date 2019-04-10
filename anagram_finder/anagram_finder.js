class AnagramFinder{

  constructor (word) {
    this.word = word; // toLowerCase()?
  };

  findAnagrams(otherWords) {
    return otherWords.filter(otherWord => {
      const otherSplit = otherWord.split('');
      return otherSplit.every(letter => {
        return this.word.includes(letter);
      });
    });
  };

};

module.exports = AnagramFinder;



// isPangram() {
//   return this.alphabet.every(letter => {
//     return this.phrase.toLowerCase().includes(letter);
//   });
// };

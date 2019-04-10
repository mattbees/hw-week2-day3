class AnagramFinder{

  constructor (word) {
    this.word = word.toLowerCase();
  };

  findAnagrams(otherWords) {
    return otherWords.filter(otherWord => {
      const otherSplit = otherWord.toLowerCase().split('');
      return otherSplit.every(letter => {
        return this.word.includes(letter)
          && (otherWord.length === this.word.length)
          && (otherWord.toLowerCase() !== this.word)
          && (otherWord.length > 0); /* final test is failing as output is an
                                     // array containing an empty string */
      });
    });
  };

};

module.exports = AnagramFinder;

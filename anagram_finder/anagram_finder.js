class AnagramFinder{

  constructor (word) {
    this.word = word;
  };

  findAnagrams(otherWords) {
    return otherWords.filter(otherWord => {
      const otherSplit = otherWord.split('');
      return otherSplit.every(letter => {
        return this.word.includes(letter)
          && (otherWord.length === this.word.length);
      });
    });
  };

};

module.exports = AnagramFinder;

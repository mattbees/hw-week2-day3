class AnagramFinder{

  constructor (word) {
    this.word = word.toLowerCase();
  };

  findAnagrams(otherWords) {
    return otherWords.filter(otherWord => {
      const otherSplit = otherWord.toLowerCase().split('');
      return otherSplit.every(letter => {
        return this.word.includes(letter)
          && (otherWord.length === this.word.length);
      });
    });
  };

};

module.exports = AnagramFinder;

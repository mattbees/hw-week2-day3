class PangramFinder{
  constructor(phrase) {
    this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
    this.phrase = phrase;
  };

  isPangram() {
    return this.alphabet.every(letter => {
      return this.phrase.toLowerCase().includes(letter);
    });
  };
};

module.exports = PangramFinder;

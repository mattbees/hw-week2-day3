class IsogramFinder{
 constructor(word) {
    this.word = word.toLowerCase().split('');
 };

  isIsogram() {
    return this.word.every(letter1 => {  // returns true if every element passes the test
      let tempArray = this.word.filter(letter2 => {
        return letter2 === letter1; // if letter2 is the same as letter1 add it to tempArray
      });
      if (tempArray.length > 1) {
        return false; // returns false for value of callback function (line 7)
      } else {
        return true; // returns true for callback function (line 7) if all iterations return true
      };
    });
  };
};

module.exports = IsogramFinder;

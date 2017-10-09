function Entry(title, entryText) {
  this.title = title;
  this.entryText = entryText;
}

Entry.prototype.wordCount = function() {
  var words = this.entryText.split(" ");
  return words.length;
};

Entry.prototype.vowels = function() {
  var letters = this.entryText.split("");
  var vowelCount = 0;
  letters.forEach(function(letter){
    if (/[aeiou]/i.test(letter)) {
      vowelCount ++;
    }
  });
  return vowelCount;
};

exports.entryModule = Entry;

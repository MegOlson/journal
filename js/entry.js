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

Entry.prototype.consonants = function() {
  var letters = this.entryText.split("");
  var consonantsCount = 0;
  letters.forEach(function(letter){
    if (/[b-df-hj-np-tv-z]/i.test(letter)) {
      consonantsCount ++;
    }
  });
  return consonantsCount;
};


exports.entryModule = Entry;

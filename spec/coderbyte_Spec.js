describe('coderbyte_firstReversal', function() {

  beforeEach(function() {
  });

  it('should reverse a string', function() {
    expect(coderbyte_firstReversal("candy")).to.equal("ydnac");
    console.log(coderbyte_firstReversal("candy"));
  	expect(coderbyte_firstReversal("zoo!")).to.equal("!ooz");    
  	console.log(coderbyte_firstReversal("zoo!"));
  });
});

describe('coderbyte_firstFactorial', function() {
  beforeEach(function() {
  });

  it('should find the nth factorial', function() {
  expect(coderbyte_firstFactorial(1)).to.equal(1);
  expect(coderbyte_firstFactorial(0)).to.equal(1);
  expect(coderbyte_firstFactorial(-1)).to.equal(undefined);
  expect(coderbyte_firstFactorial(5)).to.equal(120);
  });
});

describe('coderbyte_LongestWord', function() {
  beforeEach(function() {
  });

  it('should find the longest word in a sentence', function() {
  expect(coderbyte_LongestWord("Where is it?")).to.equal("Where");
  });
});


describe('coderbyte_LetterChanges', function() {
  beforeEach(function() {
  });

  it('should replace word with next alphabet, and capitalize vowels', function() {
  expect(coderbyte_LetterChanges("hello*3")).to.equal("Ifmmp*3");
  expect(coderbyte_LetterChanges("fun times!")).to.equal("gvO Ujnft!");
  });
});


describe('coderbyte_LetterCapitalize', function() {
  beforeEach(function() {
  });

  it('should capitalize first letter of each word', function() {
  expect(LetterCapitalize("Argument goes here")).to.equal("Argument Goes Here");
  });
});
  
  
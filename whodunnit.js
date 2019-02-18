
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// In this example the first murderer will be Mrs Peacock as the firstVerdict constant 
// references a function whose murderer scope is within that function, The secondVerdict
// will be that of professor plum as the murderer variable referenced is outside the scope
// of the declaremurder constant

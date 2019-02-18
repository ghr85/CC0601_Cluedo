let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// In this scenario there will be two separate outputs firstly implicating Miss Scarlet, 
// Professor Plum & colonel mustard as number 3 as the constant suspects calls the function
// declare all suspects where suspect 3 has been changed within its limited block scope.
// The second output will identify suspect three as Mrs Peacock as suspect 3 remains
// unchanged outside the block



const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

//The murderer in this case is Miss Scarlet and it will be shown as output as the constant scenario has global scope and is immutable*

// Scenario 2 
// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//The murderer in this case is Professor Plum, the reason being the initial constant declared is immutable and has global scope, attempting to change it will only lead to an error. (Type error)

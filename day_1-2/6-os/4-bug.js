function convertArrayToObject(arr) {
  return arr.reduce((acc, curr) => {
    // acc is the empty array
    // curr[0] is the key in the array, which are numbers
    // curr[1] is the pair of the key
    
    console.log("acc: " + acc)
    console.log("cur: " + curr)

    acc[curr[0]] = curr[1]; 
    return acc;
  }, {});
}

const obj = convertArrayToObject([
  [1, 'One'], // acc[0] || 1 = acc[0][curr[0]] || 'One' = acc[0][curr[1]]
  [2, 'Two'],
  [3, 'Three'],
  [4, 'Four'],
  [5, 'Five'],
]);

console.log(obj);
/* Should output:

  {
    1: 'One',
    2: 'Two',
    3: 'Three' 
    4: 'Four',
    5: 'Five'
  }

*/

// Run this code in the terminal to inspect for bugs:
  // node --inspect-brk 4-bug.js
  // after which, go to chrome and open chrome://inspect
  // no you have chrome dev tools for your node script

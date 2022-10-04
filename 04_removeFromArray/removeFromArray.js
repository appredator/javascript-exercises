const removeFromArray = function(...args) {

    const array = args[0];
    // create a new empty array
    const newArray = [];
    // use forEach to go through the array
    array.forEach((item) => {
      // push every element into the new array
      // UNLESS it is included in the function arguments
      // so we create a new array with every item, except those that should be removed
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
    // and return that array
    return newArray;



};

// Do not edit below this line
module.exports = removeFromArray;






// const removeFromArray = function(a, ...moreArgs) {

// };

// // Do not edit below this line
// module.exports = removeFromArray;
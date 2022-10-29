const getTheTitles = function(arr) {
let holder = new Array(arr.length - 1)
holder.fill(0);

for (let i = 0; i < arr.length; i++){

    holder[i] = arr[i].title;
}

return holder;
};

// Do not edit below this line
module.exports = getTheTitles;

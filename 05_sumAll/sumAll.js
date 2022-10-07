const sumAll = function(a, b) {
    let sum = 0;
    let detectTypeA = typeof a
    let detectTypeB = typeof b

    if(detectTypeA != "number" || detectTypeB != "number" || a < 0 || b < 0){
        sum = "ERROR"
        
    }
    else{
    if(a < b){
    for (let i = a; i <= b; i++)
    {
        sum = sum + i
    }
    }   
    else if (a > b){
    for (let i = b; i <= a; i++)
        {
            sum = sum + i
        }
    }
}
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

const repeatString = function(string, num) {
    let holder = ''

    if(num >= 0 || string === ''){
        for(let i = 0; i < num; i++){
            holder += string 
        }
      
    }
    else if(num < 0) {
       
        holder = "ERROR"
    
    }

return holder;
};

// Do not edit below this line
module.exports = repeatString;

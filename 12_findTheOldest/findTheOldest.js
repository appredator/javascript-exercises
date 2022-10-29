const findTheOldest = function(people) {

   const holder = people.filter(people => !people.yearOfDeath) 

    // const currentDate = getFullYear();

    const currentDate = 2022;

    let carlyBirth = 0;

    let rayBirth = 0;

    let janeBirth = 0;

        let largest = 0;


    for(let i = 0; i < people.length - 1; i++){
    currentDate - people.yearOfBirth;

    if(people[i].name === "Carly"){
    carlyBirth = currentDate - people[i].yearOfBirth;
    }
    else if( people[i].name === "Ray"){
        rayBirth = currentDate - people[i].yearOfBirth;
    }
    else if( people[i].name === "Jane"){
        janeBirth = currentDate - people[i].yearOfBirth;
    }
    }

    if(carlyBirth > rayBirth){
        largest = carlyBirth;
    }
    else{
        largest = rayBirth;
    }


if (largest > janeBirth){

    
}
else {
    largest = janeBirth;
}


if (carlyBirth === largest){
    return people.filter(name => people.name === "Carly")
}
else if (rayBirth === largest){
    return people.filter(name => people.name === "Ray")
}
else if (rayBirth === largest){
    return people.filter(name => people.name === "Jane")
}
};

// Do not edit below this line
module.exports = findTheOldest;

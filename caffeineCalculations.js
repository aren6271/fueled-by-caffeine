// JavaScript 


// This takes the age and weight and then provides tha caffine content to be plugged into the algorithm

function getSuggestedCaffeine(weight, age, sensitivity) { //Gives the amount of suggested daily caffeine based on weight, age, and caffeine sensitivity
    var suggestedCaffeine = 2.72 * weight; 
    
    if (age < 16) { //If younger, reduce amount of caffeine.
        suggestedCaffeine *= 0.75;
    }
    
    if(sensitivity == hypersensitive) { //Choose sensitivity from drop down list
        suggestedCaffeine *= 0.5;
    }else if (sensitivity == hyposensitive) {
       	suggestedCaffeine *= 2;
    }else{
    }
   
    return suggestedCaffeine;
}

//var tau = 8.223 ;  ------hours solved for with the half-life of caffeine.


function getCaffeineExpiration(oldCaffeineContent, neededCaffeine){
    var expirationHour = (((-1)*8.223)*(Math.log((neededCaffeine/oldCaffeineContent)))); //Calculates current x value (time at which the caffeineContent is less than th neededCaffeine)
	return expirationHour;
}

var expHour = getCaffeineExpiration(500,100);

print(expHour);

function getActiveCaffeine(caffeineContent,expirationHour){
	var activeCaffeine = caffeineContent*(Math.exp(((-1)*expirationHour)/8.223)); //Calculates current y value (amount of active caffeine at time expirationHour)
      return activeCaffeine;
}
var activeCaffeine = getActiveCaffeine(500,expHour);
print(activeCaffeine);

function getRecaffeinate(addedCaffeineContent, activeCaffeine){
	var newCaffeineContent = (activeCaffeine + addedCaffeineContent);
    return newCaffeineContent;
}
var newCaffeineContent = getRecaffeinate(200, activeCaffeine);
print(newCaffeineContent);

print(getCaffeineExpiration(newCaffeineContent, 85));


//recaffeinate(inputted caffeine content, same as original neededCaffeine (85), )

/*function caffeineList(time, caffeineContent, durationBetween) {
    var content = zeros(1, length(time));
    for i = 1: length(time)
     content(i) = caffeine(time(i), caffeineContent, durationBetween);
}

//this function gives a schedule in print form for the user to follow + some transitions 

function schedule(int optcaff, int incaff) {
    int b = incaff / optcaff;
    int c = optcaff / b;
    alert("You should be taking " + b + "mg's of caffine every" + b " hours during your work time this means around" + b/95 + " cups of coffee or "+ b/35 "cups of Green Tea" + b/47 + "cups of black tea."

}*/// JavaScript 


// This takes the age and weight and then provides tha caffine content to be plugged into the algorithm

function getSuggestedCaffeine(weight, age, sensitivity) { //Gives the amount of suggested daily caffeine based on weight, age, and caffeine sensitivity
    var suggestedCaffeine = 2.72 * weight; 
    
    if (age < 16) { //If younger, reduce amount of caffeine.
        suggestedCaffeine *= 0.75;
    }
    
    if(sensitivity == hypersensitive) { //Choose sensitivity from drop down list
        suggestedCaffeine *= 0.5;
    }else if (sensitivity == hyposensitive) {
       	suggestedCaffeine *= 2;
    }else{
    }
   
    return suggestedCaffeine;
}

//var tau = 8.223 ;  ------hours solved for with the half-life of caffeine.


function getCaffeineExpiration(oldCaffeineContent, neededCaffeine){
    var expirationHour = (((-1)*8.223)*(Math.log((neededCaffeine/oldCaffeineContent)))); //Calculates current x value (time at which the caffeineContent is less than th neededCaffeine)
	return expirationHour;
}

var expHour = getCaffeineExpiration(500,100);

print(expHour);

function getActiveCaffeine(caffeineContent,expirationHour){
	var activeCaffeine = caffeineContent*(Math.exp(((-1)*expirationHour)/8.223)); //Calculates current y value (amount of active caffeine at time expirationHour)
      return activeCaffeine;
}
var activeCaffeine = getActiveCaffeine(500,expHour);
print(activeCaffeine);

function getRecaffeinate(addedCaffeineContent, activeCaffeine){
	var newCaffeineContent = (activeCaffeine + addedCaffeineContent);
    return newCaffeineContent;
}
var newCaffeineContent = getRecaffeinate(200, activeCaffeine);
print(newCaffeineContent);

print(getCaffeineExpiration(newCaffeineContent, 85));


//recaffeinate(inputted caffeine content, same as original neededCaffeine (85), )

/*function caffeineList(time, caffeineContent, durationBetween) {
    var content = zeros(1, length(time));
    for i = 1: length(time)
     content(i) = caffeine(time(i), caffeineContent, durationBetween);
}

//this function gives a schedule in print form for the user to follow + some transitions 

function schedule(int optcaff, int incaff) {
    int b = incaff / optcaff;
    int c = optcaff / b;
    alert("You should be taking " + b + "mg's of caffine every" + b " hours during your work time this means around" + b/95 + " cups of coffee or "+ b/35 "cups of Green Tea" + b/47 + "cups of black tea."

}*/
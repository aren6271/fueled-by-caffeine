// JavaScript 


// This takes the age and weight and then provides tha caffine content to be plugged into the algorithm

function caffinecontent(int weight, int age, int hypo) {
    int a = 2.72 * weight;
    
    if (age < 16) {
        a = 0.75 * a;
    }
    if (hype = 0) {
        a = 0.5 * a
    }
    else if (hype = 1) { }
    else if (hype = 2) {
        a = 2* a
    }
}
function  caffeine(time, caffeineContent, durationBetween){
    halfLife = 5.7;
    tau = halfLife / log(2);
    n = floor(time / durationBetween);
    content = caffeineContent * exp(-time / tau) * (1 - exp(durationBetween * (n + 1) / tau)) / (1 - exp(durationBetween / tau));
  
}

function caffeineList(time, caffeineContent, durationBetween) {
    content = zeros(1, length(time));
    for i = 1: length(time)
    content(i) = caffeine(time(i), caffeineContent, durationBetween);
}

// this function gives a schedule in print form for the user to follow + some transitions 
function schedule(int optcaff, int incaff) {
    int b = incaff / optcaff;
    int c = optcaff / b;
    alert("You should be taking " + b + "mg's of caffine every" + b " hours during your work time this means around" + b/95 + " cups of coffee or "+ b/35 "cups of Green Tea" + b/47 + "cups of black tea."

}
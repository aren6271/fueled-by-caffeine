// JavaScript 

function [content] = caffeine(time, caffeineContent, durationBetween)
halfLife = 5.7;
tau = halfLife / log(2);
n = floor(time / durationBetween);
content = caffeineContent * exp(-time / tau) * (1 - exp(durationBetween * (n + 1) / tau)) / (1 - exp(durationBetween / tau));
end

function [content] = caffeineList(time, caffeineContent, durationBetween)
content = zeros(1, length(time));
for i = 1: length(time)
content(i) = caffeine(time(i), caffeineContent, durationBetween);
end
end

function optcaffeine(int weight, int age) {
    int a = 2.72 * weight;
    if (age < 16) {
        a = 0.75 * a;
    }
}

function schedule(int optcaff, int incaff) {
    int b = incaff / optcaff;
    int c = optcaff / b;
    alert("You should be taking " + b + "mg's of caffine every" + b " hours during your work time this means around" + b/95 + " cups of coffee or "+ b/35 "cups of Green Tea" + b/47 + "cups of black tea."

}
//1
var list = [12, 6, 9, 42, 11, 102, 44,15];
var soma = 0;

for (var i = 0; i < list.length; i++) {
    soma = soma + list[i];    
}
console.log(soma);

var counter = 0;
while (counter < list.length) {
    soma = soma + list[counter];
    counter++;
}
console.log(soma);

var counter = 0;
do {
    soma = soma + list[counter];
    counter++;
} while (counter < list.length);
console.log(soma);

//2
var number = 0;
var next = true;
while (next) {
    console.log(number);
    if (number === 2 || number === 3) {
        next = false;
    } else {
        var primo = true;
        for (var i = number-1; primo === true && i > 1; i--) {
            primo = number%i === 0? false : true;
        }
        next = primo? false : true;
    }
    number++;
}

var number = 100;
for (var index = 0; index <= number; index++) {
    index < 40 || index > 50? console.log(index) : next;
}
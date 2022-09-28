function greatThanTree(number) {
    var na = [];
    for (var i = 0; i < number.length; i++) {
        if (number[i] > 3) {
            na.push(number[i]);


        }
    }
    return na;
}

function pairs(number) {
    var na = [];
    for (var i = 0; i < number.length; i++) {
        if (number[i]%2 == 0) {
            na.push(number[i]);
        }
    }
    return na;
}

function caps(names){
var na = [];
for (var i = 0; i < names.length; i++) {
    if (names[i][0].toUpperCase() ==  names[i][0]  ) {
        na.push(names[i]);
    }
}
return na;

}


console.log(greatThanTree([1,2,3,4,32,1,5,2]));
console.log(pairs([1,2,3,4,32,1,5,2]));
console.log(caps(["Raul","marco","Sebi"]));

function filter(xs, f){
    na = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i])) {
            na.push(xs[i]);
        }
    }
    return na;

}

function GTT(number){
    return number > 3;
}

console.log(filter([1,2,3,4,5,6,7],GTT));
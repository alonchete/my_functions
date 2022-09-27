
function map (xs, f){
    var n = [];
    for(var i = 0; i < xs.length; i++){
        n.push(f(xs[i]));
    }
    return n;
}

function suma(ns){
    return ns + 1;
}

function mayus(ns){
    return ns.slice(1);
}

var number = [1,2,3,4,5] 


console.log(map(number, suma));
console.log(map(["CARLOS", "MARCO"], mayus));

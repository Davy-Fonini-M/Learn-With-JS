function somaNumeros(arr) {
    arr.reduce(function(prev, current) {
        console.log(prev);
        console.log(current);
        return prev + current;
    })
}

const arr = [3, 5];

console.log(somaNumeros);
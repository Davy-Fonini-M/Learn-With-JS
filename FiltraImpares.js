function filtraNum(arr) {
    return arr.filter(callback);
}

function callback(item){
    return item % 2 !== 0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 1, 5];

console.log(filtraNum(meuArray));
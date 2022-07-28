const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}
//Multiplica o valor maca ou laranja pelo valor do item do array

function mapComThis(arr, thisArg) {
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

//Multiplica esses valores do array pelo valor da maça e a da laranja
const nums =(1,2);

//Sempre diz respeito ao objeto que você ordena no código.
console.log(`this => maçã`, mapComThis(nums,maca));

console.log(`this => laranja`, mapComThis(nums,laranja));


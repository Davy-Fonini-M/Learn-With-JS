function validaArray(arr, num) {
   try{
    if (!arr && !num) throw new ReferenceError("Envie os parâmetros");

    if(Typeof arr !== 'Object') throw new TypeError("O array precisa ser do tipo Object");

    if(Typeof arr !== 'number') throw new TypeError("Num precisa ser do tipo Number");

    if (arr.lenght !== num) throw new RangeError("Tamanho Inválido!");

    return arr;
}
catch(e){
    if(e instanceof  ReferenceError){
        console.log("Este erro é um ReferenceError!")
        console.log(e.message)
    }else if (e instanceof TypeError){
        console.log("Este é um erro TypeError!")
        console.log(e.message)
    }else if (e instanceof RangeError)
    console.log("Este é um erro RangeError!")
    console.log(e.message)
    } else {
        console.log("Tipo de erro não esperado: ' + e");
    }
}

console.log(validaArray([], 5));
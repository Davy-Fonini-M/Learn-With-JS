function calculaidade(anos){
    return `Daqui a ${anos}anos, ${this.nome}terá ${
        this. idade + anos
    } anos de idade.`;
}

const pessoa1= {
    nome: "Dian"
    idade: 26,
};

const pessoa2= {
    nome: "Ney"
    idade: 20,
};

const pessoa3= {
    nome: "Rosangela"
    idade: 22,
};

const pessoa4= {
    nome: "Bernardo"
    idade: 17,
};


const animal= {
    nome: "Zoey"
    idade: 4,
    raca: `Yorkshine`,
};

console.log(calculaIdade.call(pessoa2, 30));
console.log(calculaidade.apply(pessoa1, [5]));


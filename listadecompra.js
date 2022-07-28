const lista = [
    {
        nome= `sabão em pó`,
        preco= 25,
        marca= Omo,
        peso= `1000g`,
    },
    {
        nome= `Cereal Radical`,
        preco= 20,
        marca= Nescau,
        peso= `700g`, 
    },

    {
        nome= `Detergente`,
        preco= 3,
        marca= Ipe,
        peso= `500ml`,
    },

    {
        nome= `Papel Toalha`,
        preco= 12,
        marca= `Supremo`,
        peso= `500g`,
    },
}
];

const saldoSemanal = 250;

function calculaSaldo(saldoSemanal, lista) {
    return lista.reduce(fuction (prev, current, index) {
        console.log('rodada', index + 1);
        console.log ({ prev })
        console.log ({ current })
        return prev - current.preco;
    }, saldoSemanal);
}

console.log(calculaSaldo(saldoSemanal, lista));

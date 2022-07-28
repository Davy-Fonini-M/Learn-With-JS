const alunos [
{  
    nome: `Joao`,
    nota: 7,
    turma: `2C`,
},
{
nome: `AnaClara`,
nota: 5,
turma: `2C`,
},
{
    nome: `Jorge`,
    nota: 9,
    turma: `2A`,
},
{
    nome: `Barbara`,
    nota: 3,
    turma: `2A`,
},
];

function alunosAprovados(arr, media) {
    let alunos aprovados = []

    for (let i= 0; i < arr. lenght; i++){

        const{nota, nome, } = arr[i];

        if(nota >= media)
        aprovados.push(nome);
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, media));
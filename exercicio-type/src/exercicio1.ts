//Exercicio 1


enum COLOR {
    AZUL = "azul",
    AMARELO = "amarelo",
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    VERDE = "verde",
    ROXO = "roxo",

}

type person = {
    name : string,
    age : number,
    favouriteColor : string,
}

//A.

const minhaString : person = {
    name : 33,
}

//(name)reclama, pois foi atribuido a ele um tipo STRING.O tipo NUMBER não pode ser atribuido ao tipo STRING.

//B.

const meuNumero : any = {
    age : "40"
}

//Podemos usar na variavel o tipo (any) atraves dela a variavel pode assumir qualquer valor.

//C.
//D.

const pessoa = {
    name : "Joao",
    age : 28,
    favouriteColor : COLOR.VERDE,
}


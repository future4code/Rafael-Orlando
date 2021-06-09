//Exercicio 2

//A.


type Statitics = {
    maior : number,
    menor : number,
    media : number,
}

type Amostra = {
    numeros : number[],
    obterEstatiticas : (numeros : number[]) => number,
}


function obterEstatisticas(numeros : number[]) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    //B.

    const estatisticas = (maior : number, menor : number, media : number) {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//C.

const amostraDeIdades = {
    numeros : [21, 18, 65, 44, 15, 18],
    obterEstatisticas : obterEstatisticas
}

console.log(amostraDeIdades)











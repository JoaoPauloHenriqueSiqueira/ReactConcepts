function gerarNumeros(qtd) {

    let i = 0;
    let numeros = [];
    while (i < qtd) {
        let rndInt = Math.floor(Math.random() * 10) + 1

        if (!numeros.includes(rndInt)) {
            numeros.push(rndInt);
        }

        i++;
    }
    return numeros.sort();

}

console.log(gerarNumeros(10));

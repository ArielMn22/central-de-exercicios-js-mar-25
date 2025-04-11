function exemploFor () {

    // FOR
    // 1o = Declarar contador.
    // 2o = Condição (enquanto).
    // 3o = Incremento.
    for (let contador = 1; contador <= 5; contador++) {
    
        alert(contador);
    
    }

}

function exemploWhile () {

    let contador = 1;

    while (contador <= 5) {

        console.log(contador);
        contador ++;

    }


}

function exemploDoWhile () {

    let contador = 1;

    do {

        alert(contador);
        contador++;

    } while (contador <= 5);

}

function intermediario02 () {

    let numeroAleatorio = Math.floor(Math.random() * (100 - 1) + 1);

    let tentativa;

    while (tentativa != numeroAleatorio) {

        tentativa = prompt("Insira um número: ");

        if (numeroAleatorio > tentativa) {

            alert("Número aleatório é maior.");

        } else if (numeroAleatorio < tentativa) {

            alert("Número aleatório é menor.");

        } else {

            alert("Você acertou!");

        }

    }

}


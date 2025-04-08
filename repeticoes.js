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
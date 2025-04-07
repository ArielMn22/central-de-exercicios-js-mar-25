function exercicio01 () {

    let idade = prompt("Digite sua idade:");

    if (idade >= 18) {

        alert("Você é maior de idade.");

    } else {

        alert("Você é menor de idade.");

    }

}

function intermediario01comif () {

    let n1 = Number(prompt("Digite um número: "));
    let n2 = Number(prompt("Digite outro número: "));

    let operacao = prompt("Digite a operação: ");

    let resultado;

    // IF
    if (operacao == "+") {
        resultado = n1 + n2;
    } else if (operacao == "-") {
        resultado = n1 - n2;
    } else if (operacao == "*") {
        resultado = n1 * n2;
    } else if (operacao == "/") {
        resultado = n1 / n2;
    }

    alert(resultado);

}

function intermediario01comswitch () {

    let n1 = Number(prompt("Digite um número: "));
    let n2 = Number(prompt("Digite outro número: "));

    let operacao = prompt("Digite a operação: ");

    let resultado;

    // SWITCH
    switch (operacao) {
        case "+":
            resultado = n1 + n2;
            break;
        case "-":
            resultado = n1 - n2;
            break;
        case "*":
            resultado = n1 * n2;
            break;
        case "/":
            resultado = n1 / n2;
            break;
    
        default:
            alert("Operação inválido. Saia daqui agora!")
            break;
    }

    alert(resultado);

}

intermediario01();
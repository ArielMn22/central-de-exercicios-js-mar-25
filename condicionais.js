function exercicio01 () {

    let idade = prompt("Digite sua idade:");

    if (idade >= 18) {

        alert("Você é maior de idade.");

    } else {

        alert("Você é menor de idade.");

    }

}

function intermediario01 () {

    let n1 = Number(prompt("Digite um número: "));
    let n2 = Number(prompt("Digite outro número: "));

    let operacao = prompt("Digite a operação: ");

    let resultado;

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

intermediario01();
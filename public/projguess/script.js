
numero_aleatorio = Math.floor(Math.random() * 100);

// pega o input
var input = document.getElementById("numero");

// executa a funcao quando o usuario apertar o botao
input.addEventListener("keypress", function (event) {
    // se o usuario apertar enter
    if (event.key === "Enter") {
        // cancela a acao padrao, se necessario
        event.preventDefault();
        // ativa o elemento de botao com o click
        document.getElementById("botaoguess").click();
    }
});

function adivinhar() {
    let numero = parseInt(document.getElementById("numero").value);

    if (numero > numero_aleatorio) {
        document.getElementById("resposta").innerHTML = "Número muito grande...";
        document.getElementById("numerosmaiores").append(numero + ", ");
        document.getElementById("resposta").style.color = "rgb(255, 213, 213)";
        document.getElementById("resposta").style.backgroundColor = "red";
        document.getElementById("numerosmaiores").style.backgroundColor = "steelblue";
        document.getElementById("numero").value = '';
        document.getElementById("numero").focus();
    }
    else if (numero < numero_aleatorio) {
        document.getElementById("resposta").innerHTML = "Número muito pequeno...";
        document.getElementById("numerosmenores").append(numero + ", ");
        document.getElementById("resposta").style.color = "rgb(255, 213, 213)";
        document.getElementById("resposta").style.backgroundColor = "red";
        document.getElementById("numerosmenores").style.backgroundColor = "steelblue";
        document.getElementById("numero").value = '';
        document.getElementById("numero").focus();
    }
    else if (numero === numero_aleatorio) {
        document.getElementById("resposta").innerHTML = "Você acertou! Parabéns!";
        document.getElementById("resposta").style.color = "rgb(210, 255, 212)"
        document.getElementById("resposta").style.backgroundColor = "green"

    }
}
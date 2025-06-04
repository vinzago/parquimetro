class Parquimetro {
    constructor() {
        this.valorPor30Min = 1.00;
    }

    calcularTempo() {
        const valor = parseFloat(document.getElementById("valorInserido").value);
        const tempoElemento = document.getElementById("tempo");
        const trocoElemento = document.getElementById("troco");
        const mensagemElemento = document.getElementById("mensagem");

        // Limpa resultados anteriores
        tempoElemento.textContent = "";
        trocoElemento.textContent = "";
        mensagemElemento.textContent = "";

        if (isNaN(valor) || valor < 1.00) {
            mensagemElemento.textContent = "⚠️ Valor insuficiente. Insira no mínimo R$1,00.";
            return;
        }

        let tempo = 0;
        let troco = 0;

        if (valor >= 3) {
            tempo = 120; // 2 horas máximo
            troco = valor - 3;
        } else if (valor >= 2) {
            tempo = 60;
            troco = valor - 2;
        } else {
            tempo = 30;
            troco = valor - 1;
        }

        tempoElemento.textContent = `Tempo de Estacionamento: ${tempo} minutos.`;
        trocoElemento.textContent = `Troco: R$ ${troco.toFixed(2)}.`;
        mensagemElemento.textContent = "Operação realizada com sucesso!";
    }
}

// Instancia do objeto
const parquimetro = new Parquimetro();

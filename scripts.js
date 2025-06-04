class Parquimetro {
    constructor() {
        this.preco30min = 1.00;
        this.preco60min = 1.75;
        this.preco120min = 3.00;
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

        if (isNaN(valor) || valor < this.preco30min) {
            mensagemElemento.textContent = "Valor insuficiente. Insira no mínimo R$1,00.";
            return;
        }

        let tempo = 0;
        let troco = 0;

        if (valor >= this.preco120min) {
            tempo = 120;
            troco = (valor - this.preco120min).toFixed(2);
        } else if (valor >= this.preco60min) {
            tempo = 60;
            troco = (valor - this.preco60min).toFixed(2);
        } else {
            tempo = 30;
            troco = (valor - this.preco30min).toFixed(2);
        }

        tempoElemento.textContent = `Tempo de Estacionamento: ${tempo} minutos.`;
        trocoElemento.textContent = `Troco: R$ ${troco}.`;
        mensagemElemento.textContent = "Operação realizada com sucesso!";
    }
}

// Instancia do objeto
const parquimetro = new Parquimetro();



// RESOLUCAO MAIS AVANÇADA
class ValidadorCPF {
    constructor(cpf) {
        this.cpfOriginal = cpf;
        this.cpfLimpo = this.limpar(cpf);
    }

    limpar(cpf) {
        return cpf.replace(/\D+/g, '');
    }

    ehSequencia() {
        return this.cpfLimpo.split('').every(char => char === this.cpfLimpo[0]);
    }

    gerarNovoCPF() {
        const cpfParcial = this.cpfLimpo.slice(0, 9);
        const digito1 = this.#criarDigito(cpfParcial);
        const digito2 = this.#criarDigito(cpfParcial + digito1);
        return cpfParcial + digito1 + digito2;
    }

    #criarDigito(cpfParcial) {
        const total = Array.from(cpfParcial).reduce((soma, num, index) => {
            const peso = cpfParcial.length + 1 - index;
            return soma + Number(num) * peso;
        }, 0);

        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }

    validar() {
        if (!this.cpfLimpo || this.cpfLimpo.length !== 11) return false;
        if (this.ehSequencia()) return false;

        const novoCpf = this.gerarNovoCPF();
        return novoCpf === this.cpfLimpo;
    }
}

const cpfsValidos = [
    '705.484.450-52',
    '070.987.720-03',
    '123.456.789-09', // inválido mas famoso em exemplo
];

for (const cpf of cpfsValidos) {
    const validador = new ValidadorCPF(cpf);
    console.log(`${cpf} => ${validador.validar()}`);
}

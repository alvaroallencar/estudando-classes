class Atleta {
    constructor(nome, forca, defesa) {
        this.nome = nome;
        this.forca = forca;
        this.defesa = defesa;
    }
}

class Lutador extends Atleta {
    constructor(nome, forca, defesa) {
        super(nome, forca, defesa);
        this.vitorias = 0;
    }
}

class Arena {
    static contadorDeBatalhas = 0;

    static batalha(lutador1, lutador2) {
        if (lutador1.forca > lutador2.defesa && lutador1.defesa > lutador2.forca) {
            lutador1.vitorias++;
            this.contadorDeBatalhas++;
            return `${lutador1.nome} venceu ${lutador2.nome}, acumulando ${lutador1.vitorias} vitória(s). Esta arena já recebeu ${this.contadorDeBatalhas} luta(s).`;
        } else if (lutador2.forca > lutador1.defesa && lutador2.defesa > lutador1.forca) {
            lutador2.vitorias++;
            this.contadorDeBatalhas++;
            return `${lutador2.nome} venceu ${lutador1.nome}, acumulando ${lutador2.vitorias} vitória(s). Esta arena já recebeu ${this.contadorDeBatalhas} luta(s).`;
        } else {
            this.contadorDeBatalhas++;
            return `Houve um empate. Esta arena já recebeu ${this.contadorDeBatalhas} luta(s).`
        }
    }
}

let goku = new Lutador("Goku", 50, 55);

let usumakiNaruto = new Lutador("Naruto", 60, 55);

console.log(Arena.batalha(usumakiNaruto, goku));


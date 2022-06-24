class Bijuus {
    static ListaBijuus = [
        { nome: "Shukaku", tails: 1 },
        { nome: "Matatabi", tails: 2 },
        { nome: "Isobu", tails: 3 },
        { nome: "Son Goku", tails: 4 },
        { nome: "Kokuo", tails: 5 },
        { nome: "Saiken", tails: 6 },
        { nome: "Chomei", tails: 7 },
        { nome: "Gyuki", tails: 8 },
        { nome: "Kurama", tails: 9 },
    ]

    static removerBijuu(nomeBijuu) {
        const indice = this.ListaBijuus.findIndex((bijuu) => bijuu.nome === nomeBijuu);
        const bijuuRemovida = this.ListaBijuus.splice(indice, 1);
        return bijuuRemovida;
    }

    static adicionarBijuu(bijuu) {
        this.ListaBijuus.push(bijuu);
        return `A ${bijuu.nome} foi adicionada a lista`;
    }
}

class Ninja {
    constructor(nome, idade, genero, bijuu = undefined) {
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
        this.bijuu = Bijuus.ListaBijuus.find((oneBijuu) => oneBijuu.nome === bijuu);
        this.ninjutsu = [];
    }

    novoJutsu(jutsu) {
        this.ninjutsu.push(jutsu);
        return `O jutsu ${jutsu} foi aprendido por ${this.nome}`;
    }

    usarJutsu(jutsuAUtilizar) {
        let jutsuUtilizado = this.ninjutsu.find((jutsu) => jutsu === jutsuAUtilizar);
        if (jutsuUtilizado) {
            return `O jutsu ${jutsuUtilizado} foi utilizado`;
        } else {
            return `${this.nome} não domina o jutsu ${jutsuAUtilizar}`;
        }
    }
}

class Hokage extends Ninja {
    constructor(nome, idade, genero, bijuu = undefined) {
        super(nome, idade, genero, bijuu);
    }

    selarBijuu(ninja, bijuuASelar) {
        if (ninja.bijuu) {
            const bijuuRemovida = ninja.bijuu;
            ninja.bijuu = undefined;
            Bijuus.adicionarBijuu(bijuuRemovida);
            return `A Bijuu ${bijuuRemovida.nome} foi removida de ${ninja.nome} e adicionada a lista`;
        } else {
            const bijuuEncontrada = Bijuus.ListaBijuus.find((bijuu) => bijuu.nome === bijuuASelar);
            ninja.bijuu = bijuuEncontrada;
            Bijuus.removerBijuu(bijuuASelar);
            return `A Bijuu ${bijuuASelar} foi selada em ${ninja.nome} e removida da lista`;
        }
    }
}

let sakura = new Ninja("Sakura", 18, "Feminino");

let naruto = new Hokage("Naruto", 18, "Masculino", "Kurama");

console.log(naruto.novoJutsu("Rasengan"));

console.log(naruto.usarJutsu("Rasengan"));

console.log(naruto.usarJutsu("Edo Tensei"));

console.log(naruto.selarBijuu(sakura, "Saiken"));

Bijuus.ListaBijuus.forEach((bijuu) => console.log(bijuu));

console.log(naruto.selarBijuu(sakura, "Saiken"));

Bijuus.ListaBijuus.forEach((bijuu) => console.log(bijuu));



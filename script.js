class Veicolo {
    marca;
    anno;
    colore;
    porte;
    carburante;

    constructor(marca, anno, colore,) {
        this.marca = marca;
        this.anno = anno;
        this.colore = colore;
    }

    informazioni() {
        return `${this.marca} ${this.anno} ${this.colore}`
    }
}

const new_car = new Veicolo ('Fiat', 2019, 'blu');
console.log(new_car.informazioni());


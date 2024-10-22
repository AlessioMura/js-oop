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

    calcolaEta() {
        return current_year - `${this.anno}`;
    }
}

const new_car = new Veicolo ('Fiat', 2019, 'blu');
console.log(new_car.informazioni());

const current_year = new Date().getFullYear();
console.log(new_car.calcolaEta())
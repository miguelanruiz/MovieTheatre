class Persona {
    constructor(nombre, fotografia, descripcion, series) {
        this.nombre = nombre;
        this.fotografia = fotografia;
        this.descripcion = descripcion;
        this.series = series;
    }
    linkSerie(serie) {
        var _a;
        if (this.series && this.series.length > 0) {
            this.series.forEach((e, index) => {
                if (e === serie) {
                    console.log("Esta serie ya se encuentra registrada.");
                    return;
                }
            });
        }
        (_a = this.series) === null || _a === void 0 ? void 0 : _a.push(serie);
        console.log("Nueva serie registrada:");
        serie.printDetails();
        console.log("\n");
    }
    unlinkSerie(index) {
        if (this.series && index > 0 && index <= this.series.length) {
            this.series.splice(index - 1, 1);
        }
        else {
            console.log("No hay series registradas para esta persona, intente con un reporte primero.");
        }
    }
}
class Actor extends Persona {
    constructor(nombre, fotografia, descripcion, personaje, protagonista = false, series) {
        super(nombre, fotografia, descripcion, series);
        this.personaje = personaje;
        this.protagonista = protagonista;
    }
    printDetails() {
        console.log("Detalle de actor");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Fotografia: ${this.fotografia}`);
        console.log(`Descripcion: ${this.descripcion}`);
        console.log(`Personaje: ${this.personaje}`);
        console.log(`Protgonista: ${this.protagonista ? "Si" : "No"}`);
    }
}
class Director extends Persona {
    constructor(nombre, fotografia, descripcion, subdirector, series, rating) {
        super(nombre, fotografia, descripcion, series);
        this.subdirector = subdirector;
        this.rating = rating;
    }
    printDetails() {
        console.log("Detalle de Director");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Fotografia: ${this.fotografia}`);
        console.log(`Descripcion: ${this.descripcion}`);
        console.log(`Puntuacion: ${this.rating ? this.rating : 0}`);
    }
}
export { Actor, Director };

class Persona {
    nombre;
    fotografia;
    descripcion;
    series;
    constructor(nombre, fotografia, descripcion, series) {
        this.nombre = nombre;
        this.fotografia = fotografia;
        this.descripcion = descripcion;
        this.series = series;
    }
    linkSerie(serie) {
        if (this.series && this.series.length > 0) {
            this.series.forEach((e, index) => {
                if (e === serie) {
                    console.log("Esta serie ya se encuentra registrada.");
                    return;
                }
            });
        }
        this.series?.push(serie);
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
    personaje;
    protagonista;
    constructor(nombre, fotografia, descripcion, personaje, protagonista = false, series) {
        super(nombre, fotografia, descripcion, series);
        this.personaje = personaje;
        this.protagonista = protagonista;
    }
    printDetails() {
    }
}
class Director extends Persona {
    subdirector;
    rating;
    constructor(nombre, fotografia, descripcion, subdirector, series, rating) {
        super(nombre, fotografia, descripcion, series);
        this.subdirector = subdirector;
        this.rating = rating;
    }
    printDetails() {
    }
}
export { Actor, Director };

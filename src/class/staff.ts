import { Serie } from "./media.js";

abstract class Persona {
    nombre: string;
    fotografia: string;
    descripcion: string;
    series?: Serie[];

    constructor(nombre: string, fotografia: string, descripcion: string, series?: Serie[]) {
        this.nombre = nombre;
        this.fotografia = fotografia;
        this.descripcion = descripcion;
        this.series = series;
    }

    linkSerie(serie: Serie): void {
        if(this.series && this.series.length > 0 ){
            this.series.forEach((e, index) => {
                if(e === serie){
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

    unlinkSerie(index: number): void {
        if (this.series && index > 0 && index <= this.series.length) {
            this.series.splice(index-1, 1);
        }
        else {
            console.log("No hay series registradas para esta persona, intente con un reporte primero.");
        }
    }

    abstract printDetails(): void;
}

class Actor extends Persona {
    personaje: string;
    protagonista?: boolean; 

    constructor(nombre: string, fotografia: string, descripcion: string, personaje: string, protagonista:boolean = false, series?: Serie[]) {
        super(nombre, fotografia, descripcion, series);
        this.personaje = personaje;
        this.protagonista = protagonista;
    }

    printDetails(): void {
        console.log("Detalle de actor");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Fotografia: ${this.fotografia}`);
        console.log(`Descripcion: ${this.descripcion}`);
        console.log(`Personaje: ${this.personaje}`);
        console.log(`Protgonista: ${this.protagonista ? "Si":"No"}`);
    }
}

class Director extends Persona {
    subdirector: string;
    rating?: number;

    constructor(nombre: string, fotografia: string, descripcion: string, subdirector: string, series?: Serie[], rating?: number) {
        super(nombre, fotografia, descripcion, series);
        this.subdirector = subdirector;
        this.rating = rating;
    }

    printDetails(): void {
        console.log("Detalle de Director");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Fotografia: ${this.fotografia}`);
        console.log(`Descripcion: ${this.descripcion}`);
        console.log(`Puntuacion: ${this.rating ? this.rating: 0}`);
    }
}

export { 
    Actor,
    Director
 };
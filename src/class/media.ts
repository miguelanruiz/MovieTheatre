import { Actor, Director } from "./staff.js"; 

enum TYPE {
    ACTOR,
    CATEGORY,
    EPISODE
}

class Categoria {
    nombre: string;
    descripcion: string;

    constructor(nombre: string, descripcion: string){
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    printDetails(): void {
        console.log("Detalle de Categoria");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Sitio: ${this.descripcion}`);
    }
}

class Episodio {
    nombre: string;
    numero: number;
    actores?: Actor[];
    resumen: string;
    duracion: string;

    constructor(nombre: string, numero: number, resumen: string, duracion: string, actores?: Actor[]){
        this.nombre = nombre;
        this.numero = numero;
        this.resumen = resumen;
        this.actores = actores;
        this.duracion = duracion;
    }
}

class Serie {
    nombre: string;
    actores?: Actor[];
    director?: Director;
    categorias?: Categoria[];
    episodios?: Episodio[];

    constructor(nombre: string, categorias?: Categoria[], episodios?: Episodio[]){
        this.nombre = nombre;
        this.categorias = categorias;
        this.episodios = episodios;
    }

    addCategory(element: Categoria): void {
        if (!this.categorias) {
            this.categorias = [];
        }
        const serieExistente = this.categorias.find((s) => s.nombre === element.nombre);
        if (serieExistente) {
            console.log(`La categoria ${element.nombre} ya ha sido registrada.`);
            return;
        }
        this.categorias.push(element);
    }

    addActor(element: Actor): void {
        if (!this.actores) {
            this.actores = [];
        }
        const serieExistente = this.actores.find((s) => s.nombre === element.nombre);
        if (serieExistente) {
            console.log(`La actor ${element.nombre} ya ha sido registrada.`);
            return;
        }
        this.actores.push(element);
    }

    addDirector(element: Director): void {
        if (!this.director) {
            console.log(`Nuevo director ${element.nombre} registrado.`);
        }
        this.director = element;
    }

    addElement(element: Categoria | Episodio | Actor ): void {
        let context: (Categoria | Episodio | Actor)[] | undefined;

        if (!this.episodios) {
            this.episodios = [];
        }
        if (!this.actores) {
            this.actores = [];
        }
        if (!this.categorias) {
            this.categorias = [];
        }

        if(element instanceof Categoria){
            context = this.categorias;
        } else if(element instanceof Episodio){
            context = this.episodios;
        } else {
            context = this.actores;
        }
        
        if(context && context.length > 0 ){
            context.forEach((e, index) => {
                if(e === element){
                    console.log(`Este ${e.constructor.name.toLowerCase()} ya se encuentra registrado.`);
                    return;
                }
            });
        }

        context.push(element);
        console.log(`Elemento ${element.constructor.name.toLowerCase()} registrado correctamente.`);
    }

    removeElement(type: "category" | "episode" | "actor", index: number): void{
        let context: (Categoria | Episodio | Actor)[] | undefined;

        if(type == "category"){
            context = this.categorias;
        } 
        if(type == "episode"){
            context = this.episodios;
        } 
        if(type == "actor"){
            context = this.actores;
        }

        if (context && index > 0 && index <= context.length) {
            context.splice(index-1, 1);
        }
        else {
            console.log(`No se tiene registros para efectuar la eliminacion.`);
        }
    }

    printDetails(type: "all" | "actor" | "director" = "all", index: number = 0): void {
        if(type === "director" && this.director){
            this.director.printDetails();
        } else if (type == "actor"){
            if(index && this.actores){
                this.actores[index].printDetails();
            }
        } else {
            if(this.director){
                this.director.printDetails();
            }

            if(this.actores){
                this.actores.forEach((e,index) => {
                    e.printDetails();
                });
            }
        }
    }

    getCategories(): Categoria[] {
        if (this.categorias){
            return this.categorias;
        }
        return [];
    }
}

export { 
    Serie,
    Categoria,
    Episodio
};
var TYPE;
(function (TYPE) {
    TYPE[TYPE["ACTOR"] = 0] = "ACTOR";
    TYPE[TYPE["CATEGORY"] = 1] = "CATEGORY";
    TYPE[TYPE["EPISODE"] = 2] = "EPISODE";
})(TYPE || (TYPE = {}));
class Categoria {
    constructor(nombre, descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
    printDetails() {
        console.log("Detalle de Categoria");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Sitio: ${this.descripcion}`);
    }
}
class Episodio {
    constructor(nombre, numero, resumen, duracion, actores) {
        this.nombre = nombre;
        this.numero = numero;
        this.resumen = resumen;
        this.actores = actores;
        this.duracion = duracion;
    }
}
class Serie {
    constructor(nombre, categorias, episodios) {
        this.nombre = nombre;
        this.categorias = categorias;
        this.episodios = episodios;
    }
    addCategory(element) {
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
    addActor(element) {
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
    addDirector(element) {
        if (!this.director) {
            console.log(`Nuevo director ${element.nombre} registrado.`);
        }
        this.director = element;
    }
    addElement(element) {
        let context;
        if (!this.episodios) {
            this.episodios = [];
        }
        if (!this.actores) {
            this.actores = [];
        }
        if (!this.categorias) {
            this.categorias = [];
        }
        if (element instanceof Categoria) {
            context = this.categorias;
        }
        else if (element instanceof Episodio) {
            context = this.episodios;
        }
        else {
            context = this.actores;
        }
        if (context && context.length > 0) {
            context.forEach((e, index) => {
                if (e === element) {
                    console.log(`Este ${e.constructor.name.toLowerCase()} ya se encuentra registrado.`);
                    return;
                }
            });
        }
        context.push(element);
        console.log(`Elemento ${element.constructor.name.toLowerCase()} registrado correctamente.`);
    }
    removeElement(type, index) {
        let context;
        if (type == "category") {
            context = this.categorias;
        }
        if (type == "episode") {
            context = this.episodios;
        }
        if (type == "actor") {
            context = this.actores;
        }
        if (context && index > 0 && index <= context.length) {
            context.splice(index - 1, 1);
        }
        else {
            console.log(`No se tiene registros para efectuar la eliminacion.`);
        }
    }
    printDetails(type = "all", index = 0) {
        if (type === "director" && this.director) {
            this.director.printDetails();
        }
        else if (type == "actor") {
            if (index && this.actores) {
                this.actores[index].printDetails();
            }
        }
        else {
            if (this.director) {
                this.director.printDetails();
            }
            if (this.actores) {
                this.actores.forEach((e, index) => {
                    e.printDetails();
                });
            }
        }
    }
    getCategories() {
        if (this.categorias) {
            return this.categorias;
        }
        return [];
    }
}
export { Serie, Categoria, Episodio };

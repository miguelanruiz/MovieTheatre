class Categoria {
    nombre;
    descripcion;
    constructor(nombre, descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}
class Episodio {
    nombre;
    numero;
    actores;
    resumen;
    duracion;
    constructor(nombre, numero, resumen, duracion, actores) {
        this.nombre = nombre;
        this.numero = numero;
        this.resumen = resumen;
        this.actores = actores;
        this.duracion = duracion;
    }
}
class Serie {
    nombre;
    categorias;
    episodios;
    constructor(nombre, categorias, episodios) {
        this.nombre = nombre;
        this.categorias = categorias;
        this.episodios = episodios;
    }
    addEpisodio(episodio) {
        if (!this.episodios) {
            this.episodios = [];
        }
        const episodioExistente = this.episodios.find((e) => e.nombre === episodio.nombre);
        if (episodioExistente) {
            console.log(`El episodio ${episodio.nombre} ya ha sido registrado.`);
            return;
        }
        this.episodios.push(episodio);
    }
    removeEpisodio(index) {
        if (this.episodios && index > 0 && index <= this.episodios.length) {
            this.episodios.splice(index - 1, 1);
        }
        else {
            console.log("No hay episodios registrados para esta serie, intente con un reporte primero.");
        }
    }
    addCategoria(categoria) {
        if (!this.categorias) {
            this.categorias = [];
        }
        const categoriaExistente = this.categorias.find((c) => c.nombre === categoria.nombre);
        if (categoriaExistente) {
            console.log(`El episodio ${categoria.nombre} ya ha sido registrado.`);
            return;
        }
        this.categorias.push(categoria);
    }
    removeCategoria(index) {
        if (this.categorias && index > 0 && index <= this.categorias.length) {
            this.categorias.splice(index - 1, 1);
        }
        else {
            console.log("No hay categorias registradas para esta episodio, intente con un reporte primero.");
        }
    }
    printDetails() {
    }
}
export { Serie, Categoria, Episodio };

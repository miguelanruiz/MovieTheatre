class Plan {
    constructor(nombre, precio, descripcion, capacidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.capacidad = capacidad;
    }
    printDetails() {
        console.log(`   Plan ${this.nombre}`);
        console.log(`   $ ${this.precio}`);
        console.log(`   ${this.descripcion}`);
        console.log(`   ${this.capacidad} pantallas`);
    }
}
class Plataforma {
    constructor(nombre, sitio, series, planes) {
        this.nombre = nombre;
        this.sitio = sitio;
        this.series = series;
        this.planes = planes;
    }
    printPlatformDetails() {
        console.log("Detalle de Plataforma");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Sitio: ${this.sitio}`);
        this.summarizePlans();
        this.summarizeSeries();
    }
    printSeries() {
        this.summarizeSeries();
    }
    printOneSerie(index) {
        if (this.series && this.series[index - 1]) {
            this.series[index - 1].printDetails();
        }
        else {
            console.log("Serie no encontrada.");
        }
    }
    printCategories() {
        if (this.series) {
            this.series.forEach((e, index) => {
                let categories = e.getCategories();
                if (categories.length > 0) {
                    console.log(`Detalles de categorias`);
                    categories.forEach((category, index) => {
                        category.printDetails();
                    });
                }
                else {
                    console.log("No existen aun categorias asociadas a las series de esta platafomra.");
                }
            });
        }
        else {
            console.log("Series no registradas.");
        }
    }
    addSerie(serie) {
        if (!this.series) {
            this.series = [];
        }
        const serieExistente = this.series.find((s) => s.nombre === serie.nombre);
        if (serieExistente) {
            console.log(`La serie ${serie.nombre} ya ha sido registrada.`);
            return;
        }
        this.series.push(serie);
    }
    removeSerie(index) {
        if (this.series && index > 0 && index <= this.series.length) {
            this.series.splice(index - 1, 1);
        }
        else {
            console.log("No hay series registradas para esta persona, intente con un reporte primero.");
        }
    }
    addPlan(plan) {
        if (!this.planes) {
            this.planes = [];
        }
        const planExistente = this.planes.find((p) => p.nombre === plan.nombre);
        if (planExistente) {
            console.log(`El plan ${plan.nombre} ya ha sido registrado.`);
            return;
        }
        this.planes.push(plan);
    }
    removePlan(index) {
        if (this.planes && index > 0 && index <= this.planes.length) {
            this.planes.splice(index - 1, 1);
        }
        else {
            console.log("No hay series registradas para esta persona, intente con un reporte primero.");
        }
    }
    summarizeSeries() {
        if (this.series && this.series.length > 0) {
            console.log(`La plataforma ${this.nombre} le ofrece las siguientes series:\n`);
            this.series.forEach((e, index) => {
                console.log(`Serie ${index + 1}`);
                e.printDetails();
            });
            console.log(`\nNo olvide visitarnos pronto en ${this.sitio}.\n`);
        }
        else {
            console.log("\n*** Comuniquese con administrador ya que no tiene series registrados.");
        }
    }
    summarizePlans() {
        if (this.planes && this.planes.length > 0) {
            console.log(`La plataforma ${this.nombre} le ofrece los siguientes paquetes:\n`);
            this.planes.forEach((e, index) => {
                console.log(`Plan ${index + 1}`);
                e.printDetails();
            });
            console.log(`\nNo olvide visitarnos pronto en ${this.sitio}.\n`);
        }
        else {
            console.log("\n*** Comuniquese con administrador ya que no tiene planes registrados.");
        }
    }
}
export { Plan, Plataforma };

import { Actor, Director } from "./class/staff.js";
import { Plan, Plataforma } from "./class/platform.js";
import { Episodio, Serie, Categoria } from "./class/media.js";


let Platforms: Plataforma[] = [];

function listAllPlatforms(book: Plataforma[]): void{
    book.forEach((e, index) => {
        console.log(`Detalles generales\nPlataforma #${index+1}: ${e.nombre}`);
        e.printPlatformDetails();
    });
}

function getOnePlatformDetail(book: Plataforma[],index: number): void{
    if(book && book[index-1] instanceof Plataforma ){
        book[index-1].printPlatformDetails();
    } else {
        console.log("Plataforma no encontrada.");
    }
}

const actor1 = new Actor(
    "Cedric Thrones",
    "gameofthrones.jpg",
    "Una serie épica de fantasía",
    "Jon Snow",
    true
);

const actor2 = new Actor(
    "Alexei Things",
    "strangerthings.jpg",
    "Una serie de misterio y ciencia ficción",
    "Eleven",
    true
);

const actor3 = new Actor(
    "Juan Fernando Bad",
    "breakingbad.jpg",
    "Un profesor de química se convierte en narcotraficante",
    "Walter White"
);  

const episodio1 = new Episodio(
    "Winter Is Coming",
    1,
    "Los Stark se preparan para el invierno y la llegada de los Caminantes Blancos.",
    "00:58:00"
);

const episodio2 = new Episodio(
    "The Red Wedding",
    9,
    "Una boda se convierte en una masacre sangrienta.",
    "01:05:00"
);

const episodio3 = new Episodio(
    "Ozymandias",
    14,
    "Walter White enfrenta las consecuencias de sus acciones.",
    "00:48:00"
);

// Creación de instancias de series basadas en el mundo real
const serie1 = new Serie(
    "Game of Thrones"
);

const serie2 = new Serie(
    "Breaking Bad"
);

const plataforma1 = new Plataforma("Netflix","www.netflix.com");
const plataforma2 = new Plataforma("Star+","www.starfox.com");

Platforms.push(plataforma1);
Platforms.push(plataforma2);

const planNetflixBasico = new Plan(
    "Básico",
    9.99,
    "Acceso a contenido en calidad estándar",
    1
);

const planNetflixEstandar = new Plan(
    "Estándar",
    13.99,
    "Acceso a contenido en calidad HD",
    2
);

const planNetflixPremium = new Plan(
    "Premium",
    17.99,
    "Acceso a contenido en calidad Ultra HD",
    4
);

const planDisneyBasico = new Plan(
    "Básico",
    7.99,
    "Acceso a contenido en calidad estándar",
    1
);

const planDisneyPremium = new Plan(
    "Premium",
    11.99,
    "Acceso a contenido en calidad Ultra HD",
    4
);


plataforma1.addPlan(planNetflixBasico);
plataforma1.addPlan(planNetflixBasico);
plataforma1.addPlan(planNetflixEstandar);
plataforma1.addPlan(planNetflixPremium);
plataforma2.addPlan(planNetflixBasico);
plataforma2.addPlan(planNetflixBasico);
plataforma2.addPlan(planNetflixEstandar);
plataforma2.addPlan(planNetflixPremium);

serie1.addElement(actor1);
serie1.addElement(actor2);
serie1.addElement(episodio1);
serie1.addElement(episodio2);

serie1.addCategory(new Categoria("Accion","Mucho movimiento"));
serie1.addCategory(new Categoria("Suspenso","Mucho quietud"));

serie2.addCategory(new Categoria("Comedia","Mucho movimiento"));
serie2.addCategory(new Categoria("Drama","Mucho quietud"));

serie1.addDirector(new Director("Fabricio Cabral","Fabricio posando","Calidoso","Ninguno"));
serie2.addDirector(new Director("Armando Castillo","Armando posando","Sencillo y amigable","Ninguno"));

plataforma1.addSerie(serie1);
plataforma1.addSerie(serie2);
plataforma2.addSerie(serie1);
plataforma2.addSerie(serie2);

console.log("\n\n\nDetalle todas las plataformas\n\n\n");
listAllPlatforms(Platforms);
console.log("\n\n\nDetalle plataforma 1\n\n\n");
getOnePlatformDetail(Platforms,1);
console.log("\n\n\nCategorias plataforma 1\n\n\n");
Platforms[1].printCategories();
console.log("\n\n\nSeries plataforma 1\n\n\n");
Platforms[1].printSeries();
console.log("\n\n\nDetalle de serie 1 plataforma 1\n\n\n");
Platforms[1].printOneSerie(1);
console.log("\n\n\nDetalle de actor 1 serie 1\n\n\n");
serie1.printDetails("actor",1);
console.log("\n\n\nDetalle de director serie 1\n\n\n");
serie1.printDetails("director");
console.log("\n\n\nDetalle de actores y directores serie 1\n\n\n");
serie1.printDetails("all");
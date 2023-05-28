"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const staff_1 = require("./class/staff");
const platform_1 = require("./class/platform");
const media_1 = require("./class/media");
const actor1 = new staff_1.Actor("Cedric Thrones", "gameofthrones.jpg", "Una serie épica de fantasía", "Jon Snow", true);
const actor2 = new staff_1.Actor("Alexei Things", "strangerthings.jpg", "Una serie de misterio y ciencia ficción", "Eleven", true);
const actor3 = new staff_1.Actor("Juan Fernando Bad", "breakingbad.jpg", "Un profesor de química se convierte en narcotraficante", "Walter White");
const episodio1 = new media_1.Episodio("Winter Is Coming", 1, "Los Stark se preparan para el invierno y la llegada de los Caminantes Blancos.", "00:58:00");
const episodio2 = new media_1.Episodio("The Red Wedding", 9, "Una boda se convierte en una masacre sangrienta.", "01:05:00");
const episodio3 = new media_1.Episodio("Ozymandias", 14, "Walter White enfrenta las consecuencias de sus acciones.", "00:48:00");
// Creación de instancias de series basadas en el mundo real
const serie1 = new media_1.Serie("Game of Thrones");
const serie2 = new media_1.Serie("Breaking Bad");
const plataforma1 = new platform_1.Plataforma("Netflix", "www.netflix.com");
const plataforma2 = new platform_1.Plataforma("Star+", "www.starfox.com");
const planNetflixBasico = new platform_1.Plan("Básico", 9.99, "Acceso a contenido en calidad estándar", 1);
const planNetflixEstandar = new platform_1.Plan("Estándar", 13.99, "Acceso a contenido en calidad HD", 2);
const planNetflixPremium = new platform_1.Plan("Premium", 17.99, "Acceso a contenido en calidad Ultra HD", 4);
const planDisneyBasico = new platform_1.Plan("Básico", 7.99, "Acceso a contenido en calidad estándar", 1);
const planDisneyPremium = new platform_1.Plan("Premium", 11.99, "Acceso a contenido en calidad Ultra HD", 4);
plataforma1.addPlan(planNetflixBasico);
plataforma1.addPlan(planNetflixBasico);
plataforma1.addPlan(planNetflixEstandar);
plataforma1.addPlan(planNetflixPremium);
plataforma1.summarizePlans();
const startTime = new Date();
startTime.setHours(9, 0, 0); // Hora inicial: 09:00:00
const durationMinutes = 90; // Duración de 90 minutos
const endTime = new Date(startTime.getTime() + durationMinutes * 60000); // Suma la duración en milisegundos
console.log(endTime.toTimeString().split(' ')[0]); // Resultado: "10:30:00"

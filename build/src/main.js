import { Actor } from "./class/staff";
import { Plan, Plataforma } from "./class/platform";
import { Episodio, Serie } from "./class/media";
const actor1 = new Actor("Cedric Thrones", "gameofthrones.jpg", "Una serie épica de fantasía", "Jon Snow", true);
const actor2 = new Actor("Alexei Things", "strangerthings.jpg", "Una serie de misterio y ciencia ficción", "Eleven", true);
const actor3 = new Actor("Juan Fernando Bad", "breakingbad.jpg", "Un profesor de química se convierte en narcotraficante", "Walter White");
const episodio1 = new Episodio("Winter Is Coming", 1, "Los Stark se preparan para el invierno y la llegada de los Caminantes Blancos.", "00:58:00");
const episodio2 = new Episodio("The Red Wedding", 9, "Una boda se convierte en una masacre sangrienta.", "01:05:00");
const episodio3 = new Episodio("Ozymandias", 14, "Walter White enfrenta las consecuencias de sus acciones.", "00:48:00");
// Creación de instancias de series basadas en el mundo real
const serie1 = new Serie("Game of Thrones");
const serie2 = new Serie("Breaking Bad");
const plataforma1 = new Plataforma("Netflix", "www.netflix.com");
const plataforma2 = new Plataforma("Star+", "www.starfox.com");
const planNetflixBasico = new Plan("Básico", 9.99, "Acceso a contenido en calidad estándar", 1);
const planNetflixEstandar = new Plan("Estándar", 13.99, "Acceso a contenido en calidad HD", 2);
const planNetflixPremium = new Plan("Premium", 17.99, "Acceso a contenido en calidad Ultra HD", 4);
const planDisneyBasico = new Plan("Básico", 7.99, "Acceso a contenido en calidad estándar", 1);
const planDisneyPremium = new Plan("Premium", 11.99, "Acceso a contenido en calidad Ultra HD", 4);
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

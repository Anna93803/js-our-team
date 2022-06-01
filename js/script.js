// Per la pagina ‘Chi siamo’ del nostro sito aziendale, dobbiamo sviluppare la sezione “Il nostro team”.
// Definiamo un array di oggetti che rappresentano i membri del team.
// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.


// Milestone 1:
// stampare in console l’elenco dei membri del team, scrivendo separatamente i dettagli di ciascun componente.

const team = [
    {
        nome: "Wayne",
        cognome: "Barnett",
        ruolo: "Founder & Ceo",
        foto: "wayne-barnett-fouder-ceo.jpg",
    },
    {
        nome: "Angela",
        cognome: "Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter",
        cognome: "Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela",
        cognome: "Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scott",
        cognome: "Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara",
        cognome: "Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg",
    }
];

// console.log(team);

for(let i = 0; i < team.length; i++) {

    const componenteTeam = team[i];
    console.log(componenteTeam);
}
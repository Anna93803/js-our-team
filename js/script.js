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
        foto: "wayne-barnett-founder-ceo.jpg",
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


// Milestone 2:

// stampare i dati all’interno di un contenitore nella pagina html in modo dinamico
// creando per ciascun membro del team un elemento html che conterrà i suoi dati.
// recupero il container dall'html
const containerTeam = document.querySelector(".team-container");

// faccio un ciclo for per stampare a schermo i vari componenti del team
for(let i = 0; i < team.length; i++) {
    containerTeam.append(createContent(team[i]));
}
console.log(containerTeam);

// creo una funzione per le card
function createContent (team) {

    // creo i vari div e poi ci aggiungo la classe e stampo
    const teamCard = document.createElement("div");
    teamCard.classList.add("team-card");

    const cardImage = document.createElement("div");

    const image = document.createElement("img");
    image.classList.add("card-image");
    image.src = `img/${team.foto}`;
    image.alt = team.nome, team.cognome;

    const cardText = document.createElement("div");
    cardText.classList.add("card-text");
    cardText.innerHTML = `<h3>${team.nome} ${team.cognome}</h3>
                            <p>${team.ruolo}</p>`;

    cardImage.append(image);
    teamCard.append(cardImage);
    teamCard.append(cardText);

    return teamCard;

};

console.log(createContent());

// BONUS
// stilizziamo la sezione realizzando le card di ciascun membro del team, come nel mockup allegato.
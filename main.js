/* Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
nome autore,
foto profilo,
data,
testo del post,
immagine (non tutti i post devono avere una immagine) [quindi gestisco il caso],
numero di likes.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
- Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.
Consigli del giorno:
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
Ragioniamo come sempre a step.
Prima scriviamo nei commenti la logica in italiano e poi traduciamo in codice.
console.log() è nostro amico. :hug:
Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole. */

// array con informazioni base
 var Arrposts = [
 {
    "nome" : "Luke",
    "foto" : "img/avatar-1-300x300.png",
    "data" : "oggi",
    "testo" : " Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto.",
    "immagine" : "img/543-300x300.jpg",
    "like" : "Mi piace",
    "nLike" : "piace a "
},

{
    "nome" : "George",
    "foto" : "img/avatar-1-300x300.png",
    "data" : "oggi",
    "testo" : " Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto.",
    "immagine" : "img/543-300x300.jpg",
    "like" : "Mi piace",
    "nLike" : "piace a "
} 
]

console.log(Arrposts);
//creo un nuovo membro ai posts
 var newMember = [
{
    "nome" : "Martin",
    "foto" : "img/avatar-1-300x300.png",
    "data" : "oggi",
    "testo" : " Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto.",
    "immagine" : "img/543-300x300.jpg",
    "like" : "Mi piace",
    "nLike" : "piace a "
}
] 
//aggiungo il nuovo membro ai posts
Arrposts.push(newMember)
console.log(Arrposts);

//Destructuring per prendere delle proprietà di un oggetto e inserirle in variabili
const {nome, foto, data, testo, immagine, like, nLike} = Arrposts;

console.log(Arrposts);

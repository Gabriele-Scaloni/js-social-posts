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
    "foto" : "img/180-1809318_picture-300-x-300-pixel.png",
    "data" : "oggi",
    "testo" : " Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto.",
    "immagine" : "img/nine-300x300-halloween-web-banners-260nw-84800977.jpg",
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
    "nLike" : " "
}
] 
//aggiungo il nuovo membro ai posts
Arrposts.push(newMember)
console.log(Arrposts);

//Destructuring per prendere delle proprietà di un oggetto e inserirle in variabili
const {nome, foto, data, testo, immagine, like, nLike} = Arrposts;

console.log(Arrposts);


for (let i = 0; i < Arrposts.length; i++) {
    const oggetto = Arrposts[i];
    const nome = oggetto.nome;
    const foto = oggetto.foto;
    const data = oggetto.data;
    const testo = oggetto.testo;
    const immagine = oggetto.immagine;
    const like = oggetto.like;
    const nLike = oggetto.nLike;

    document.querySelector(".posts-list").innerHTML += `
    <div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic"${foto}/>
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${nome}</div>
                    <div class="post-meta__time">${data}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${testo}
        <div class="post__image">
        <img src="${immagine}" alt="">
        <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">${like}</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${nLike}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    </div>
    </div>
                `
}



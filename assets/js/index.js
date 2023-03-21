let URLRequest1 =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=vasco%20rossi&type=album";
let musicList;
let musicList2;
let URLRequest2 =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=Lazza&type=album";
let firstCard = document.querySelector("#mainContainer .card");
console.log(firstCard);
let miniCard = document.getElementById("miniCard");

console.log("ciao");
const getMusic = async function () {
  try {
    let response = await fetch(URLRequest1);
    musicList = await response.json();
    console.log(musicList);
    musicList = musicList.data;

    console.log(musicList);
    writeCard(musicList);
  } catch {}
};

const writeCard = function (musicList) {
  musicList.forEach((element) => {
    firstCard.innerHTML = `<div class="row g-0 w-100">
 <div class="col-4">
     <img src="${element.album.cover_medium}" class="img-fluid rounded-start" alt="..." />
 </div>
 <div class="col-8">
     <div class="card-body">
         <h5 class="card-title text-dark">${element.album.title}</h5>
         <p class="card-text text-dark">
         ${element.artist.name}
         </p>
         <p class="card-text">
             <small class="text-muted">Ascolta la canzone di ${element.artist.name}</small>
         </p>
     </div>
 </div>
</div>`;
  });
};

getMusic();
const getMusic2 = async function () {
  try {
    let response = await fetch(URLRequest2);
    musicList2 = await response.json();
    console.log(musicList2);
    musicList2 = musicList2.data;

    console.log(musicList2);
    writeSecondRow(musicList2);
  } catch {}
};

getMusic2();
const writeSecondRow = function (musicList2) {
  for (let i = 0; i < 6; i++) {
    miniCard.innerHTML += `<div class="col col-6 col-lg-4">
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-4">
                    <img src="${musicList2[i].album.cover}" class="img-fluid rounded-start"
                        alt="..." />
                </div>
                <div class="col-8">
                    <h5 class="card-title text-dark">${musicList2[i].title}</h5>
                </div>
            </div>

        </div>
    </div>`;
  }
};

// BARRA DI RICERCA
// Dichiaro variabile per input di ricerca
let searchInputReference = document.getElementById("searchIcon");
let input;

// collego l'evento click alla "button" per l'input search
searchInputReference.addEventListener("click", (e) => {
  e.preventDefault();

  // piccola animazione per far comparire il campo di input da icona a text input in dissolvenza. . .
  let inpuText = document.createElement("input");
  inpuText.style.borderRadius = "30px";
  inpuText.placeholder = "inserisci testo";
  inpuText.style.animation = "slideIn 0.5s forwards";
  inpuText.style.backgroundColor = "black";
  inpuText.style.border = "none";
  inpuText.style.transformOrigin = "top right";
  searchInputReference.replaceWith(inpuText);
});
let fadeAnimate = `@keyframes slideIn {
  from {
    transform: scaleX(0);
    opacity: 0;
  }
  to {
    transform: scaleX(1);
    opacity: 1;
  }
}`;

let inputFade = document.createElement("style");
inputFade.innerHTML = fadeAnimate;
document.head.appendChild(inputFade);

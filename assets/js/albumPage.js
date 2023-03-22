let URLRequest = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

let idRef = new URLSearchParams(window.location.search).get("id");
let queryRef = new URLSearchParams(window.location.search).get("queryREF");
let queryAlbum = new URLSearchParams(window.location.search).get("album");
console.log(queryRef);

let firstCard = document.querySelector("#heroAlbum .card");
let songsList = document.querySelector(".songsList");
let coloredBack = document.getElementsByClassName("hero");
let heroBg = document.querySelector('.heroBg');

console.log(coloredBack);

const writeCard2 = function (choose) {
  choose.forEach((element) => {
    firstCard.innerHTML = `
    <div class="row g-0 w-100 text-light bigCard albumBg">
      <div class="col-4">
        <img src="${element.album.cover_medium}" class="img-fluid rounded-start" alt="..." />
      </div>
      <div class="col-8">
       <div class="card-body">
        <p> ALBUM <p>
           <h5 class="card-title display-1 fw-bold">${element.album.title}</h5>
           <p class="card-text">
               <small class="font-weight-bold">${element.artist.name}</small>
           </p>
       </div>
      </div>
     </div>`;

    heroBg.style.backgroundImage = `url(${element.album.cover_medium})`;
    console.log(heroBg);
  });

  
  choose.forEach((element) => {
    if (element.album.title == queryAlbum) {
      songsList.innerHTML += `<li>${element.title}</li>`;
    }
  });

};

const shownAlbum = async function () {
  let response = await fetch(URLRequest + queryRef + "/" + queryAlbum);
  let choose = await response.json();
  console.log(choose);
  choose = choose.data;
  console.log(choose[0].album.tracklist);
  writeCard2(choose);
};

shownAlbum();

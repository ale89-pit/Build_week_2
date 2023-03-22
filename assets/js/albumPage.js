let URLRequest = "https://striveschool-api.herokuapp.com/api/deezer/album/";

let idRef = new URLSearchParams(window.location.search).get("id");
let queryRef = new URLSearchParams(window.location.search).get("queryREF");
let queryAlbum = new URLSearchParams(window.location.search).get("album");
console.log(queryRef);

let firstCard = document.querySelector("#heroAlbum .card");
let songsList = document.querySelector(".songsList");
let coloredBack = document.getElementsByClassName("hero");
let heroBg = document.querySelector('.heroBg');

console.log(coloredBack);

const writeCard2 = function (tracklist) {
  tracklist.forEach((element) => {
    firstCard.innerHTML = `<div class="row g-0 w-100 text-light">
   <div class="col-4">
    <img src="${element.album.cover_medium}" class="img-fluid rounded-start" alt="..." />
    </a>  
   </div>
   <div class="col-8 noSfo">
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
  tracklist.forEach((element) => {
    if (element.album.title == queryAlbum) {
      songsList.innerHTML += `<li>${element.title}</li>`;
    }
  });

};

const shownAlbum = async function () {
  let response = await fetch(URLRequest + idRef);
  let choose = await response.json();
  console.log("choose", choose);

  let tracklist = choose.tracks.data;
  writeCard2(tracklist);
  console.log("Tracklist", tracklist);
};

// const listTrack = async function (tracklist) {
//   let listTrack2 = await fetch(tracklist);
//   console.log("listTrack", listTrack);
//   let response = await listTrack2.json();
// };
shownAlbum();

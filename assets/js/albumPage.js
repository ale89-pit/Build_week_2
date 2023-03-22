let URLRequest = "https://striveschool-api.herokuapp.com/api/deezer/album/";

let idRef = new URLSearchParams(window.location.search).get("id");
let queryRef = new URLSearchParams(window.location.search).get("queryREF");
let queryAlbum = new URLSearchParams(window.location.search).get("album");
console.log(queryRef);

let firstCard = document.querySelector("#heroAlbum .card");
let songsList = document.querySelector(".songsList");

const writeCard2 = function (tracklist) {
  tracklist.forEach((element) => {
    firstCard.innerHTML = `<div class="row g-0 w-100 text-light bigCard">
   <div class="col-4">
    <img src="${element.album.cover_medium}" class="img-fluid rounded-start" alt="..." />
    </a>  
   </div>
   <div class="col-8">
       <div class="card-body">
           <h5 class="card-title display-1 fw-bold">${element.album.title}</h5>
           <p class="card-text">
           ${element.artist.name}
           </p>
           <p class="card-text">
               <small class="opacity-50">Ascolta la canzone di ${element.artist.name}</small>
           </p>
       </div>
   </div>
  </div>`;
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

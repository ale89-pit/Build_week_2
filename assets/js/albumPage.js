let URLRequest = "https://striveschool-api.herokuapp.com/api/deezer/album/";

let idRef = new URLSearchParams(window.location.search).get("id");
let queryRef = new URLSearchParams(window.location.search).get("queryREF");
let queryAlbum = new URLSearchParams(window.location.search).get("album");
console.log(queryRef);

let firstCard = document.querySelector("#heroAlbum .card");
let songsList = document.querySelector(".songsList");
let coloredBack = document.getElementsByClassName("hero");
let heroBg = document.querySelector(".heroBg");


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
  });

  tracklist.forEach((element, index) => {
    let minutes = Math.floor(element.duration / 60);
    let seconds = element.duration % 60;
    let duration = `${minutes}:${seconds}`;
    if (element.album.title == queryAlbum) {
      songsList.innerHTML += `
      <div class="row align-items-center my-3">
                        <div class="col d-flex align-items-center flex-grow-1">
                            <span class="mx-3">${index+1}</span>
                            <div class="card artistSongCard">
                                <div class="row g-0 align-items-center">
                                    <div class="col-2">
                                        <img src="${element.album.cover_big}" class="img-fluid" alt="...">
                                    </div>
                                    <div class="col-10">
                                        <div class="card-body py-0">
                                            <p class="card-text m-0 songTitle">${element.title}</p>
                                            <span class="streams d-md-none">${element.rank}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col col-4 d-none d-md-block">
                            <span class="streams">${element.rank}</span>
                        </div>
                        <div class="col col-2 d-none d-md-block">
                            <span class="streams">${duration}</span>
                        </div>
                    </div>`;
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

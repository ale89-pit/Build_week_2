let URLRequest = "https://striveschool-api.herokuapp.com/api/deezer/album/";

let idRef = new URLSearchParams(window.location.search).get("id");
let queryRef = new URLSearchParams(window.location.search).get("queryREF");
let queryAlbum = new URLSearchParams(window.location.search).get("album");
console.log(queryRef);

let firstCard = document.querySelector("#heroAlbum .card");
let songsList = document.querySelector(".songsList");
let coloredBack = document.getElementsByClassName("hero");
let heroBg = document.querySelector(".heroBg");
let audio;
let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let mobilePlayButton = document.getElementById("mobilePlayBtn");
let mobilePauseButton = document.getElementById("mobilePauseBtn");
console.log(coloredBack);

let cover = document.getElementById("playerSongCover");
let title = document.getElementById("playerSongTitle");
let artist = document.getElementById("playerSongArtist");
let length = document.getElementById("songLength");
let mobileCover = document.getElementById("mobilePlayerSongCover");
let mobileTitle = document.getElementById("mobilePlayerSongTitle");

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
                            <span class="mx-3">${index + 1}</span>
                            <div class="card artistSongCard">
                                <div class="row g-0 align-items-center song" onclick="playSong(${
                                  element.id
                                })">
                                    <div class="col-2">
                                        <img src="${
                                          element.album.cover_big
                                        }" class="img-fluid" alt="...">
                                    </div>
                                    <div class="col-10">
                                        <div class="card-body py-0 d-flex me-2">
                                        <div class="w-50 w-md-75 d-flex justify-content-between align-items-center>
                                            <p class="card-text m-0 songTitle">${
                                              element.title
                                            }</p>
                                           </div>
                                            <span class="streams d-md-none">${
                                              element.rank
                                            }</span>
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

const playSong = async function (id) {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/track/" + id
    );
    if (response.ok) {
      let song = await response.json();
      console.log("canzone:", song);

      audio = new Audio(`${song.preview}`);
      audio.play();
      playButton.classList.add("d-none");
      pauseButton.classList.remove("d-none");
      mobilePlayButton.classList.add("d-none");
      mobilePauseButton.classList.remove("d-none");
      let cover = document.getElementById("playerSongCover");
      let title = document.getElementById("playerSongTitle");
      let artist = document.getElementById("playerSongArtist");
      let length = document.getElementById("songLength");
      cover.removeAttribute("src");
      cover.setAttribute("src", song.album.cover);
      title.innerHTML = song.title;
      artist.innerHTML = song.artist.name;
      let minutes = Math.floor(song.duration / 60);
      let seconds = song.duration % 60;
      let duration = `${minutes}:${seconds}`;
      length.innerHTML = duration;
      let mobileCover = document.getElementById("mobilePlayerSongCover");
      let mobileTitle = document.getElementById("mobilePlayerSongTitle");
      mobileCover.setAttribute("src", song.album.cover);
      mobileTitle.innerHTML = song.title;

      // Riproduci il suono

      console.log(song);
    } else {
      return new Error("errore nella fetch", response.status);
    }
  } catch (error) {
    console.log(error);
  }
};
playButton.addEventListener("click", function () {
  // Riproduci il suono
  audio.play();
  playButton.classList.add("d-none");
  pauseButton.classList.remove("d-none");
});
pauseButton.addEventListener("click", function () {
  audio.pause();
  pauseButton.classList.add("d-none");
  playButton.classList.remove("d-none");
});
mobilePlayButton.addEventListener("click", function () {
  // Riproduci il suono
  audio.play();
  mobilePlayButton.classList.add("d-none");
  mobilePauseButton.classList.remove("d-none");
});
mobilePauseButton.addEventListener("click", function () {
  audio.pause();
  mobilePauseButton.classList.add("d-none");
  mobilePlayButton.classList.remove("d-none");
});

//FOOTER

let showLocalSong = async (songId) => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/track/" + songId
    );
    if (response.ok) {
      let song = await response.json();

      cover.removeAttribute("src");
      cover.setAttribute("src", song.album.cover);
      title.innerHTML = song.title;
      artist.innerHTML = song.artist.name;
      let minutes = Math.floor(song.duration / 60);
      let seconds = song.duration % 60;
      let duration = `${minutes}:${seconds}`;
      length.innerHTML = duration;

      mobileCover.setAttribute("src", song.album.cover);
      mobileTitle.innerHTML = song.title;
      audio = new Audio(song.preview);
      let currentSong = localStorage.setItem("song", JSON.stringify(song.id));
    } else {
      return new Error("Errore nella fetch: ", response.status);
    }
  } catch (error) {
    console.log(error);
  }
};

if (localStorage.getItem("song")) {
  let songId = JSON.parse(localStorage.getItem("song"));
  showLocalSong(songId);
}

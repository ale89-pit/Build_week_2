let URLRequest = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

let musicList;
let query1 = "Marracash";
let query2 = "Lazza";
let musicList2;

let firstCard = document.querySelector("#mainContainer .card");
console.log(firstCard);
let miniCard = document.getElementById("miniCard");

//RIFERIMENTI AI FOOTER
let cover = document.getElementById("playerSongCover");
let title = document.getElementById("playerSongTitle");
let artist = document.getElementById("playerSongArtist");
let length = document.getElementById("songLength");
let mobileCover = document.getElementById("mobilePlayerSongCover");
let mobileTitle = document.getElementById("mobilePlayerSongTitle");

//per fare funzionare l'audio sulla homepage
let audio;

//RIFERIMENTI AI PULSANTI DEL FOOTER
let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let mobilePlayButton = document.getElementById("mobilePlayBtn");
let mobilePauseButton = document.getElementById("mobilePauseBtn");


//FETCH PER LA CARD GRANDE

const getMusic = async function () {
  try {
    let response = await fetch(URLRequest + query1);
    if (response.ok) {
      musicList = await response.json();
      console.log(musicList);
      musicList = musicList.data;

      console.log(musicList);
      writeCard(musicList, query1);
    } else {
      return new Error(
        "Non riesco a recuperare la tracklist, errore!",
        response.status
      );
    }
  } catch (error) {
    console.log(error);
  }
};

// SIDEBAR SEARCH LEFT

const inputSearchReference = document.getElementById("searchIcon");
let musicListSearch;

// FUNZIONE writeCardSearch SCRIVE LE CARD IN RICERCA
const searchRef = document.getElementById("searchRef");

inputSearchReference.addEventListener("keyup", (e, musicListSearch) => {
  searchMusic();
  console.log("searchMusic()");
  console.log("ho schiacciato il bottone");
});

const writeCardSearch = function (musicListSearch) {
  searchRef.innerHTML = "";
  console.log(musicListSearch);
  console.log(searchRef);
  for (let i = 0; i < musicListSearch.length; i++) {
    searchRef.innerHTML += `<div class="col my-1 d-flex justify-content-center align-items-center">
                                <div class="card smallCards p-2">
                                    <div class="card-img-top" >
                                    <a href="albumPage.html?id=${musicListSearch[i].album.id}&queryREF=${query1}&album=${musicListSearch[i].album.title}"> <img src="${musicListSearch[i].album.cover_medium}" alt="" class="img-fluid" ></a>
                                    </div>
                                    <div class="card-body text-dark w-100 word-wrap ">
                                    <a href="albumPage.html?id=${musicListSearch[i].album.id}&queryREF=${query1}&album=${musicListSearch[i].album.title}"> <h6 class="m-0 mb-2 sizeTesto text-light text-truncate">${musicListSearch[i].title}</h6></a>
                                        <a href="artist_page.html?artistId=${musicListSearch[i].artist.id}"><p class="opacity-50 sizeTesto2 text-light word-wrap ">${musicListSearch[i].artist.name}</p></a>
                                    </div>

                                </div>
                            </div>`;
  }
  firstCard.innerHTML = `<div class="row g-0 w-100 text-light bigCard">
  <div class="col-4 ps-0">
  <a href="albumPage.html?id=${musicListSearch[0].album.id}&queryREF=${query1}&album=${musicListSearch[0].album.title}">
      <img src="${musicListSearch[0].album.cover_medium}" class="img-fluid rounded-4 p-3 m-0" alt="..." />
   </a>   
  </div>
  <div class="col-8 d-flex align-items-center">
      <div class="card-body">
      <a href="albumPage.html?id=${musicListSearch[0].album.id}&queryREF=${query1}&album=${musicListSearch[0].album.title}">    <h5 class="card-title display-2 fw-bold">${musicListSearch[0].album.title}</h5></a>
      <a href="artist_page.html?artistId=${musicListSearch[0].artist.id}">       <p class="card-text text-truncate">
          ${musicListSearch[0].artist.name}
          </p></a>
            <p class="card-text text-truncate">
              <small class="opacity-50">Ascolta la canzone di ${musicListSearch[0].artist.name}</small>
          </p></a>
      </div>
  </div>
 </div>`;
};

//FETCH SUI RISULTATI DELLA RICERCA

const searchMusic = async function () {
  try {
    let response = await fetch(
      URLRequest + inputSearchReference.value + "&" + "type=album"
    );
    if (response.ok) {
      musicListSearch = await response.json();
      console.log(musicListSearch);
      musicListSearch = musicListSearch.data;

      writeCardSearch(musicListSearch);

      console.log(musicListSearch);
    } else {
      return new Error(
        "Non riesco a recuperare la traccia, errore!",
        response.status
      );
    }
  } catch (error) {
    console.log(error);
  }
};

// SIDEBAR SEARCH LEFT END
// SCRIVE CARD PRINCIPALE (ALBUM)

const writeCard = function (musicList, query1) {
  musicList.forEach((element) => {
    firstCard.innerHTML = `<div class="row g-0 w-100 text-light bigCard">
 <div class="col-4 ps-0">
 <a href="albumPage.html?id=${element.album.id}&queryREF=${query1}&album=${element.album.title}">
     <img src="${element.album.cover_medium}" class="img-fluid rounded-4 p-3 m-0" alt="..." />
  </a>   
 </div>
 <div class="col-8 d-flex align-items-center">
     <div class="card-body">
     <a href="albumPage.html?id=${element.album.id}&queryREF=${query1}&album=${element.album.title}">     <h5 class="card-title display-2 fw-bold">${element.album.title}</h5></a>
         <a href="artist_page.html?artistId=${element.artist.id}"> <p class="card-text">
         ${element.artist.name}
         </p></a>
         <p class="card-text">
             <small class="opacity-50">Ascolta la canzone di ${element.artist.name}</small>
         </p>
     </div>
 </div>
</div>`;
  });
};

getMusic();
const getMusic2 = async function () {
  try {
    let response = await fetch(URLRequest + query2);
    if (response.ok) {
      musicList2 = await response.json();
      console.log(musicList2);
      musicList2 = musicList2.data;

      console.log(musicList2);
      writeSecondRow(musicList2);
    } else {
      return new Error(
        "Non riesco a recuperare la tracklist, errore!",
        response.status
      );
    }
  } catch (error) {
    console.log(error);
  }
};

getMusic2();

//PARTE BUONASERA

const writeSecondRow = function (musicList2) {
  for (let i = 0; i < 6; i++) {
    miniCard.innerHTML += `<div class="col col-6 col-lg-4">
        <div class="card mb-3 text-light smallCards">
            <div class="row g-0">
                <div class="col-4">
                <a href="artist_page.html?artistId=${musicList2[i].artist.id}"><img src="${musicList2[i].album.cover}" class="img-fluid rounded-start"
                        alt="..." /></a>
                </div>
                <div class="col-8 d-flex justify-content-start align-items-center">
                <a href="albumPage.html?id=${musicList2[i].album.id}&queryREF=${query1}&album=${musicList2[i].album.title}">   <h5 class="card-title sizeTesto m-0 ms-3">${musicList2[i].title}</h5></a>
                </div>
            </div>

        </div>
    </div>`;
  }
};

//ALTRO CHE TI POTREBBE PIACERE

let URLRequest3 = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
let query3 = "salmo&type=artist";

const getMusic3 = async function () {
  try {
    let response = await fetch(URLRequest + query3);
    if (response.ok) {
      let musicList3 = await response.json();
      musicList3 = musicList3.data;
      console.log(musicList3);
      writeCard3(musicList3);
    } else {
      new Error(
        "Non riesco a recuperare la tracklist, errore!', response.status"
      );
    }
  } catch (error) {
    console.log(error);
  }
};
let cardThree = document.getElementById("cardThree");
const writeCard3 = function (musicList3) {
  for (let i = 0; i < 6; i++) {
    cardThree.innerHTML += `<div class="col my-1 d-flex justify-content-center align-items-center ">
                                <div class="card smallCards p-2">
                                    <div class="card-img-top" >
                                    <a href="albumPage.html?id=${musicList3[i].album.id
      }&queryREF=${query1}&album=${musicList3[i].album.title
      }"> <img src="${musicList3[i].album.cover_medium
      }" alt="" class="img-fluid" ></a>
                                    </div>
                                    <div class="card-body text-dark w-100 ">
                                    <a href="albumPage.html?id=${musicList3[i].album.id
      }&queryREF=${query1}&album=${musicList3[i].album.title
      }"><h6 class="m-0 mb-2 pt-3 sizeTesto text-light text-truncate">${musicList3[
        i
      ].album.title}</h6></a>
                                        <a href="artist_page.html?artistId=${musicList3[i].artist.id
      }"><p class="opacity-50 sizeTesto2 text-light text-truncate">${musicList3[i].artist.name
      }</p></a>
                                    </div>

                                </div>
                            </div>`;
  }
};
getMusic3();

//PER I FAN DI VASCO
let query4 = "Elodie&type=track";

const getMusic4 = async function () {
  try {
    let response = await fetch(URLRequest + query4);
    if (response.ok) {
      let musicList4 = await response.json();
      musicList4 = musicList4.data;
      console.log(musicList4);
      writeCard4(musicList4);
    } else {
      new Error(
        "Non riesco a recuperare la tracklist, errore!', response.status"
      );
    }
  } catch (error) {
    console.log(error);
  }
};
let cardFour = document.getElementById("cardFour");
const writeCard4 = function (musicList4) {
  for (let i = 0; i < 6; i++) {
    cardFour.innerHTML += `<div class="col my-1 d-flex justify-content-center align-items-center ">
                                <div class="card smallCards p-2">
                                    <div class="card-img-top" >
                                    <a href="albumPage.html?id=${musicList4[i].album.id
      }&queryREF=${query1}&album=${musicList4[i].album.title
      }"> <img src="${musicList4[i].album.cover_medium
      }" alt="" class="img-fluid" ></a>
                                    </div>
                                    <div class="card-body text-dark w-100 ">
                                    <a href="albumPage.html?id=${musicList4[i].album.id
      }&queryREF=${query1}&album=${musicList4[i].album.title
      }"><h6 class="m-0 mb-2 pt-3 sizeTesto text-light text-truncate">${musicList4[
        i
      ].album.title}</h6></a>
                                        <a href="artist_page.html?artistId=${musicList4[i].artist.id
      }"><p class="opacity-50 sizeTesto2 text-light text-truncate">${musicList4[i].artist.name
      }</p></a>
                                    </div>

                                </div>
                            </div>`;
  }
};
getMusic4();

//POV: SEI GIOVANE E SEI SU SPOTIFY

let query5 = "Calvin%20Harris&type=artist";

const getMusic5 = async function () {
  try {
    let response = await fetch(URLRequest + query5);
    if (response.ok) {
      let musicList5 = await response.json();
      musicList5 = musicList5.data;
      console.log(musicList5);
      writeCard5(musicList5);
    } else {
      new Error(
        "Non riesco a recuperare la tracklist, errore!', response.status"
      );
    }
  } catch (error) {
    console.log(error);
  }
};
let cardFive = document.getElementById("cardFive");
const writeCard5 = function (musicList5) {
  for (let i = 0; i < 6; i++) {
    cardFive.innerHTML += `<div class="col my-1 d-flex justify-content-center align-items-center ">
                                <div class="card smallCards p-2">
                                    <div class="card-img-top" >
                                    <a href="albumPage.html?id=${musicList5[i].album.id
      }&queryREF=${query1}&album=${musicList5[i].album.title
      }"> <img src="${musicList5[i].album.cover_medium
      }" alt="" class="img-fluid" ></a>
                                    </div>
                                    <div class="card-body text-dark w-100 ">
                                    <a href="albumPage.html?id=${musicList5[i].album.id
      }&queryREF=${query1}&album=${musicList5[i].album.title
      }"><h6 class="m-0 mb-2 pt-3 sizeTesto text-light text-truncate">${musicList5[
        i
      ].album.title}</h6></a>
                                        <a href="artist_page.html?artistId=${musicList5[i].artist.id
      }"><p class="opacity-50 sizeTesto2 text-light text-truncate">${musicList5[i].artist.name
      }</p></a>
                                    </div>

                                </div>
                            </div>`;
  }
};
getMusic5();

//ASCOLTA ORA L'ULTIMO ALBUM DI DANI FAIV

let query6 = "teoria%20del%20contrario&type=track";

const getMusic6 = async function () {
  try {
    let response = await fetch(URLRequest + query6);
    if (response.ok) {
      let musicList6 = await response.json();
      musicList6 = musicList6.data;
      console.log(musicList6);
      writeCard6(musicList6);
    } else {
      new Error(
        "Non riesco a recuperare la tracklist, errore!', response.status"
      );
    }
  } catch (error) {
    console.log(error);
  }
};
let cardSix = document.getElementById("cardSix");
const writeCard6 = function (musicList6) {
  for (let i = 0; i < 6; i++) {
    cardSix.innerHTML += `<div class="col my-1 d-flex justify-content-center align-items-center ">
                                <div class="card smallCards p-2">
                                    <div class="card-img-top" >
                                    <a href="albumPage.html?id=${musicList6[i].album.id
      }&queryREF=${query1}&album=${musicList6[i].album.title
      }"> <img src="${musicList6[i].album.cover_medium
      }" alt="" class="img-fluid" ></a>
                                    </div>
                                    <div class="card-body text-dark w-100 ">
                                    <a href="albumPage.html?id=${musicList6[i].album.id
      }&queryREF=${query1}&album=${musicList6[i].album.title
      }"><h6 class="m-0 mb-2 pt-3 sizeTesto text-light text-truncate">${musicList6[
        i
      ].title}</h6></a>
                                        <a href="artist_page.html?artistId=${musicList6[i].artist.id
      }"><p class="opacity-50 sizeTesto2 text-light text-truncate">${musicList6[i].artist.name
      }</p></a>
                                    </div>

                                </div>
                            </div>`;
  }
};
getMusic6();

//MOSTRA E FAI VEDERE SEARCH INPUT

let searchIcon = document.getElementById("search-btn");

searchIcon.onclick = (event) => {
  event.preventDefault();
  inputSearchReference.classList.toggle("d-none");
};

let mobileSearchBtn = document.getElementById("mobileSearchBtn");

mobileSearchBtn.onclick = (event) => {
  event.preventDefault();
  inputSearchReference.classList.toggle("d-none");
};

//FOOTER

let showLocalSong = async (songId) => {
  try{
    let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/track/" + songId);
    if(response.ok){
      let song = await response.json();
      console.log('Risultato song:', song);
      console.log('song.title:', song.title);
      console.log('song.name:', song.artist.name);
      cover.removeAttribute("src");
      cover.setAttribute("src", song.album.cover);
      title.innerText = song.title;
      artist.innerText = song.artist.name;
      let minutes = Math.floor(song.duration / 60);
      let seconds = song.duration % 60;
      let duration = `${minutes}:${seconds}`;
      length.innerText = duration;
      mobileCover.setAttribute("src", song.album.cover);
      mobileTitle.innerText = song.title;
      audio = new Audio(song.preview);
    }
    else{
      return new Error ('Errore nella fetch: ', response.status);
    }

  }
  catch(error){
    console.log(error);
  }
}


if (localStorage.getItem('song')) {
  let songId = JSON.parse(localStorage.getItem('song'));
  showLocalSong(songId);
}

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
let URLRequest1 =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=vasco%20rossi";
let musicList;
let musicList2;
let URLRequest2 =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=Lazza";

let firstCard = document.querySelector("#mainContainer .card");
console.log(firstCard);
let miniCard = document.getElementById("miniCard");

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
    firstCard.innerHTML = `<div class="row g-0 w-100 text-light bigCard">
 <div class="col-4">
     <img src="${element.album.cover_medium}" class="img-fluid rounded-start" alt="..." />
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
        <div class="card mb-3 text-light smallCards">
            <div class="row g-0">
                <div class="col-4">
                    <img src="${musicList2[i].album.cover}" class="img-fluid rounded-start"
                        alt="..." />
                </div>
                <div class="col-8 d-flex justify-content-center align-items-center">
                    <h5 class="card-title sizeTesto m-0 p-0">${musicList2[i].title}</h5>
                </div>
            </div>

        </div>
    </div>`;
  }
};

let URLRequest3 = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
let query3 = "salmo&type=artist";

const getMusic3 = async function () {
  try {
    let response = await fetch(URLRequest3 + query3);
    let musicList3 = await response.json();
    musicList3 = musicList3.data;
    console.log(musicList3);
    writeCard3(musicList3);
  } catch {}
};
let cardThree = document.getElementById("cardThree");
const writeCard3 = function (musicList3) {
  for (let i = 2; i < 8; i++) {
    cardThree.innerHTML += `<div class="col col-auto d-flex justify-content-center align-items-center">
                                <div class="card smallCards p-2">
                                    <div class="card-img-top" >
                                        <img src="${musicList3[i].album.cover}" alt="" class="w-100" >
                                    </div>
                                    <div class="card-body text-dark w-100 word-wrap">
                                        <h6 class="m-0 mb-2 sizeTesto text-light">${musicList3[i].album.title}</h6>
                                        <p class="opacity-50 sizeTesto2 text-light ">${musicList3[i].artist.name}</p>
                                    </div>

                                </div>
                            </div>`;
  }
};
getMusic3();

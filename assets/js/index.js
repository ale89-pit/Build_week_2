let URLRequest1 =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=vasco%20rossi&type=album";
let musicList;
let musicList2;
let URLRequest2 =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=Lazza&type=album";

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
let query3 = "salmo&type=album";

const getMusic3 = async function () {
  try {
    let response = await fetch(URLRequest3 + query3);
    let musicList3 = await response.json();
    console.log(musicList3);
  } catch {}
};

getMusic3();

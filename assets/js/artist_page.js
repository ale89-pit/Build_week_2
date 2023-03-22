console.log('Funziona tutto!');

const URLRequest = "https://striveschool-api.herokuapp.com/api/deezer/artist/";

let artistId = new URLSearchParams(window.location.search).get('artistId');

console.log('artistId', artistId);


let showSongs = (firstFiveSongs) => {
    let songCol = document.getElementById('songCol');
    let colDx = document.getElementById('colDx');
    let i = 1;

    firstFiveSongs.forEach((song) => {
        // 👇️ get the number of full minutes
        let minutes = Math.floor(song.duration / 60);

        // 👇️ get the remainder of the seconds
        let seconds = song.duration % 60;

        let duration = `${minutes}:${seconds}`;

        songCol.innerHTML += `
        <!-- CANZONE -->

                    <div class="row align-items-center my-3">
                        <div class="col d-flex align-items-center flex-grow-1">
                            <span class="mx-3">${i}</span>
                            <div class="card artistSongCard">
                                <div class="row g-0 align-items-center">
                                    <div class="col-2">
                                        <img src="${song.album.cover}" class="img-fluid" alt="...">
                                    </div>
                                    <div class="col-10">
                                        <div class="card-body py-0">
                                            <p class="card-text m-0 songTitle">${song.title}</p>
                                            <span class="streams d-md-none">34.356.743</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col col-4 d-none d-md-block">
                            <span class="streams">34.356.743</span>
                        </div>
                        <div class="col col-2 d-none d-md-block">
                            <span class="streams">${duration}</span>
                        </div>
                    </div>
        <!-- FINE CANZONE -->
        `
        i++;
    });
    songCol.innerHTML += `<p class="text-secondary">VISUALIZZA ALTRO</p>`;

    colDx.innerHTML += `<div class="card artistSongCard">
    <div class="row g-0 align-items-center">
        <div class="col-4">
            <img src="https://api.deezer.com/artist/${firstFiveSongs[0].artist.id}/image" class="img-fluid rounded-circle" width="70px">
        </div>
        <div class="col-8">
            <div class="card-body p-0">
                <p class="card-title m-0"><small>Hai messo mi piace a 11 brani</small> </p>
                <p class="card-text m-0 text-secondary"><small>di ${firstFiveSongs[0].artist.name}</small></p>
            </div>
        </div>
    </div>
</div>`;
}

let showArtistTracklist = async (artistTracklist) => {
    try {
        let response = await fetch(artistTracklist);
        if (response.ok) {
            let tracklist = await response.json();
            console.log('tracklist', tracklist);
            let firstFiveSongs = tracklist.data;
            console.log('Prime 5 canzoni:', firstFiveSongs);
            showSongs(firstFiveSongs);
        }
        else {
            return new Error('Non riesco a recuperare la tracklist, errore!', response.status);
        }

    }
    catch (error) {
        console.log(error);
    }
}

let showArtist = (artist) => {
    let artistName = document.getElementsByClassName('artistName')[0];
    artistName.innerHTML = artist.name;
    let artistBgImageUrl = artist.picture_xl;
    console.log('background hero:', artistBgImageUrl);
    let heroBackground = document.getElementsByClassName('hero')[0];    
    // heroBackground.style.backgroundImage = 'url(' + artistBgImageUrl + ')';
    // heroBackground.style.backgroundSize = "cover";
    heroBackground.style.background = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('+artistBgImageUrl+')";

let findArtist = async () => {
    try {
        let response = await fetch(URLRequest + artistId);
        if (response.ok) {
            console.log('Ho ricevuto i dati: ', response);
            let artist = await response.json();
            console.log('artist ricevuto', artist);
            console.log('Artist:', artist.name);
            let artistTracklist = artist.tracklist;
            console.log('artistTracklist:', artistTracklist);
            showArtist(artist);
            showArtistTracklist(artistTracklist);
        }
        else {
            return new Error('Errore!', response.status);
        }

    }
    catch (error) {
        console.log(error);
    }
}

findArtist();
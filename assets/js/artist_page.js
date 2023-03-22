console.log('Funziona tutto!');

const URLRequest = "https://striveschool-api.herokuapp.com/api/deezer/artist/";

let artistId = new URLSearchParams(window.location.search).get('artistId');

console.log('artistId', artistId);


let showSongs = (firstFiveSongs) => {
    let songCol = document.getElementById('songCol');
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
                                    <div class="col-4">
                                        <img src="${song.album.cover}" class="img-fluid" alt="...">
                                    </div>
                                    <div class="col-8">
                                        <div class="card-body py-0">
                                            <p class="card-text m-0">${song.title}</p>
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
        `
        i++;
    });
    songCol.innerHTML += `<p class="text-secondary">VISUALIZZA ALTRO</p>`;
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
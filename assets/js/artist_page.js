console.log('Funziona tutto!');

const URLRequest = " https://striveschool-api.herokuapp.com/api/deezer/artist/";

let artistId = new URLSearchParams(window.location.search).get('artistId');

console.log('artistId', artistId);


let showArtistTracklist = async (artistTracklist) => {
    try{
        let response = await fetch(artistTracklist);
        if(response.ok){
            let tracklist = await response.json();
            console.log(tracklist)
        }
        else{
            return new Error ('Non riesco a recuperare la tracklist, errore!', response.status);
        }

    }
    catch(error){
        console.log(error);
    }
}

let findArtist = async () => {
    try {
        let response = await fetch(URLRequest + artistId);
        if (response.ok) {
            console.log('Ho ricevuto i dati: ', response);
            let artist = await response.json();
            console.log('Artist:', artist.name);
            let artistTracklist = artist.tracklist;
            console.log(artistTracklist);
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
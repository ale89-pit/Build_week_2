console.log('Funziona tutto!');

const URLRequest = "https://striveschool-api.herokuapp.com/api/deezer/artist/";

let artistId = new URLSearchParams(window.location.search).get('artistId')
console.log('artistId', artistId);

let findArtist = async () => {
    try {
        let response = await fetch(URLRequest + artistId);
        if (response.ok) {
            console.log('Ho ricevuto i dati: ', response);
            let artist = await response.json();
            console.log(artist);

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
const d = document;

$form = d.getElementById("song-search");
$loader = d.querySelector(".loader");
$error = d.querySelector(".error");
$main = d.querySelector("main");
$artist = d.querySelector(".artist");
$song = d.querySelector(".song");

$form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    $loader.style.display = "block";

    let artist = e.target.artist.value.toLowerCase();
    song = e.target.song.value.toLowerCase();

    $artistTemplate = "";
    $songTemplate = "";

    artistApi = `https://theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
    songApi = `https://api.lyrics.ovh/v1/${artist}/${song}`;

    artistFetch = fetch(artistApi);
    songFetch = fetch(songApi);

    //DESTRUCTURACION
    [artistRes, songRes] = await Promise.all([artistFetch, songFetch]);
    artistData = await artistRes.json();
    songData = await songRes.json();

    console.log(artistData, songData);
    //console.log(artistRes,songRes);

    if (artistData.artists === null) {
      $artistTemplate = `<h2> No existe el interprete <mark>${artist}</mark></h2>`;
    } else {
      let artist = artistData.artists[0];
      $artistTemplate = `
            <h2>${artist.strArtist}</h2>
            <img src="${artist.strArtistThumb}" alt="${artist.strArtist}"/>
            <p>${artist.intBornYear} - ${artist.intDiedYear || "Presente"}</p>
            <p>${artist.strCountry}</p>
            <p>${artist.strGenre} - ${artist.strStyle}</p>
            <a href="http://${artist.strWebsite}" target="_blank">Sitio Web</a>
            <p>${artist.strBiographyEN}</p>
            `;
    }

    if (songData.error) {
        $songTemplate = `<h2>No existe la cancion ${song}</h2>`;
    }else{
        $songTemplate= `
        <h2>${song.toLowerCase()}</h2>
        <blockquote>${songData.lyrics}</blockquote>
        `;
    }
    $loader.style.display = "none";
    $artist.innerHTML = $artistTemplate;
    $song.innerHTML = $songTemplate;
    
  } catch (err) {
    console.log(err);
    let menssaje = err.statusText || "Ocurrio un error";
    $error.innerHTML = `<p>Error ${err.status}: ${menssaje}</p>`;
    $loader.style.display = "none";
  }
});

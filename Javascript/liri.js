require("dotenv").config();

var Spotify = require('node-spotify-api');
var keys = require("./keys.js");

var axios = require("axios");
var fs = require("fs");
var moment = require('moment');

var spotify = new Spotify(keys.spotify);

var operator = process.argv[2];

function movieSearch(movie) {
var movieName = "";
  var nodeArgs = process.argv;

  for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {
      movieName = movieName + "+" + nodeArgs[i];
    }
    else {
      movieName += nodeArgs[i];
    }
}

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&apikey=trilogy";

if (movieName === "") {

  var movieName = "Mr.+Nobody";

  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&apikey=trilogy";

  axios.get(queryUrl).then(
    function(response) {

      console.log("Title: " + response.data.Title);
      console.log("Year: " + response.data.Year);
      console.log("imdbRating: " + response.data.imdbRating);
      console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
      console.log("Country: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Actors: " + response.data.Actors);
    }
  );
  }

  else {

    axios.get(queryUrl).then(
      function(response) {

        console.log("Title: " + response.data.Title);
        console.log("Year: " + response.data.Year);
        console.log("imdbRating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
      }
    );
    }
  }

 function concertSearch() {

    var bandName = "";
  var nodeArgs = process.argv;

  for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {
      bandName = bandName + "+" + nodeArgs[i];
    }
    else {
      bandName += nodeArgs[i];
    }
}

var bandUrl = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp"

axios.get(bandUrl).then(
  function(response) {

   console.log("Venue: " + response.data[0].venue.name);
   console.log("Venue Location: " + response.data[0].venue.city);
   console.log("Date of Event: " + moment(response.data[0].datetime).format("MM-DD-YYYY"));

       }
     ); 
   }

   function songSearch() {

    var songName = "";
    var nodeArgs = process.argv;
  
    for (var i = 3; i < nodeArgs.length; i++) {
  
      if (i > 3 && i < nodeArgs.length) {
        songName = songName + "+" + nodeArgs[i];
      }
      else {
        songName += nodeArgs[i];
      }
  }
  
  if (songName === "") {
  
  
    for (var i = 3; i < nodeArgs.length; i++) {
  
      if (i > 3 && i < nodeArgs.length) {
        songName = songName + "+" + nodeArgs[i];
      }
      else {
        songName += nodeArgs[i];
      }
  }
  
    var artistName = "The+Sign";
  
  
  spotify.search({ type: 'track', query: artistName,  limit: 10 }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
  
    console.log("Song: " + data.tracks.items[9].name);
    console.log("Artist: " + data.tracks.items[9].album.artists[0].name);
    console.log("Preview Link:  "+ data.tracks.items[9].preview_url);
    console.log("Album: " + data.tracks.items[9].album.name) 
    
  });
  }
  
  else {
  
    var songName = "";
    var nodeArgs = process.argv;
  
    for (var i = 3; i < nodeArgs.length; i++) {
  
      if (i > 3 && i < nodeArgs.length) {
        songName = songName + "+" + nodeArgs[i];
      }
      else {
        songName += nodeArgs[i];
      }
  }
  
  spotify.search({ type: 'track', query: songName, limit: 5}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    
  for(var i = 0; i <= 5; i++ ) {
  console.log("Song: " + data.tracks.items[i].name);
  console.log("Artist: " + data.tracks.items[i].album.artists[0].name);
  console.log("Preview Link: " + data.tracks.items[i].preview_url);
  console.log("Album: " + data.tracks.items[i].album.name); 
  console.log(" ");
  }
  });
  }

   }

if (operator === "concert-this") {

  concertSearch();

}

if (operator === "spotify-this-song") {

  songSearch();

}

if (operator === "movie-this") {

  movieSearch();

}     


if (operator === "do-what-it-says") {

fs.readFile("random.txt", "utf8", function(error, data){
  if (error) {
    return console.log(error);
  }

  var dataArr = data.split(",");

  if (dataArr[0] === "movie-this") {

    var movieName = JSON.parse(dataArr[1]);
   
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&apikey=trilogy";
    
    axios.get(queryUrl).then(
      function(response) {
        console.log("Title: " + response.data.Title);
        console.log("Year: " + response.data.Year);
        console.log("imdbRating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
      }
    );
  }

  if (dataArr[0] === "spotify-this-song") {

    var songName = dataArr[1];
    
    spotify.search({ type: 'track', query: songName, limit: 5}, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      
    for(var i = 0; i <= 5; i++ ) {
    console.log("Song: " + data.tracks.items[i].name);
    console.log("Artist: " + data.tracks.items[i].album.artists[0].name);
    console.log("Preview Link: " + data.tracks.items[i].preview_url);
    console.log("Album: " + data.tracks.items[i].album.name); 
    console.log(" ");
    }
    });

  }

  if (dataArr[0] === "concert-this") {

    var bandName = JSON.parse(dataArr[1]);

    var bandUrl = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp"

    axios.get(bandUrl).then(
      function(response) {
       console.log("Venue: " + response.data[0].venue.name);
       console.log("Venue Location: " + response.data[0].venue.city);
       console.log("Date of Event: " + moment(response.data[0].datetime).format("MM-DD-YYYY"));
    
           }
         );
  }
  
});

}

// node liri.js do-what-it-says

// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.

// Edit the text in random.txt to test out the feature for movie-this and concert-this.
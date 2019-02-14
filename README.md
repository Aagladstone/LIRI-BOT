# LIRI-BOT
Creating our own bot with API calls

I have uploaded a file with screenshots for you to see the outcome of each Liri command, and I will break them down one-by-one. 

Before using this code make sure to install npm and add the dependencies to your package.JSON or it will not work as intended!

This program will run 4 different commands:

  "concert-this"(concert-this-complete screenshot) --> This command will pull information from the bandsintown API using the axios npm package that is downloaded in the package.JSON, and tell the requester what city, what venue and the date of the next concert for whatever the artist is that was looked up.
  
  
  
  "spotify-this-song"(spotify-this-song-complete) --> This command will uses a npm spotify API. Once the user imputs the name of a song, this command will output 5 songs that have that title or a track with that phrase in it. It will tell you the artist, album, and a link so that the user can listen to 30 seconds of that song. 
  
  "movie-this"(movie-this-complete) --> This command uses axios to access the IMDB API that will take the movie title that follows "movie-this" in the command line and return the Title, ratings, plot, the country it was produced in,  year the movie came out, language of the movie, and actors/actressess in the movie.
  
  "do-what-it-says" --> This command partners with the "random.txt" file that is in our liri project folder. This function is made to read what command is in the txt file, recognize it, and run one of our previous function it with whatever is appended to the next to that command. 

import Movie from "./movie";


export default class MovieDB {
  static movies = new Map();
  static positiveWords = [];
  static negativeWords = [];
  static positiveWordsPL = [];
  static negativeWordsPL = [];

  static init() {
    //I used Github Copilot to generate this movie list :)
    MovieDB.movies.set('thehobbit', new Movie('The Hobbit', 'Peter Jackson'));
    MovieDB.movies.set('thelordoftherings', new Movie('The Lord of the Rings', 'Peter Jackson'));
    MovieDB.movies.set('thegodfather', new Movie('The Godfather', 'Francis Ford Coppola'));
    MovieDB.movies.set('avatar', new Movie('Avatar', 'James Cameron'));
    MovieDB.movies.set('thehangover', new Movie('The Hangover', 'Todd Phillips'));
    MovieDB.movies.set('weddingcrashers', new Movie('Wedding Crashers', 'David Dobkin'));
    MovieDB.movies.set('the40yearoldvirgin', new Movie('The 40-Year-Old Virgin', 'Judd Apatow'));
    MovieDB.movies.set('diehard', new Movie('Die Hard', 'John McTiernan'));
    MovieDB.movies.set('terminator', new Movie('Terminator', 'James Cameron'));
    MovieDB.movies.set('thepredator', new Movie('The Predator', 'Shane Black'));
    MovieDB.movies.set('thegreatestshowman', new Movie('The Greatest Showman', 'Michael Gracey'));
    MovieDB.movies.set('moulinrouge', new Movie('Moulin Rouge', 'Baz Luhrmann'));
    MovieDB.movies.set('thegrease', new Movie('The Grease', 'Randal Kleiser'));
    MovieDB.movies.set('frozen', new Movie('Frozen', 'Chris Buck'));
    MovieDB.movies.set('toystory', new Movie('Toy Story', 'John Lasseter'));
    MovieDB.movies.set('shrek', new Movie('Shrek', 'Andrew Adamson'));
    MovieDB.movies.set('halloween', new Movie('Halloween', 'John Carpenter'));
    MovieDB.movies.set('it', new Movie('It', 'Andy Muschietti'));
    MovieDB.movies.set('theconjuring', new Movie('The Conjuring', 'James Wan'));
    MovieDB.movies.set('ironman', new Movie('Iron Man', 'Jon Favreau'));
    MovieDB.movies.set('captainamerica', new Movie('Captain America', 'Joe Johnston'));
    MovieDB.movies.set('thor', new Movie('Thor', 'Kenneth Branagh'));
    MovieDB.movies.set('batman', new Movie('Batman', 'Tim Burton'));
    MovieDB.movies.set('superman', new Movie('Superman', 'Richard Donner'));
    MovieDB.movies.set('aquaman', new Movie('Aquaman', 'James Wan'));
    MovieDB.movies.set('starwars', new Movie('Star Wars', 'George Lucas'));
    MovieDB.movies.set('interstellar', new Movie('Interstellar', 'Christopher Nolan'));
    MovieDB.movies.set('inception', new Movie('Inception', 'Christopher Nolan'));
    
    MovieDB.positiveWords = Object.freeze([
      'good', 'nice', 'great', 'awesome', 'amazing', 'excellent', 'fantastic', 'wonderful', 'perfect', 'loved',
      'dobry', 'ładny', 'wspaniały', 'świetny', 'super', 'arcydzieło', 'fantastyczny', 'wciągający', 'doskonały', 'kochany'
    ]);
    MovieDB.negativeWords = Object.freeze([
      'bad', 'terrible', 'awful', 'horrible', 'disgusting', 'poor', 'boring', 'hated',
      'zły', 'okropny', 'ogłupiający', 'kiepski', 'błahy', 'słaby', 'nudny', 'nienawidzony'
    ]);
  }

  static review(movieId, reviewText) {
    const movie = MovieDB.movies.get(movieId);
    if (!movie) {
      return null;
    }
    
    const parsedReviewText = reviewText.toLowerCase().replace(/[^\wąęśćźżłńół ]/g, '').split(' ');

    let positiveWordsCount = 0;
    let negativeWordsCount = 0;

    for (const word of parsedReviewText) {
      if (MovieDB.positiveWords.includes(word)) {
        positiveWordsCount++;
      } else if (MovieDB.negativeWords.includes(word)) {
        negativeWordsCount++;
      }
    }

    if (positiveWordsCount > negativeWordsCount) {
      movie.recordPositiveSentimentReview();
      return 'positive';
    } else if (negativeWordsCount > positiveWordsCount) {
      movie.recordNegativeSentimentReview();
      return 'negative';
    }
    
    return 'neutral/unknown';
  }

  static getMovie(movieId) {
    return MovieDB.movies.get(movieId);
  }

  static addMovie(movie) {
    if (MovieDB.movies.has(movie.id)) {
      throw new Error(`Movie with id ${movie.id} already exists`);
    }
    MovieDB.movies.set(movie.id, movie);
  }
}

MovieDB.init();
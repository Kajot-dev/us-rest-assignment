import Movie from "@/utils/movie";
import MovieDB from "@/utils/movieDb";

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  let movieJSON = req.body;
  try {
    let movie = Movie.fromJSON(movieJSON);
    MovieDB.addMovie(movie);
    res.status(201).end();
  } catch (e) {
    res.status(400).json({ error: e.message });
  }

}

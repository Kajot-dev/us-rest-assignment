import MovieDB from "@/utils/movieDb";

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
  let title = req.query.title;

  const acceptHeader = req.headers["accept"];
  if (acceptHeader && acceptHeader.trim() !== "" && ["application/json", "*/*"].every((v) => !acceptHeader.includes(v))) {
    res.status(406).json({ error: "Not acceptable" });
    return;
  }

  let movie = MovieDB.getMovie(title);
  if (movie) {
    res.status(200).json(movie.toJSON());
  } else {
    res.status(404).json({ error: "Movie not found" });
  }
}
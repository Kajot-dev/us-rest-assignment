import MovieDB from "@/utils/movieDb";

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).end("Method not allowed");
    return;
  }

  let reviewText = req.body;
  let title = req.query.title;
  let reviewType = MovieDB.review(title, reviewText);

  if (reviewType === null) {
    res.status(404).end("Movie not found");
    return;
  }

  res.status(200).end(reviewType.toUpperCase());
}
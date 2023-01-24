import MovieDB from "@/utils/movieDb";

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).end("Method not allowed");
    return;
  }

  if (!req.accepts("text/plain")) {
    res.status(406).end("Not acceptable");
    return;
  }

  let reviewText = req.body;
  let title = req.query.title;
  let reviewType = MovieDB.review(title, reviewText);

  if (reviewType === null) {
    res.status(404).end("Movie not found");
    return;
  }

  res.setHeader("Content-Type", "text/plain");

  res.status(200).end(reviewType.toUpperCase());
}
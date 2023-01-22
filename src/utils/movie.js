export default class Movie {

  positiveReviews = 0;
  negativeReviews = 0;

  constructor(title, director) {
    this.title = title;
    this.director = director;
  }

  get id() {
    return this.title.toLowerCase().replace(/\s/g, '');
  }

  recordNegativeSentimentReview() {
    this.negativeReviews++;
  }

  recordPositiveSentimentReview() {
    this.positiveReviews++;
  }

  toJSON() {
    return {
      title: this.title,
      director: this.director,
      positiveSentimentCounter: this.positiveReviews,
      negativeSentimentCounter: this.negativeReviews,
    };
  }

  static fromJSON(json) {
    if (!json || typeof json.title !== "string" || typeof json.director !== "string") {
      throw new Error("Invalid JSON fields");
    }
    return new Movie(json.title, json.director);
  }
}


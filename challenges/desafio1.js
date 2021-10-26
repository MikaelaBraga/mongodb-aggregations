db.movies.aggregate([
  { $match: {
    $and: [
      { "imdb.rating": { $gte: 7 } },
      { $nor: [{ genres: "Crime" }, { genres: "Horror" }] },
      { rated: { $or: ["PG", "G"] } },
      { languages: { $in: ["English", "Spanish"] } }] } }]);

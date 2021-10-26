db.movies.aggregate([
  {
    $match: {
      $and: [
        { "imdb.rating": { $gte: 7 } },
        { $nor: [{ genres: "Crime" }, { genres: "Horror" }] },
        { $or: [{ rated: "PG" }, { rated: "G" }] },
        { languages: { $in: ["English", "Spanish"] } }] } },
  { $project:
          { _id: false,
            titulo: "$title",
            avaliado: "$rated",
            notaIMDB: "$imdb.rating",
            votosIMDB: "$imdb.votes",
            ano: "$year" } },
  { $sort: {
    ano: -1,
    notaIMDB: -1,
    titulo: 1 } }]);

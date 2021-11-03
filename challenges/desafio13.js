db.trips.aggregate([
  { $match: { startTime: {
    $gte: ISODate("2016-03-10T00:00:00"),
    $lt: ISODate("2016-03-11"),
  } } },
  { $group: {
    _id: null,
    duracaoMedia: { $avg: {
      $divide: [{ $subtract: ["$stopTime", "$startTime"] }, 60 * 1000],
    } },
  } },
  { $project: {
    _id: false,
    duracaoMediaEmMinutos: { $ceil: "$duracaoMedia" },
  } },
]);

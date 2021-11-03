db.trips.aggregate([
  { $group: {
    _id: "$bikeid",
    duracaoMedia: { $avg: {
      $divide: [{ $subtract: ["$stopTime", "$startTime"] }, 60 * 1000],
    } },
  } },
  { $sort: { duracaoMedia: -1 } },
  { $limit: 5 },
  { $project: {
    _id: false,
    bikeid: "$_id",
    duracaoMedia: { $ceil: "$duracaoMedia" },
  } },
]);

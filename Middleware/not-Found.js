const notFound = (req, res) => res.status(404).send("Route Does not Exit");

module.exports = notFound;

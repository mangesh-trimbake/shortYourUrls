const Url = require("../models/url.js");

const getAll = (req, res, next) => {
  Url.find(req.query).then(
    (urls) => {
      if (urls != null) {
        res.status(200).send({
          status: "success",
          message: "All Urls",
          data: { urls: urls },
        });
      } else {
        res.status(404).send({
          status: "error",
          message: "No urls found!",
          data: { urls: urls },
        });
      }
    },
    (err) => next(err)
  );
};

const getById = (req, res, next) => {
  Url.findById(req.params.id).then(
    (urls) => {
      if (urls != null) {
        res.status(200).send({
          status: "success",
          message: "Url with id " + req.params.id,
          data: { urls: urls },
        });
      } else {
        res.status(404).send({
          status: "error",
          message: "Url not found!",
          data: { urls: urls },
        });
      }
    },
    (err) => next(err)
  );
};

const getByShortenUrl = async (req, res, next) => {
  const url = await Url.findOne({ shorten_url: req.params.shorten_url });
  if (url == null) return res.sendStatus(404);

  url.clicks++;
  url.save();

  res.redirect(url.full_url);
};

const createNew = (req, res, next) => {
  Url.countDocuments({}).exec((err, count) => {
    if (err) {
      res.status(404).send({
        status: "error",
        message: "Url couldn't be created!",
        data: { urls: {} },
      });
    }

    Url.create(req.body).then(
      (urls) => {
        if (urls != null) {
          res.status(201).send({
            status: "success",
            message: "Url created",
            data: { urls: urls },
          });
        } else {
          res.status(404).send({
            status: "error",
            message: "Url couldn't be created!",
            data: { urls: urls },
          });
        }
      },
      (err) => next(err)
    );
  });
};

const updateById = (req, res, next) => {
  Url.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }).then(
    (urls) => {
      if (urls != null) {
        res.status(200).send({
          status: "success",
          message: "Url updated",
          data: { urls: urls },
        });
      } else {
        res.status(404).send({
          status: "error",
          message: "Url couldn't be updated!",
          data: { urls: urls },
        });
      }
    },
    (err) => next(err)
  );
};

const search = (req, res, next) => {
  let { name } = req.query;
  let queryCondition = {
    $or: [{ name: { $regex: ".*" + name + ".*", $options: "i" } }],
  };
  Url.find(queryCondition)
    .limit(20)
    .then(
      (urls) => {
        if (urls != null) {
          res.status(200).send({
            status: "success",
            message: "All Urls",
            data: { urls: urls },
          });
        } else {
          res.status(404).send({
            status: "error",
            message: "No urls found!",
            data: { urls: urls },
          });
        }
      },
      (err) => next(err)
    );
};

module.exports = {
  getAll,
  getById,
  getByShortenUrl,
  createNew,
  updateById,
  search,
};

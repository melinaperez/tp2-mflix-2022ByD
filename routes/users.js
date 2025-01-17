var express = require("express");
var router = express.Router();
const controller = require("../controllers/users");

/* GET users listing. */
router.get("/", async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;

  res.json(await controller.getAllUsers(pageSize, page));
});

router.get("/commentsByUser/:id", async (req, res) => {
  const idUser = req.params.id;
  res.json(await controller.getCommentsByUserId(idUser));
});

module.exports = router;

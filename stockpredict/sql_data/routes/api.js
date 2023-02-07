var express = require('express');
var router = express.Router();

/* GET users listing. */
const data = [{ account: 'root', password : '123456'}];
// 設置請求路徑為 /products 請求方法為 get
router.get("/", function (req, res, next) {
  res.send({ success: true, data }).end();
});

module.exports = router;

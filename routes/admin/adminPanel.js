const express = require('express');
// const app = express();
const router = express.Router();
const mongooseConnect = require('../../models/mongooseConnect');
// const bodyParser = require('body-parser');
// router.use(bodyParser.urlencoded({ extended: true }));


router.get('/admin', (req, res, next) => {
  mongooseConnect.Item.find().exec()
    .then( tableitem => {
      res.render('./admin/allItems', {aItems: tableitem});
    })
    .catch(next)
});


module.exports = router;

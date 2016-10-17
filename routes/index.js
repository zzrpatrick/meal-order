/**
 * 管理及分发路由
 */

'use strict';

let express = require('express');
let router = express.Router();

let userRouter = require('./userRouter');
let menuRouter = require('./menuRouter');
let teamRouter = require('./teamRouter');
let orderRouter = require('./orderRouter');
let homeRouter = require('./homeRouter');

router.get('/', function (req, res) {
    res.redirect('/home');
});

// router.get('/menu/all', function (req, res, next) {
//     // var mealMenu = JSON.parse(fs.readFileSync(path.join(__dirname, '../menu/meal.json'), 'utf-8'));
//     res.send({menus: []});
// });

router.all(['/user', '/user/*'], userRouter);

router.all(['/home', '/home/*'], homeRouter);

router.all(['/team', '/team/*'], teamRouter);

router.all(['/menu', '/menu/*'], menuRouter);

router.all(['/order', '/order/*'], orderRouter);


module.exports = router;
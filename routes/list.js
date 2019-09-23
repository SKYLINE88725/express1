var express = require('express');
var router = express.Router();
//关联主程序
const fetch = require('node-fetch');
//使用连接池

/* GET lsit page. */
//进入list面信息
router.get('/',async function(req, res, next) {
	let list = await fetch('http://localhost:3000/goodAll').then(res=>res.json());
	res.render('list', { title: '2020上海数字电视工程研究中心宣讲会参与人数',list});

});

module.exports = router;

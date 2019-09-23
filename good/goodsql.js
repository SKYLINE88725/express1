var good={
	//增
	goodinsert:'INSERT INTO `list` (`id`,`name`,`phone`,`school`,`major`,`type`,`time`) VALUES(?,?,?,?,?,?,?)',
	//删
	gooddelete: 'delete from list where id=?',
	//改
	goodupdate:'UPDATE `list` SET `name`=?,`phone`=?,`school`=?,`majar`=?,`time`=? WHERE `id`=?',
    //查
    goodAll1: 'SELECT * FROM list where  `type`=?  order by `id` desc',
    goodAll2: 'SELECT * FROM list order by `id` desc',
    goodById: 'select * from list where id=?'
}

module.exports=good;

var fs = require('fs')
var Student = require('./student')


var express = require('express')
var router = express.Router()

router.get('/students',function(req, res){
	Student.find(function (err, students){
		if (err){
			return  res.status(500).send('Server error.')
		}
		res.render('index.html', {
			students: students 
		})
	})
})
//渲染添加页面
router.get('/students/news', function(req, res){
	res.render('new.html')
})

//处理添加页面
router.post('/students/news', function(req, res){
	Student.save(req.body, function (err){
		if (err){
			return  res.status(500).send('Server error.')
		}
		res.redirect('/students')
	})
})

//渲染编辑页面
router.get('/students/edit', function(req, res){
	Student.findById(parseInt(req.query.id), function (err, student){
		if (err){
			return  res.status(500).send('Server error.')
		}
		res.render('edit.html', {
			student: student 
		})
	})
})

//处理编辑页面
router.post('/students/edit', function(req, res){
	Student.updateById(req.body, function (err){
		if (err){
			return  res.status(500).send('Server error.')
		}
		res.redirect('/students')
	})
})

//处理删除页面
router.get('/students/del', function(req, res){
	Student.delById(req.query.id, function (err){
		if (err){
			return  res.status(500).send('Server error.')
		}
		res.redirect('/students')
	})
})

module.exports = router

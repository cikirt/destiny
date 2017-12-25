'use strict'

var mongoose = require('mongoose'),
  User = mongoose.model('User')
var TableModel = User
exports.list_all_users = function(req, res) {
  console.log('list_all_users', req.query)
  var status = req.query.status
  var limit = Number(req.query.limit)
  var page = Number(req.query.page)
  var sort = req.query.sort
  var queryObject = {}
  if (status) {
    queryObject.status = status
  }
  TableModel.count(queryObject, function(err, total) {
    var query = TableModel.find(queryObject)
    if (limit) {
      query.limit(limit)
    }
    if (page) {
      query.skip((page - 1) * limit)
    }
    if (sort) {
      query.sort(sort)
    }
    query.exec(function(err, items) {
      if (err) {
        res.send(err)
      } else {
        res.json({
          total: total,
          items: items
        })
      }
    })
  })
}

exports.create_a_user = function(req, res) {
  console.log('create_a_user', req.body)
  var new_itm = new TableModel(req.body)
  new_itm.save(function(err, itm) {
    if (err) {
      res.send(err)
    } else {
      res.json(itm)
    }
  })
}

exports.read_a_user = function(req, res) {
  console.log('read_a_user', req.params)
  TableModel.findById(req.params._id, function(err, itm) {
    if (err) {
      res.send(err)
    } else {
      res.json(itm)
    }
  })
}

exports.update_a_user = function(req, res) {
  console.log('update_a_user', req.params, req.body)
  TableModel.findOneAndUpdate(
    {
      _id: req.params._id
    },
    req.body,
    {
      new: true
    },
    function(err, itm) {
      if (err) {
        res.send(err)
      } else {
        res.json(itm)
      }
    }
  )
}

exports.delete_a_user = function(req, res) {
  console.log('delete_a_user', req.params)
  TableModel.remove(
    {
      _id: req.params._id
    },
    function(err, itm) {
      if (err) {
        res.send(err)
      } else {
        res.json({
          message: 'successfully deleted'
        })
      }
    }
  )
}

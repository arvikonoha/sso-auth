const User = require("../models/User")

module.exports.getByName = function getByName(name){
    return User.findOne({name})
}

module.exports.create = function create(userDetails){
    const userModel = new User(userDetails)
    return userModel.save()
}
const bcrypt = require('bcrypt');
const orm = require('../orm');
const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken')
const PRIVATE_KEY = fs.readFileSync(path.join(__dirname, '..', 'keys', 'private.key'))

module.exports.register = async function register(req, res){
    try {
        const {name, password} = req.body
        const existingUser = await orm.user.getByName(name)
        if (existingUser) return res.status(400).json({error: 'User already exists for the given username'})
        const salt = await bcrypt.genSalt(12)
        const hashedPassword = await bcrypt.hash(password, salt)
        const response = await orm.user.create({name, password: hashedPassword})
        const token = jwt.sign({sub: response._id}, PRIVATE_KEY, {algorithm: 'RS256'})
        return res.json({token, user: {name: response.name, _id: response._id}})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: 'Internal server error'})
    }
}

module.exports.login = async function login(req, res){
    try {
        const {name, password} = req.body
        const response = await orm.user.getByName(name)
        if (!response) return res.status(401).json({error: 'Invalid credentials'})
        const isValid = await bcrypt.compare(password, response.password)
        if (!isValid) return res.status(401).json({error: 'Invalid credentials'})
        const token = jwt.sign({sub: response._id}, PRIVATE_KEY, {algorithm: 'RS256', expiresIn: 1200000 })
        return res.json({token, user: {name: response.name, _id: response._id}})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: 'Internal server error'})
    }
}
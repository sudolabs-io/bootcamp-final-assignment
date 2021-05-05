const jsonServer = require('json-server')
const express = require('express')

const server = jsonServer.create()
const router = jsonServer.router('data/database.json')
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3004

server.use(express.static('dist'))
server.use(middlewares)
server.use('/api', router)

server.listen(port)

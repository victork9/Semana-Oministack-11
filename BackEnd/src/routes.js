const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController')
const IncidentsController = require('./controllers/IncidentController')
const ProfilleController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.post('/incidents', IncidentsController.create)
routes.get('/incidents', IncidentsController.index)
routes.delete('/incidents/:id', IncidentsController.delete)

routes.get('/Profile', ProfilleController.index)

routes.post('/sessions', SessionController.create)
module.exports = routes

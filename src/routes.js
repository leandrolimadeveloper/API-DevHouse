const { Router } = require('express')

const routes = new Router()

routes.get('/', (req, res) => {
    return res.json({OK: true})
})

module.exports = routes
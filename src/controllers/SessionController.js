import User from '../models/User'

class SessionController {
    async store(req, res) {
        const email = req.body.email

        // Verificar se email já existe no BD
        let user = await User.findOne({ email })

        if(!user) {
            user = await User.create({ email })
        }

        res.json(user)
    } 
}

export default new SessionController()
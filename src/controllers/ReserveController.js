import Reserve from "../models/Reserve";
import User from '../models/User'
import House from "../models/House";

class ReserveController {
    async store(req, res) {
        const { user_id } = req.headers
        const { house_id } = req.params
        const { date } = req.body

        // VERIFICAÇÕES
        const house = await House.findById(house_id)

        // Verifica se ID está correto
        if (!house) {
            return res.status(400).json({ error: 'Esse imóvel não existe' })
        }

        // Verifica se status está como true
        if (house.status !== true) {
            return res.status(400).json({ error: 'Solicitação indisponível' })
        }

        // Verifica se usuário pode fazer reserva
        const user = await User.findById(user_id)
        if (String(user._id) === String(house.user)) {
            return res.status(401).json({ error: 'Você não pode reservar este imóvel' })
        }

        const reserve = await Reserve.create({
            user: user_id,
            house: house_id,
            date
        })

        await reserve.populate('user house')

        res.json(reserve)
    }
}

export default new ReserveController()

import Animais from '../models/Animais.js';
import * as Yup from 'yup';

class AnimalController {
    async index(req, res) {
        console.log(req.query.raca)
        const raca_do_animal = req.query.raca;



        const busca = await Animais.findAll({
          where: {
            raca_animal: raca_do_animal
          }
        });

        return res.json(busca)
    }
    async delete(req, res) {

      const animal = await Animais.findByPk(req.params.id);

      await animal.destroy();

      return res.json('Animal deletado');
    }
    async update(req, res) {

      const animal = await Animais.findByPk(req.params.id);

      animal.name_animal = req.body.name

      await animal.save();

      return res.json(animal);
  }
}

export default new AnimalController();
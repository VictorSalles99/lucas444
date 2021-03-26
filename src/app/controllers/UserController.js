import User from '../models/User.js';
import Animais from '../models/Animais';
import Relation from '../models/Relation';
import * as Yup from 'yup';


class UserController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
          });
      
          if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
          }
      
          const user = await User.create(req.body);

          const animal = {
            name_animal: req.body.name_animal,
            raca_animal: req.body.raca,
          }

          
          const animais = await Animais.create(animal);
          
          const relation = {
            user_id: user.dataValues.id,
            animal_id: animais.dataValues.id 
          }
          const relacao = await Relation.create(relation);

          return res.json({usuario: {
            user,
            animais,
            relacao
          }});
    }

    async index(req, res) {
        const busca = await User.findAll();

        return res.json(busca)
    }

    async delete(req, res) {

      const user = await User.findByPk(req.params.id);

      const relation = await Relation.findAll({
        where: {
          user_id: req.params.id
      }})

      const id = relation[0].dataValues.animal_id;

     const animais = await Animais.findByPk(id);

      await animais.destroy();

      await user.destroy();

      return res.json('Usuario deletado');
    }

    
    async update(req, res) {
      console.log(req.body)
      const users = await User.findByPk(req.params.id);

      users.name = req.body.name

      await users.save();

      return res.json(users);
  }
}

export default new UserController();
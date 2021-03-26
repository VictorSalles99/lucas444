import User from '../models/User.js';
import Animais from '../models/Animais';
import Relation from '../models/Relation';
import * as Yup from 'yup';
import * as moment from 'moment'
const ObjectsToCsv = require('objects-to-csv');

class RelatorioController {
  async store(req, res) {

    const schema = Yup.object().shape({
      inicio: Yup.date().required(),
      final: Yup.date().required(),
    });

    // if (!(await schema.isValid(req.query))) {
    // return res.status(400).json({ error: 'Validation fails' });
    // }

    let dataModify = [];
    let month = ['Janeiro',
      'Fevereiro',
      'Marco',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ]
    await Relation.findAll({
      include: [{
        model: User
      }, {
        model: Animais
      }],
    }).then(
      function (rel) {
        dataModify = rel.map(element => {
          return {
            idRelation: element.dataValues.id,
            date: element.dataValues.createdAt,
            userNome: element.User.dataValues.name,
            animaisNome: element.Animai.dataValues.name_animal,
            animaisRaca: element.Animai.dataValues.raca_animal
          }
        });
      },
      function (err) {
        console.log(err);
      }
    );

    const csv = new ObjectsToCsv(dataModify);
    (async () => {
      let dirName = `./src/files/profile-${Math.random()}.csv`
      await csv.toDisk(dirName);
      return res.json({fileLocale: dirName})
    })();
  }

}

export default new RelatorioController();
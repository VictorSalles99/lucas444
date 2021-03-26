import User from '../models/User.js';
import Animais from '../models/Animais';
import Relation from '../models/Relation';
import * as Yup from 'yup';

import * as convert from 'json-2-csv';


class RelatorioController {
  async store(req, res) {

    const schema = Yup.object().shape({
      inicio: Yup.date().required(),
      final: Yup.date().required(),
    });

    if (!(await schema.isValid(req.query))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const result = await Relation.findAll({
      
      include: [{
        model: User,
        attributes: [
          'name'
        ]
      },
      {
        model: Animais,
        attributes: [
          'name_animal'
        ]
      }],
    })
    var teste = [];

    [ 'User', 'Animai' ].forEach(element => {  
      teste = result.map(e =>  { return{ nome: e.dataValues[element].dataValues.name }} )
    });

    console.log(teste);
    // const dataFormat = result.map(e => (e))

    // convert.json2csv(resultParseJson,(erro,csv) => {
    //   if(erro){
    //     console.log(erro)
    //   }else{
    //     console.log(csv)
    //   }
    // });
  }


}

export default new RelatorioController();
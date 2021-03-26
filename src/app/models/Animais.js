import Sequelize, { Model } from 'sequelize';


class Animais extends Model {
  static init(sequelize) {
    super.init(
      {
        name_animal: Sequelize.STRING,
        raca_animal: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
  
}
export default Animais;

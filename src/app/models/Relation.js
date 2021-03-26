import Sequelize, { Model } from 'sequelize';


class Relation extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: Sequelize.INTEGER,
        animal_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    
    return this;
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
    this.belongsTo(models.Animais, { foreignKey: 'animal_id' });
  }
  
}
export default Relation;

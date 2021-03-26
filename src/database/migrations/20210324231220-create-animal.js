module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('animais', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name_animal: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      raca_animal: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('animais');
  }
};

import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import Faker from 'faker';
import _ from 'lodash';

const env = process.env.NODE_ENV || 'development';

let config = {};

let sequelizeOptions = {
  dialect: 'postgres',
};

if (env === 'production') {
  config = require('../config/production');
  sequelizeOptions.logging = false;
} else {
  config = require('../config/local');
  sequelizeOptions.logging = true;
}

sequelizeOptions.host = config.host;

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  sequelizeOptions,
);


const db = {};

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js'))
  .forEach(file => {
    let model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

sequelize.sync({ force: true })
  .then(() => {
    _.times(10, () => {
      return db['User'].create({
        firstName: Faker.name.firstName(),
        lastName: Faker.name.lastName(),
        email: Faker.internet.email(),
      })
      .then(user => {
        return user.createPost({
          title: `Sample title by ${user.firstName}`,
          content: `Sample post content`,
        });
      });
    });
  });

db.sequelize = sequelize;
db.Sequelize = sequelize;

export default db;

const { BlogPost, User, Category } = require('../models');


const get = async () => {
  const result = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user',
      attributes: {
        exclude: ['password'],
      },
    }, {
      model: Category,
      as: 'categories',
    }],
  });

  return result;
};

module.exports = {
  get,
};
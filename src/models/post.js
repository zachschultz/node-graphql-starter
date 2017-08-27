export default function (sequelize, DataTypes) {
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'posts',
    classMethods: {
      associate: (models) => {
        Post.belongsTo(models.User)
      },
    },
  });

  return Post;
};

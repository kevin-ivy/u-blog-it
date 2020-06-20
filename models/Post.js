const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {};

Post.init(
    {
        //configure id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        //configure title column
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //configure post text, set minimum length
        post_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [20]
            }
        },
        //link post to associated user id
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;
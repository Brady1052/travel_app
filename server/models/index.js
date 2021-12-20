const User = require('./User');
const Visited = require('./User')

Visited.belongsTo(User,{
    foreignKey: 'user_id'
})


module.exports = { User, Visited };


export default ({ db: { User } }) => ({
    create: async body => await User.create(body),
    get: async id => await User.findByPk(id),
    update: async (id, body) => await User.update(body, { where: { id } }),
    delete: async id => await User.destroy({ where: { id } }),
    getByEmail: async email => await User.findOne({ where: { email } }),
    isEmailUsed: async email => !!await User.findOne(
        { where: { email } }, 
        { paranoid: false }
    ),
});

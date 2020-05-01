export default ({
    db,
}) => ({
    create: async ({ email, password }) => await db.User.create({ 
        email, 
        password, 
    }),
    get: async userId => await db.User.findByPk(
        userId,
        {
            include: [{
                model: db.WaterEntry,
                as: 'waterEntries',
            }],
        },
    ),
    update: async (userId, { firstName, lastName }) => (
        await db.User.update(
            { firstName, lastName }, 
            { where: { id: userId } }
        )
    ),
    delete: async userId => await db.User.destroy({ where: { id: userId } }),
    getByEmail: async email => await db.User.findOne({ 
        where: { email },
    }),
    isEmailUsed: async email => !!await db.User.findOne(
        { where: { email } }, 
        { paranoid: false }
    ),
});
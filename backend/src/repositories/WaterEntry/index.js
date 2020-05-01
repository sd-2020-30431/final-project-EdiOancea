export default ({
    db,
}) => ({
    create: async ({ userId, date, quantity }) => (
        await db.WaterEntry.create({ userId, date, quantity })
    ),
    getAll: async userId => db.WaterEntry.findAll({ where: { userId } }),
    getOne: async id => db.WaterEntry.findByPk(id),
    update: async (id, { date, quantity }) => (
        db.WaterEntry.update(
            { date, quantity }, 
            { where: { id } }
        )
    ),
    delete: async id => db.WaterEntry.destroy({ where: { id } }),
});
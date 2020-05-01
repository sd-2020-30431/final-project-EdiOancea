export default ({ db: { WaterEntry } }) => ({
    create: async body => await WaterEntry.create(body),
    getAll: async userId => WaterEntry.findAll({ where: { userId } }),
    getOne: async id => WaterEntry.findByPk(id),
    update: async (id, body) => WaterEntry.update(body, { where: { id } }),
    delete: async id => WaterEntry.destroy({ where: { id } }),
});

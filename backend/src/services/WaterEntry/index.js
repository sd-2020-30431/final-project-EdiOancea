export default ({
    WaterEntryRepository,
}) => ({
    create: async ({ userId, date, quantity }) => (
        await WaterEntryRepository.create({ userId, date, quantity })
    ),
    getAll: async userId => await WaterEntryRepository.getAll(userId),
    getOne: async id => await WaterEntryRepository.getOne(id),
    update: async (id, { date, quantity }) => (
        await WaterEntryRepository.update(id, { date, quantity })
    ),
    delete: async id => WaterEntryRepository.delete(id),
});
export default ({ WaterEntryRepository, ErrorService: { throwValidationError } }) => ({
    create: async body => {
        try {
            return await WaterEntryRepository.create(body);
        } catch ({ errors }) {
            throwValidationError(errors[0].message);
        }
    },
    getAll: async userId => await WaterEntryRepository.getAll(userId),
    getOne: async id => await WaterEntryRepository.getOne(id),
    update: async (id, body) => await WaterEntryRepository.update(id, body),
    delete: async id => WaterEntryRepository.delete(id),
});

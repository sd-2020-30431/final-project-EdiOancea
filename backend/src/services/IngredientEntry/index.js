export default ({ IngredientEntryRepository }) => ({
    create: async body => await IngredientEntryRepository.create(body),
    getAll: async userId => await IngredientEntryRepository.getAll(userId),
    getOne: async id => await IngredientEntryRepository.getOne(id),
    update: async (id, body) => await IngredientEntryRepository.update(id, body),
    delete: async id => await IngredientEntryRepository.delete(id),
})

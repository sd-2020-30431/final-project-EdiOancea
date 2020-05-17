export default ({ db: { IngredientEntry } }) => ({
    create: async body => await IngredientEntry.create(body),
    getAll: async userId => await IngredientEntry.findAll({ where: { userId } }),
    getOne: async id => await IngredientEntry.findByPk(
        id,
        { include: 'ingredient' }
    ),
    update: async (id, body) => await IngredientEntry.update(body, { where: { id } }),
    delete: async id => await IngredientEntry.destroy({ where: { id } }),
});

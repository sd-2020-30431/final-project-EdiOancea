export default ({ db: { Ingredient } }) => ({
    create: async body => await Ingredient.create(body),
    getAll: async () => await Ingredient.findAll(),
    getOne: async id => await Ingredient.findByPk(id),
    update: async (id, body) => await Ingredient.update(body, { where: { id } }),
    delete: async id => await Ingredient.destroy({ where: { id } }),
});
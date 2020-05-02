export default ({ IngredientEntryService }) => ({
    create: async (req, res) => {
        const { userId, body: { ingredientId, quantity, date } } = req;

        res.json(await IngredientEntryService.create({ userId, ingredientId, quantity, date }));
    },
    getAll: async (req, res) => {
        const { userId } = req;

        res.json(await IngredientEntryService.getAll(userId));
    },
    getOne: async (req, res) => {
        const { params: { id } } = req;

        res.json(await IngredientEntryService.getOne(id));
    },
    update: async (req, res) => {
        const { params: { id }, body: { quantity, date } } = req;

        res.json(await IngredientEntryService.update(id, { quantity, date }));
    },   
    delete: async (req, res) => {
        const { params: { id } } = req;

        res.json(await IngredientEntryService.delete(id));
    },
});

export default ({ IngredientService }) => ({
    create: async (req, res) => {
        const { body: { name, calories, protein, carbohydrates, fat } } = req;

        res.json(await IngredientService.create({ name, calories, protein, carbohydrates, fat }));
    },
    getAll: async (req, res) => {
        const { userId } = req;

        res.json(await IngredientService.getAll(userId));
    },
    getOne: async (req, res) => {
        const { params: { id } } = req;

        res.json(await IngredientService.getOne(id));
    },
    update: async (req, res) => {
        const { params: { id }, body: { calories, protein, carbohydrates, fat } } = req;

        res.json(await IngredientService.update(id, { calories, protein, carbohydrates, fat }));
    },
    delete: async (req, res) => {
        const { params: { id } } = req;

        res.json(await IngredientService.delete(id));
    },
});
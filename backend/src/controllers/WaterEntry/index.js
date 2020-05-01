export default ({ WaterEntryService }) => ({
    create: async (req, res) => {
        const { userId, body: { date, quantity } } = req;

        res.json(await WaterEntryService.create({ userId, date, quantity }));
    },
    getAll: async (req, res) => {
        const { userId } = req;

        res.json(await WaterEntryService.getAll(userId));
    },
    getOne: async (req, res) => {
        const { params: { id } } = req;

        res.json(await WaterEntryService.getOne(id));
    },
    update: async (req, res) => {
        const { params: { id }, body: { date, quantity } } = req;

        res.json(await WaterEntryService.update(id, { date, quantity }));
    },
    delete: async (req, res) => {
        const { params: { id } } = req;

        res.json(await WaterEntryService.delete(id));
    },
});

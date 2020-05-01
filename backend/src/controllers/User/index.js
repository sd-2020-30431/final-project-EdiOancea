export default ({ UserService }) => ({
    create: async (req, res) => {
        const { body: { email, password }  } = req;

        res.json(await UserService.create({ email, password }));
    },
    getMe: async (req, res) => {
        const { userId } = req;

        res.json(await UserService.read(userId));
    },
    updateMe: async (req, res) => {
        const { userId, body: { firstName, lastName } } = req;

        res.json(await UserService.update(userId, { firstName, lastName }));
    },
    deleteMe: async (req, res) => {
        const { userId } = req;

        res.json(await UserService.delete(userId));
    },
});

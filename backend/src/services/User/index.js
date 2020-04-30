export default ({
    UserRepository,
}) => ({
    create: async ({ email, password }) => {
        if (await UserRepository.isEmailUsed(email)) {
            return {
                error: 'Email is used pal',
            };
        }

        return await UserRepository.create({ email, password });
    },
    read: async userId => await UserRepository.get(userId),
    update: async (userId, { firstName, lastName }) => (
        await UserRepository.update(userId, { firstName, lastName })
    ),
    delete: async userId => await UserRepository.delete(userId),
});
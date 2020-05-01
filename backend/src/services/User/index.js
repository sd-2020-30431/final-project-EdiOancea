export default ({ UserRepository, ErrorService: { throwConflictError } }) => ({
    create: async body => {
        const { email } = body;

        if (await UserRepository.isEmailUsed(email)) {
            throwConflictError('Email is already used.');
        }

        return await UserRepository.create(body);
    },
    read: async userId => await UserRepository.get(userId),
    update: async (userId, body) => await UserRepository.update(userId, body),
    delete: async userId => await UserRepository.delete(userId),
});

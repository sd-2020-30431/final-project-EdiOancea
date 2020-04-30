export default ({
    UserRepository,
    jwt,
    bcrypt,
}) => ({
    signIn: async ({ email, password }) => {
        const user = await UserRepository.getByEmail(email);

        if (!user || !bcrypt.compare(password, user.password)) {
            return {
                error: 'Invalid credentials',
            };
        }

        return {
            token: jwt.sign(user.id, process.env.SECRET_KEY),
        };
    },
});
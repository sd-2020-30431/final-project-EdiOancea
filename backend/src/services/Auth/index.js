export default ({ 
    UserRepository, 
    jwt, 
    bcrypt,
    ErrorService: { throwValdiationError },
}) => ({
    signIn: async ({ email, password }) => {
        const user = await UserRepository.getByEmail(email);

        if (!user || !bcrypt.compare(password, user.password)) {
            throwValdiationError('Invalid credentials');
        }

        return { token: jwt.sign(user.id, process.env.SECRET_KEY) };
    },
});

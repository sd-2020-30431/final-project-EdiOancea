export default ({ 
    UserRepository, 
    jwt, 
    bcrypt,
    ErrorService: { throwValidationError },
}) => ({
    signIn: async ({ email, password }) => {
        const user = await UserRepository.getByEmail(email);

        if (!user || !bcrypt.compare(password, user.password)) {
            throwValidationError('Invalid credentials');
        }

        return { token: jwt.sign(user.id, process.env.SECRET_KEY) };
    },
});

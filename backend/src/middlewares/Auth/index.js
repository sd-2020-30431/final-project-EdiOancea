export default ({
    jwt,
}) => (req, _, next) => {
    const authorizationHeader = req.headers.authorization;
    req.userId = -1;


    if (authorizationHeader) {
        req.userId = jwt.verify(authorizationHeader.slice(7), process.env.SECRET_KEY);
    }

    next();
};
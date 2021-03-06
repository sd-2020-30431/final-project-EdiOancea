export default ({ 
    jwt,
    ErrorService: { throwAuthorizationError },
}) => (req, _res, next) => {
    const authorizationHeader = req.headers.authorization;
    req.userId = -1;

    if (!authorizationHeader) {
        throwAuthorizationError();
    }

    req.userId = jwt.verify(authorizationHeader.slice(7), process.env.SECRET_KEY);
    next();
};

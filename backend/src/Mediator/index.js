export default ({
    UserController,
    AuthController,
}) => ([
    {
        route: '/users',
        method: 'post',
        callback: UserController.create,
    },
    {
        route: '/users/me',
        method: 'get',
        callback: UserController.getMe,
    },
    {
        route: '/users/me',
        method: 'put',
        callback: UserController.updateMe,
    },
    {
        route: '/users/me',
        method: 'delete',
        callback: UserController.deleteMe,
    },
    {
        route: '/auth',
        method: 'post',
        callback: AuthController.signIn,
    }
]);
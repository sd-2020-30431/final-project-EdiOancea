export default ({
    UserController,
    WaterEntryController,
    AuthController,
}) => ([
    { route: '/users', method: 'post', callback: UserController.create },
    { route: '/users/me', method: 'get', callback: UserController.getMe },
    { route: '/users/me', method: 'put', callback: UserController.updateMe },
    { route: '/users/me', method: 'delete', callback: UserController.deleteMe },
    { route: '/auth', method: 'post', callback: AuthController.signIn },
    { route: '/entries/water', method: 'post', callback: WaterEntryController.create },
    { route: '/entries/water', method: 'get', callback: WaterEntryController.getAll },
    { route: '/entries/water/:id', method: 'get', callback: WaterEntryController.getOne },
    { route: '/entries/water/:id', method: 'put', callback: WaterEntryController.update },
    { route: '/entries/water/:id', method: 'delete', callback: WaterEntryController.delete },
]);
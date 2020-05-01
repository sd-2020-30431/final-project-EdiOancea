export default ({
    IngredientRepository, 
    Validator: { validateIngredient }, 
    ErrorService: { throwConflictError },
}) => ({
    create: async body => {
        validateIngredient(body);

        try {
            return await IngredientRepository.create(body);
        } catch {
            throwConflictError('An ingredient with this name already exists');
        }
    },
    getAll: async () => await IngredientRepository.getAll(),
    getOne: async id => await IngredientRepository.getOne(id),
    update: async (id, body) => {
        validateIngredient(body);

        return await IngredientRepository.update(id, body);
    },
    delete: async id => IngredientRepository.delete(id),
});
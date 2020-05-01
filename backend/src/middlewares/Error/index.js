export default () => (err, _req, res, _next) => {
    console.log(err, res)
    if (err) {
        res.status(err.status).json({ error: err.message });
    }
};
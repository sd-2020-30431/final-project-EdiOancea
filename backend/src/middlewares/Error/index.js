export default () => (err, _req, res, _next) => {
    console.log(err);
    if (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
};

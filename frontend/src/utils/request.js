export default (method, path, body) => {
    const token = localStorage.getItem('token');
    const authHeader = token ? `Bearer ${token}` : '';

    return fetch(`http://localhost:5000${path}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authHeader,
        },
        body: JSON.stringify(body),
    });
};

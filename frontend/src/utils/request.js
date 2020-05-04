export default async (method, path, body) => {
    const token = localStorage.getItem('token');
    const authHeader = token ? `Bearer ${token}` : '';

    const res = await fetch(`http://localhost:5000${path}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authHeader,
        },
        body: JSON.stringify(body),
    });

    return await res.json();
};

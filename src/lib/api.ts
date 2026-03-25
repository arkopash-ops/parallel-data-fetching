const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getUsers() {
    const res = await fetch(`${BASE_URL}/users`);
    const data = res.json();
    return new Promise<typeof data>(resolve => setTimeout(() => resolve(data), 5000));
}

export async function getPosts() {
    const res = await fetch(`${BASE_URL}/posts`);
    const data = res.json();
    return new Promise<typeof data>(resolve => setTimeout(() => resolve(data), 10000));
}

export async function getTodos() {
    const res = await fetch(`${BASE_URL}/todos`);
    const data = res.json();
    return new Promise<typeof data>(resolve => setTimeout(() => resolve(data), 15000));
}

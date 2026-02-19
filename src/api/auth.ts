import api from "@/lib/axios"

const registerUser = async ({ name, email, password }: { name: string, email: string, password: string }) => {
    try {
        const res = await api.post('/auth/register', { name, email, password })
        return res.data
    } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to register user';
        throw new Error(message);
    }
}

export { registerUser }
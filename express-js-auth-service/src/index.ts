import express from 'express';
import { GrpcClient } from './services/grpc.client';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req: any, res: any) => {
    res.send('Auth Service is running');
});

const grpcClient = GrpcClient.getInstance();

app.post('/auth/register', async (req, res) => {
    try {
        const { email, password, name } = req.body;
        const result = await grpcClient.createUser(email, password, name);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
});

app.post('/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await grpcClient.login(email, password);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to login' });
    }
});

app.get('/auth/validate', async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ error: 'No token provided' });
        }
        const result = await grpcClient.validateToken(token);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to validate token' });
    }
});

// Error handling middleware
app.use((err: any, req: any, res: any, next: any) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
    console.log(`Auth Service is running on http://localhost:${PORT}`);
});

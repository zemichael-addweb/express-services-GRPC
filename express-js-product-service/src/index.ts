import express from 'express';
import { GrpcClient } from './services/grpc.client';

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

const grpcClient = GrpcClient.getInstance();

// Middleware to validate token
const validateToken = async (req: any, res: any, next: any) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ error: 'No token provided' });
        }
        const result = await grpcClient.validateToken(token);
        if (!result.valid) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        req.userId = result.userId;
        next();
    } catch (error) {
        res.status(500).json({ error: 'Failed to validate token' });
    }
};

app.get('/products/:id', validateToken, async (req, res) => {
    try {
        const result = await grpcClient.getProduct(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get product' });
    }
});

app.get('/products', validateToken, async (req, res) => {
    try {
        const result = await grpcClient.getProducts();
        console.log(result);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

app.post('/products', validateToken, async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const result = await grpcClient.createProduct(name, description, price);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create product' });
    }
});

app.put('/products/:id', validateToken, async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const result = await grpcClient.updateProduct(req.params.id, name, description, price);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update product' });
    }
});

app.delete('/products/:id', validateToken, async (req, res) => {
    try {
        const result = await grpcClient.deleteProduct(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete product' });
    }
});

app.listen(PORT, () => {
    console.log(`Product Service is running on http://localhost:${PORT}`);
});

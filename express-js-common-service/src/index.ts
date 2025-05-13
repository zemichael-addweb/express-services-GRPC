import express from 'express';
import { GrpcService } from './services/grpc.service';

const app = express();
const PORT = process.env.PORT || 3000;
const GRPC_PORT = process.env.GRPC_PORT || 50051;

app.use(express.json());

const grpcService = GrpcService.getInstance();

async function startServer() {
    try {
        await grpcService.startServer(Number(GRPC_PORT));
        
        app.listen(PORT, () => {
            console.log(`Common Service is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start Common Service:', error);
        process.exit(1);
    }
}

startServer(); 
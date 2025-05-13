import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

export class GrpcClient {
    private static instance: GrpcClient;
    private authClient: any;
    private productClient: any;

    private constructor() {
        const PROTO_PATH = path.resolve(__dirname, '../../proto/services.proto');
        
        const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true
        });

        const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
        const services = protoDescriptor.services as any;

        this.authClient = new services.AuthService(
            'localhost:50051',
            grpc.credentials.createInsecure()
        );

        this.productClient = new services.ProductService(
            'localhost:50051',
            grpc.credentials.createInsecure()
        );
    }

    static getInstance(): GrpcClient {
        if (!GrpcClient.instance) {
            GrpcClient.instance = new GrpcClient();
        }
        return GrpcClient.instance;
    }

    async validateToken(token: string): Promise<{ valid: boolean; userId: string; error: string }> {
        return new Promise((resolve, reject) => {
            this.authClient.validateToken({ token }, (error: any, response: any) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(response);
            });
        });
    }

    async createUser(email: string, password: string, name: string): Promise<{ id: string; email: string; name: string; error: string }> {
        return new Promise((resolve, reject) => {
            this.authClient.createUser({ email, password, name }, (error: any, response: any) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(response);
            });
        });
    }

    async login(email: string, password: string): Promise<{ token: string; error: string }> {
        return new Promise((resolve, reject) => {
            this.authClient.login({ email, password }, (error: any, response: any) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(response);
            });
        });
    }

    async getProduct(id: string): Promise<{ id: string; name: string; description: string; price: number; error: string }> {
        return new Promise((resolve, reject) => {
            this.productClient.getProduct({ id }, (error: any, response: any) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(response);
            });
        });
    }
} 
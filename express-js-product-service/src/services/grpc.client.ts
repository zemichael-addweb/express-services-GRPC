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

    async getProducts(): Promise<{ products: { id: string; name: string; description: string; price: number }[]; error: string }> {
        return new Promise((resolve, reject) => {
            this.productClient.getProducts({}, (error: any, response: any) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(response);
            });
        });
    }

    async createProduct(name: string, description: string, price: number): Promise<{ id: string; name: string; description: string; price: number; error: string }> {
        return new Promise((resolve, reject) => {
            this.productClient.createProduct({ name, description, price }, (error: any, response: any) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(response);
            });
        });
    }

    async updateProduct(id: string, name: string, description: string, price: number): Promise<{ id: string; name: string; description: string; price: number; error: string }> {
        return new Promise((resolve, reject) => {
            this.productClient.updateProduct({ id, name, description, price }, (error: any, response: any) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(response);
            });
        });
    }

    async deleteProduct(id: string): Promise<{ success: boolean; error: string }> {
        return new Promise((resolve, reject) => {
            this.productClient.deleteProduct({ id }, (error: any, response: any) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(response);
            });
        });
    }
} 
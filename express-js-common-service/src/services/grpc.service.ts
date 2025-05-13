import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import {
    TokenRequest, TokenResponse,
    CreateUserRequest, UserResponse,
    LoginRequest, LoginResponse,
    ProductRequest, ProductResponse,
    CreateProductRequest, UpdateProductRequest,
    DeleteResponse, GrpcCall, GrpcCallback
} from '../types/grpc.types';

export class GrpcService {
    private static instance: GrpcService;
    private server: grpc.Server;

    private constructor() {
        this.server = new grpc.Server();
    }

    static getInstance(): GrpcService {
        if (!GrpcService.instance) {
            GrpcService.instance = new GrpcService();
        }
        return GrpcService.instance;
    }

    async startServer(port: number): Promise<void> {
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

        // Add your service implementations here
        this.server.addService(services.AuthService.service, {
            validateToken: this.validateToken,
            createUser: this.createUser,
            login: this.login
        });

        this.server.addService(services.ProductService.service, {
            getProduct: this.getProduct,
            createProduct: this.createProduct,
            updateProduct: this.updateProduct,
            deleteProduct: this.deleteProduct
        });

        return new Promise((resolve, reject) => {
            this.server.bindAsync(
                `0.0.0.0:${port}`,
                grpc.ServerCredentials.createInsecure(),
                (error: Error | null, port: number) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    this.server.start();
                    console.log(`gRPC server running on port ${port}`);
                    resolve();
                }
            );
        });
    }

    private validateToken(call: GrpcCall<TokenRequest, TokenResponse>, callback: GrpcCallback<TokenResponse>) {
        try {
            // Implement token validation logic
            callback(null, { valid: true, userId: '123', error: '' });
        } catch (error) {
            callback(error as Error, null);
        }
    }

    private createUser(call: GrpcCall<CreateUserRequest, UserResponse>, callback: GrpcCallback<UserResponse>) {
        try {
            // Implement user creation logic
            callback(null, { id: '123', email: call.request.email, name: call.request.name, error: '' });
        } catch (error) {
            callback(error as Error, null);
        }
    }

    private login(call: GrpcCall<LoginRequest, LoginResponse>, callback: GrpcCallback<LoginResponse>) {
        try {
            // Implement login logic
            callback(null, { token: 'dummy-token', error: '' });
        } catch (error) {
            callback(error as Error, null);
        }
    }

    private getProduct(call: GrpcCall<ProductRequest, ProductResponse>, callback: GrpcCallback<ProductResponse>) {
        try {
            // Implement get product logic
            callback(null, { id: call.request.id, name: 'Test Product', description: 'Test Description', price: 99.99, error: '' });
        } catch (error) {
            callback(error as Error, null);
        }
    }

    private createProduct(call: GrpcCall<CreateProductRequest, ProductResponse>, callback: GrpcCallback<ProductResponse>) {
        try {
            // Implement create product logic
            callback(null, { id: '123', name: call.request.name, description: call.request.description, price: call.request.price, error: '' });
        } catch (error) {
            callback(error as Error, null);
        }
    }

    private updateProduct(call: GrpcCall<UpdateProductRequest, ProductResponse>, callback: GrpcCallback<ProductResponse>) {
        try {
            // Implement update product logic
            callback(null, { id: call.request.id, name: call.request.name, description: call.request.description, price: call.request.price, error: '' });
        } catch (error) {
            callback(error as Error, null);
        }
    }

    private deleteProduct(call: GrpcCall<ProductRequest, DeleteResponse>, callback: GrpcCallback<DeleteResponse>) {
        try {
            // Implement delete product logic
            callback(null, { success: true, error: '' });
        } catch (error) {
            callback(error as Error, null);
        }
    }

    async stopServer(): Promise<void> {
        return new Promise((resolve) => {
            this.server.tryShutdown(() => {
                console.log('gRPC server stopped');
                resolve();
            });
        });
    }
} 
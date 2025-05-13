import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js';

export interface TokenRequest {
    token: string;
}

export interface TokenResponse {
    valid: boolean;
    userId: string;
    error: string;
}

export interface CreateUserRequest {
    email: string;
    password: string;
    name: string;
}

export interface UserResponse {
    id: string;
    email: string;
    name: string;
    error: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    error: string;
}

export interface ProductRequest {
    id: string;
}

export interface ProductResponse {
    id: string;
    name: string;
    description: string;
    price: number;
    error: string;
}

export interface CreateProductRequest {
    name: string;
    description: string;
    price: number;
}

export interface UpdateProductRequest {
    id: string;
    name: string;
    description: string;
    price: number;
}

export interface DeleteResponse {
    success: boolean;
    error: string;
}

export type GrpcCall<TRequest, TResponse> = ServerUnaryCall<TRequest, TResponse>;
export type GrpcCallback<TResponse> = sendUnaryData<TResponse>; 
// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var services_pb = require('./services_pb.js');

function serialize_services_CreateProductRequest(arg) {
  if (!(arg instanceof services_pb.CreateProductRequest)) {
    throw new Error('Expected argument of type services.CreateProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_CreateProductRequest(buffer_arg) {
  return services_pb.CreateProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_CreateUserRequest(arg) {
  if (!(arg instanceof services_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type services.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_CreateUserRequest(buffer_arg) {
  return services_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_DeleteResponse(arg) {
  if (!(arg instanceof services_pb.DeleteResponse)) {
    throw new Error('Expected argument of type services.DeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_DeleteResponse(buffer_arg) {
  return services_pb.DeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_LoginRequest(arg) {
  if (!(arg instanceof services_pb.LoginRequest)) {
    throw new Error('Expected argument of type services.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_LoginRequest(buffer_arg) {
  return services_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_LoginResponse(arg) {
  if (!(arg instanceof services_pb.LoginResponse)) {
    throw new Error('Expected argument of type services.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_LoginResponse(buffer_arg) {
  return services_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_ProductRequest(arg) {
  if (!(arg instanceof services_pb.ProductRequest)) {
    throw new Error('Expected argument of type services.ProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ProductRequest(buffer_arg) {
  return services_pb.ProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_ProductResponse(arg) {
  if (!(arg instanceof services_pb.ProductResponse)) {
    throw new Error('Expected argument of type services.ProductResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ProductResponse(buffer_arg) {
  return services_pb.ProductResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_TokenRequest(arg) {
  if (!(arg instanceof services_pb.TokenRequest)) {
    throw new Error('Expected argument of type services.TokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_TokenRequest(buffer_arg) {
  return services_pb.TokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_TokenResponse(arg) {
  if (!(arg instanceof services_pb.TokenResponse)) {
    throw new Error('Expected argument of type services.TokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_TokenResponse(buffer_arg) {
  return services_pb.TokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_UpdateProductRequest(arg) {
  if (!(arg instanceof services_pb.UpdateProductRequest)) {
    throw new Error('Expected argument of type services.UpdateProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_UpdateProductRequest(buffer_arg) {
  return services_pb.UpdateProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_UserResponse(arg) {
  if (!(arg instanceof services_pb.UserResponse)) {
    throw new Error('Expected argument of type services.UserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_UserResponse(buffer_arg) {
  return services_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthServiceService = exports.AuthServiceService = {
  validateToken: {
    path: '/services.AuthService/ValidateToken',
    requestStream: false,
    responseStream: false,
    requestType: services_pb.TokenRequest,
    responseType: services_pb.TokenResponse,
    requestSerialize: serialize_services_TokenRequest,
    requestDeserialize: deserialize_services_TokenRequest,
    responseSerialize: serialize_services_TokenResponse,
    responseDeserialize: deserialize_services_TokenResponse,
  },
  createUser: {
    path: '/services.AuthService/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: services_pb.CreateUserRequest,
    responseType: services_pb.UserResponse,
    requestSerialize: serialize_services_CreateUserRequest,
    requestDeserialize: deserialize_services_CreateUserRequest,
    responseSerialize: serialize_services_UserResponse,
    responseDeserialize: deserialize_services_UserResponse,
  },
  login: {
    path: '/services.AuthService/Login',
    requestStream: false,
    responseStream: false,
    requestType: services_pb.LoginRequest,
    responseType: services_pb.LoginResponse,
    requestSerialize: serialize_services_LoginRequest,
    requestDeserialize: deserialize_services_LoginRequest,
    responseSerialize: serialize_services_LoginResponse,
    responseDeserialize: deserialize_services_LoginResponse,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService, 'AuthService');
var ProductServiceService = exports.ProductServiceService = {
  getProduct: {
    path: '/services.ProductService/GetProduct',
    requestStream: false,
    responseStream: false,
    requestType: services_pb.ProductRequest,
    responseType: services_pb.ProductResponse,
    requestSerialize: serialize_services_ProductRequest,
    requestDeserialize: deserialize_services_ProductRequest,
    responseSerialize: serialize_services_ProductResponse,
    responseDeserialize: deserialize_services_ProductResponse,
  },
  createProduct: {
    path: '/services.ProductService/CreateProduct',
    requestStream: false,
    responseStream: false,
    requestType: services_pb.CreateProductRequest,
    responseType: services_pb.ProductResponse,
    requestSerialize: serialize_services_CreateProductRequest,
    requestDeserialize: deserialize_services_CreateProductRequest,
    responseSerialize: serialize_services_ProductResponse,
    responseDeserialize: deserialize_services_ProductResponse,
  },
  updateProduct: {
    path: '/services.ProductService/UpdateProduct',
    requestStream: false,
    responseStream: false,
    requestType: services_pb.UpdateProductRequest,
    responseType: services_pb.ProductResponse,
    requestSerialize: serialize_services_UpdateProductRequest,
    requestDeserialize: deserialize_services_UpdateProductRequest,
    responseSerialize: serialize_services_ProductResponse,
    responseDeserialize: deserialize_services_ProductResponse,
  },
  deleteProduct: {
    path: '/services.ProductService/DeleteProduct',
    requestStream: false,
    responseStream: false,
    requestType: services_pb.ProductRequest,
    responseType: services_pb.DeleteResponse,
    requestSerialize: serialize_services_ProductRequest,
    requestDeserialize: deserialize_services_ProductRequest,
    responseSerialize: serialize_services_DeleteResponse,
    responseDeserialize: deserialize_services_DeleteResponse,
  },
};

exports.ProductServiceClient = grpc.makeGenericClientConstructor(ProductServiceService, 'ProductService');

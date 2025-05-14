# Express Services with gRPC

This project consists of three microservices built with Express.js and gRPC:
- Common Service
- Auth Service
- Product Service

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)
- Protocol Buffers (protoc) compiler
- PostgreSQL (for Auth Service)

## Global Requirements

1. Install Protocol Buffers compiler:
   ```bash
   # For macOS
   brew install protobuf

   # For Ubuntu/Debian
   sudo apt-get install protobuf-compiler

   # For Windows
   # Download from https://github.com/protocolbuffers/protobuf/releases
   ```

2. Install Node.js and npm:
   ```bash
   # Using nvm (recommended)
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   nvm install 16
   nvm use 16
   ```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd express-services-GRPC
   ```

2. Install dependencies for each service:
   ```bash
   # Common Service
   cd express-js-common-service
   npm install
   npm run generate:proto

   # Auth Service
   cd ../express-js-auth-service
   npm install
   npm run generate:proto

   # Product Service
   cd ../express-js-product-service
   npm install
   npm run generate:proto
   ```

3. Set up the database for Auth Service:
   ```bash
   cd express-js-auth-service
   npx prisma generate
   npx prisma db push
   ```

## Running the Services

1. Build all services:
   ```bash
   # In each service directory
   npm run build
   ```

2. Start the services:
   ```bash
   # Common Service
   cd express-js-common-service
   npm start

   # Auth Service
   cd ../express-js-auth-service
   npm start

   # Product Service
   cd ../express-js-product-service
   npm start
   ```

For development, you can use:
```bash
npm run dev
```

## Service Ports

- Common Service: 3000
- Auth Service: 3001
- Product Service: 3002

## Development

Each service has the following npm scripts:
- `npm run build`: Compiles TypeScript to JavaScript
- `npm run start`: Runs the compiled JavaScript
- `npm run dev`: Runs the service in development mode with hot-reload
- `npm run generate:proto`: Generates gRPC code from proto files

## Project Structure

Each service follows a similar structure:
```
service-name/
├── src/
│   ├── generated/    # Generated gRPC code
│   ├── proto/        # Protocol buffer definitions
│   └── index.ts      # Service entry point
├── package.json
└── tsconfig.json
```

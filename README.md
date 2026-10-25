# Freight Forwarder Settlement System

A freight forwarding and cargo settlement platform for air freight operations. This project is designed to manage shipment workflows, carrier coordination, freight charges, settlements, and cargo tracking for a logistics business.

## Overview

This system helps a freight forwarder manage the lifecycle of cargo shipments from booking to delivery, including:

- shipment booking and tracking
- carrier management
- cargo and route details
- pricing and cost calculation
- settlement and payment processing
- invoice and reconciliation workflows
- operational reporting and audit visibility

## Business Goal

The software should support a freight forwarding company that operates air cargo services and needs an efficient way to handle shipment records, carrier settlements, and operational oversight across transport activities.

## Core Modules

### 1. Shipment Management
- create and update shipments
- assign cargo details and route information
- monitor shipment status
- attach documents and notes

### 2. Carrier Management
- manage carriers and service agreements
- track contracts, rates, and service levels
- record carrier performance and reliability

### 3. Settlement and Finance
- calculate freight charges and costs
- manage settlements between company and carriers
- track invoices and payments
- reconcile financial records

### 4. Tracking and Reporting
- shipment status updates
- operational dashboards
- financial summaries
- export-ready reports

## Recommended Tech Stack

- Backend: Node.js / NestJS or ASP.NET Core
- Frontend: React or Next.js
- Database: PostgreSQL
- Authentication: JWT / role-based access control
- API Documentation: Swagger / OpenAPI
- Containerization: Docker
- CI/CD: GitHub Actions

## Suggested Architecture

```text
FreightForwarder/
├── apps/
│   ├── api/
│   └── web/
├── packages/
│   ├── shared/
│   └── ui/
├── database/
│   ├── migrations/
│   └── seed/
├── docs/
├── .env.example
├── docker-compose.yml
├── README.md
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm
- PostgreSQL
- Docker (optional, for local environment setup)

### Installation

```bash
git clone https://github.com/Hamse-Dahir01/FreightForwarder.git
cd FreightForwarder
npm install
```

### Run the development environment

```bash
npm run dev
```

### Production build

```bash
npm run build
npm run start
```

## Environment Variables

Create a `.env` file based on `.env.example` with values for:

- DATABASE_URL
- JWT_SECRET
- PORT
- APP_NAME
- FRONTEND_URL

## Development Roadmap

### Phase 1
- project foundation and architecture
- authentication and authorization
- shipment and carrier models
- basic CRUD APIs

### Phase 2
- freight pricing and settlement logic
- invoice generation
- payment tracking
- reporting dashboard

### Phase 3
- shipment tracking events
- document uploads
- alerts and notifications
- advanced analytics

## Notes

This repository is intended to evolve into a complete freight forwarding management system focused on operations, finance, and settlement workflows. It is currently being structured as a foundation for future implementation.

## License

This project is licensed under the MIT License.

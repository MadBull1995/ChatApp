# .NET + gRPC + Angular ChatApp

> Work In Progress

A powerful real-time chat application written with .NET utulizing streaming capabilities and performance of gRPC.

## Overview
A simple but yet pwoerful demonstration of gRPC streaming capabilities in "real-world" use case.

### Architecture
When `ChatApp` is Dockerized application, it will run with several components:
- `chat-front` - The frontend application code written with Angular at [`frontend/`](./frontend/)
- `chat-back` - The backend application code written with .NET and gRPC at [`backend/`][./backend]
- `chat-db` - PostgreSQL database instance
- `chat-proxy` - Envoy edge proxy for enabling gRPC calls from browser

## Setup
Initialize the components with:
```bash
docker compose up -d
```
Then you can visit http://localhost at your browser

## Development

### Locally

### Protocol Buffer
`ChatApp` is using `Protocol buffers` as it's main schema for communication over the wire, used both for the Backend and Frontend.

All `.proto` files are located at [`protos/`](./protos/) directory under global namespace called `chat`.

Main packages are:
- `chat.core.v1` - All core schemas
- `chat.services.v1` - All API's

### Re-Building docker images

---
Created with `</>` by Amit Shmulevitch, 2023.
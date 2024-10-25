# VM Project Web Interface

A modern React application integrated with WSO2 Identity Server for secure authentication and authorization. This front-end solution is part of a larger system designed to automate Virtual Machine (VM) provisioning and management.

## 🚀 Key Features

- **Secure Authentication**: Implements SSO (Single Sign-On) using WSO2IS
- **VM Management**: Interface for creating, monitoring, and managing virtual machines
- **Automated Workflow**: Streamlined process for VM provisioning
- **React-based UI**: Modern, responsive user interface built with React 18
- **Vite Powered**: Utilizes Vite for fast development and optimized builds

## 🛠️ Tech Stack

- React 18.3.1
- WSO2 Identity Server Integration (@asgardeo/auth-react 5.2.2)
- React Router DOM 6.27.0
- Vite 5.4.9
- ESLint for code quality

## 🔒 Security Features

- Single Sign-On (SSO) implementation
- Role-based access control
- Secure session management
- Protected API endpoints

## 🌟 Main Functionalities

1. **Authentication**
    - SSO login/logout
    - Session management
    - User profile access

2. **VM Operations**
    - VM creation request
    - Status monitoring
    - Resource management
    - Configuration settings

## 🔧 Development

### Prerequisites
- Node.js
- npm
- WSO2 Identity Server instance

### Setup
```bash
# Install dependencies with exact versions
npm install

# Start development server
npm run dev

# Build for production
npm run build
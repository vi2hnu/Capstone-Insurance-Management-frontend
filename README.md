# Insurance Management System - Frontend

## Overview

The **Insurance Management System Frontend** is a robust, single-page application (SPA) built with **Angular**. It serves as the client-side interface for a comprehensive insurance platform, facilitating interactions for Administrators, Hospital Providers, Insurance Surveyors (Claims Officers), and Policyholders.

The application is architected with a focus on **modularity**, **scalability**, and **security**, utilizing modern Angular best practices such as Lazy Loading, Route Guards, and HTTP Interceptors.

---
## Backend Link:
[Backend Github](https://github.com/vi2hnu/Capstone-Insurance-Management-backend)

## Table of Contents

- [Architecture & Design](#architecture--design)
- [Key Features](#key-features)
- [Technical Landscape](#technical-landscape)
- [SonarQube Report](#SonarQube-Report)
- [Project Structure](#project-structure)
- [Routing & Navigation](#routing--navigation)
- [Security Implementation](#security-implementation)
- [Getting Started](#getting-started)
- [SonarQube Analysis](#sonarqube-analysis)

---

## Architecture & Design

The application follows a **Modular Architecture**, separating the codebase into three distinct layers to ensure maintainability and optimized performance:

1.  **Core Layer (`src/app/core`)**: Contains singleton services, security guards, interceptors, and data models. This module is loaded once at the application startup.
2.  **Feature Layer (`src/app/features`)**: Contains distinct business logic modules (Admin, Auth, Claims, etc.). **Lazy Loading** is implemented here to load these modules only when requested, significantly reducing the initial bundle size.
3.  **Shared Layer (`src/app/shared`)**: Houses reusable UI components (Headers, Footers, Cards) and pipes shared across multiple features.

---

## Key Features

### 1. Authentication & Authorization (Auth Feature)
* **Secure Login/Registration**: Role-based login and user registration forms.
* **Password Management**: Forgot Password and Change Password workflows.
* **Contextual Routing**: Redirects users to specific dashboards (Admin, Provider,User, Claims officer or insurance agent) based on their role upon login.

### 2. Administrator Portal (Admin Feature)
* **Dashboard**: High-level metrics on policies and claims.
* **Hospital Management**: Onboarding and managing hospital providers.
* **Plan Configuration**: Creation and modification of insurance plans.
* **User Management**: Administration of user accounts and roles.

### 3. Provider Network (Provider Feature)
* **Claim Submission**: Interface for hospitals to file claims on behalf of patients.
* **Plan Linking**: capabilities for hospitals to register for specific insurance plans.
* **Claim Status**: Real-time tracking of submitted claims.

### 4. Claims Processing (Claims Officer Feature)
* **Review Workbench**: Dedicated interface for Insurance Surveyors to review incoming claims.
* **Verification Workflow**: Approve, Reject, or Request Info workflows for claims.

### 5. Policyholder Services (Policy & Enrollment Features)
* **Policy Discovery**: Browsing available insurance plans.
* **Enrollment**: Step-by-step policy purchasing flow.
* **My Policies**: Dashboard for users to view active coverages and history.

---

## Technology used

* **Framework**: Angular (20)
* **Language**: TypeScript
* **Styling**: SCSS / CSS
* **Routing**: Angular Router (with Lazy Loading)
* **HTTP Client**: Angular HttpClientModule
* **Architecture**: Feature-Based Modules

---

## SonarQube Report:

<img width="1399" height="669" alt="Image" src="https://github.com/user-attachments/assets/8d9e5a18-8501-45c8-8ef5-efc361e6c8b3" />

---

## UI screenshots:
* UI screenshots are present in the REPORT.DOCX file in root folder
---

## Project Structure

```text
src/app/
├── app.routes.ts               # Main Application Routing
├── app.config.ts               # Application Configuration
├── core/                       # Singleton Services & Guards
│   ├── guard/
│   │   ├── auth/               # Authentication Guards (CanActivate)
│   │   └── role/               # Role-Based Access Control Guards
│   ├── interceptors/           # HTTP Interceptors (Token Injection)
│   ├── model/                  # TypeScript Interfaces/Entities
│   └── service/                # API Communication Services
├── features/                   # Lazy-Loaded Business Modules
│   ├── admin/                  # Admin Dashboard & Logic
│   ├── auth/                   # Login, Register, Password Logic
│   ├── claims/                 # User Claims Logic
│   ├── claims-officer/         # Surveyor Review Logic
│   ├── enrollment/             # Policy Purchase Flow
│   ├── plans/                  # Plan Viewing Logic
│   ├── policy/                 # User Policy Management
│   └── provider/               # Hospital Provider Logic
└── shared/                     # Reusable Components & Pipes
    ├── component/
    │   ├── footer-component/       # Global application footer
    │   ├── header-component/       # Navigation bar and menus
    │   ├── logout-component/       # Logout logic and modal
    │   ├── plans-component/        # Reusable insurance plan display cards
    │   └── user-check-component/   # User verification UI
    └── shared-module.ts            # Exports shared components to other modules
```
---

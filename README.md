# CodeGuard

CodeGuard is a modern, lightweight web application built with **React** powered by the ultra-fast **Vite** build tool. The project is fully linted using **Oxlint** to ensure exceptional performance, strict security, and clean code quality standards.

## 🚀 Features

- **Blazing Fast Bundling**: Configured with [Vite](https://vite.dev) for near-instant Hot Module Replacement (HMR).
- **High-Performance Linting**: Uses `.oxlintrc.json` rules via [Oxlint](https://github.com) to catch bugs and performance bottlenecks instantly.
- **Clean Structure**: Organized asset management separating public resources from application logic.

## 📂 Project Structure

```text
├── public/              # Static assets (images, icons, etc.)
│   └── assets/images/
├── src/                 # Application source code (logic, styles, components)
├── .gitignore           # Git ignore rules
├── .oxlintrc.json       # Oxlint configuration settings
├── index.html           # Main application entry point
├── package.json         # Project metadata and dependencies
├── vite.config.js       # Vite bundler configurations
└── README.md            # Project documentation
```

## 🛠️ Getting Started

Follow these steps to set up and run the project locally on your machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org) installed (version 18+ recommended).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Natthy2023/codeguard.git
   ```

2. **Navigate into the project directory:**
   ```bash
   cd codeguard
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

### Development Server
Starts the Vite local development server. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.
```bash
npm run dev
```




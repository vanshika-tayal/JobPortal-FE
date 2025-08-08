# Job Portal Frontend 🚀

A modern, responsive Job Portal application built with React and TypeScript, featuring a sleek dark/light theme, real-time search, and comprehensive job management capabilities.

## 📋 Table of Contents

-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [Prerequisites](#prerequisites)
-   [Installation](#installation)
-   [Environment Variables](#environment-variables)
-   [Project Structure](#project-structure)
-   [Components](#components)
-   [Scripts](#scripts)
-   [UI Features](#ui-features)
-   [Screenshots](#screenshots)

## ✨ Features

### Core Features

-   **Complete CRUD Operations**: Create, Read, Update, and Delete job listings
-   **Real-time Search**: Instant search across job titles, companies, and locations
-   **Advanced Filtering**: Filter jobs by type (Full-time, Part-time, Contract, Remote, Hybrid)
-   **Responsive Design**: Fully responsive layout that works on all devices
-   **Theme Switching**: Toggle between dark and light themes with smooth transitions
-   **Grid/List View**: Switch between grid and list layouts for job listings
-   **Dashboard Analytics**: Visual statistics and charts for job data
-   **Toast Notifications**: Real-time feedback for all user actions

### Job Management Features

-   **Smart Job Form**: Comprehensive form with all job attributes
-   **Autocomplete**: Intelligent suggestions for job titles with 50+ predefined options
-   **Custom Delete Dialog**: Professional confirmation modal instead of browser alerts
-   **Job Details Expansion**: Collapsible detailed view for each job
-   **Recent Jobs Tracking**: Dashboard shows latest job postings
-   **Job Statistics**: Real-time stats on total jobs, companies, and locations

### UI/UX Features

-   **Modern Dark Theme**: Eye-friendly dark mode as default
-   **Light Theme Option**: Clean light theme for daytime use
-   **Smooth Animations**: Subtle animations for better user experience
-   **Loading States**: Skeleton loaders and spinners for async operations
-   **Fixed Layout**: Static header and footer for consistent navigation
-   **Sidebar Navigation**: Easy access to all major sections
-   **Keyboard Navigation**: Full keyboard support for accessibility
-   **Custom Scrollbars**: Styled scrollbars matching the theme

## 🛠️ Tech Stack

### Core Technologies

-   **React** (^18.2.0) - Component-based UI library
-   **TypeScript** (^5.3.3) - Type-safe JavaScript
-   **React Hooks** - Modern state management
-   **CSS3** - Custom styling with CSS variables

### Dependencies

-   **react** (^18.2.0) - Core React library
-   **react-dom** (^18.2.0) - React DOM rendering
-   **react-hot-toast** (^2.4.1) - Beautiful toast notifications
-   **axios** (^1.6.2) - HTTP client for API calls
-   **typescript** (^5.3.3) - TypeScript compiler

### Development Dependencies

-   **@types/react** (^18.2.45) - TypeScript definitions for React
-   **@types/react-dom** (^18.2.18) - TypeScript definitions for React DOM
-   **@types/node** (^20.10.5) - TypeScript definitions for Node.js
-   **@vitejs/plugin-react** (^4.2.1) - Vite plugin for React
-   **vite** (^5.0.10) - Next-generation frontend build tool
-   **eslint** - Code linting
-   **@typescript-eslint/parser** - TypeScript ESLint parser

## 📦 Prerequisites

-   Node.js (v14 or higher)
-   npm or yarn package manager
-   Backend server running on port 5000

## 🚀 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd JobPortalFE
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to:

```
http://localhost:3000
```

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:5000/api
```

## 📁 Project Structure

```
JobPortalFE/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Dashboard.tsx       # Analytics dashboard
│   │   ├── DeleteDialog.tsx    # Custom delete confirmation
│   │   ├── Footer.tsx          # Application footer
│   │   ├── Header.tsx          # Application header
│   │   ├── JobCard.tsx         # Individual job display
│   │   ├── JobForm.tsx         # Add/Edit job form
│   │   ├── JobList.tsx         # Job listings container
│   │   ├── SearchFilter.tsx    # Search and filter controls
│   │   └── Sidebar.tsx         # Navigation sidebar
│   ├── services/
│   │   └── api.ts              # API service layer
│   ├── types/
│   │   └── Job.ts              # TypeScript interfaces
│   ├── App.tsx                 # Main application component
│   ├── App.css                 # Global styles and themes
│   ├── index.tsx               # Application entry point
│   └── index.css               # Base styles
├── .gitignore                  # Git ignore rules
├── package.json                # Project dependencies
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── README.md                   # Project documentation
```

## 🧩 Components

### Core Components

#### App.tsx

-   Main application container
-   Global state management
-   Theme switching logic
-   Route handling between views

#### Sidebar.tsx

-   Navigation menu with three sections:
    1. Add Job - Form for creating new jobs
    2. Jobs - View all job listings
    3. Dashboard - Analytics and statistics
-   Active state highlighting
-   Icon-based navigation

#### Header.tsx

-   Application title and subtitle
-   Current date display
-   Theme toggle button (sun/moon icons)
-   Fixed positioning

#### Footer.tsx

-   Company branding
-   Copyright information
-   Quick links (Privacy, Terms, Contact)
-   Fixed positioning

### Job Management Components

#### JobList.tsx

-   Displays jobs in grid or list layout
-   Handles empty states
-   Responsive design

#### JobCard.tsx

-   Individual job display
-   Expandable details section
-   Edit and delete actions
-   Different layouts for grid/list views

#### JobForm.tsx

-   Comprehensive job input form
-   Autocomplete for job titles
-   Field validation
-   Cancel/Submit actions

#### DeleteDialog.tsx

-   Custom modal for delete confirmation
-   Professional UI with animations
-   Cancel/Confirm actions

### Feature Components

#### Dashboard.tsx

-   Statistics cards (Total Jobs, Companies, Locations)
-   Job type distribution chart
-   Recent jobs list
-   Visual analytics

#### SearchFilter.tsx

-   Real-time search input
-   Job type filter dropdown
-   View mode toggle (grid/list)
-   Results counter

## 📜 Scripts

```json
{
  "dev": "vite",                    # Development server with HMR
  "build": "tsc && vite build",     # Production build
  "preview": "vite preview",        # Preview production build
  "lint": "eslint . --ext ts,tsx"   # Lint TypeScript files
}
```

## 🎨 UI Features

### Theme System

-   **Dark Theme**: Default theme with dark backgrounds
-   **Light Theme**: Alternative light color scheme
-   **CSS Variables**: Dynamic theming with CSS custom properties
-   **Smooth Transitions**: Animated theme switching

### Color Palette

```css
Dark Theme:
--bg-primary: #0f0f0f
--bg-secondary: #1a1a1a
--text-primary: #ffffff
--accent: #4f46e5

Light Theme:
--bg-primary: #ffffff
--bg-secondary: #f9fafb
--text-primary: #111827
--accent: #4f46e5
```

### Layout Features

-   **Fixed Header**: Always visible navigation
-   **Fixed Footer**: Persistent footer information
-   **Sidebar Navigation**: 260px fixed sidebar
-   **Responsive Grid**: Auto-adjusting job cards
-   **Mobile Optimized**: Fully responsive design

### Interactive Elements

-   **Hover Effects**: Visual feedback on interactive elements
-   **Loading States**: Spinners and skeleton loaders
-   **Animations**: Smooth transitions and micro-interactions
-   **Toast Notifications**: Non-intrusive success/error messages

## 🔌 API Integration

### Service Layer

-   Centralized API configuration
-   Axios interceptors for error handling
-   TypeScript interfaces for type safety

### Endpoints Used

-   `GET /api/jobs` - Fetch all jobs
-   `GET /api/jobs/:id` - Get single job
-   `POST /api/jobs` - Create new job
-   `PUT /api/jobs/:id` - Update job
-   `DELETE /api/jobs/:id` - Delete job

## 🎯 Key Features Implementation

### Autocomplete System

-   50+ predefined job titles
-   Real-time filtering
-   Keyboard navigation support
-   Click-to-select functionality

### Search & Filter

-   Instant search across multiple fields
-   Type-based filtering
-   Result count display
-   Clear search functionality

### View Modes

-   **Grid View**: Card-based layout
-   **List View**: Compact row layout
-   Persistent view preference
-   Smooth transition animations

### Dashboard Analytics

-   Real-time statistics
-   Visual charts
-   Recent activity tracking
-   Type distribution analysis

## 🔒 Security Features

-   Input sanitization
-   XSS protection
-   CORS configuration
-   Secure API communication

## 📈 Performance Optimizations

-   React memo for component optimization
-   Lazy loading for heavy components
-   Debounced search input
-   Efficient re-rendering with hooks
-   Optimized bundle size with Vite

## 🌐 Browser Support

-   Chrome (latest)
-   Firefox (latest)
-   Safari (latest)
-   Edge (latest)

## 📱 Responsive Breakpoints

-   Desktop: > 1200px
-   Tablet: 768px - 1200px
-   Mobile: < 768px

## 🚦 Development Best Practices

-   **TypeScript**: Full type safety
-   **Functional Components**: Modern React patterns
-   **Custom Hooks**: Reusable logic
-   **CSS Variables**: Maintainable styling
-   **Component Modularity**: Single responsibility
-   **Error Boundaries**: Graceful error handling

## 📸 Screenshots

### 🌙 Dark Theme

<table>
  <tr>
    <td align="center">
      <img src="./screenshots/dark/dashboard-dark.jpg" alt="Dashboard Dark" width="400" height="250">
      <br />
      <sub><b>Dashboard Overview</b></sub>
    </td>
    <td align="center">
      <img src="./screenshots/dark/view-job-dark.jpg" alt="Job Listings Dark" width="400" height="250">
      <br />
      <sub><b>Job Listings Grid</b></sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="./screenshots/dark/list-job-dark.jpg" alt="List View Dark" width="400" height="250">
      <br />
      <sub><b>List View</b></sub>
    </td>
    <td align="center">
      <img src="./screenshots/dark/add-job-dark.jpg" alt="Add Job Dark" width="400" height="250">
      <br />
      <sub><b>Add New Job</b></sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="./screenshots/dark/edit-job-dark.jpg" alt="Edit Job Dark" width="400" height="250">
      <br />
      <sub><b>Edit Job Details</b></sub>
    </td>
    <td align="center">
      <img src="./screenshots/dark/search-job-dark.jpg" alt="Search Jobs Dark" width="400" height="250">
      <br />
      <sub><b>Search & Filter</b></sub>
    </td>
  </tr>
  <tr>
    <td align="center" colspan="2">
      <img src="./screenshots/dark/delete-popup-dark.jpg" alt="Delete Confirmation Dark" width="400" height="250">
      <br />
      <sub><b>Delete Confirmation Dialog</b></sub>
    </td>
  </tr>
</table>

### ☀️ Light Theme

<table>
  <tr>
    <td align="center">
      <img src="./screenshots/light/dashboard-light.jpg" alt="Dashboard Light" width="400" height="250">
      <br />
      <sub><b>Dashboard Overview</b></sub>
    </td>
    <td align="center">
      <img src="./screenshots/light/view-job-light.jpg" alt="Job Listings Light" width="400" height="250">
      <br />
      <sub><b>Job Listings Grid</b></sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="./screenshots/light/list-job-light.jpg" alt="List View Light" width="400" height="250">
      <br />
      <sub><b>List View</b></sub>
    </td>
    <td align="center">
      <img src="./screenshots/light/add-job-light.jpg" alt="Add Job Light" width="400" height="250">
      <br />
      <sub><b>Add New Job</b></sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="./screenshots/light/edit-job-light.jpg" alt="Edit Job Light" width="400" height="250">
      <br />
      <sub><b>Edit Job Details</b></sub>
    </td>
    <td align="center">
      <img src="./screenshots/light/search-job-light.jpg" alt="Search Jobs Light" width="400" height="250">
      <br />
      <sub><b>Search & Filter</b></sub>
    </td>
  </tr>
  <tr>
    <td align="center" colspan="2">
      <img src="./screenshots/light/delete-popup-light.jpg" alt="Delete Confirmation Light" width="400" height="250">
      <br />
      <sub><b>Delete Confirmation Dialog</b></sub>
    </td>
  </tr>
</table>

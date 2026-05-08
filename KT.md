# Knowledge Transfer (KT) Document

## Project Setup & Running Locally

This project uses npm as its package manager. Follow these steps to get started:

1. **Install dependencies**:
   `npm install`
2. **Start the development server**:
   `npm run dev`
   This will start the Vite dev server with Hot Module Replacement (HMR) enabled.
3. **Build for production**:
   `npm run build`
   This compiles TypeScript and bundles the app into the `dist/` directory.
4. **Run Linter**:
   `npm run lint`

## Architectural Decisions

### 1. Vite over Create React App (CRA)
Vite was chosen over CRA for significantly faster cold starts and almost instantaneous HMR updates, which drastically improves developer experience and build times.

### 2. Styling: Tailwind CSS + MUI
- **Tailwind CSS** is used as the primary styling solution for layout, typography, and utility-based designs. It allows for rapid prototyping and keeps CSS bundle sizes small.
- **Material-UI (MUI)** is used specifically for complex interactive components (like Menus, InputBases) and high-quality Icons. The theme is synchronized with Tailwind via the `src/theme/index.ts` file to ensure consistent color palettes (e.g., using Amazon's brand colors).

### 3. State Management
Currently, state is managed locally within components (using `useState`) or via React Context (`ThemeContext`) for global state. As the application scales (e.g., managing complex cart logic or user authentication), it is recommended to introduce a dedicated state management library like Redux Toolkit or Zustand.

### 4. Routing
`react-router-dom` is used for client-side routing. The main routing logic is centralized in `src/App.tsx`. Placeholder components have been created in `src/pages/` to facilitate future feature development.

### 5. Layout Pattern
The `Layout` component wraps the `Routes` to provide a persistent `Navbar` and `Footer` across all pages. This prevents unnecessary re-rendering of the shell components during navigation.

## Scaling and Future Development

- **Adding New Features**: When building out the placeholder pages (e.g., `CartPage.tsx`), create dedicated sub-components in the `src/components/` directory to keep page files clean and focused on composition.
- **API Integration**: Currently, the app uses static mock data. For future backend integration, consider using `axios` (already in `package.json`) combined with `react-query` for data fetching, caching, and state synchronization.
- **Authentication**: Implementing user login will require a new `AuthContext` to manage the user session and protect private routes using a custom `ProtectedRoute` component wrapper.

### 6. Mock API & Backend Integration
A mock API layer (`src/services/api.ts`) has been implemented to simulate backend responses (e.g., fetching products, orders, and wishlist items). This architecture is deliberately chosen to make the frontend scalable and ready for real backend integration (such as Java Spring Boot with MySQL/MongoDB). To integrate the real backend:
- Open `src/services/api.ts`.
- Replace the simulated `setTimeout` delays with actual HTTP requests using `axios` or the native `fetch` API.
- The rest of the React components will not need to change, as they are already awaiting `Promise` resolutions.

### 7. State Management Implementation
Global state is now managed using React Contexts:
- **`AuthContext`**: Handles user session simulation.
- **`CartContext`**: Manages the cart items and calculates totals dynamically.
These contexts are provided at the root level in `App.tsx`.

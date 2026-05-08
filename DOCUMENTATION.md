# AmaZone E-commerce Project Documentation

Welcome to the AmaZone project! This documentation is designed for beginners to understand how this React application is structured, how the different tools work together, and how the core functionalities are implemented.

## Tech Stack Overview

This project is built using modern frontend technologies:

1. **React**: A JavaScript library for building user interfaces. We use React components to build the different parts of our app (like the Navbar, Footer, and individual pages).
2. **TypeScript**: A superset of JavaScript that adds static types. This helps catch errors early during development and improves code editor features like autocomplete.
3. **Vite**: A fast build tool and development server. It serves our code quickly during development and bundles it efficiently for production.
4. **Tailwind CSS**: A utility-first CSS framework. Instead of writing custom CSS classes, we style elements directly in the HTML (JSX) using predefined utility classes like `text-center`, `p-4`, or `bg-blue-500`.
5. **Material-UI (MUI)**: A library of pre-built React components (like buttons, icons, and menus) that follow Google's Material Design guidelines. We use it mainly for icons and complex interactive elements.
6. **React Router**: A library that enables routing in our React app, allowing users to navigate between different pages without reloading the browser.

## Project Structure

Here is a breakdown of the important files and directories in the `src/` folder:

- **`App.tsx`**: The main component that sets up the routing (using `react-router-dom`) and the global theme provider. It connects all the pages and the layout together.
- **`main.tsx`**: The entry point of the application. It takes the `App` component and renders it into the HTML DOM.
- **`components/`**: Reusable UI parts.
  - **`layout/`**: Contains components that form the shell of the app.
    - `Layout.tsx`: Wraps the page content with a standard Navbar and Footer.
    - `Navbar.tsx`: The top navigation bar, featuring a logo, search bar, theme toggle, and navigation links.
    - `Footer.tsx`: The bottom section of the page with various informational links.
- **`context/`**: Contains React Contexts, which are used to share state across many components without passing props down manually.
  - `ThemeContext.tsx`: Manages the current theme (light or dark mode) and persists the user's preference in the browser's `localStorage`.
- **`pages/`**: Contains the components that represent full pages.
  - `HomePage.tsx`: The landing page with a hero section, categories, and flash deals.
  - Other placeholder pages like `ProductsPage.tsx`, `CartPage.tsx`, etc., which are connected via React Router.
- **`theme/`**:
  - `index.ts`: Defines the custom Material-UI themes (light and dark) used alongside Tailwind CSS.

## Key Functionalities

### 1. Routing
In a traditional website, clicking a link loads a new HTML page from the server. In a Single Page Application (SPA) like this one, React Router (`react-router-dom`) intercepts the click and simply swaps out the React components being displayed, making navigation much faster.

In `App.tsx`, the `<Routes>` component looks at the current URL and decides which `<Route>` matches. For example, if the URL is `/cart`, it renders the `<CartPage />` component.

### 2. Theme Switching (Dark Mode)
The app supports light and dark modes. This is handled by `ThemeContext.tsx`.
- It uses a React state variable `isDark` to track the current mode.
- It provides a `toggleTheme` function to switch modes.
- It uses a `useEffect` hook to apply a `.dark` CSS class to the main `<html>` element. Tailwind CSS then uses this class to apply dark-mode specific styles (e.g., classes starting with `dark:` like `dark:bg-gray-900`).
- The choice is saved in `localStorage` so the app remembers your preference when you refresh the page.

### 3. Component Composition
React encourages building UIs out of small, reusable pieces called components.
For instance, the `Layout.tsx` component is designed to take `children` as a prop. In `App.tsx`, we wrap our routes inside `<Layout>`. This means every page automatically gets the `Navbar` at the top and the `Footer` at the bottom, without having to rewrite that code on every page.

## How to Learn from this Codebase

If you are a beginner looking to learn from this project, try these steps:

1. **Understand JSX**: Look at `HomePage.tsx` to see how HTML-like syntax is mixed with JavaScript. Notice how arrays like `CATEGORIES` are mapped using `.map()` to render multiple items dynamically.
2. **Explore Tailwind**: Inspect the `className` attributes in the components. Try changing colors or padding (e.g., change `bg-blue-500` to `bg-red-500`) to see how Tailwind affects styling instantly.
3. **Follow the Data**: Look at `Navbar.tsx` and trace how the `searchQuery` state works with the input field. See how typing updates the state, and pressing the search button triggers navigation.

Enjoy building with React!

### 4. State Management (Auth & Cart Contexts)
The application now uses React Context to manage global state:
- **`AuthContext.tsx`**: Manages the user's login state. It provides a `user` object and functions to `login` and `logout`.
- **`CartContext.tsx`**: Manages the shopping cart. It provides the `items` array, functions to `addToCart`, `removeFromCart`, and `updateQuantity`, as well as computed properties `cartCount` and `cartTotal`.
These contexts are wrapped around the entire application in `App.tsx`, meaning any component (like `Navbar.tsx` or `ProductDetailsPage.tsx`) can access this data easily using the `useAuth()` and `useCart()` hooks.

### 5. Mock API Layer
The application includes a mock API layer located in `src/services/api.ts`. This file simulates asynchronous calls to a backend database by using `setTimeout` and returning predefined arrays of data (`MOCK_PRODUCTS`, mock orders, etc.). This makes it incredibly easy to switch to a real backend in the future: you simply replace the `setTimeout` blocks with `axios` or `fetch` calls to your real server.

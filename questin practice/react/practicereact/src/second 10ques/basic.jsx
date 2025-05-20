import React from "react";
import { Link } from "react-router-dom";
const reactProblems = [
  // 1. Basics
  {
    id: 1,
    problem: "Create a functional component that displays 'Hello, React!'",
  },
  {
    id: 2,
    problem: "Create a component that accepts name as a prop and displays it.",
  },
  { id: 3, problem: "Build a simple counter using useState." },
  {
    id: 4,
    problem:
      "Create a toggle component that shows/hides content on button click.",
  },
  { id: 5, problem: "Display a list of users using .map() and keys." },
  {
    id: 6,
    problem: "Build a basic form with input fields for name and email.",
  },
  {
    id: 7,
    problem:
      "Create a greeting component that changes message based on the time.",
  },
  {
    id: 8,
    problem:
      "Use conditional rendering to show 'Logged in' or 'Please log in'.",
  },
  {
    id: 9,
    problem:
      "Pass a function from parent to child and call it on a button click.",
  },
  {
    id: 10,
    problem:
      "Create a component with internal state that updates after 2 seconds using setTimeout.",
  },

  // 2. Frontend Development
  {
    id: 11,
    problem:
      "Set up routing between two pages (Home, About) using React Router.",
  },
  {
    id: 12,
    problem: "Create a dynamic route that displays details from a URL param.",
  },
  {
    id: 13,
    problem: "Build a simple authentication flow with a protected route.",
  },
  { id: 14, problem: "Use useReducer to build a simple todo list." },
  {
    id: 15,
    problem: "Use Context API to manage and display a theme across components.",
  },
  {
    id: 16,
    problem: "Create a controlled form with name, email, and password inputs.",
  },
  { id: 17, problem: "Integrate React Hook Form to handle form validation." },
  {
    id: 18,
    problem: "Add Tailwind CSS and style a button and card component.",
  },
  {
    id: 19,
    problem: "Use styled-components to style a custom Card component.",
  },
  {
    id: 20,
    problem:
      "Create a reusable Button component that accepts props for color and text.",
  },

  // 3. Backend Integration
  {
    id: 21,
    problem: "Fetch data from a public API and display it in a table.",
  },
  { id: 22, problem: "Handle loading and error states when fetching posts." },
  { id: 23, problem: "Submit a form and post data to a backend API." },
  {
    id: 24,
    problem: "Build a login form and store the token in localStorage.",
  },
  {
    id: 25,
    problem:
      "Create a logout button that clears the token and redirects to login.",
  },
  { id: 26, problem: "Use Axios to fetch and post data with headers." },
  { id: 27, problem: "Implement a token refresh mechanism (mocked)." },
  {
    id: 28,
    problem: "Protect a route so only authenticated users can access it.",
  },
  { id: 29, problem: "Use .env file and read a REACT_APP_API_URL variable." },
  {
    id: 30,
    problem:
      "Create a user profile page that fetches data after login using useEffect.",
  },

  // 4. Fullstack React Development
  {
    id: 31,
    problem: "Connect to a Node.js/Express backend API and fetch data.",
  },
  {
    id: 32,
    problem: "Create a reusable Axios service (api.js) for GET/POST requests.",
  },
  {
    id: 33,
    problem: "Submit a form and validate both client-side and server-side.",
  },
  {
    id: 34,
    problem:
      "Build a shopping cart with Add/Remove functionality (store in context).",
  },
  {
    id: 35,
    problem: "Display real-time messages using Socket.io from the backend.",
  },
  { id: 36, problem: "Create a custom hook for fetching data (useFetch)." },
  { id: 37, problem: "Add loading spinners and toasts using react-toastify." },
  { id: 38, problem: "Create a search bar with debounce for filtering items." },
  { id: 39, problem: "Display success/error messages based on API response." },
  {
    id: 40,
    problem:
      "Connect form submission to Express backend and handle errors gracefully.",
  },

  // 5. SDE Interview Prep & Scalable Architecture
  {
    id: 41,
    problem: "Write a custom hook that toggles a boolean (useToggle).",
  },
  { id: 42, problem: "Use useRef to focus an input on mount." },
  { id: 43, problem: "Create a memoized component using React.memo." },
  {
    id: 44,
    problem: "Use useCallback and useMemo to avoid unnecessary renders.",
  },
  { id: 45, problem: "Test a component using React Testing Library." },
  {
    id: 46,
    problem: "Mock an API call in Jest and test loading + success state.",
  },
  {
    id: 47,
    problem: "Split a large component into container/presentation components.",
  },
  {
    id: 48,
    problem: "Create a compound component (e.g., Tabs with TabList, TabPanel).",
  },
  {
    id: 49,
    problem: "Implement a lazy-loaded route using React.lazy and Suspense.",
  },
  {
    id: 50,
    problem:
      "Optimize a large list rendering using virtualization (e.g., react-window).",
  },
  {
    id: 51,
    problem: "Build a reusable Modal component with close on outside click.",
  },
  {
    id: 52,
    problem: "Write a debounce utility and use it in a search bar component.",
  },
];

export default function Basic() {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {reactProblems.map((item) => (
          <li key={item.id}>
            <Link to={`/problem/${item.id}`}>{item.problem}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

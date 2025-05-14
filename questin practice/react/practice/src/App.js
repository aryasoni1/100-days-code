import Greeting from "./first 10ques/greetings";
import HelloReact from "./first 10ques/helloReact";
import Counter from "./first 10ques/counter";
import ToggleContent from "./first 10ques/toggleContent";
import UserList from "./first 10ques/userList";
import BasicForm from "./first 10ques/basicForm";
import TimeGreeting from "./first 10ques/TimeGreeting";
import LoginStatus from "./first 10ques/loginStatus";
import Parent from "./first 10ques/parent";
import DelayedUpdate from "./first 10ques/delayedUpdate";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./second 10ques/3rd ques/AuthContext";
import Login from "./second 10ques/3rd ques/Login";
import Dashboard from "./second 10ques/3rd ques/Dashboard";
import ProtectedRoute from "./second 10ques/3rd ques/protectedRoute";
import Basic from "./second 10ques/basic";
import Advanced from "./second 10ques/advanced";
import ProblemAnswer from "./second 10ques/problemAnswer";
import TodoApp from "./second 10ques/4th ques/todoReducer";
function App() {
  return (
    <AuthProvider>
      <Router>
        <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <Link to="/">Home</Link>
          <Link to="/basic">basic</Link>
        </nav>
        <Routes>
          <Route path="/basic" element={<Basic />} />
          <Route path="/advanced" element={<Advanced />} />
          <Route path="/problem/:problemId" element={<ProblemAnswer />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
        <HelloReact />
        <Greeting name="John" />
        <Counter />
        <ToggleContent />
        <UserList />
        <BasicForm />
        <TimeGreeting />
        <LoginStatus />
        <Parent />
        <DelayedUpdate />
        <TodoApp />
      </Router>
    </AuthProvider>
  );
}

export default App;

import { useAuth } from "./AuthContext";

export default function Dashboard() {
  const { logout } = useAuth();
  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

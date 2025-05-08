import React from "react";
function UserList() {
  const users = [
    { id: "1", name: "A" },
    { id: "2", name: "B" },
  ];
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default UserList;

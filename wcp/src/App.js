import { useState, useEffect } from "react";
import Card from "./components/Card.js";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  function fetchUsers() {
    fetch("https://random-data-api.com/api/users/random_user?size=10")
      .then((response) => response.json())
      .then((result) => {
        setUsers(result);
      });
  }

  return (
    <div className="app">
      <button onClick={fetchUsers}>ROLL</button>
      {users.map((user) => (
        <Card user={user} />
      ))}
    </div>
  );
}

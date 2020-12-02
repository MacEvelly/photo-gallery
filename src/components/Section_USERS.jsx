import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Section_USERS = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const url = "https://jsonplaceholder.typicode.com/users";
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    };
    getUsers();
  }, []);

  const usersLI = users.map((u) => (
    <li key={u.id} className="user">
      <Link to={`/${u.id}`}>
        <div className="name">{u.name}</div>
      </Link>
    </li>
  ));

  return (
    <section>
      <h2>Users:</h2>
      {loading ? <div>loading...</div> : <ul>{usersLI}</ul>}
    </section>
  );
};

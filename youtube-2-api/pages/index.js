import React, { useState } from "react";

// GET req to /api/users
const Home = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const res = await fetch("/api/users");
        const data = await res.json();
        console.log(data);
        setUsers(data);
    };

    return (
        <div>
            <button onClick={fetchUsers}>Load</button>
            <div>
                {users.map((user) => {
                    return <div key={user.id}>{user.name}</div>;
                })}
            </div>
        </div>
    );
};

export default Home;

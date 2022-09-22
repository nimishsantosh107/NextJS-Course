import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: { users: data },
    };
};

const Users = ({ users }) => {
    console.log(users);
    return (
        <div>
            <h1>Users:</h1>

            <div>
                {users.map((user) => (
                    <div key={user.id}>
                        <h3>{user.name}</h3>
                    </div>
                ))}
            </div>

            <div>
                <Link href="/users/all">All Users</Link>
            </div>
        </div>
    );
};

export default Users;

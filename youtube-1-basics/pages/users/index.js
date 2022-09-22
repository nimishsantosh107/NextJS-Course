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
                        <Link href={`/users/${user.id}`}>
                            <a>
                                <h3>{user.name}</h3>
                            </a>
                        </Link>
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

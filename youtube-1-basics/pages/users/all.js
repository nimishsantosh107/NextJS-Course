export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: { users: data },
    };
};

const AllUsers = ({ users }) => {
    return (
        <div>
            <h1>All Users</h1>

            <div>
                {users.map((item) => {
                    return (
                        <p>
                            <div>{item.id}</div>
                            <div>{item.name}</div>
                            <div>{item.email}</div>
                            <hr />
                        </p>
                    );
                })}
            </div>
        </div>
    );
};

export default AllUsers;

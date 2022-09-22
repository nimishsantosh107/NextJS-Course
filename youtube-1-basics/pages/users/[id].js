export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const paths = data.map((item) => {
        return {
            params: {
                id: item.id.toString(),
            },
        };
    });
    return {
        paths,
        fallback: false,
    };
};

// each page params (item of paths) gets passed to getStaticProps as context
export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
    const data = await res.json();

    return {
        props: { user: data },
    };
};

const UserDetail = ({ user }) => {
    return (
        <div>
            <h1>{`Details for: ${user.name}`}</h1>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    );
};

export default UserDetail;

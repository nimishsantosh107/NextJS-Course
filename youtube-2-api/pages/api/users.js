export default function handler(req, res) {
    res.status(200).json([
        {
            id: 1,
            name: "name1",
        },
        {
            id: 2,
            name: "name2",
        },
    ]);
}

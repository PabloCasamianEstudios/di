import UserRow from "../UserRow/UserRow";

export default function Table() {
    const users = [
        {
            id: 1,
            email: "alice@example.com",
            name: "Alice",
            surname: "Johnson",
            age: 25,
        },
        {
            id: 2,
            email: "bob@example.com",
            name: "Bob",
            surname: "Smith",
            age: 30,
        },
        {
            id: 3,
            email: "carol@example.com",
            name: "Carol",
            surname: "Brown",
            age: 28,
        },
        {
            id: 4,
            email: "david@example.com",
            name: "David",
            surname: "Williams",
            age: 35,
        },
        {
            id: 5,
            email: "eve@example.com",
            name: "Eve",
            surname: "Davis",
            age: 22,
        },
        {
            id: 6,
            email: "frank@example.com",
            name: "Frank",
            surname: "Miller",
            age: 40,
        },
    ];

    return (
        <>
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm ">
                <thead className="bg-blue-200 hover:bg-blue-300">
                    <tr>
                        <th className="p-4 text-left uppercase rounded-tl-lg">id</th>
                        <th className="p-4 text-left uppercase">email</th>
                        <th className="p-4 text-left uppercase">name</th>
                        <th className="p-4 text-left uppercase">surname</th>
                        <th className="p-4 text-left uppercase rounded-tr-lg">age</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 ">
                    <UserRow {...users[0]}/>
                    <UserRow {...users[1]}/>
                    <UserRow {...users[2]}/>
                    <UserRow {...users[3]}/>
                    <UserRow {...users[4]}/>
                    <UserRow {...users[5]}/>
                </tbody>
            </table>
        </>
    );
}

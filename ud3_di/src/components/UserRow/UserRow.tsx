interface UserRowProps {
    id: number,
    email: string,
    name: string,
    surname: string,
    age: number,
}

export default function UserRow({id, email, name, surname, age} : UserRowProps) {
    return (
        <>
            <tr className="hover:bg-blue-50">
                <td  className="p-4 text-sm text-gray-500">{id}</td>
                <td  className="p-4 text-sm text-gray-500">{email}</td>
                <td  className="p-4 text-sm text-gray-500">{name}</td>
                <td  className="p-4 text-sm text-gray-500">{surname}</td>
                <td  className="p-4 text-sm text-gray-500">{age}</td>
            </tr>
        </>
    );
}

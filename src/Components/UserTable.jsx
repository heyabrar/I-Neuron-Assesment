export default function UserTable({ data, DeleteUser}) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Phone</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody id="body">
                    {data.map((elem) => {
                        return <tr key={elem._id}>
                            <td>{elem.firstName}</td>
                            <td>{elem.lastName}</td>
                            <td>{elem.age}</td>
                            <td>{elem.phoneNumber}</td>
                            <td>EDIT</td>
                            <td onClick={( ) => DeleteUser(elem._id)}>DELETE</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}
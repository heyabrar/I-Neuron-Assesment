import {AiFillEdit} from 'react-icons/ai'
import {FiDelete} from 'react-icons/fi';

export default function UserTable({ data, DeleteUser,EditButton}) {
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
                            <td style={{cursor:'pointer'}} onClick={( ) =>EditButton(elem._id)}><AiFillEdit/></td>
                            <td onClick={( ) => DeleteUser(elem._id)} style={{cursor :'pointer'}}><FiDelete/></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}
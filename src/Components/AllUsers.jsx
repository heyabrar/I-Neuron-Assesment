import { Progress, useToast } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FetchDeleteUser, FetchEditUser, FetchPostUser, FetchUsersData } from "../Fetch/Fetch"
import { GetUserFailure, GetUserRequest, GetUserSuccess } from "../Redux/Action"
import AddUserModal from "./AddUserModal"
import UserTable from "./UserTable"

export default function AllUsers() {
    const [VisibleModal, setVisibleModal] = useState(false);
    const Dispatch = useDispatch();
    const Toast = useToast( );
    const { UsersData, isLoading, isError } = useSelector((s) => {
        return {
            UsersData: s.UsersData,
            isLoading: s.isLoading,
            isError: s.isError
        }
    })

    const handleOpenModal = ( ) =>{
        setVisibleModal(true)
    }


    const handleGetUsers = () => {
        Dispatch(GetUserRequest());
        FetchUsersData().then((res) => {
            Dispatch(GetUserSuccess(res.data.data))
        })
            .catch((err) => Dispatch(GetUserFailure(err)))
    }


    const handleAddUser = (payload) =>{
        return FetchPostUser(payload).then((res)=>{
           Toast({title : `${res.data.message}`, status : 'success', position : 'top'})
        })
    }

    const AddUser = (payload) =>{
       handleAddUser(payload).then(( ) => handleGetUsers( ));
    }

    
    const handleDeleteUser = (id)=>{
        return FetchDeleteUser(id).then((res)=>{
            Toast({title : `${res.data.message}`, status : 'success', position : 'top'})
        })
    }

    const DeleteUser = (id) =>{
        handleDeleteUser(id).then(( ) => handleGetUsers( ));
    }

    useEffect(() => {
        handleGetUsers()
    }, [])
    return (
        <>
            <h1 className="text-red-500 text-3xl text-center font-bold">All Users</h1>
            <div className="w-92">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-60 ..." onClick={handleOpenModal}>
                    Add User
                </button>
            </div>
            {isLoading && <Progress size='sm' isIndeterminate colorScheme='red'/>}
            <UserTable data={UsersData} DeleteUser={DeleteUser}/>
            <AddUserModal isOpen={VisibleModal} setIsopen={setVisibleModal} AddUser={AddUser}/>
        </>
    )
}
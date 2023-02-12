import { Progress, useToast } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FetchDeleteUser, FetchEditUser, FetchPostUser, FetchUsersData } from "../Fetch/Fetch"
import { GetUserFailure, GetUserRequest, GetUserSuccess } from "../Redux/Action"
import AddUserModal from "./AddUserModal"
import EditModal from "./EditModal"
import UserTable from "./UserTable"

export default function AllUsers() {
    const [VisibleModal, setVisibleModal] = useState(false);
    const [ID,setID] = useState('');
    const [EditVisibleModal, setEditVisibleModal] = useState(false);
    const Dispatch = useDispatch();
    const Toast = useToast( );
    const { UsersData, isLoading, isError } = useSelector((s) => {
        return {
            UsersData: s.UsersData,
            isLoading: s.isLoading,
            isError: s.isError
        }
    })

    //Opens modal for Add user
    const handleOpenModal = ( ) =>{
        setVisibleModal(true)
    }


    //GetsAll users
    const handleGetUsers = () => {
        Dispatch(GetUserRequest());
        FetchUsersData().then((res) => {
            Dispatch(GetUserSuccess(res.data.data))
        })
            .catch((err) => Dispatch(GetUserFailure(err)))
    }


    //Add user function
    const handleAddUser = (payload) =>{
        return FetchPostUser(payload).then((res)=>{
           Toast({title : `${res.data.message}`, status : 'success', position : 'top'})
        })
        .catch((err)=>console.log(err))
    }

    const AddUser = (payload) =>{
       handleAddUser(payload).then(( ) => handleGetUsers( ));
    }


    //Edit functions
    const EditButton = (id) =>{
        setID(id)
        setEditVisibleModal(true);
    }

    const handleEditUser = (payload,id) => {
        return FetchEditUser(payload,id).then((res)=>{
            Toast({title : `${res.data.message}`, status : 'success', position : 'top'})
        })
        .catch((err)=>console.log(err))
    }

    const EditUserData = (payload,ID) =>{
        handleEditUser(payload,ID).then(( ) => handleGetUsers( ));
    }

    //Delete functions
    const handleDeleteUser = (id)=>{
        return FetchDeleteUser(id).then((res)=>{
            Toast({title : `${res.data.message}`, status : 'success', position : 'top'})
        })
        .catch((err)=> console.log(err))
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
            {isError && 'Oops Something went wrong'}
            <UserTable data={UsersData} DeleteUser={DeleteUser} EditUserData={EditUserData} EditButton={EditButton}/>
            <AddUserModal isOpen={VisibleModal} setIsopen={setVisibleModal} AddUser={AddUser}/>
            <EditModal isOpen={EditVisibleModal} setIsopen={setEditVisibleModal} EditUserData={EditUserData} ID={ID}/>
        </>
    )
}
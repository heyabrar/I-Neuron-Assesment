import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FetchPostUser, FetchUsersData } from "../Fetch/Fetch"
import { GetUserFailure, GetUserRequest, GetUserSuccess } from "../Redux/Action"
import AddUserModal from "./Modal"
import UserTable from "./UserTable"

export default function AllUsers() {
    const [VisibleModal, setVisibleModal] = useState(false);
    const { UsersData, isLoading, isError } = useSelector((s) => {
        return {
            UsersData: s.UsersData,
            isLoading: s.isLoading,
            isError: s.isError
        }
    })

    const Dispatch = useDispatch();

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
            console.log(res.data)
        })
    }

    const AddUser = (payload) =>{
       handleAddUser(payload).then(( ) => handleGetUsers( ));
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
            <UserTable data={UsersData} />
            <AddUserModal isOpen={VisibleModal} setIsopen={setVisibleModal} AddUser={AddUser}/>
        </>
    )
}
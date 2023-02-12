import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FetchUsersData } from "../Fetch/Fetch"
import { GetUserFailure, GetUserRequest, GetUserSuccess } from "../Redux/Action"
import UserTable from "./UserTable"

export default function AllUsers() {

    const { UsersData, isLoading, isError } = useSelector((s) => {
        return {
            UsersData: s.UsersData,
            isLoading: s.isLoading,
            isError: s.isError
        }
    })

    const Dispatch = useDispatch();

    const handleGetUsers = () => {
        Dispatch(GetUserRequest());
        FetchUsersData().then((res) => {
            Dispatch(GetUserSuccess(res.data.data))
        })
            .catch((err) => Dispatch(GetUserFailure(err)))
    }

    useEffect(() => {
        handleGetUsers()
    }, [])
    return (
        <>
            <h1 className="text-red-500 text-3xl text-center font-bold">All Users</h1>
            <div className="w-92">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-60 ...">
                    Add User
                </button>
            </div>
            <UserTable data={UsersData} />
        </>
    )
}
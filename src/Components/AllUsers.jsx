import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FetchUsersData } from "../Fetch/Fetch"
import { GetUserFailure, GetUserRequest, GetUserSuccess } from "../Redux/Action"

export default function AllUsers ( ){

    const {UsersData,isLoading,isError} = useSelector((s)=>{
        return {
            UsersData : s.UsersData,
            isLoading : s.isLoading,
            isError : s.isError
        }
    })

    const Dispatch = useDispatch( );

    const handleGetUsers = ( ) =>{
        Dispatch(GetUserRequest( ));
        FetchUsersData( ).then((res)=>{
            Dispatch(GetUserSuccess(res.data.data))
        })
        .catch((err)=>Dispatch(GetUserFailure(err)))
    }

    useEffect(( ) =>{
        handleGetUsers( )
    },[ ])
    return (
        <>
        <h1 className="text-red-500 text-3xl text-center font-bold">All Users</h1>
        {UsersData.length > 0 && UsersData.map((elem)=>{
            return <div>
                <p>{elem.firstName} {elem.lastName}</p>
                <p>{elem.phoneNumber}</p>
                <p>{elem.age}</p>
            </div>
        })}
        </>
    )
}